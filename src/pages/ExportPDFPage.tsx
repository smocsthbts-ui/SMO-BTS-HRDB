import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import {
  FileDown,
  Printer,
  Calendar,
  Building2,
  User,
  Users,
  CheckCircle2,
  FileText,
  Eye
} from 'lucide-react';
import { computeMonthlyTimeSheet } from '../lib/attendanceEngine';
import { generateTimeSheetPDF } from '../lib/pdfGenerator';

export const ExportPDFPage: React.FC = () => {
  const {
    employees,
    departments,
    shiftCodes,
    shiftPlans,
    attendanceRecords,
    otRecords,
    allowances,
    manualOverrides,
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
    currentUser,
    showToast
  } = useApp();

  const [exportScope, setExportScope] = useState<'single' | 'department' | 'all'>('single');
  const [selectedDept, setSelectedDept] = useState(currentUser.departmentCode);
  const [selectedEmpNo, setSelectedEmpNo] = useState('0950');

  // Accessible employees
  const accessibleEmployees = useMemo(() => {
    return employees.filter(e => {
      if (currentUser.role !== 'admin' && e.departmentCode !== currentUser.departmentCode) {
        return false;
      }
      return e.isActive;
    });
  }, [employees, currentUser]);

  const targetEmployee = accessibleEmployees.find(e => e.empNo === selectedEmpNo) || accessibleEmployees[0];

  // Preview TimeSheet
  const previewTimeSheet = useMemo(() => {
    if (!targetEmployee) return null;
    const empOverrides = manualOverrides[`${targetEmployee.empNo}_${selectedYear}_${selectedMonth}`] || {};
    return computeMonthlyTimeSheet(
      targetEmployee,
      selectedYear,
      selectedMonth,
      shiftPlans,
      shiftCodes,
      attendanceRecords,
      otRecords,
      allowances,
      empOverrides
    );
  }, [
    targetEmployee,
    selectedYear,
    selectedMonth,
    shiftPlans,
    shiftCodes,
    attendanceRecords,
    otRecords,
    allowances,
    manualOverrides
  ]);

  const handleExport = () => {
    if (exportScope === 'single') {
      if (!previewTimeSheet) return;
      generateTimeSheetPDF(previewTimeSheet);
      showToast(`Export Time Sheet ของ ${previewTimeSheet.employee.firstName} เรียบร้อยแล้ว`);
    } else if (exportScope === 'department') {
      const deptEmployees = accessibleEmployees.filter(e => e.departmentCode === selectedDept);
      if (deptEmployees.length === 0) {
        showToast(`ไม่พบพนักงานในแผนก ${selectedDept}`, 'warning');
        return;
      }
      deptEmployees.forEach(emp => {
        const empOverrides = manualOverrides[`${emp.empNo}_${selectedYear}_${selectedMonth}`] || {};
        const ts = computeMonthlyTimeSheet(
          emp,
          selectedYear,
          selectedMonth,
          shiftPlans,
          shiftCodes,
          attendanceRecords,
          otRecords,
          allowances,
          empOverrides
        );
        generateTimeSheetPDF(ts);
      });
      showToast(`Export Time Sheet แผนก ${selectedDept} รวม ${deptEmployees.length} คน เรียบร้อยแล้ว`);
    } else {
      // All
      accessibleEmployees.forEach(emp => {
        const empOverrides = manualOverrides[`${emp.empNo}_${selectedYear}_${selectedMonth}`] || {};
        const ts = computeMonthlyTimeSheet(
          emp,
          selectedYear,
          selectedMonth,
          shiftPlans,
          shiftCodes,
          attendanceRecords,
          otRecords,
          allowances,
          empOverrides
        );
        generateTimeSheetPDF(ts);
      });
      showToast(`Export Time Sheet ทั้งหมด รวม ${accessibleEmployees.length} คน เรียบร้อยแล้ว`);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-md flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
            <FileDown className="w-5 h-5 text-siemens-teal-light" />
            Export Time Sheet เป็นเอกสาร PDF (Siemens Standard Format)
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            ส่งออกเอกสาร Time Sheet ตามแบบฟอร์มมาตรฐานของ Siemens เลย์เอาต์ตรงตามเอกสารตัวอย่าง สามารถเลือกส่งออกรายบุคคล, รายแผนก, หรือทั้งหมด
          </p>
        </div>

        <button
          onClick={handleExport}
          className="flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-lg transition"
        >
          <Printer className="w-4 h-4" />
          ดาวน์โหลดไฟล์ PDF
        </button>
      </div>

      {/* Configuration Scope */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs">
        {/* 1. Scope Option */}
        <div>
          <label className="block font-semibold text-teal-300 mb-1.5">1. ขอบเขตการ Export</label>
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 p-2 bg-slate-950 rounded-lg border border-slate-800 cursor-pointer">
              <input
                type="radio"
                name="scope"
                checked={exportScope === 'single'}
                onChange={() => setExportScope('single')}
                className="text-teal-500"
              />
              <User className="w-4 h-4 text-teal-400" />
              <span className="text-white font-medium">รายบุคคล (Single Employee)</span>
            </label>

            <label className="flex items-center gap-2 p-2 bg-slate-950 rounded-lg border border-slate-800 cursor-pointer">
              <input
                type="radio"
                name="scope"
                checked={exportScope === 'department'}
                onChange={() => setExportScope('department')}
                className="text-teal-500"
              />
              <Building2 className="w-4 h-4 text-sky-400" />
              <span className="text-white font-medium">รายแผนก (By Department)</span>
            </label>

            {currentUser.role === 'admin' && (
              <label className="flex items-center gap-2 p-2 bg-slate-950 rounded-lg border border-slate-800 cursor-pointer">
                <input
                  type="radio"
                  name="scope"
                  checked={exportScope === 'all'}
                  onChange={() => setExportScope('all')}
                  className="text-teal-500"
                />
                <Users className="w-4 h-4 text-amber-400" />
                <span className="text-white font-medium">ทุกแผนกทั้งหมด (All Employees)</span>
              </label>
            )}
          </div>
        </div>

        {/* 2. Parameters */}
        <div className="space-y-3">
          <label className="block font-semibold text-teal-300">2. พารามิเตอร์</label>

          {exportScope === 'single' && (
            <div>
              <span className="text-slate-400 block mb-1">เลือกพนักงาน:</span>
              <select
                value={selectedEmpNo}
                onChange={e => setSelectedEmpNo(e.target.value)}
                className="w-full bg-slate-950 text-white border border-slate-700 rounded-lg p-2 focus:outline-none"
              >
                {accessibleEmployees.map(e => (
                  <option key={e.empNo} value={e.empNo}>
                    {e.empNo} - {e.firstName} {e.lastName} ({e.departmentCode})
                  </option>
                ))}
              </select>
            </div>
          )}

          {exportScope === 'department' && (
            <div>
              <span className="text-slate-400 block mb-1">เลือกแผนก:</span>
              <select
                value={selectedDept}
                onChange={e => setSelectedDept(e.target.value)}
                className="w-full bg-slate-950 text-white border border-slate-700 rounded-lg p-2 focus:outline-none"
              >
                {departments.map(d => (
                  <option key={d.code} value={d.code}>{d.code} - {d.name}</option>
                ))}
              </select>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-slate-400 block mb-1">เดือน:</span>
              <select
                value={selectedMonth}
                onChange={e => setSelectedMonth(Number(e.target.value))}
                className="w-full bg-slate-950 text-white border border-slate-700 rounded-lg p-2 focus:outline-none"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>เดือน {i + 1}</option>
                ))}
              </select>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">ปี:</span>
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(Number(e.target.value))}
                className="w-full bg-slate-950 text-white border border-slate-700 rounded-lg p-2 focus:outline-none"
              >
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
                <option value={2027}>2027</option>
              </select>
            </div>
          </div>
        </div>

        {/* 3. Export Summary */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="font-bold text-white block mb-2">สรุปการส่งออก</span>
            <ul className="space-y-1 text-slate-300 text-[11px]">
              <li>• รูปแบบฟอร์ม: <strong>Siemens Time Sheet (A4 แนวนอน)</strong></li>
              <li>• งวดประจำเดือน: <strong className="text-teal-300">{selectedMonth}/{selectedYear}</strong></li>
              <li>• ขอบเขต: <strong>{exportScope.toUpperCase()}</strong></li>
              {previewTimeSheet && (
                <li>• พนักงานตัวอย่าง: <strong className="text-white">{previewTimeSheet.employee.firstName} {previewTimeSheet.employee.lastName} ({previewTimeSheet.employee.empNo})</strong></li>
              )}
            </ul>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
            <CheckCircle2 className="w-4 h-4" /> พร้อมส่งออก PDF ความละเอียดสูง
          </div>
        </div>
      </div>

      {/* Live Visual Preview Card */}
      {previewTimeSheet && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Eye className="w-4 h-4 text-siemens-teal-light" />
              ตัวอย่างฟอร์มเอกสาร PDF ที่จะถูกสร้าง (Visual Document Preview)
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Emp No: {previewTimeSheet.employee.empNo} | GID: {previewTimeSheet.employee.gid}
            </span>
          </div>

          {/* Simulated White Paper View (matches Time Sheet.png) */}
          <div className="bg-white text-slate-950 p-6 rounded-lg shadow-2xl font-sans text-xs border border-slate-300 overflow-x-auto select-none">
            {/* Top header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2 mb-3">
              <div className="flex items-center gap-4">
                <span className="text-xl font-black text-[#00646e] tracking-wider">SIEMENS</span>
                <span className="text-lg font-bold text-slate-900">Time Sheet</span>
                <span className="text-[11px] text-red-600 font-semibold">
                  ถ้ามีเขียนเพิ่มหรือแก้ไขให้ขีดฆ่า(ห้ามลบ) ลงลายเซ็นกำกับทุกจุดด้วย
                </span>
              </div>
              <span className="text-lg font-black text-slate-900">MO CS BTS</span>
            </div>

            {/* Metadata Box */}
            <div className="border border-slate-900 p-2.5 mb-3 text-[11px] grid grid-cols-4 gap-2">
              <div>
                <strong>Empno. / GID :</strong> {previewTimeSheet.employee.empNo} &nbsp; {previewTimeSheet.employee.gid}
              </div>
              <div>
                <strong>Firstname :</strong> {previewTimeSheet.employee.firstName}
              </div>
              <div>
                <strong>Familyname :</strong> {previewTimeSheet.employee.lastName}
              </div>
              <div>
                <strong>Department :</strong> {previewTimeSheet.employee.departmentCode}
              </div>
              <div>
                <strong>Division :</strong> {previewTimeSheet.employee.division}
              </div>
              <div>
                <strong>Shift Status :</strong> {previewTimeSheet.employee.isShiftWorker ? 'Yes' : 'No'}
              </div>
              <div>
                <strong>Function :</strong> {previewTimeSheet.employee.functionTitle}
              </div>
              <div>
                <strong>Cost Center :</strong> {previewTimeSheet.employee.costCenter}
              </div>
            </div>

            {/* Simulated Table */}
            <div className="border border-slate-900">
              <table className="w-full text-center border-collapse text-[10px]">
                <thead>
                  <tr className="border-b border-slate-900 bg-slate-100 font-bold">
                    <th rowSpan={2} className="p-1 border-r border-slate-900 text-left">Date</th>
                    <th rowSpan={2} className="p-1 border-r border-slate-900">Shift<br/>Code</th>
                    <th rowSpan={2} className="p-1 border-r border-slate-900">Shift<br/>In</th>
                    <th colSpan={2} className="p-1 border-r border-slate-900">Real Time I</th>
                    <th rowSpan={2} className="p-1 border-r border-slate-900">Diff. I<br/>(H)</th>
                    <th rowSpan={2} className="p-1 border-r border-slate-900">Late<br/>(H)</th>
                    <th colSpan={2} className="p-1 border-r border-slate-900">Real Time II</th>
                    <th rowSpan={2} className="p-1 border-r border-slate-900">Diff. II<br/>(H)</th>
                    <th colSpan={3} className="p-1 border-r border-slate-900">Working Hours</th>
                    <th rowSpan={2} className="p-1 border-r border-slate-900">Stand by<br/>Allowance</th>
                    <th rowSpan={2} className="p-1 border-r border-slate-900">Emergency<br/>Allowance</th>
                    <th rowSpan={2} className="p-1 border-r border-slate-900">Code<br/>Leave</th>
                    <th rowSpan={2} className="p-1 border-r border-slate-900">Code</th>
                    <th rowSpan={2} className="p-1 border-r border-slate-900 text-left">Remark</th>
                  </tr>
                  <tr className="border-b border-slate-900 bg-slate-100 font-bold text-[9px]">
                    <th className="p-0.5 border-r border-slate-900">In</th>
                    <th className="p-0.5 border-r border-slate-900">Out</th>
                    <th className="p-0.5 border-r border-slate-900">In</th>
                    <th className="p-0.5 border-r border-slate-900">Out</th>
                    <th className="p-0.5 border-r border-slate-900">Total</th>
                    <th className="p-0.5 border-r border-slate-900">OT 1.5</th>
                    <th className="p-0.5 border-r border-slate-900">OT 3.0</th>
                  </tr>
                </thead>
                <tbody className="font-mono">
                  {previewTimeSheet.rows.slice(0, 15).map(r => (
                    <tr
                      key={r.day}
                      className={`border-b border-slate-400 ${
                        r.isWeekend ? 'bg-slate-200' : ''
                      }`}
                    >
                      <td className="p-1 border-r border-slate-900 text-left font-sans font-medium">{r.dateStr}</td>
                      <td className="p-1 border-r border-slate-900 font-bold">{r.shiftCode}</td>
                      <td className="p-1 border-r border-slate-900">{r.shiftIn}</td>
                      <td className="p-1 border-r border-slate-900">{r.realIn1}</td>
                      <td className="p-1 border-r border-slate-900">{r.realOut1}</td>
                      <td className="p-1 border-r border-slate-900 font-bold">{r.diff1}</td>
                      <td className="p-1 border-r border-slate-900">{r.late}</td>
                      <td className="p-1 border-r border-slate-900">{r.realIn2}</td>
                      <td className="p-1 border-r border-slate-900">{r.realOut2}</td>
                      <td className="p-1 border-r border-slate-900">{r.diff2}</td>
                      <td className="p-1 border-r border-slate-900 font-bold">{r.totalWorkingHours}</td>
                      <td className="p-1 border-r border-slate-900">{r.ot15}</td>
                      <td className="p-1 border-r border-slate-900">{r.ot30}</td>
                      <td className="p-1 border-r border-slate-900">{r.standbyAllowance}</td>
                      <td className="p-1 border-r border-slate-900">{r.emergencyAllowance}</td>
                      <td className="p-1 border-r border-slate-900">{r.codeLeave}</td>
                      <td className="p-1 border-r border-slate-900">{r.code}</td>
                      <td className="p-1 text-left font-sans truncate max-w-[120px]">{r.remark}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-100 font-bold text-[10px] border-t-2 border-slate-900">
                  <tr>
                    <td className="p-1 text-left border-r border-slate-900 font-sans">Total :</td>
                    <td className="p-1 border-r border-slate-900"></td>
                    <td className="p-1 border-r border-slate-900"></td>
                    <td colSpan={2} className="p-1 border-r border-slate-900 font-bold">{previewTimeSheet.totalShiftsWorked}</td>
                    <td className="p-1 border-r border-slate-900 font-bold">{previewTimeSheet.totalDiff1Formatted}</td>
                    <td className="p-1 border-r border-slate-900 font-bold">{previewTimeSheet.totalLateFormatted}</td>
                    <td colSpan={2} className="p-1 border-r border-slate-900"></td>
                    <td className="p-1 border-r border-slate-900"></td>
                    <td className="p-1 border-r border-slate-900 font-bold">{previewTimeSheet.totalWorkingHours}</td>
                    <td className="p-1 border-r border-slate-900 font-bold">{previewTimeSheet.totalOt15}</td>
                    <td className="p-1 border-r border-slate-900 font-bold">{previewTimeSheet.totalOt30}</td>
                    <td className="p-1 border-r border-slate-900">{previewTimeSheet.totalStandby}</td>
                    <td className="p-1 border-r border-slate-900">{previewTimeSheet.totalEmergency}</td>
                    <td className="p-1 border-r border-slate-900">{previewTimeSheet.totalLeave}</td>
                    <td className="p-1 border-r border-slate-900"></td>
                    <td className="p-1 text-left"></td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Footer Notice & Signatures */}
            <div className="border border-slate-900 p-2 mt-2 text-[9px] flex items-center justify-between">
              <div>
                <p><strong>Remark :</strong> A-Annual Leave, C-Casual Leave, S-Sick Leave, O-Other Leave</p>
                <p className="pl-12">X-Forgot to use the Card, Y-Forgot to bring the Card, O-Others</p>
              </div>

              <div className="flex items-center gap-10 font-bold text-[10px]">
                <div className="text-center">
                  <div className="w-32 border-b border-slate-900 mb-1"></div>
                  Signature Originator/Date
                </div>
                <div className="text-center">
                  <div className="w-32 border-b border-slate-900 mb-1"></div>
                  Approval Signature/Date
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};