import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  CalendarDays,
  CalendarPlus,
  Clock,
  Briefcase,
  FileSpreadsheet,
  Coins,
  FileText,
  FileDown,
  FileBarChart,
  Users,
  Settings,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, currentUser, otRecords } = useApp();

  const pendingRetroOt = otRecords.filter(o => o.isRetroactive && !o.isConfirmedByAdmin).length;

  const menuItems = [
    {
      id: 'dashboard',
      label: 'ตารางการทำงาน (Shift Plan)',
      sub: 'ภาพรวมรายเดือนทุกแผนก',
      icon: CalendarDays,
      roles: ['admin', 'user']
    },
    {
      id: 'shift-plan-import',
      label: 'นำเข้า Shift Plan',
      sub: 'อัปโหลดตารางกะ & Template',
      icon: CalendarPlus,
      roles: ['admin', 'user']
    },
    {
      id: 'shift-codes',
      label: 'Shift Code (กะทำงาน)',
      sub: 'จัดการช่วงเวลาเข้า-ออกกะ',
      icon: Clock,
      roles: ['admin', 'user']
    },
    {
      id: 'ot-import',
      label: 'นำเข้า OT (Power BI)',
      sub: 'อนุมัติโอที & ตรวจสอบย้อนหลัง',
      icon: Briefcase,
      badge: pendingRetroOt > 0 ? ${pendingRetroOt} รอตรวจ : undefined,
      roles: ['admin']
    },
    {
      id: 'attendance-import',
      label: 'นำเข้าเวลาสแกนบัตร',
      sub: 'Time Attendance .txt',
      icon: FileSpreadsheet,
      roles: ['admin']
    },
    {
      id: 'allowances',
      label: 'เงินได้พิเศษ (Allowances)',
      sub: 'Team Emergency / ค่ากะ',
      icon: Coins,
      roles: ['admin']
    },
    {
      id: 'timesheet',
      label: 'Time Sheet พนักงาน',
      sub: 'ตรวจสอบ & ปรับปรุงรายวัน',
      icon: FileText,
      roles: ['admin', 'user']
    },
    {
      id: 'export-pdf',
      label: 'Export Time Sheet PDF',
      sub: 'แบบฟอร์มมาตรฐาน Siemens',
      icon: FileDown,
      roles: ['admin', 'user']
    },
    {
      id: 'export-csv',
      label: 'Export Payroll CSV',
      sub: 'ส่งข้อมูลสรุปการเงิน',
      icon: FileBarChart,
      roles: ['admin']
    },
    {
      id: 'user-mgmt',
      label: 'จัดการสิทธิ์ผู้ใช้',
      sub: 'User Role & Activate',
      icon: Users,
      roles: ['admin']
    },
    {
      id: 'settings',
      label: 'Template & ตั้งค่าระบบ',
      sub: 'ศูนย์ดาวน์โหลด & Supabase',
      icon: Settings,
      roles: ['admin', 'user']
    }
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 h-[calc(100vh-3.5rem)] select-none overflow-y-auto">
      {/* Department Context Indicator */}
      <div className="px-4 py-3 border-b border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>สังกัดแผนกปัจจุบัน:</span>
          <span className="font-bold text-teal-400 bg-teal-950/60 border border-teal-800/60 px-1.5 py-0.5 rounded text-[11px]">
            {currentUser.departmentCode}
          </span>
        </div>
        <div className="mt-1 text-[11px] text-slate-500 flex items-center gap-1">
          {currentUser.role === 'admin' ? (
            <span className="text-amber-400/90 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> มีสิทธิ์แก้ไขทุกแผนก (Admin)
            </span>
          ) : (
            <span>สิทธิ์แก้ไขเฉพาะแผนก {currentUser.departmentCode}</span>
          )}
        </div>
      </div>

      {/* Nav List */}
      <nav className="flex-1 px-2 py-3 space-y-1">
        {menuItems.map(item => {
          const isAllowed = item.roles.includes(currentUser.role);
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          if (!isAllowed) {
            return null; // hide or show disabled
          }

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={w-full flex items-center justify-between px-3 py-2 rounded-md transition-all text-left group }
            >
              <div className="flex items-center space-x-2.5 min-w-0">
                <Icon className={w-4 h-4 shrink-0 } />
                <div className="min-w-0">
                  <p className="text-xs truncate font-medium leading-tight">{item.label}</p>
                  <p className={	ext-[10px] truncate leading-tight mt-0.5 }>
                    {item.sub}
                  </p>
                </div>
              </div>
              {item.badge && (
                <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0 flex items-center gap-0.5">
                  <AlertTriangle className="w-2.5 h-2.5" /> {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="p-3 border-t border-slate-800 text-[10px] text-slate-400 text-center bg-slate-950/20">
        <p className="font-medium text-slate-300">SIEMENS iX Design System</p>
        <p className="mt-0.5 text-slate-400">v1.0.0 | Cloudflare & Supabase Ready</p>
      </div>
    </aside>
  );
};
