export type Role = 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  departmentCode: string;
  isActive: boolean;
  createdAt: string;
}

export interface Department {
  id: string;
  code: string;
  name: string;
  costCenter: string;
  division: string;
}

export interface Employee {
  id: string;
  empNo: string; // e.g. '0950'
  gid: string; // e.g. 'Z00430UZ'
  firstName: string;
  lastName: string;
  departmentCode: string;
  division: string;
  functionTitle: string;
  costCenter: string;
  isShiftWorker: boolean;
  isActive: boolean;
}

export interface ShiftCode {
  id: string;
  departmentCode: string;
  shiftCode: string; // e.g. 'D', 'A', 'E', 'N', 'H'
  startTime: string; // '08:00'
  endTime: string; // '17:00'
  workHours: number; // 8.0
  remark?: string;
}

export interface ShiftPlanEntry {
  id: string;
  year: number;
  month: number; // 1-12
  empNo: string;
  gid?: string;
  day: number; // 1-31
  shiftCode: string;
}

export interface TimeAttendancePunch {
  id: string;
  empNo: string;
  punchType: 'I' | 'O';
  punchDate: string; // 'YYYY-MM-DD'
  punchTime: string; // 'HH:mm'
  terminalId: string;
  rawLine?: string;
}

export interface OTRecord {
  id: string;
  gid: string;
  empNo: string;
  department: string;
  name: string;
  totalHours: number;
  reason: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  requestDate: string;
  otRecordDate: string; // 'YYYY-MM-DD'
  beginDate?: string;
  beginTime?: string;
  endDate?: string;
  endTime?: string;
  isRetroactive?: boolean;
  isConfirmedByAdmin?: boolean;
}

export interface AllowanceRecord {
  id: string;
  year: number;
  month: number;
  empNo: string;
  gid: string;
  type: 'standby' | 'emergency' | 'shift_allowance';
  amount: number;
  date?: string;
  remark?: string;
}

export interface DailyTimeSheetRow {
  day: number;
  dateStr: string; // '01-05-26 Fri'
  isWeekend: boolean;
  shiftCode: string;
  shiftIn: string;
  realIn1: string;
  realOut1: string;
  diff1: string; // '08:50'
  late: string; // '00:00'
  realIn2: string;
  realOut2: string;
  diff2: string;
  totalWorkingHours: number;
  ot15: number;
  ot30: number;
  standbyAllowance: number;
  emergencyAllowance: number;
  codeLeave: string;
  code: string;
  remark: string;
  isManualEdited?: boolean;
}

export interface MonthlyTimeSheet {
  employee: Employee;
  year: number;
  month: number;
  rows: DailyTimeSheetRow[];
  totalShiftsWorked: number;
  totalDiff1Formatted: string;
  totalLateFormatted: string;
  totalWorkingHours: number;
  totalOt15: number;
  totalOt30: number;
  totalStandby: number;
  totalEmergency: number;
  totalLeave: number;
}
