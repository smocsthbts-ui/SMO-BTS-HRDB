import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FileSpreadsheet,
  Upload,
  CheckCircle2,
  AlertCircle,
  Clock,
  Users,
  Search,
  ArrowRight,
  Filter
} from 'lucide-react';
import { parseAttendanceText } from '../lib/attendanceEngine';
import { TimeAttendancePunch } from '../types';

export const AttendanceImportPage: React.FC = () => {
  const {
    attendanceRecords,
    importAttendancePunches,
    employees,
    showToast
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'ALL' | 'I' | 'O'>('ALL');
  const [parsedPreview, setParsedPreview] = useState<TimeAttendancePunch[]>([]);
  const [duplicateCount, setDuplicateCount] = useState(0);
  const [fileName, setFileName] = useState('');

  // Handle .txt upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();

    reader.onload = evt => {
      try {
        const text = evt.target?.result as string;
        const { punches, duplicateCount: dupes } = parseAttendanceText(text);

        if (punches.length === 0) {
          showToast('ไม่พบข้อมูลการสแกนบัตรที่ถูกต้องในไฟล์', 'error');
          return;
        }

        setParsedPreview(punches);
        setDuplicateCount(dupes);
        showToast(อ่านข้อมูลสแกนบัตร  รายการ (ตัดเวลาสแกนซ้ำออก  รายการ));
      } catch (err: any) {
        showToast(ข้อผิดพลาด: , 'error');
      }
    };
    reader.readAsText(file);
  };

  const handleConfirmImport = () => {
    if (parsedPreview.length === 0) return;
    importAttendancePunches(parsedPreview);
    setParsedPreview([]);
    setFileName('');
  };

  const getEmployeeName = (empNo: string) => {
    const emp = employees.find(e => e.empNo === empNo);
    return emp ? ${emp.firstName}  () : 'ไม่พบข้อมูลในระบบ';
  };

  const filteredList = attendanceRecords.filter(p => {
    if (filterType !== 'ALL' && p.punchType !== filterType) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const empName = getEmployeeName(p.empNo).toLowerCase();
      return (
        p.empNo.toLowerCase().includes(q) ||
        p.punchDate.includes(q) ||
        empName.includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-md">
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-siemens-teal-light" />
            นำเข้าเวลาเข้า-ออกงานจากเครื่องบันทึกเวลา (Time Attendance Punches)
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            รองรับไฟล์ข้อความ <strong>.txt</strong> จากเครื่องรูดบัตร/สแกนนิ้ว เชื่อมโยงด้วย Emp No และตัดการสแกนซ้ำซ้อนในเวลาใกล้เคียงกันโดยเลือกเวลาล่าสุด
          </p>
        </div>

        <label className="flex items-center gap-2 px-4 py-2 bg-siemens-petrol hover:bg-teal-700 text-white text-xs font-bold rounded-lg cursor-pointer transition shadow-md">
          <Upload className="w-4 h-4" />
          <span>เลือกไฟล์ Time Attendance (.txt)</span>
          <input
            type="file"
            accept=".txt, .csv, .log"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">บันทึกเวลาในระบบทั้งหมด:</span>
          <div className="text-xl font-bold text-teal-300 mt-1 font-mono">
            {attendanceRecords.length} <span className="text-xs font-normal text-slate-400">รายการ</span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">สแกนเข้างาน (In):</span>
          <div className="text-xl font-bold text-emerald-300 mt-1 font-mono">
            {attendanceRecords.filter(p => p.punchType === 'I').length} <span className="text-xs font-normal text-slate-400">ครั้ง</span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">สแกนออกงาน (Out):</span>
          <div className="text-xl font-bold text-amber-300 mt-1 font-mono">
            {attendanceRecords.filter(p => p.punchType === 'O').length} <span className="text-xs font-normal text-slate-400">ครั้ง</span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">การกรองสแกนซ้ำซ้อน:</span>
          <div className="text-xl font-bold text-sky-300 mt-1 font-mono">
            ใช้เวลาล่าสุด (Latest)
          </div>
        </div>
      </div>

      {/* Upload Preview Banner */}
      {parsedPreview.length > 0 && (
        <div className="bg-teal-950/70 border border-teal-500/70 p-4 rounded-xl flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0" />
            <div>
              <p className="font-bold text-white text-sm">
                พร้อมนำเข้าเวลาทำงาน {parsedPreview.length} รายการ จากไฟล์: {fileName}
              </p>
              <p className="text-slate-300 mt-0.5">
                กรองสแกนซ้ำในระยะ 10 นาทีออกจำนวน <strong className="text-amber-300">{duplicateCount}</strong> รายการ โดยเลือกเวลาล่าสุด
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setParsedPreview([])}
              className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition"
            >
              ยกเลิก
            </button>
            <button
              onClick={handleConfirmImport}
              className="px-5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-md transition"
            >
              ยืนยันบันทึกเข้าระบบ
            </button>
          </div>
        </div>
      )}

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 p-3 rounded-lg text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-semibold">ประเภทการสแกน:</span>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setFilterType('ALL')}
              className={px-3 py-1 rounded transition font-medium }
            >
              ทั้งหมด
            </button>
            <button
              onClick={() => setFilterType('I')}
              className={px-3 py-1 rounded transition font-medium }
            >
              สแกนเข้า (In)
            </button>
            <button
              onClick={() => setFilterType('O')}
              className={px-3 py-1 rounded transition font-medium }
            >
              สแกนออก (Out)
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800 w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="ค้นหารหัสพนักงาน, วันที่, หรือชื่อ..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Punches Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto max-h-[60vh]">
          <table className="w-full text-left border-collapse text-xs select-none">
            <thead className="bg-slate-950 text-slate-300 sticky top-0 z-10 font-sans">
              <tr className="border-b border-slate-800 text-[11px]">
                <th className="py-2.5 px-3 font-semibold">Emp No.</th>
                <th className="py-2.5 px-3 font-semibold">ชื่อพนักงาน / แผนกในระบบ</th>
                <th className="py-2.5 px-3 font-semibold text-center">ประเภท</th>
                <th className="py-2.5 px-3 font-semibold text-center">วันที่บันทึก</th>
                <th className="py-2.5 px-3 font-semibold text-center">เวลาที่บันทึก (HH:mm)</th>
                <th className="py-2.5 px-3 font-semibold text-center">รหัสเครื่อง (Terminal)</th>
                <th className="py-2.5 px-3 font-semibold">Raw Data</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/60 font-mono">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-10 text-slate-500 font-sans">
                    ไม่พบข้อมูลการบันทึกเวลาที่ตรงกับเงื่อนไข
                  </td>
                </tr>
              ) : (
                filteredList.slice(0, 200).map(p => {
                  const empName = getEmployeeName(p.empNo);
                  const isMatched = empName !== 'ไม่พบข้อมูลในระบบ';

                  return (
                    <tr key={p.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-2 px-3 font-bold text-teal-300">
                        {p.empNo}
                      </td>
                      <td className="py-2 px-3 font-sans">
                        <span className={isMatched ? 'text-white font-medium' : 'text-rose-400 font-bold'}>
                          {empName}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-center">
                        {p.punchType === 'I' ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-600/60">
                            IN (เข้า)
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-600/60">
                            OUT (ออก)
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-3 text-center text-slate-300">
                        {p.punchDate}
                      </td>
                      <td className="py-2 px-3 text-center font-bold text-white text-sm">
                        {p.punchTime}
                      </td>
                      <td className="py-2 px-3 text-center text-slate-400">
                        {p.terminalId}
                      </td>
                      <td className="py-2 px-3 text-slate-500 text-[11px] truncate max-w-xs">
                        {p.rawLine || ${p.empNo}   }
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-950 p-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>แสดง <strong className="text-white">{Math.min(filteredList.length, 200)}</strong> จาก {filteredList.length} รายการ</span>
          {filteredList.length > 200 && (
            <span className="text-slate-500">* จำกัดการแสดงผล 200 รายการแรกเพื่อความรวดเร็ว</span>
          )}
        </div>
      </div>
    </div>
  );
};
