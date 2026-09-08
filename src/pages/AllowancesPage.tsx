import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import * as XLSX from 'xlsx';
import {
  Coins,
  Upload,
  Download,
  Plus,
  Trash2,
  Building2,
  Calendar,
  Search,
  CheckCircle2
} from 'lucide-react';
import { AllowanceRecord } from '../types';
import { downloadAllowanceTemplate } from '../lib/excelTemplates';

export const AllowancesPage: React.FC = () => {
  const {
    allowances,
    importAllowances,
    employees,
    departments,
    selectedYear,
    selectedMonth,
    showToast
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('ALL');

  // Add modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    empNo: '',
    type: 'shift_allowance' as 'standby' | 'emergency' | 'shift_allowance',
    amount: 1000,
    date: '2026-05-31',
    remark: ''
  });

  const filteredAllowances = allowances.filter(a => {
    if (a.year !== selectedYear || a.month !== selectedMonth) return false;
    if (filterType !== 'ALL' && a.type !== filterType) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const emp = employees.find(e => e.empNo === a.empNo);
      const empName = emp ? `${emp.firstName} ${emp.lastName}`.toLowerCase() : '';
      return (
        a.empNo.toLowerCase().includes(q) ||
        a.gid.toLowerCase().includes(q) ||
        empName.includes(q) ||
        (a.remark && a.remark.toLowerCase().includes(q))
      );
    }
    return true;
  });

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

        const newRecords: AllowanceRecord[] = [];
        for (let r = 1; r < data.length; r++) {
          const row = data[r];
          if (!row || row.length < 5) continue;

          const year = Number(row[0]) || selectedYear;
          const month = Number(row[1]) || selectedMonth;
          const empNo = String(row[2] || '').trim().padStart(4, '0');
          const gid = String(row[3] || '').trim();
          const type = String(row[4] || 'shift_allowance').trim().toLowerCase() as any;
          const amount = Number(row[5]) || 0;
          const date = String(row[6] || '');
          const remark = String(row[7] || '');

          newRecords.push({
            id: `al-import-${Date.now()}-${r}`,
            year,
            month,
            empNo,
            gid,
            type: ['standby', 'emergency', 'shift_allowance'].includes(type) ? type : 'shift_allowance',
            amount,
            date,
            remark
          });
        }

        importAllowances(newRecords);
      } catch (err: any) {
        showToast(`ข้อผิดพลาด: ${err.message}`, 'error');
      }
    };
    reader.readAsBinaryString(file);
  };

  const handleAddManual = (e: React.FormEvent) => {
    e.preventDefault();
    const emp = employees.find(e => e.empNo === formData.empNo);
    if (!emp) {
      showToast('ไม่พบรหัสพนักงานนี้ในระบบ', 'error');
      return;
    }

    const newRecord: AllowanceRecord = {
      id: `al-custom-${Date.now()}`,
      year: selectedYear,
      month: selectedMonth,
      empNo: emp.empNo,
      gid: emp.gid,
      type: formData.type,
      amount: Number(formData.amount) || 0,
      date: formData.date,
      remark: formData.remark
    };

    importAllowances([newRecord]);
    setIsModalOpen(false);
  };

  const totalAmount = filteredAllowances.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-md">
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
            <Coins className="w-5 h-5 text-siemens-teal-light" />
            รายได้พิเศษและเงินช่วยเหลือพนักงาน (Allowances & Special Income)
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            จัดการค่า Team Emergency, ค่ากะ (Shift Allowance), และค่า Standby ประจำงวดเดือน {selectedMonth}/{selectedYear} เพื่อส่งต่อ Payroll
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={downloadAllowanceTemplate}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
          >
            <Download className="w-3.5 h-3.5 text-teal-400" />
            โหลด Template
          </button>

          <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/40 text-xs font-medium cursor-pointer transition shadow-sm">
            <Upload className="w-3.5 h-3.5 text-teal-400" />
            <span>นำเข้า Excel</span>
            <input
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-siemens-petrol hover:bg-teal-700 text-white text-xs font-bold transition shadow-sm"
          >
            <Plus className="w-4 h-4" />
            เพิ่มรายการเบี้ยเลี้ยง
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">ยอดจ่ายรวมงวดนี้:</span>
          <div className="text-xl font-bold text-teal-300 mt-1 font-mono">
            ฿{totalAmount.toLocaleString()}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">ค่าเข้ากะ (Shift Allowance):</span>
          <div className="text-xl font-bold text-amber-300 mt-1 font-mono">
            ฿{filteredAllowances.filter(a => a.type === 'shift_allowance').reduce((acc, c) => acc + c.amount, 0).toLocaleString()}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">Team Emergency:</span>
          <div className="text-xl font-bold text-rose-300 mt-1 font-mono">
            ฿{filteredAllowances.filter(a => a.type === 'emergency').reduce((acc, c) => acc + c.amount, 0).toLocaleString()}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">Standby Allowance:</span>
          <div className="text-xl font-bold text-sky-300 mt-1 font-mono">
            ฿{filteredAllowances.filter(a => a.type === 'standby').reduce((acc, c) => acc + c.amount, 0).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 p-3 rounded-lg text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-semibold">ประเภทรายได้:</span>
          <select
            value={filterType}
            onChange={e => setFilterType(e.target.value)}
            className="bg-slate-950 text-white font-medium border border-slate-700 rounded-md p-1.5 focus:outline-none"
          >
            <option value="ALL">-- ทั้งหมด (All Types) --</option>
            <option value="shift_allowance">Shift Allowance (ค่ากะ)</option>
            <option value="emergency">Team Emergency (ปฏิบัติการฉุกเฉิน)</option>
            <option value="standby">Standby Allowance (ค่าเตรียมพร้อม)</option>
          </select>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800 w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="ค้นหารหัสพนักงาน, GID, ชื่อ..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Allowances Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto max-h-[60vh]">
          <table className="w-full text-left border-collapse text-xs select-none">
            <thead className="bg-slate-950 text-slate-300 sticky top-0 z-10 font-sans">
              <tr className="border-b border-slate-800 text-[11px]">
                <th className="py-2.5 px-3 font-semibold">Emp No.</th>
                <th className="py-2.5 px-3 font-semibold">GID</th>
                <th className="py-2.5 px-3 font-semibold">ชื่อพนักงาน / แผนก</th>
                <th className="py-2.5 px-3 font-semibold">ประเภทเบี้ยเลี้ยง</th>
                <th className="py-2.5 px-3 font-semibold text-right">จำนวนเงิน (บาท)</th>
                <th className="py-2.5 px-3 font-semibold text-center">วันที่บันทึก</th>
                <th className="py-2.5 px-3 font-semibold">หมายเหตุ / สาเหตุ</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/60 font-mono">
              {filteredAllowances.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-10 text-slate-500 font-sans">
                    ไม่พบรายการเงินได้พิเศษในงวดเดือนนี้
                  </td>
                </tr>
              ) : (
                filteredAllowances.map(a => {
                  const emp = employees.find(e => e.empNo === a.empNo);

                  return (
                    <tr key={a.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-2 px-3 font-bold text-teal-300">
                        {a.empNo}
                      </td>
                      <td className="py-2 px-3 text-slate-400">
                        {a.gid}
                      </td>
                      <td className="py-2 px-3 font-sans text-white">
                        {emp ? `${emp.firstName} ${emp.lastName} (${emp.departmentCode})` : 'Unknown'}
                      </td>
                      <td className="py-2 px-3 font-sans">
                        {a.type === 'shift_allowance' && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-600/60">
                            Shift Allowance
                          </span>
                        )}
                        {a.type === 'emergency' && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-600/60">
                            Team Emergency
                          </span>
                        )}
                        {a.type === 'standby' && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-950 text-sky-300 border border-sky-600/60">
                            Standby Allowance
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-3 text-right font-bold text-emerald-300">
                        ฿{a.amount.toLocaleString()}
                      </td>
                      <td className="py-2 px-3 text-center text-slate-400">
                        {a.date || '-'}
                      </td>
                      <td className="py-2 px-3 text-slate-300 font-sans max-w-xs truncate" title={a.remark}>
                        {a.remark || '-'}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-950 p-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>รวมทั้งหมด: <strong className="text-white">{filteredAllowances.length}</strong> รายการ</span>
          <span>ยอดรวม: <strong className="text-teal-300 font-mono">฿{totalAmount.toLocaleString()}</strong> บาท</span>
        </div>
      </div>

      {/* Manual Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-md w-full p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Coins className="w-5 h-5 text-teal-400" />
                เพิ่มรายการเบี้ยเลี้ยงพิเศษ
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddManual} className="space-y-3 text-xs">
              <div>
                <label className="block font-medium text-slate-300 mb-1">เลือกพนักงาน *</label>
                <select
                  required
                  value={formData.empNo}
                  onChange={e => setFormData({ ...formData, empNo: e.target.value })}
                  className="w-full bg-slate-950 text-white border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                >
                  <option value="">-- เลือกพนักงาน --</option>
                  {employees.map(e => (
                    <option key={e.empNo} value={e.empNo}>
                      {e.empNo} - {e.firstName} {e.lastName} ({e.departmentCode})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">ประเภทเบี้ยเลี้ยง *</label>
                <select
                  value={formData.type}
                  onChange={e => setFormData({ ...formData, type: e.target.value as any })}
                  className="w-full bg-slate-950 text-white border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                >
                  <option value="shift_allowance">Shift Allowance (ค่ากะ)</option>
                  <option value="emergency">Team Emergency (ปฏิบัติการฉุกเฉิน)</option>
                  <option value="standby">Standby Allowance (ค่าเตรียมพร้อม)</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">จำนวนเงิน (บาท) *</label>
                <input
                  type="number"
                  step="50"
                  required
                  value={formData.amount}
                  onChange={e => setFormData({ ...formData, amount: Number(e.target.value) })}
                  className="w-full bg-slate-950 text-white font-mono border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">วันที่ทำรายการ</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-slate-950 text-white font-mono border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">หมายเหตุ / รายละเอียด</label>
                <input
                  type="text"
                  placeholder="เช่น ค่ากะดึกพิเศษ, งานซ่อมระบบฉุกเฉิน"
                  value={formData.remark}
                  onChange={e => setFormData({ ...formData, remark: e.target.value })}
                  className="w-full bg-slate-950 text-white border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition font-medium"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-siemens-petrol hover:bg-teal-700 text-white font-bold transition shadow-md"
                >
                  บันทึก
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};