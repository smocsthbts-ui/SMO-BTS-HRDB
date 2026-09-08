import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sun,
  Moon,
  Maximize2,
  Minimize2,
  Shield,
  User as UserIcon,
  Building2,
  Calendar
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentUser,
    users,
    setCurrentUser,
    theme,
    toggleTheme,
    isFullScreen,
    toggleFullScreen,
    departments,
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
    selectedDept,
    setSelectedDept
  } = useApp();

  const monthNames = [
    'มกราคม (Jan)', 'กุมภาพันธ์ (Feb)', 'มีนาคม (Mar)', 'เมษายน (Apr)',
    'พฤษภาคม (May)', 'มิถุนายน (Jun)', 'กรกฎาคม (Jul)', 'สิงหาคม (Aug)',
    'กันยายน (Sep)', 'ตุลาคม (Oct)', 'พฤศจิกายน (Nov)', 'ธันวาคม (Dec)'
  ];

  return (
    <header className="bg-siemens-petrol text-white h-14 border-b border-siemens-teal-dark flex items-center justify-between px-4 sticky top-0 z-50 shadow-md select-none">
      {/* Brand & App Title */}
      <div className="flex items-center space-x-3">
        <div className="bg-white text-siemens-petrol font-bold px-2 py-0.5 rounded text-sm tracking-wider shadow-sm">
          SIEMENS
        </div>
        <div className="h-4 w-px bg-teal-400/40 hidden sm:block"></div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm sm:text-base leading-tight tracking-wide flex items-center gap-1.5">
            <span>MO CS BTS</span>
            <span className="text-xs font-normal text-teal-100 hidden md:inline">| ระบบจัดการตารางกะ & Time Sheet</span>
          </span>
        </div>
      </div>

      {/* Global Filter Bar */}
      <div className="hidden lg:flex items-center space-x-2 bg-black/20 px-3 py-1 rounded-md border border-white/10 text-xs">
        <Calendar className="w-3.5 h-3.5 text-siemens-teal-light" />
        <select
          value={selectedMonth}
          onChange={e => setSelectedMonth(Number(e.target.value))}
          aria-label="Select Month"
          className="bg-transparent text-white font-medium focus:outline-none cursor-pointer [&>option]:bg-slate-800 [&>option]:text-white"
        >
          {monthNames.map((name, i) => (
            <option key={i + 1} value={i + 1}>{name}</option>
          ))}
        </select>
        <select
          value={selectedYear}
          onChange={e => setSelectedYear(Number(e.target.value))}
          aria-label="Select Year"
          className="bg-transparent text-white font-medium focus:outline-none cursor-pointer [&>option]:bg-slate-800 [&>option]:text-white"
        >
          <option value={2025}>2025</option>
          <option value={2026}>2026</option>
          <option value={2027}>2027</option>
        </select>
        <span className="text-white/40">|</span>
        <Building2 className="w-3.5 h-3.5 text-siemens-teal-light" />
        <select
          value={selectedDept}
          onChange={e => setSelectedDept(e.target.value)}
          aria-label="Select Department"
          className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer [&>option]:bg-slate-800 [&>option]:text-white"
        >
          <option value="ALL">ทุกแผนก (All Departments)</option>
          {departments.map(d => (
            <option key={d.code} value={d.code}>{d.code} - {d.name}</option>
          ))}
        </select>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-2.5 text-xs">
        {/* User Role Switcher Dropdown (Easy Pair-testing) */}
        <div className="flex items-center space-x-1.5 bg-black/25 px-2.5 py-1 rounded border border-white/15">
          {currentUser.role === 'admin' ? (
            <Shield className="w-3.5 h-3.5 text-amber-300" />
          ) : (
            <UserIcon className="w-3.5 h-3.5 text-teal-200" />
          )}
          <select
            value={currentUser.id}
            onChange={e => {
              const u = users.find(x => x.id === e.target.value);
              if (u) setCurrentUser(u);
            }}
            aria-label="Select Active User Profile"
            className="bg-transparent text-white font-medium focus:outline-none cursor-pointer max-w-[140px] truncate [&>option]:bg-slate-800 [&>option]:text-white"
          >
            {users.map(u => (
              <option key={u.id} value={u.id}>
                {u.name} ({u.role.toUpperCase()} - {u.departmentCode})
              </option>
            ))}
          </select>
          <span className={px-1.5 py-0.2 rounded text-[10px] font-bold uppercase tracking-wider }>
            {currentUser.role}
          </span>
        </div>

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullScreen}
          title={isFullScreen ? 'Exit Fullscreen' : 'Fullscreen Work Area'}
          className="p-1.5 hover:bg-white/10 rounded transition-colors text-teal-100 hover:text-white"
        >
          {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          title={Switch to  Mode}
          className="p-1.5 hover:bg-white/10 rounded transition-colors text-teal-100 hover:text-white"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-blue-200" />}
        </button>
      </div>
    </header>
  );
};
