import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import dayjs from 'dayjs';
import {
  Calendar,
  Building2,
  Search,
  Lock,
  Edit3,
  Users,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  Download
} from 'lucide-react';
import { downloadShiftPlanTemplate } from '../lib/excelTemplates';

export const DashboardPage: React.FC = () => {
  const {
    currentUser,
    departments,
    employees,
    shiftCodes,
    shiftPlans,
    updateSingleShiftPlan,
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
    selectedDept,
    setSelectedDept,
    setActiveTab,
    showToast
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [editingCell, setEditingCell] = useState<{ empNo: string; day: number } | null>(null);

  const daysInMonth = dayjs(`${selectedYear}-${selectedMonth}-01`).daysInMonth();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Filter employees
  const filteredEmployees = employees.filter(emp => {
    if (selectedDept !== 'ALL' && emp.departmentCode !== selectedDept) return false;
    if (!emp.isActive) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(q);
      const matchEmpNo = emp.empNo.toLowerCase().includes(q);
      const matchGid = emp.gid.toLowerCase().includes(q);
      return matchName || matchEmpNo || matchGid;
    }
    return true;
  });

  // Check if user can edit this employee's shift plan
  const canEditEmployee = (empDept: string) => {
    if (currentUser.role === 'admin') return true;
    return currentUser.departmentCode === empDept;
  };

  // Get shift code badge colors
  const getShiftBadgeStyle = (code: string) => {
    const c = (code || '').toUpperCase();
    if (!c) return 'bg-slate-800/40 text-slate-500 border-dashed border-slate-700';
    if (c === 'D' || c === 'D2') return 'bg-emerald-950/80 text-emerald-300 border-emerald-600/60 font-semibold';
    if (c === 'A') return 'bg-sky-950/80 text-sky-300 border-sky-600/60 font-semibold';
    if (c === 'E') return 'bg-amber-950/80 text-amber-300 border-amber-600/60 font-semibold';
    if (c === 'N') return 'bg-purple-950/80 text-purple-300 border-purple-600/60 font-semibold';
    if (c === 'H') return 'bg-rose-950/90 text-rose-300 border-rose-600/70 font-bold';
    if (c === 'AL') return 'bg-orange-950/80 text-orange-300 border-orange-600/60 font-bold';
    if (c === 'W') return 'bg-slate-800 text-slate-400 border-slate-600';
    return 'bg-teal-950 text-teal-300 border-teal-600 font-medium';
  };

  // Available shift codes for selection
  const availableCodes = Array.from(new Set([
    'D', 'A', 'E', 'N', 'H', 'AL', 'W', 'D2', 'T',
    ...shiftCodes.filter(sc => selectedDept === 'ALL' || sc.departmentCode === selectedDept).map(s => s.shiftCode)
  ]));

  return (
    <div className="space-y-4">
      {/* Top Banner & Quick Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-md">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-siemens-teal-light" />
              ตารางการทำงานพนักงาน (Monthly Shift Schedule)
            </h1>
            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-siemens-petrol/60 text-teal-200 border border-teal-500/40">
              {selectedYear} / {String(selectedMonth).padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            แสดงตารางเข้ากะรายวันประจำเดือน | ระดับ User สามารถแก้ไขได้เฉพาะพนักงานแผนก <span className="text-teal-400 font-semibold">{currentUser.departmentCode}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              const targetDept = selectedDept === 'ALL' ? currentUser.departmentCode : selectedDept;
              downloadShiftPlanTemplate(targetDept, employees, selectedYear, selectedMonth);
              showToast(`ดาวน์โหลด Template สำหรับแผนก ${targetDept} เรียบร้อยแล้ว`);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-teal-400" />
            โหลด Template ({selectedDept === 'ALL' ? currentUser.departmentCode : selectedDept})
          </button>

          <button
            onClick={() => setActiveTab('shift-plan-import')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-siemens-petrol hover:bg-teal-700 text-white text-xs font-medium transition shadow-sm"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-white" />
            นำเข้า Shift Plan (Excel)
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-slate-900/80 border border-slate-800 p-3 rounded-lg text-xs">
        {/* Department Filter */}
        <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-md border border-slate-800">
          <Building2 className="w-4 h-4 text-slate-400" />
          <span className="text-slate-400 shrink-0">แผนก:</span>
          <select
            value={selectedDept}
            onChange={e => setSelectedDept(e.target.value)}
            className="w-full bg-transparent text-white font-medium focus:outline-none cursor-pointer [&>option]:bg-slate-800"
          >
            <option value="ALL">-- ทุกแผนก (All) --</option>
            {departments.map(d => (
              <option key={d.code} value={d.code}>{d.code} - {d.name}</option>
            ))}
          </select>
        </div>

        {/* Month Selector */}
        <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-md border border-slate-800">
          <Calendar className="w-4 h-4 text-slate-400" />
          <span className="text-slate-400 shrink-0">เดือน:</span>
          <select
            value={selectedMonth}
            onChange={e => setSelectedMonth(Number(e.target.value))}
            className="w-full bg-transparent text-white font-medium focus:outline-none cursor-pointer [&>option]:bg-slate-800"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {dayjs(`2026-${i + 1}-01`).format('MMMM')} ({i + 1})
              </option>
            ))}
          </select>
        </div>

        {/* Year Selector */}
        <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-md border border-slate-800">
          <span className="text-slate-400 shrink-0">ปี พ.ศ./ค.ศ.:</span>
          <select
            value={selectedYear}
            onChange={e => setSelectedYear(Number(e.target.value))}
            className="w-full bg-transparent text-white font-medium focus:outline-none cursor-pointer [&>option]:bg-slate-800"
          >
            <option value={2025}>2025 (2568)</option>
            <option value={2026}>2026 (2569)</option>
            <option value={2027}>2027 (2570)</option>
          </select>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-md border border-slate-800">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="ค้นหาชื่อ, GID, หรือ Emp No..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Legend Bar */}
      <div className="flex flex-wrap items-center gap-2 text-[11px] bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80 text-slate-300">
        <span className="font-bold text-slate-400 mr-1">สัญลักษณ์กะ:</span>
        <span className="px-2 py-0.5 rounded border border-emerald-600/60 bg-emerald-950/80 text-emerald-300 font-semibold">D : กะเช้าปกติ (08:00-17:00)</span>
        <span className="px-2 py-0.5 rounded border border-sky-600/60 bg-sky-950/80 text-sky-300 font-semibold">A : กะเช้า (06:00-14:30)</span>
        <span className="px-2 py-0.5 rounded border border-amber-600/60 bg-amber-950/80 text-amber-300 font-semibold">E : กะบ่าย (14:00-22:30)</span>
        <span className="px-2 py-0.5 rounded border border-purple-600/60 bg-purple-950/80 text-purple-300 font-semibold">N : กะดึก (22:00-06:30)</span>
        <span className="px-2 py-0.5 rounded border border-rose-600/70 bg-rose-950/90 text-rose-300 font-bold">H : วันหยุดนักขัตฤกษ์</span>
        <span className="px-2 py-0.5 rounded border border-orange-600/60 bg-orange-950/80 text-orange-300 font-bold">AL : ลาพักผ่อน (Annual Leave)</span>
        <span className="px-2 py-0.5 rounded border border-slate-600 bg-slate-800 text-slate-400">W : วันหยุดประจำสัปดาห์</span>
      </div>

      {/* Shift Plan Matrix Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto max-h-[72vh]">
          <table className="w-full text-left border-collapse text-xs select-none">
            <thead className="bg-slate-950 text-slate-300 sticky top-0 z-20 shadow-sm">
              <tr className="border-b border-slate-800 text-[11px]">
                <th className="py-2.5 px-3 font-semibold sticky left-0 bg-slate-950 z-30 min-w-[70px] border-r border-slate-800">
                  Emp No.
                </th>
                <th className="py-2.5 px-3 font-semibold sticky left-[70px] bg-slate-950 z-30 min-w-[95px] border-r border-slate-800">
                  GID
                </th>
                <th className="py-2.5 px-3 font-semibold sticky left-[165px] bg-slate-950 z-30 min-w-[150px] border-r border-slate-800">
                  ชื่อ - นามสกุล
                </th>
                <th className="py-2.5 px-2 font-semibold sticky left-[315px] bg-slate-950 z-30 min-w-[65px] text-center border-r border-slate-800">
                  แผนก
                </th>

                {/* Day 1 to 31 */}
                {daysArray.map(day => {
                  const dateObj = dayjs(`${selectedYear}-${selectedMonth}-${day}`);
                  const isSun = dateObj.day() === 0;
                  const isSat = dateObj.day() === 6;
                  const isWknd = isSun || isSat;
                  return (
                    <th
                      key={day}
                      className={`py-2 px-1 text-center min-w-[34px] border-r border-slate-800/80 ${
                        isWknd ? 'bg-slate-800/70 text-amber-300 font-bold' : ''
                      }`}
                    >
                      <div className="text-[10px] leading-tight text-slate-400">{dateObj.format('dd')}</div>
                      <div className="text-xs font-bold">{day}</div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/60 font-mono">
              {filteredEmployees.length === 0 ? (
                <tr>
                  <td colSpan={4 + daysInMonth} className="text-center py-12 text-slate-500 font-sans">
                    <AlertCircle className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                    ไม่พบข้อมูลพนักงานที่ตรงกับเงื่อนไขการค้นหา
                  </td>
                </tr>
              ) : (
                filteredEmployees.map(emp => {
                  const isEditable = canEditEmployee(emp.departmentCode);

                  return (
                    <tr key={emp.empNo} className="hover:bg-slate-800/50 transition-colors group">
                      {/* Fixed Columns */}
                      <td className="py-1.5 px-3 font-bold text-teal-300 sticky left-0 bg-slate-900 group-hover:bg-slate-800 z-10 border-r border-slate-800/80">
                        {emp.empNo}
                      </td>
                      <td className="py-1.5 px-3 text-slate-300 sticky left-[70px] bg-slate-900 group-hover:bg-slate-800 z-10 border-r border-slate-800/80">
                        {emp.gid}
                      </td>
                      <td className="py-1.5 px-3 text-slate-200 font-sans truncate sticky left-[165px] bg-slate-900 group-hover:bg-slate-800 z-10 border-r border-slate-800/80 flex items-center justify-between">
                        <span className="truncate font-medium">{emp.firstName} {emp.lastName}</span>
                        {!isEditable && (
                          <Lock className="w-3 h-3 text-slate-500 shrink-0 ml-1" title="View-only: เฉพาะพนักงานในสังกัดของท่าน" />
                        )}
                      </td>
                      <td className="py-1.5 px-2 text-center text-slate-400 sticky left-[315px] bg-slate-900 group-hover:bg-slate-800 z-10 border-r border-slate-800/80 font-sans">
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-800 border border-slate-700 font-medium">
                          {emp.departmentCode}
                        </span>
                      </td>

                      {/* Days 1 to 31 */}
                      {daysArray.map(day => {
                        const dateObj = dayjs(`${selectedYear}-${selectedMonth}-${day}`);
                        const isWknd = dateObj.day() === 0 || dateObj.day() === 6;

                        // Lookup shift code
                        const plan = shiftPlans.find(
                          sp => sp.empNo === emp.empNo && sp.year === selectedYear && sp.month === selectedMonth && sp.day === day
                        );
                        const code = plan ? plan.shiftCode : '';
                        const isEditingThis = editingCell?.empNo === emp.empNo && editingCell?.day === day;

                        return (
                          <td
                            key={day}
                            className={`p-0.5 text-center border-r border-slate-800/60 transition-colors ${
                              isWknd ? 'bg-slate-950/40' : ''
                            } ${isEditable ? 'cursor-pointer hover:bg-teal-900/30' : 'cursor-default'}`}
                            onClick={() => {
                              if (isEditable) {
                                setEditingCell({ empNo: emp.empNo, day });
                              } else {
                                showToast(`ท่านไม่มีสิทธิ์แก้ไขพนักงานแผนก ${emp.departmentCode} (View-only)`, 'warning');
                              }
                            }}
                          >
                            {isEditingThis ? (
                              <select
                                autoFocus
                                value={code}
                                onBlur={() => setEditingCell(null)}
                                onChange={e => {
                                  updateSingleShiftPlan(selectedYear, selectedMonth, emp.empNo, day, e.target.value);
                                  setEditingCell(null);
                                }}
                                className="w-full h-7 text-xs bg-siemens-petrol text-white rounded font-bold border border-teal-400 text-center focus:outline-none"
                              >
                                <option value="">-- ว่าง --</option>
                                {availableCodes.map(c => (
                                  <option key={c} value={c}>{c}</option>
                                ))}
                              </select>
                            ) : (
                              <div
                                className={`w-full h-7 flex items-center justify-center rounded border text-[11px] transition-all ${getShiftBadgeStyle(
                                  code
                                )}`}
                                title={
                                  code
                                    ? `กะ ${code}${isEditable ? ' (คลิกเพื่อแก้ไข)' : ''}`
                                    : isEditable
                                    ? 'คลิกเพื่อกำหนดกะ'
                                    : 'ไม่มีกะ'
                                }
                              >
                                {code || '-'}
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer Stats */}
        <div className="bg-slate-950 p-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span>พนักงานที่แสดง: <strong className="text-white">{filteredEmployees.length}</strong> คน</span>
            <span>|</span>
            <span>สถานะสิทธิ์: {currentUser.role === 'admin' ? (
              <span className="text-amber-400 font-bold">Admin (แก้ไขได้ทุกแผนก)</span>
            ) : (
              <span className="text-teal-400 font-bold">User (แก้ไขได้เฉพาะแผนก {currentUser.departmentCode})</span>
            )}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-slate-500">* คลิกที่ช่องวันที่เพื่อเปลี่ยนกะการทำงานทันที</span>
          </div>
        </div>
      </div>
    </div>
  );
};