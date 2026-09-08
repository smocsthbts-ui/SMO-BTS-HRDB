import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import {
  FileBarChart,
  Download,
  Calendar,
  Building2,
  Lock,
  Search,
  CheckCircle2
} from 'lucide-react';
import { computeMonthlyTimeSheet } from '../lib/attendanceEngine';
import { exportPayrollCSV } from '../lib/excelTemplates';

export const ExportCSVPage: React.FC = () => {
  const {
    currentUser,
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
    showToast
  } = useApp();

  const [filterDept, setFilterDept] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Access check: Admin only
  if (currentUser.role !== 'admin') {
    return (
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl text-center text-slate-400 space-y-3">
        <Lock className="w-12 h-12 mx-auto text-amber-500" />
        <h2 className="text-lg font-bold text-white">เฉพาะผู้ดูแลระบบ (Admin Only)</h2>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          หน้า Export CSV ข้อมูลส่ง Payroll ถูกจำกัดสิทธิ์เฉพาะระดับ Admin เท่านั้นเพื่อความปลอดภัยของข้อมูลทางการเงิน
        </p>
      </div>
    );
  }

  // Compute payroll summary rows
  const payrollRows = useMemo(() => {
    return employees
      .filter(emp => emp.isActive && (filterDept === 'ALL' || emp.departmentCode === filterDept))
      .map(emp => {
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

        // Get allowances
        const empAllowances = allowances.filter(a => a.empNo === emp.empNo && a.year === selectedYear && a.month === selectedMonth);
        const shiftAllowance = empAllowances.filter(a => a.type === 'shift_allowance').reduce((acc, c) => acc + c.amount, 0);
        const emergency = empAllowances.filter(a => a.type === 'emergency').reduce((acc, c) => acc + c.amount, 0);
        const standby = empAllowances.filter(a => a.type === 'standby').reduce((acc, c) => acc + c.amount, 0);

        return {
          empNo: emp.empNo,
          gid: emp.gid,
          firstName: emp.firstName,
          lastName: emp.lastName,
          department: emp.departmentCode,
          costCenter: emp.costCenter,
          totalWorkingHours: ts.totalWorkingHours,
          ot15: ts.totalOt15,
          ot30: ts.totalOt30,
          standby,
          emergency,
          shiftAllowance,
          remark: `Month ${selectedMonth}/${selectedYear}`
        };
      });
  }, [
    employees,
    filterDept,
    selectedYear,
    selectedMonth,
    shiftPlans,
    shiftCodes,
    attendanceRecords,
    otRecords,
    allowances,
    manualOverrides
  ]);

  const filteredPayroll = payrollRows.filter(r => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = `${r.firstName} ${r.lastName}`.toLowerCase().includes(q);
      const matchEmpNo = r.empNo.toLowerCase().includes(q);
      const matchGid = r.gid.toLowerCase().includes(q);
      return matchName || matchEmpNo || matchGid;
    }
    return true;
  });

  const handleDownloadCSV = () => {
    exportPayrollCSV(payrollRows, selectedYear, selectedMonth);
    showToast(`ดาวน์โหลดไฟล์ Payroll CSV ประจำงวด ${selectedMonth}/${selectedYear} สำเร็จ`);
  };

  const totalOt15Sum = payrollRows.reduce((a, b) => a + b.ot15, 0);
  const totalOt30Sum = payrollRows.reduce((a, b) => a + b.ot30, 0);
  const totalEmergencySum = payrollRows.reduce((a, b) => a + b.emergency, 0);
  const totalShiftAllowanceSum = payrollRows.reduce((a, b) => a + b.shiftAllowance, 0);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-md">
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
            <FileBarChart className="w-5 h-5 text-siemens-teal-light" />
            Export CSV ข้อมูลส่ง Payroll (Finance & Payroll Export)
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            สรุปยอดชั่วโมง OT 1.5 เท่า, 3.0 เท่า และเงินได้เสริมพิเศษ (Team Emergency, Shift Allowance, Standby) สำหรับส่งฝ่ายการเงิน
          </p>
        </div>

        <button
          onClick={handleDownloadCSV}
          className="flex items-center gap-2 px-5 py-2 rounded-lg bg-siemens-petrol hover:bg-teal-700 text-white text-xs font-bold transition shadow-md"
        >
          <Download className="w-4 h-4" />
          Download Payroll (.csv)
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">รวม OT 1.5 เท่า:</span>
          <div className="text-xl font-bold text-amber-300 mt-1 font-mono">
            {totalOt15Sum} <span className="text-xs font-normal text-slate-400">ชั่วโมง</span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">รวม OT 3.0 เท่า:</span>
          <div className="text-xl font-bold text-amber-300 mt-1 font-mono">
            {totalOt30Sum} <span className="text-xs font-normal text-slate-400">ชั่วโมง</span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">รวม Team Emergency:</span>
          <div className="text-xl font-bold text-rose-300 mt-1 font-mono">
            ฿{totalEmergencySum.toLocaleString()}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
          <span className="text-slate-400">รวม Shift Allowance:</span>
          <div className="text-xl font-bold text-teal-300 mt-1 font-mono">
            ฿{totalShiftAllowanceSum.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-900/80 border border-slate-800 p-3 rounded-lg text-xs">
        <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-md border border-slate-800">
          <Building2 className="w-4 h-4 text-slate-400" />
          <span className="text-slate-400 shrink-0">แผนก:</span>
          <select
            value={filterDept}
            onChange={e => setFilterDept(e.target.value)}
            className="w-full bg-transparent text-white font-medium focus:outline-none cursor-pointer [&>option]:bg-slate-800"
          >
            <option value="ALL">-- ทุกแผนก (All) --</option>
            {departments.map(d => (
              <option key={d.code} value={d.code}>{d.code} - {d.name}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-md border border-slate-800">
          <Calendar className="w-4 h-4 text-slate-400" />
          <span className="text-slate-400 shrink-0">งวดเดือน/ปี:</span>
          <select
            value={selectedMonth}
            onChange={e => setSelectedMonth(Number(e.target.value))}
            className="bg-transparent text-white font-medium focus:outline-none cursor-pointer [&>option]:bg-slate-800 mr-2"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>เดือน {i + 1}</option>
            ))}
          </select>
          <select
            value={selectedYear}
            onChange={e => setSelectedYear(Number(e.target.value))}
            className="bg-transparent text-white font-medium focus:outline-none cursor-pointer [&>option]:bg-slate-800"
          >
            <option value={2025}>2025</option>
            <option value={2026}>2026</option>
            <option value={2027}>2027</option>
          </select>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-md border border-slate-800">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="ค้นหาชื่อ หรือ Emp No..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Preview Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto max-h-[60vh]">
          <table className="w-full text-left border-collapse text-xs select-none">
            <thead className="bg-slate-950 text-slate-300 sticky top-0 z-10 font-sans">
              <tr className="border-b border-slate-800 text-[11px]">
                <th className="py-2.5 px-3 font-semibold">Emp No.</th>
                <th className="py-2.5 px-3 font-semibold">GID</th>
                <th className="py-2.5 px-3 font-semibold">ชื่อพนักงาน</th>
                <th className="py-2.5 px-3 font-semibold">แผนก</th>
                <th className="py-2.5 px-3 font-semibold">Cost Center</th>
                <th className="py-2.5 px-3 font-semibold text-center">OT 1.5 (ชม.)</th>
                <th className="py-2.5 px-3 font-semibold text-center">OT 3.0 (ชม.)</th>
                <th className="py-2.5 px-3 font-semibold text-right">Standby (฿)</th>
                <th className="py-2.5 px-3 font-semibold text-right">Team Emergency (฿)</th>
                <th className="py-2.5 px-3 font-semibold text-right">Shift Allowance (฿)</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/60 font-mono">
              {filteredPayroll.length === 0 ? (
                <tr>
                  <td colSpan={10} className="text-center py-10 text-slate-500 font-sans">
                    ไม่พบข้อมูลพนักงาน
                  </td>
                </tr>
              ) : (
                filteredPayroll.map(r => (
                  <tr key={r.empNo} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-2 px-3 font-bold text-teal-300">{r.empNo}</td>
                    <td className="py-2 px-3 text-slate-400">{r.gid}</td>
                    <td className="py-2 px-3 font-sans text-white">{r.firstName} {r.lastName}</td>
                    <td className="py-2 px-3 font-sans text-slate-400">{r.department}</td>
                    <td className="py-2 px-3 text-slate-400">{r.costCenter}</td>
                    <td className="py-2 px-3 text-center font-bold text-amber-300">{r.ot15}</td>
                    <td className="py-2 px-3 text-center font-bold text-slate-400">{r.ot30}</td>
                    <td className="py-2 px-3 text-right text-slate-300">฿{r.standby.toLocaleString()}</td>
                    <td className="py-2 px-3 text-right text-rose-300 font-bold">฿{r.emergency.toLocaleString()}</td>
                    <td className="py-2 px-3 text-right text-teal-300 font-bold">฿{r.shiftAllowance.toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-950 p-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>พนักงานรวม: <strong className="text-white">{filteredPayroll.length}</strong> คน</span>
          <span className="text-slate-500">* รูปแบบไฟล์ CSV สามารถนำไปเชื่อมต่อโปรแกรมประมวลผลเงินเดือนได้ทันที</span>
        </div>
      </div>
    </div>
  );
};