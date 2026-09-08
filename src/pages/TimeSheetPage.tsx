import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import {
  FileText,
  User as UserIcon,
  Download,
  Edit3,
  CheckCircle2,
  AlertCircle,
  Building2,
  Calendar,
  Lock,
  Printer,
  Undo2
} from 'lucide-react';
import { computeMonthlyTimeSheet } from '../lib/attendanceEngine';
import { generateTimeSheetPDF } from '../lib/pdfGenerator';
import { DailyTimeSheetRow } from '../types';

export const TimeSheetPage: React.FC = () => {
  const {
    currentUser,
    employees,
    shiftCodes,
    shiftPlans,
    attendanceRecords,
    otRecords,
    allowances,
    manualOverrides,
    setDailyOverride,
    selectedYear,
    selectedMonth,
    selectedDept,
    showToast
  } = useApp();

  // Filter selectable employees: if User, restrict to own department
  const accessibleEmployees = useMemo(() => {
    return employees.filter(e => {
      if (currentUser.role !== 'admin' && e.departmentCode !== currentUser.departmentCode) {
        return false;
      }
      return e.isActive;
    });
  }, [employees, currentUser]);

  // Selected employee for viewing
  const [selectedEmpNo, setSelectedEmpNo] = useState<string>(() => {
    return accessibleEmployees.find(e => e.empNo === '0950')?.empNo || accessibleEmployees[0]?.empNo || '';
  });

  const selectedEmployee = employees.find(e => e.empNo === selectedEmpNo) || accessibleEmployees[0];

  // Manual Edit Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingDayRow, setEditingDayRow] = useState<DailyTimeSheetRow | null>(null);
  const [editForm, setEditForm] = useState<Partial<DailyTimeSheetRow>>({});

  // Compute TimeSheet for selected employee
  const timeSheet = useMemo(() => {
    if (!selectedEmployee) return null;
    const empOverrides = manualOverrides[`${selectedEmployee.empNo}_${selectedYear}_${selectedMonth}`] || {};
    return computeMonthlyTimeSheet(
      selectedEmployee,
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
    selectedEmployee,
    selectedYear,
    selectedMonth,
    shiftPlans,
    shiftCodes,
    attendanceRecords,
    otRecords,
    allowances,
    manualOverrides
  ]);

  const canEdit = currentUser.role === 'admin';

  const handleOpenEdit = (row: DailyTimeSheetRow) => {
    if (!canEdit) {
      showToast('เฉพาะระดับ Admin เท่านั้นที่สามารถแก้ไข Time Sheet แบบ Manual ได้', 'warning');
      return;
    }
    setEditingDayRow(row);
    setEditForm({ ...row });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDayRow || !selectedEmployee) return;

    setDailyOverride(selectedEmployee.empNo, selectedYear, selectedMonth, editingDayRow.day, editForm);
    setIsEditModalOpen(false);
  };

  const handleExportPDF = () => {
    if (!timeSheet) return;
    generateTimeSheetPDF(timeSheet);
    showToast(`ดาวน์โหลดไฟล์ Time Sheet ของ ${timeSheet.employee.firstName} เรียบร้อยแล้ว`);
  };

  if (!selectedEmployee || !timeSheet) {
    return (
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl text-center text-slate-400">
        <AlertCircle className="w-10 h-10 mx-auto text-slate-500 mb-2" />
        <p>ไม่พบข้อมูลพนักงานที่สามารถเข้าถึงได้ในระบบ</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Top Controls & Employee Picker */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <h1 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-siemens-teal-light" />
            Time Sheet พนักงาน
          </h1>

          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-700">
            <UserIcon className="w-4 h-4 text-teal-400" />
            <span className="text-xs text-slate-400 shrink-0 font-medium">เลือกพนักงาน:</span>
            <select
              value={selectedEmpNo}
              onChange={e => setSelectedEmpNo(e.target.value)}
              className="bg-transparent text-white font-bold text-xs focus:outline-none cursor-pointer max-w-xs truncate [&>option]:bg-slate-900"
            >
              {accessibleEmployees.map(e => (
                <option key={e.empNo} value={e.empNo}>
                  {e.empNo} - {e.firstName} {e.lastName} ({e.departmentCode})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportPDF}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-siemens-petrol hover:bg-teal-700 text-white text-xs font-bold transition shadow-md"
          >
            <Printer className="w-4 h-4" />
            Export เป็น PDF (Siemens Format)
          </button>
        </div>
      </div>

      {/* Siemens Header & Employee Metadata Box (Matching Time Sheet.png) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 gap-2">
          <div className="flex items-center gap-3">
            <span className="text-lg font-black tracking-wider text-siemens-teal-light font-sans">
              SIEMENS
            </span>
            <span className="text-base font-bold text-white">Time Sheet</span>
            <span className="text-xs text-rose-400 font-medium hidden lg:inline">
              * ถ้ามีเขียนเพิ่มหรือแก้ไขให้ขีดฆ่า(ห้ามลบ) ลงลายเซ็นกำกับทุกจุดด้วย
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-sm font-bold text-white tracking-wider">MO CS BTS</span>
            <span className="px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-600/50">
              งวดเดือน: {selectedMonth}/{selectedYear}
            </span>
          </div>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs">
          <div>
            <span className="text-slate-400 block text-[11px]">Empno. / GID:</span>
            <strong className="text-teal-300 font-mono text-sm">
              {selectedEmployee.empNo} <span className="text-slate-400 font-normal">/ {selectedEmployee.gid}</span>
            </strong>
          </div>

          <div>
            <span className="text-slate-400 block text-[11px]">ชื่อ - นามสกุล:</span>
            <strong className="text-white">
              {selectedEmployee.firstName} {selectedEmployee.lastName}
            </strong>
          </div>

          <div>
            <span className="text-slate-400 block text-[11px]">Department / Division:</span>
            <strong className="text-slate-200">
              {selectedEmployee.departmentCode} <span className="text-slate-400 font-normal">/ {selectedEmployee.division}</span>
            </strong>
          </div>

          <div>
            <span className="text-slate-400 block text-[11px]">Function / Cost Center:</span>
            <strong className="text-slate-200">
              {selectedEmployee.functionTitle} <span className="text-slate-400 font-normal">({selectedEmployee.costCenter})</span>
            </strong>
          </div>
        </div>
      </div>

      {/* Main Time Sheet Table (18 Columns Matching Time Sheet.png) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto max-h-[65vh]">
          <table className="w-full text-left border-collapse text-xs select-none">
            <thead className="bg-slate-950 text-slate-300 sticky top-0 z-20 shadow-sm font-sans text-[11px]">
              {/* Row 1 of Headers */}
              <tr className="border-b border-slate-800 text-center font-bold">
                <th rowSpan={2} className="py-2 px-2.5 border-r border-slate-800 text-left min-w-[100px]">Date</th>
                <th rowSpan={2} className="py-2 px-1.5 border-r border-slate-800 min-w-[45px]">Shift<br/>Code</th>
                <th rowSpan={2} className="py-2 px-1.5 border-r border-slate-800 min-w-[50px]">Shift<br/>In</th>
                <th colSpan={2} className="py-1.5 px-2 border-r border-slate-800 bg-slate-900/90 text-teal-300">Real Time I</th>
                <th rowSpan={2} className="py-2 px-1.5 border-r border-slate-800 min-w-[55px]">Diff. I<br/>(H)</th>
                <th rowSpan={2} className="py-2 px-1.5 border-r border-slate-800 min-w-[50px]">Late<br/>(H)</th>
                <th colSpan={2} className="py-1.5 px-2 border-r border-slate-800 bg-slate-900/90 text-teal-300">Real Time II</th>
                <th rowSpan={2} className="py-2 px-1.5 border-r border-slate-800 min-w-[55px]">Diff. II<br/>(H)</th>
                <th colSpan={3} className="py-1.5 px-2 border-r border-slate-800 bg-slate-900/90 text-amber-300">Working Hours</th>
                <th rowSpan={2} className="py-2 px-1.5 border-r border-slate-800 min-w-[65px]">Stand by<br/>Allowance</th>
                <th rowSpan={2} className="py-2 px-1.5 border-r border-slate-800 min-w-[68px]">Emergency<br/>Allowance</th>
                <th rowSpan={2} className="py-2 px-1.5 border-r border-slate-800 min-w-[50px]">Code<br/>Leave</th>
                <th rowSpan={2} className="py-2 px-1.5 border-r border-slate-800 min-w-[45px]">Code</th>
                <th rowSpan={2} className="py-2 px-3 border-r border-slate-800 text-left min-w-[150px]">Remark</th>
                {canEdit && (
                  <th rowSpan={2} className="py-2 px-2 text-center min-w-[45px]">Edit</th>
                )}
              </tr>
              {/* Row 2 of Headers */}
              <tr className="border-b border-slate-800 text-center font-bold text-[10px] bg-slate-950">
                <th className="py-1 px-2 border-r border-slate-800 min-w-[50px]">In</th>
                <th className="py-1 px-2 border-r border-slate-800 min-w-[50px]">Out</th>
                <th className="py-1 px-2 border-r border-slate-800 min-w-[50px]">In</th>
                <th className="py-1 px-2 border-r border-slate-800 min-w-[50px]">Out</th>
                <th className="py-1 px-2 border-r border-slate-800 min-w-[45px]">Total</th>
                <th className="py-1 px-2 border-r border-slate-800 min-w-[45px]">OT 1.5</th>
                <th className="py-1 px-2 border-r border-slate-800 min-w-[45px]">OT 3.0</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
              {timeSheet.rows.map(r => {
                return (
                  <tr
                    key={r.day}
                    className={`hover:bg-slate-800/60 transition-colors ${
                      r.isWeekend ? 'bg-slate-950/70 text-slate-400' : ''
                    } ${r.isManualEdited ? 'bg-amber-950/20' : ''}`}
                  >
                    {/* Date */}
                    <td className={`py-1.5 px-2.5 border-r border-slate-800/70 whitespace-nowrap font-sans font-medium ${
                      r.isWeekend ? 'text-amber-300' : 'text-slate-200'
                    }`}>
                      {r.dateStr}
                    </td>

                    {/* Shift Code */}
                    <td className="py-1.5 px-1.5 text-center border-r border-slate-800/70 font-bold text-teal-300">
                      {r.shiftCode || ''}
                    </td>

                    {/* Shift In */}
                    <td className="py-1.5 px-1.5 text-center border-r border-slate-800/70 text-slate-300">
                      {r.shiftIn || ''}
                    </td>

                    {/* Real Time I In */}
                    <td className="py-1.5 px-2 text-center border-r border-slate-800/70 text-white font-semibold">
                      {r.realIn1 || ''}
                    </td>

                    {/* Real Time I Out */}
                    <td className="py-1.5 px-2 text-center border-r border-slate-800/70 text-white font-semibold">
                      {r.realOut1 || ''}
                    </td>

                    {/* Diff I */}
                    <td className="py-1.5 px-1.5 text-center border-r border-slate-800/70 text-emerald-300 font-bold">
                      {r.diff1 || ''}
                    </td>

                    {/* Late */}
                    <td className={`py-1.5 px-1.5 text-center border-r border-slate-800/70 font-bold ${
                      r.late && r.late !== '00:00' ? 'text-rose-400' : 'text-slate-400'
                    }`}>
                      {r.late || ''}
                    </td>

                    {/* Real Time II In */}
                    <td className="py-1.5 px-2 text-center border-r border-slate-800/70 text-slate-300">
                      {r.realIn2 || ''}
                    </td>

                    {/* Real Time II Out */}
                    <td className="py-1.5 px-2 text-center border-r border-slate-800/70 text-slate-300">
                      {r.realOut2 || ''}
                    </td>

                    {/* Diff II */}
                    <td className="py-1.5 px-1.5 text-center border-r border-slate-800/70 text-slate-300">
                      {r.diff2 || ''}
                    </td>

                    {/* Working Hours Total */}
                    <td className="py-1.5 px-2 text-center border-r border-slate-800/70 font-bold text-amber-300">
                      {r.totalWorkingHours || 0}
                    </td>

                    {/* OT 1.5 */}
                    <td className="py-1.5 px-2 text-center border-r border-slate-800/70 font-bold text-amber-300">
                      {r.ot15 || 0}
                    </td>

                    {/* OT 3.0 */}
                    <td className="py-1.5 px-2 text-center border-r border-slate-800/70 text-slate-400">
                      {r.ot30 || 0}
                    </td>

                    {/* Standby Allowance */}
                    <td className="py-1.5 px-1.5 text-center border-r border-slate-800/70 text-slate-400">
                      {r.standbyAllowance || 0}
                    </td>

                    {/* Emergency Allowance */}
                    <td className="py-1.5 px-1.5 text-center border-r border-slate-800/70 text-slate-400">
                      {r.emergencyAllowance || 0}
                    </td>

                    {/* Code Leave */}
                    <td className="py-1.5 px-1.5 text-center border-r border-slate-800/70 font-bold text-orange-300">
                      {r.codeLeave || ''}
                    </td>

                    {/* Code */}
                    <td className="py-1.5 px-1.5 text-center border-r border-slate-800/70 text-slate-400">
                      {r.code || ''}
                    </td>

                    {/* Remark */}
                    <td className="py-1.5 px-3 border-r border-slate-800/70 font-sans text-slate-300 truncate max-w-[200px]" title={r.remark}>
                      {r.remark || ''}
                    </td>

                    {/* Edit button */}
                    {canEdit && (
                      <td className="py-1.5 px-2 text-center font-sans">
                        <button
                          onClick={() => handleOpenEdit(r)}
                          className="p-1 text-slate-400 hover:text-teal-300 hover:bg-slate-800 rounded transition"
                          title="แก้ไขข้อมูลรายวัน (Manual Edit)"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>

            {/* Total Row (Matching Time Sheet.png) */}
            <tfoot className="bg-slate-950 text-white font-mono font-bold text-xs sticky bottom-0 z-20 border-t-2 border-slate-700 shadow-inner">
              <tr>
                <td className="py-2.5 px-3 text-center border-r border-slate-800 font-sans font-bold text-amber-300">
                  Total :
                </td>
                <td className="py-2.5 px-1.5 text-center border-r border-slate-800"></td>
                <td className="py-2.5 px-1.5 text-center border-r border-slate-800"></td>
                <td colSpan={2} className="py-2.5 px-2 text-center border-r border-slate-800 text-teal-300">
                  {timeSheet.totalShiftsWorked} (วัน)
                </td>
                <td className="py-2.5 px-1.5 text-center border-r border-slate-800 text-emerald-300">
                  {timeSheet.totalDiff1Formatted}
                </td>
                <td className="py-2.5 px-1.5 text-center border-r border-slate-800 text-slate-400">
                  {timeSheet.totalLateFormatted}
                </td>
                <td colSpan={2} className="py-2.5 px-2 text-center border-r border-slate-800"></td>
                <td className="py-2.5 px-1.5 text-center border-r border-slate-800"></td>
                <td className="py-2.5 px-2 text-center border-r border-slate-800 text-amber-300">
                  {timeSheet.totalWorkingHours}
                </td>
                <td className="py-2.5 px-2 text-center border-r border-slate-800 text-amber-300">
                  {timeSheet.totalOt15}
                </td>
                <td className="py-2.5 px-2 text-center border-r border-slate-800 text-slate-400">
                  {timeSheet.totalOt30}
                </td>
                <td className="py-2.5 px-1.5 text-center border-r border-slate-800 text-slate-300">
                  {timeSheet.totalStandby}
                </td>
                <td className="py-2.5 px-1.5 text-center border-r border-slate-800 text-slate-300">
                  {timeSheet.totalEmergency}
                </td>
                <td className="py-2.5 px-1.5 text-center border-r border-slate-800 text-orange-300">
                  {timeSheet.totalLeave}
                </td>
                <td className="py-2.5 px-1.5 border-r border-slate-800"></td>
                <td className="py-2.5 px-3 border-r border-slate-800"></td>
                {canEdit && <td></td>}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Manual Edit Modal */}
      {isEditModalOpen && editingDayRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-2xl w-full p-5 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Edit3 className="w-5 h-5 text-teal-400" />
                  แก้ไข Time Sheet แบบ Manual - วันที่ {editingDayRow.dateStr}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  พนักงาน: {selectedEmployee.empNo} - {selectedEmployee.firstName} {selectedEmployee.lastName}
                </p>
              </div>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs font-sans">
              {/* Shift info */}
              <div className="grid grid-cols-2 gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Shift Code (รหัสกะ)</label>
                  <input
                    type="text"
                    value={editForm.shiftCode || ''}
                    onChange={e => setEditForm({ ...editForm, shiftCode: e.target.value.toUpperCase() })}
                    className="w-full bg-slate-900 text-white font-mono uppercase border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Shift In (เวลาเข้ากะ)</label>
                  <input
                    type="time"
                    value={editForm.shiftIn || ''}
                    onChange={e => setEditForm({ ...editForm, shiftIn: e.target.value })}
                    className="w-full bg-slate-900 text-white font-mono border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Real Time I */}
              <div className="grid grid-cols-4 gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Real In 1</label>
                  <input
                    type="time"
                    value={editForm.realIn1 || ''}
                    onChange={e => setEditForm({ ...editForm, realIn1: e.target.value })}
                    className="w-full bg-slate-900 text-white font-mono border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Real Out 1</label>
                  <input
                    type="time"
                    value={editForm.realOut1 || ''}
                    onChange={e => setEditForm({ ...editForm, realOut1: e.target.value })}
                    className="w-full bg-slate-900 text-white font-mono border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Diff I (ชั่วโมง:นาที)</label>
                  <input
                    type="text"
                    placeholder="08:50"
                    value={editForm.diff1 || ''}
                    onChange={e => setEditForm({ ...editForm, diff1: e.target.value })}
                    className="w-full bg-slate-900 text-emerald-300 font-mono border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Late (สาย)</label>
                  <input
                    type="text"
                    placeholder="00:00"
                    value={editForm.late || ''}
                    onChange={e => setEditForm({ ...editForm, late: e.target.value })}
                    className="w-full bg-slate-900 text-rose-300 font-mono border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Real Time II */}
              <div className="grid grid-cols-3 gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Real In 2</label>
                  <input
                    type="time"
                    value={editForm.realIn2 || ''}
                    onChange={e => setEditForm({ ...editForm, realIn2: e.target.value })}
                    className="w-full bg-slate-900 text-white font-mono border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Real Out 2</label>
                  <input
                    type="time"
                    value={editForm.realOut2 || ''}
                    onChange={e => setEditForm({ ...editForm, realOut2: e.target.value })}
                    className="w-full bg-slate-900 text-white font-mono border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Diff II</label>
                  <input
                    type="text"
                    value={editForm.diff2 || ''}
                    onChange={e => setEditForm({ ...editForm, diff2: e.target.value })}
                    className="w-full bg-slate-900 text-white font-mono border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Working Hours & OT */}
              <div className="grid grid-cols-3 gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div>
                  <label className="block font-medium text-amber-300 mb-1">OT 1.5 (ชั่วโมง)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={editForm.ot15 ?? 0}
                    onChange={e => {
                      const ot15 = Number(e.target.value);
                      const ot30 = Number(editForm.ot30) || 0;
                      setEditForm({ ...editForm, ot15, totalWorkingHours: ot15 + ot30 });
                    }}
                    className="w-full bg-slate-900 text-amber-300 font-mono border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-amber-300 mb-1">OT 3.0 (ชั่วโมง)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={editForm.ot30 ?? 0}
                    onChange={e => {
                      const ot30 = Number(e.target.value);
                      const ot15 = Number(editForm.ot15) || 0;
                      setEditForm({ ...editForm, ot30, totalWorkingHours: ot15 + ot30 });
                    }}
                    className="w-full bg-slate-900 text-amber-300 font-mono border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Total Working Hours</label>
                  <input
                    type="number"
                    step="0.5"
                    value={editForm.totalWorkingHours ?? 0}
                    onChange={e => setEditForm({ ...editForm, totalWorkingHours: Number(e.target.value) })}
                    className="w-full bg-slate-900 text-white font-mono border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Allowances & Leaves */}
              <div className="grid grid-cols-3 gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Stand by Allowance</label>
                  <input
                    type="number"
                    value={editForm.standbyAllowance ?? 0}
                    onChange={e => setEditForm({ ...editForm, standbyAllowance: Number(e.target.value) })}
                    className="w-full bg-slate-900 text-white font-mono border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Emergency Allowance</label>
                  <input
                    type="number"
                    value={editForm.emergencyAllowance ?? 0}
                    onChange={e => setEditForm({ ...editForm, emergencyAllowance: Number(e.target.value) })}
                    className="w-full bg-slate-900 text-white font-mono border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Code Leave (A, C, S, O...)</label>
                  <input
                    type="text"
                    value={editForm.codeLeave || ''}
                    onChange={e => setEditForm({ ...editForm, codeLeave: e.target.value.toUpperCase() })}
                    className="w-full bg-slate-900 text-orange-300 font-mono uppercase border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Remark */}
              <div>
                <label className="block font-medium text-slate-300 mb-1">Remark (หมายเหตุ / สาเหตุการทำ OT หรือลา)</label>
                <input
                  type="text"
                  placeholder="เช่น support for random Narcotics testing"
                  value={editForm.remark || ''}
                  onChange={e => setEditForm({ ...editForm, remark: e.target.value })}
                  className="w-full bg-slate-950 text-white border border-slate-700 rounded p-2 focus:border-teal-400 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition font-medium"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-siemens-petrol hover:bg-teal-700 text-white font-bold transition shadow-md flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  บันทึกการแก้ไข
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};