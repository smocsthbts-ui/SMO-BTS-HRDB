import * as XLSX from 'xlsx';
import { Employee, ShiftCode } from '../types';

/**
 * Downloads a department-specific Shift Plan template pre-filled with active employees
 */
export function downloadShiftPlanTemplate(departmentCode: string, employees: Employee[], year: number, month: number) {
  const deptEmployees = employees.filter(e => e.departmentCode === departmentCode && e.isActive);

  const headers = ['ID', 'Name'];
  for (let d = 1; d <= 31; d++) {
    headers.push(String(d));
  }

  const data: any[][] = [headers];

  deptEmployees.forEach(emp => {
    const row: any[] = [emp.empNo, ${emp.firstName} ];
    for (let d = 1; d <= 31; d++) {
      row.push(''); // blank shift cell to be filled
    }
    data.push(row);
  });

  const ws = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, ${departmentCode}_ShiftPlan);

  XLSX.writeFile(wb, ShiftPlan_Template__-.xlsx);
}

/**
 * Downloads standard Shift Code template
 */
export function downloadShiftCodeTemplate() {
  const headers = ['Section', 'WK_shift', 'WK_In', 'WK_Out', 'Remark'];
  const sampleRows = [
    headers,
    ['GM', 'D', '08:00', '17:00', 'Day Shift (8 Hours)'],
    ['GM', 'A', '06:00', '14:30', 'Morning Shift'],
    ['GM', 'E', '14:00', '22:30', 'Evening Shift'],
    ['GM', 'N', '22:00', '06:30', 'Night Shift'],
    ['GM', 'AL', '', '', 'Annual Leave'],
    ['GM', 'H', '', '', 'Public Holiday'],
    ['GM', 'W', '', '', 'Weekly Off / Weekend']
  ];

  const ws = XLSX.utils.aoa_to_sheet(sampleRows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'ShiftCodes');
  XLSX.writeFile(wb, 'ShiftCode_Template.xlsx');
}

/**
 * Downloads Employee Master template
 */
export function downloadEmployeeTemplate() {
  const headers = ['EmpNo', 'GID', 'FirstName', 'LastName', 'Department', 'Division', 'Function', 'CostCenter', 'IsShiftWorker (Yes/No)', 'IsActive (Yes/No)'];
  const sampleRows = [
    headers,
    ['0950', 'Z00430UZ', 'Napassawan', 'Ngamsomsong', 'GM', 'MO CS BTS', 'Safety Professional', 'C93056', 'No', 'Yes'],
    ['0406', 'Z00406UZ', 'Nontapun', 'Morlek', 'GM', 'MO CS BTS', 'Specialist', 'C93056', 'Yes', 'Yes'],
    ['1412', 'Z004X59B', 'Aisarawat', 'Channongyao', 'BES/PSY', 'MO CS BTS', 'Technician', 'C93051', 'Yes', 'Yes']
  ];

  const ws = XLSX.utils.aoa_to_sheet(sampleRows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Employees');
  XLSX.writeFile(wb, 'Employee_Master_Template.xlsx');
}

/**
 * Downloads Allowances template
 */
export function downloadAllowanceTemplate() {
  const headers = ['Year', 'Month', 'EmpNo', 'GID', 'AllowanceType (standby/emergency/shift_allowance)', 'Amount', 'Date (YYYY-MM-DD)', 'Remark'];
  const sampleRows = [
    headers,
    [2026, 5, '0406', 'Z00406UZ', 'shift_allowance', 1500, '2026-05-31', 'Night Shift monthly allowance'],
    [2026, 5, '0469', 'Z00469UZ', 'emergency', 800, '2026-05-15', 'Emergency call-in support'],
    [2026, 5, '0950', 'Z00430UZ', 'standby', 500, '2026-05-20', 'Standby for safety inspection']
  ];

  const ws = XLSX.utils.aoa_to_sheet(sampleRows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Allowances');
  XLSX.writeFile(wb, 'Allowances_Template.xlsx');
}

/**
 * Exports Payroll CSV
 */
export function exportPayrollCSV(rows: any[], year: number, month: number) {
  const headers = ['EmpNo', 'GID', 'FirstName', 'LastName', 'Department', 'CostCenter', 'TotalWorkingHours', 'OT_1.5_Hours', 'OT_3.0_Hours', 'StandbyAllowance', 'EmergencyAllowance', 'ShiftAllowance', 'Remark'];
  
  const csvLines = [headers.join(',')];
  rows.forEach(r => {
    const line = [
      "",
      "",
      "",
      "",
      "",
      "",
      r.totalWorkingHours || 0,
      r.ot15 || 0,
      r.ot30 || 0,
      r.standby || 0,
      r.emergency || 0,
      r.shiftAllowance || 0,
      ""
    ];
    csvLines.push(line.join(','));
  });

  const blob = new Blob([csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', Payroll_Export__.csv);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
