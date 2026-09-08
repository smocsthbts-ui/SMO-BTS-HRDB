import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  Department,
  Employee,
  ShiftCode,
  ShiftPlanEntry,
  TimeAttendancePunch,
  OTRecord,
  AllowanceRecord,
  DailyTimeSheetRow,
  Role
} from '../types';
import {
  INITIAL_USERS,
  INITIAL_DEPARTMENTS,
  INITIAL_EMPLOYEES,
  INITIAL_SHIFT_CODES,
  INITIAL_SHIFT_PLANS,
  INITIAL_ATTENDANCE,
  INITIAL_OT_RECORDS,
  INITIAL_ALLOWANCES
} from '../lib/mockData';

interface Toast {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

interface AppContextType {
  currentUser: User;
  setCurrentUser: (user: User) => void;
  users: User[];
  departments: Department[];
  employees: Employee[];
  shiftCodes: ShiftCode[];
  shiftPlans: ShiftPlanEntry[];
  attendanceRecords: TimeAttendancePunch[];
  otRecords: OTRecord[];
  allowances: AllowanceRecord[];
  manualOverrides: { [key: string]: { [day: number]: Partial<DailyTimeSheetRow> } };

  // Theme & Layout
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  isFullScreen: boolean;
  toggleFullScreen: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;

  // Global Filter
  selectedYear: number;
  setSelectedYear: (y: number) => void;
  selectedMonth: number;
  setSelectedMonth: (m: number) => void;
  selectedDept: string;
  setSelectedDept: (d: string) => void;

  // Actions
  addEmployee: (emp: Employee) => void;
  updateEmployee: (emp: Employee) => void;
  toggleEmployeeActive: (empNo: string) => void;
  addShiftCode: (code: ShiftCode) => void;
  updateShiftCode: (code: ShiftCode) => void;
  deleteShiftCode: (id: string) => void;
  importShiftCodes: (codes: ShiftCode[]) => void;
  importShiftPlan: (year: number, month: number, departmentCode: string, entries: ShiftPlanEntry[]) => void;
  updateSingleShiftPlan: (year: number, month: number, empNo: string, day: number, shiftCode: string) => void;
  importAttendancePunches: (punches: TimeAttendancePunch[]) => void;
  importOTRecords: (records: OTRecord[]) => void;
  confirmRetroactiveOT: (id: string, confirmed: boolean) => void;
  importAllowances: (records: AllowanceRecord[]) => void;
  setDailyOverride: (empNo: string, year: number, month: number, day: number, data: Partial<DailyTimeSheetRow>) => void;
  registerUser: (name: string, email: string, departmentCode: string) => { success: boolean; message: string };
  activateUser: (userId: string, isActive: boolean) => void;
  changeUserRole: (userId: string, role: Role) => void;
  resetToDefaultData: () => void;

  toast: Toast | null;
  showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('smo_theme') as 'dark' | 'light') || 'dark';
  });

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Filters
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonth, setSelectedMonth] = useState(5);
  const [selectedDept, setSelectedDept] = useState('GM');

  // Toast
  const [toast, setToast] = useState<Toast | null>(null);
  const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('smo_theme', next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error('Error attempting to enable fullscreen:', err);
      });
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  // State data with LocalStorage backing
  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('smo_users');
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });

  const [currentUser, setCurrentUser] = useState<User>(() => {
    const saved = localStorage.getItem('smo_current_user');
    return saved ? JSON.parse(saved) : users[0] || INITIAL_USERS[0];
  });

  const [departments] = useState<Department[]>(INITIAL_DEPARTMENTS);

  const [employees, setEmployees] = useState<Employee[]>(() => {
    const saved = localStorage.getItem('smo_employees');
    return saved ? JSON.parse(saved) : INITIAL_EMPLOYEES;
  });

  const [shiftCodes, setShiftCodes] = useState<ShiftCode[]>(() => {
    const saved = localStorage.getItem('smo_shift_codes');
    return saved ? JSON.parse(saved) : INITIAL_SHIFT_CODES;
  });

  const [shiftPlans, setShiftPlans] = useState<ShiftPlanEntry[]>(() => {
    const saved = localStorage.getItem('smo_shift_plans');
    return saved ? JSON.parse(saved) : INITIAL_SHIFT_PLANS;
  });

  const [attendanceRecords, setAttendanceRecords] = useState<TimeAttendancePunch[]>(() => {
    const saved = localStorage.getItem('smo_attendance');
    return saved ? JSON.parse(saved) : INITIAL_ATTENDANCE;
  });

  const [otRecords, setOtRecords] = useState<OTRecord[]>(() => {
    const saved = localStorage.getItem('smo_ot_records');
    return saved ? JSON.parse(saved) : INITIAL_OT_RECORDS;
  });

  const [allowances, setAllowances] = useState<AllowanceRecord[]>(() => {
    const saved = localStorage.getItem('smo_allowances');
    return saved ? JSON.parse(saved) : INITIAL_ALLOWANCES;
  });

  const [manualOverrides, setManualOverrides] = useState<{ [key: string]: { [day: number]: Partial<DailyTimeSheetRow> } }>(() => {
    const saved = localStorage.getItem('smo_manual_overrides');
    return saved ? JSON.parse(saved) : {};
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('smo_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('smo_current_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('smo_employees', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('smo_shift_codes', JSON.stringify(shiftCodes));
  }, [shiftCodes]);

  useEffect(() => {
    localStorage.setItem('smo_shift_plans', JSON.stringify(shiftPlans));
  }, [shiftPlans]);

  useEffect(() => {
    localStorage.setItem('smo_attendance', JSON.stringify(attendanceRecords));
  }, [attendanceRecords]);

  useEffect(() => {
    localStorage.setItem('smo_ot_records', JSON.stringify(otRecords));
  }, [otRecords]);

  useEffect(() => {
    localStorage.setItem('smo_allowances', JSON.stringify(allowances));
  }, [allowances]);

  useEffect(() => {
    localStorage.setItem('smo_manual_overrides', JSON.stringify(manualOverrides));
  }, [manualOverrides]);

  // Employee methods
  const addEmployee = (emp: Employee) => {
    setEmployees(prev => [...prev, emp]);
    showToast(Added employee  );
  };

  const updateEmployee = (emp: Employee) => {
    setEmployees(prev => prev.map(e => e.id === emp.id ? emp : e));
    showToast(Updated employee );
  };

  const toggleEmployeeActive = (empNo: string) => {
    setEmployees(prev => prev.map(e => e.empNo === empNo ? { ...e, isActive: !e.isActive } : e));
    showToast(Status updated for employee );
  };

  // Shift code methods
  const addShiftCode = (code: ShiftCode) => {
    setShiftCodes(prev => [...prev, code]);
    showToast(Added shift code  for );
  };

  const updateShiftCode = (code: ShiftCode) => {
    setShiftCodes(prev => prev.map(c => c.id === code.id ? code : c));
    showToast(Updated shift code );
  };

  const deleteShiftCode = (id: string) => {
    setShiftCodes(prev => prev.filter(c => c.id !== id));
    showToast(Deleted shift code);
  };

  const importShiftCodes = (newCodes: ShiftCode[]) => {
    setShiftCodes(prev => {
      const merged = [...prev];
      newCodes.forEach(nc => {
        const idx = merged.findIndex(m => m.departmentCode === nc.departmentCode && m.shiftCode === nc.shiftCode);
        if (idx >= 0) {
          merged[idx] = nc;
        } else {
          merged.push(nc);
        }
      });
      return merged;
    });
    showToast(Successfully imported  shift codes);
  };

  // Shift plan methods
  const importShiftPlan = (year: number, month: number, departmentCode: string, newEntries: ShiftPlanEntry[]) => {
    // Overwrite existing entries for this month & department
    setShiftPlans(prev => {
      const empNosInDept = new Set(newEntries.map(e => e.empNo));
      const filtered = prev.filter(p => !(p.year === year && p.month === month && empNosInDept.has(p.empNo)));
      return [...filtered, ...newEntries];
    });
    showToast(Successfully updated Shift Plan for  (/));
  };

  const updateSingleShiftPlan = (year: number, month: number, empNo: string, day: number, shiftCode: string) => {
    setShiftPlans(prev => {
      const existingIdx = prev.findIndex(p => p.year === year && p.month === month && p.empNo === empNo && p.day === day);
      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx] = { ...copy[existingIdx], shiftCode };
        return copy;
      } else {
        return [...prev, {
          id: sp-----,
          year,
          month,
          empNo,
          day,
          shiftCode
        }];
      }
    });
  };

  // Attendance methods
  const importAttendancePunches = (newPunches: TimeAttendancePunch[]) => {
    setAttendanceRecords(prev => [...prev, ...newPunches]);
    showToast(Imported  time attendance records);
  };

  // OT methods
  const importOTRecords = (newRecords: OTRecord[]) => {
    setOtRecords(prev => [...prev, ...newRecords]);
    showToast(Imported  approved OT records);
  };

  const confirmRetroactiveOT = (id: string, confirmed: boolean) => {
    setOtRecords(prev => prev.map(ot => ot.id === id ? { ...ot, isConfirmedByAdmin: confirmed } : ot));
    showToast(Updated retroactive OT status);
  };

  // Allowances methods
  const importAllowances = (newRecords: AllowanceRecord[]) => {
    setAllowances(prev => [...prev, ...newRecords]);
    showToast(Imported  allowance records);
  };

  // Time sheet overrides
  const setDailyOverride = (empNo: string, year: number, month: number, day: number, data: Partial<DailyTimeSheetRow>) => {
    const key = ${empNo}__;
    setManualOverrides(prev => {
      const currentEmp = prev[key] || {};
      return {
        ...prev,
        [key]: {
          ...currentEmp,
          [day]: { ...currentEmp[day], ...data, isManualEdited: true }
        }
      };
    });
    showToast(Saved manual override for day );
  };

  // User registration & management
  const registerUser = (name: string, email: string, departmentCode: string) => {
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: 'This email is already registered.' };
    }

    // First user is automatically Admin and Active
    const isFirstUser = users.length === 0;
    const newUser: User = {
      id: usr-,
      name,
      email,
      role: isFirstUser ? 'admin' : 'user',
      departmentCode,
      isActive: isFirstUser, // Must be activated by admin if not first user
      createdAt: new Date().toISOString().split('T')[0]
    };

    setUsers(prev => [...prev, newUser]);
    return {
      success: true,
      message: isFirstUser
        ? 'First user registered as Admin automatically and activated.'
        : 'Registration submitted. Please wait for an Admin to activate your account.'
    };
  };

  const activateUser = (userId: string, isActive: boolean) => {
    setUsers(prev => prev.map(u => u.id === userId ? { ...u, isActive } : u));
    showToast(User status updated to );
  };

  const changeUserRole = (userId: string, role: Role) => {
    setUsers(prev => prev.map(u => u.id === userId ? { ...u, role } : u));
    showToast(User role changed to );
  };

  const resetToDefaultData = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        users,
        departments,
        employees,
        shiftCodes,
        shiftPlans,
        attendanceRecords,
        otRecords,
        allowances,
        manualOverrides,
        theme,
        toggleTheme,
        isFullScreen,
        toggleFullScreen,
        activeTab,
        setActiveTab,
        selectedYear,
        setSelectedYear,
        selectedMonth,
        setSelectedMonth,
        selectedDept,
        setSelectedDept,
        addEmployee,
        updateEmployee,
        toggleEmployeeActive,
        addShiftCode,
        updateShiftCode,
        deleteShiftCode,
        importShiftCodes,
        importShiftPlan,
        updateSingleShiftPlan,
        importAttendancePunches,
        importOTRecords,
        confirmRetroactiveOT,
        importAllowances,
        setDailyOverride,
        registerUser,
        activateUser,
        changeUserRole,
        resetToDefaultData,
        toast,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
