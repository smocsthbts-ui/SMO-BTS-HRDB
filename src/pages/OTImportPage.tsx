import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import * as XLSX from 'xlsx';
import dayjs from 'dayjs';
import {
  Briefcase,
  Upload,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Clock,
  Check,
  X,
  Search,
  FileSpreadsheet
} from 'lucide-react';
import { OTRecord } from '../types';

export const OTImportPage: React.FC = () => {
  const {
    otRecords,
    importOTRecords,
    confirmRetroactiveOT,
    selectedYear,
    selectedMonth,
    showToast
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState<'all' | 'retroactive'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [importedPreview, setImportedPreview] = useState<OTRecord[]>([]);

  // Parse Power BI Excel file
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = evt => {
      try {
        const bstr = evt.target?.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json<any[]>(ws, { header: 1 });

        if (data.length < 2) {
          showToast('ไฟล์ไม่มีข้อมูล', 'error');
          return;
        }

        const newRecords: OTRecord[] = [];
        // Headers: GID No., Department, Name, Total Hours, Reason, Stamp, Date Request, OT Record Date, Begin Date, Begin Time, End Date, End Time, Last Status...
        for (let r = 1; r < data.length; r++) {
          const row = data[r];
          if (!row || row.length < 5) continue;

          const gid = String(row[0] || '').trim();
          const dept = String(row[1] || '').trim();
          const name = String(row[2] || '').trim();
          const totalHours = Number(row[3]) || 0;
          const reason = String(row[4] || '').trim();
          const empNo = String(row[5] || '').trim().padStart(4, '0');
          const lastStatus = String(row[12] || '').trim();

          // REQUIREMENT: Only import Approved OT
          if (lastStatus.toLowerCase() !== 'approved') {
            continue;
          }

          // Convert Excel serial date to YYYY-MM-DD
          const parseExcelDate = (val: any) => {
            if (!val) return '';
            if (typeof val === 'number') {
              const jsDate = new Date((val - 25569) * 86400 * 1000);
              return dayjs(jsDate).format('YYYY-MM-DD');
            }
            return String(val).trim();
          };

          const parseExcelTime = (val: any) => {
            if (!val) return '';
            if (typeof val === 'number') {
              const mins = Math.round(val * 24 * 60);
              const h = Math.floor(mins / 60) % 24;
              const m = mins % 60;
              return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
            }
            return String(val).trim();
          };

          const reqDate = parseExcelDate(row[6]);
          let otDate = parseExcelDate(row[7]);
          if (!otDate) otDate = reqDate || dayjs().format('YYYY-MM-DD');

          const beginTime = parseExcelTime(row[9]);
          const endTime = parseExcelTime(row[11]);

          // REQUIREMENT: Detect Retroactive OT (e.g. from previous month or mentioned in reason)
          const otMonth = dayjs(otDate).month() + 1; // 1-12
          const currentMonth = selectedMonth;
          const isRetroactive = otMonth < currentMonth || reason.toLowerCase().includes('retroactive');

          newRecords.push({
            id: `ot-bi-${Date.now()}-${r}`,
            gid,
            empNo,
            department: dept,
            name,
            totalHours,
            reason,
            status: 'Approved',
            requestDate: reqDate,
            otRecordDate: otDate,
            beginTime,
            endTime,
            isRetroactive,
            isConfirmedByAdmin: !isRetroactive // Retroactive requires admin confirmation!
          });
        }

        // REQUIREMENT: Sum multiple OT periods on the same day for the same employee
        const consolidatedMap = new Map<string, OTRecord>();
        newRecords.forEach(rec => {
          const key = `${rec.empNo}_${rec.otRecordDate}`;
          if (consolidatedMap.has(key)) {
            const existing = consolidatedMap.get(key)!;
            existing.totalHours += rec.totalHours;
            existing.reason = `${existing.reason} + ${rec.reason}`;
          } else {
            consolidatedMap.set(key, { ...rec });
          }
        });

        const finalRecords = Array.from(consolidatedMap.values());
        setImportedPreview(finalRecords);
        showToast(`ประมวลผล OT Approved สำเร็จ ${finalRecords.length} รายการ (รวมก้อนเวลาในวันเดียวกันแล้ว)`);
      } catch (err: any) {
        showToast(`ข้อผิดพลาด: ${err.message}`, 'error');
      }
    };

    reader.readAsBinaryString(file);
  };

  const handleConfirmImport = () => {
    if (importedPreview.length === 0) return;
    importOTRecords(importedPreview);
    setImportedPreview([]);
  };

  const retroList = otRecords.filter(ot => ot.isRetroactive);
  const pendingRetroCount = retroList.filter(ot => !ot.isConfirmedByAdmin).length;

  const displayList = (activeSubTab === 'retroactive' ? retroList : otRecords).filter(ot => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        ot.name.toLowerCase().includes(q) ||
        ot.empNo.toLowerCase().includes(q) ||
        ot.gid.toLowerCase().includes(q) ||
        ot.reason.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const totalApprovedHours = otRecords.reduce((acc, curr) => acc + curr.totalHours, 0);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-md">
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-siemens-teal-light" />
            นำเข้าข้อมูล Approved OT จาก Power BI (Power BI Overtime Sync)
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            ระบบจะกรองเฉพาะสถานะ <strong>Approved</strong>, รวมยอดชั่วโมงที่ทำหลายช่วงเวลาในวันเดียวกัน และดักจับ OT ย้อนหลังเพื่อให้ Admin ตรวจสอบก่อนบันทึก
          </p>
        </div>

        <label className="flex items-center gap-2 px-4 py-2 bg-siemens-petrol hover:bg-teal-700 text-white text-xs font-bold rounded-lg cursor-pointer transition shadow-md">
          <Upload className="w-4 h-4" />
          <span>นำเข้าไฟล์ OT (Excel / CSV)</span>
          <input
            type="file"
            accept=".xlsx, .xls, .csv"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">ยอดรวมชั่วโมง OT ที่อนุมัติ:</span>
          <div className="text-xl font-bold text-teal-300 mt-1 font-mono">
            {totalApprovedHours.toFixed(1)} <span className="text-xs font-normal text-slate-400">ชั่วโมง</span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">จำนวนรายการ OT ทั้งหมด:</span>
          <div className="text-xl font-bold text-white mt-1 font-mono">
            {otRecords.length} <span className="text-xs font-normal text-slate-400">รายการ</span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">OT เดือนก่อนหน้า (Retroactive):</span>
          <div className="text-xl font-bold text-amber-300 mt-1 font-mono flex items-center gap-1.5">
            {retroList.length}
            {pendingRetroCount > 0 && (
              <span className="text-[11px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                {pendingRetroCount} รอตรวจสอบ
              </span>
            )}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">การรวมเวลาหลายช่วงใน 1 วัน:</span>
          <div className="text-xl font-bold text-emerald-300 mt-1 font-mono">
            อัตโนมัติ (SUM)
          </div>
        </div>
      </div>

      {/* Upload Preview Banner if file parsed */}
      {importedPreview.length > 0 && (
        <div className="bg-teal-950/70 border border-teal-500/70 p-4 rounded-xl flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0" />
            <div>
              <p className="font-bold text-white text-sm">
                พร้อมนำเข้ารายการ Approved OT จำนวน {importedPreview.length} รายการ
              </p>
              <p className="text-slate-300 mt-0.5">
                พบรายการย้อนหลัง (Retroactive):{' '}
                <strong className="text-amber-300">
                  {importedPreview.filter(i => i.isRetroactive).length}
                </strong>{' '}
                รายการที่ต้องให้ Admin ยืนยัน
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setImportedPreview([])}
              className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition"
            >
              ยกเลิก
            </button>
            <button
              onClick={handleConfirmImport}
              className="px-5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-md transition"
            >
              ยืนยันบันทึกเข้า Time Sheet
            </button>
          </div>
        </div>
      )}

      {/* Sub Tabs */}
      <div className="flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-2 text-xs font-semibold">
          <button
            onClick={() => setActiveSubTab('all')}
            className={`pb-2.5 px-3 border-b-2 transition ${
              activeSubTab === 'all'
                ? 'border-teal-400 text-teal-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            รายการ OT ทั้งหมด ({otRecords.length})
          </button>
          <button
            onClick={() => setActiveSubTab('retroactive')}
            className={`pb-2.5 px-3 border-b-2 transition flex items-center gap-1.5 ${
              activeSubTab === 'retroactive'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>ตรวจสอบ OT ย้อนหลัง</span>
            {pendingRetroCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px]">
                {pendingRetroCount}
              </span>
            )}
          </button>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-slate-950 px-3 py-1 rounded-md border border-slate-800 text-xs mb-2">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="ค้นหาชื่อ, GID, รหัสพนักงาน, เหตุผล..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="bg-transparent text-white placeholder-slate-500 focus:outline-none w-48"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto max-h-[60vh]">
          <table className="w-full text-left border-collapse text-xs select-none">
            <thead className="bg-slate-950 text-slate-300 sticky top-0 z-10 font-sans">
              <tr className="border-b border-slate-800 text-[11px]">
                <th className="py-2.5 px-3 font-semibold">วันที่ทำ OT (Record Date)</th>
                <th className="py-2.5 px-3 font-semibold">Emp No.</th>
                <th className="py-2.5 px-3 font-semibold">GID No.</th>
                <th className="py-2.5 px-3 font-semibold">ชื่อพนักงาน</th>
                <th className="py-2.5 px-3 font-semibold">แผนก</th>
                <th className="py-2.5 px-3 font-semibold text-center">ชั่วโมง OT</th>
                <th className="py-2.5 px-3 font-semibold">ช่วงเวลา</th>
                <th className="py-2.5 px-3 font-semibold">เหตุผลการทำ OT</th>
                <th className="py-2.5 px-3 font-semibold text-center">สถานะ / การยืนยัน</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/60 font-mono">
              {displayList.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-10 text-slate-500 font-sans">
                    ไม่พบรายการ Overtime ที่ตรงกับเงื่อนไข
                  </td>
                </tr>
              ) : (
                displayList.map(ot => (
                  <tr key={ot.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-teal-300">
                      {ot.otRecordDate}
                    </td>
                    <td className="py-2.5 px-3 text-slate-200 font-bold">
                      {ot.empNo}
                    </td>
                    <td className="py-2.5 px-3 text-slate-400">
                      {ot.gid}
                    </td>
                    <td className="py-2.5 px-3 text-white font-sans">
                      {ot.name}
                    </td>
                    <td className="py-2.5 px-3 text-slate-400 font-sans">
                      {ot.department}
                    </td>
                    <td className="py-2.5 px-3 text-center font-bold text-amber-300">
                      {ot.totalHours} ชม.
                    </td>
                    <td className="py-2.5 px-3 text-slate-300">
                      {ot.beginTime && ot.endTime ? `${ot.beginTime} - ${ot.endTime}` : '-'}
                    </td>
                    <td className="py-2.5 px-3 text-slate-300 font-sans max-w-xs truncate" title={ot.reason}>
                      {ot.reason}
                    </td>
                    <td className="py-2.5 px-3 text-center font-sans">
                      {ot.isRetroactive ? (
                        ot.isConfirmedByAdmin ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-600/60">
                            ✓ ยืนยันลงงวดนี้แล้ว
                          </span>
                        ) : (
                          <div className="flex items-center justify-center gap-1.5">
                            <button
                              onClick={() => confirmRetroactiveOT(ot.id, true)}
                              className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition shadow"
                              title="กดยืนยันบันทึก OT ย้อนหลังนี้เข้า Time Sheet"
                            >
                              <Check className="w-3 h-3" /> ยืนยันบันทึก
                            </button>
                          </div>
                        )
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-teal-950 text-teal-300 border border-teal-600/50">
                          Approved
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-950 p-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>แสดงทั้งหมด: <strong className="text-white">{displayList.length}</strong> รายการ</span>
        </div>
      </div>
    </div>
  );
};