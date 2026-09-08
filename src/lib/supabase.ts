import { createClient } from '@supabase/supabase-js';

// Default / fallback keys from localStorage or env
const envUrl = import.meta.env.VITE_SUPABASE_URL || '';
const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export function getSupabaseCredentials() {
  const localUrl = localStorage.getItem('smo_supabase_url') || envUrl;
  const localKey = localStorage.getItem('smo_supabase_anon_key') || envKey;
  return { url: localUrl, key: localKey };
}

export function saveSupabaseCredentials(url: string, key: string) {
  localStorage.setItem('smo_supabase_url', url.trim());
  localStorage.setItem('smo_supabase_anon_key', key.trim());
}

export function getSupabaseClient() {
  const { url, key } = getSupabaseCredentials();
  if (!url || !key) return null;
  try {
    return createClient(url, key);
  } catch (e) {
    console.error('Failed to initialize Supabase client:', e);
    return null;
  }
}

/**
 * Complete SQL DDL schema for user to execute in Supabase SQL Editor
 */
export const SUPABASE_SCHEMA_SQL = -- SMO BTS HRDB - PostgreSQL Schema for Supabase
-- Multi-Department Shift & Time Sheet Management System

-- 1. Departments Table
CREATE TABLE IF NOT EXISTS public.departments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  cost_center VARCHAR(50) NOT NULL,
  division VARCHAR(100) DEFAULT 'MO CS BTS',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. User Profiles Table
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  department_code VARCHAR(50) REFERENCES public.departments(code) ON DELETE SET NULL,
  is_active BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Employees Table
CREATE TABLE IF NOT EXISTS public.employees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  emp_no VARCHAR(20) UNIQUE NOT NULL,
  gid VARCHAR(50) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  department_code VARCHAR(50) REFERENCES public.departments(code),
  division VARCHAR(100) DEFAULT 'MO CS BTS',
  function_title VARCHAR(100),
  cost_center VARCHAR(50),
  is_shift_worker BOOLEAN DEFAULT true,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Shift Codes Table
CREATE TABLE IF NOT EXISTS public.shift_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  department_code VARCHAR(50) REFERENCES public.departments(code),
  shift_code VARCHAR(20) NOT NULL,
  start_time TIME,
  end_time TIME,
  work_hours NUMERIC(4,2) DEFAULT 8.0,
  remark TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(department_code, shift_code)
);

-- 5. Monthly Shift Plans Table
CREATE TABLE IF NOT EXISTS public.monthly_shift_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  year INT NOT NULL,
  month INT NOT NULL,
  emp_no VARCHAR(20) REFERENCES public.employees(emp_no) ON DELETE CASCADE,
  gid VARCHAR(50),
  day INT NOT NULL CHECK (day BETWEEN 1 AND 31),
  shift_code VARCHAR(20),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(year, month, emp_no, day)
);

-- 6. Raw Time Attendance Punches
CREATE TABLE IF NOT EXISTS public.time_attendance_raw (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  emp_no VARCHAR(20) NOT NULL,
  punch_type CHAR(1) CHECK (punch_type IN ('I', 'O')),
  punch_date DATE NOT NULL,
  punch_time TIME NOT NULL,
  terminal_id VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 7. Overtime Records (Power BI Approved OT)
CREATE TABLE IF NOT EXISTS public.ot_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  gid VARCHAR(50) NOT NULL,
  emp_no VARCHAR(20),
  department VARCHAR(50),
  name VARCHAR(255),
  total_hours NUMERIC(4,2) DEFAULT 0,
  reason TEXT,
  request_date DATE,
  ot_record_date DATE NOT NULL,
  begin_time TIME,
  end_time TIME,
  status VARCHAR(20) DEFAULT 'Approved',
  is_retroactive BOOLEAN DEFAULT false,
  is_confirmed_by_admin BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 8. Other Allowances
CREATE TABLE IF NOT EXISTS public.other_allowances (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  year INT NOT NULL,
  month INT NOT NULL,
  emp_no VARCHAR(20) REFERENCES public.employees(emp_no),
  gid VARCHAR(50),
  allowance_type VARCHAR(50) CHECK (allowance_type IN ('standby', 'emergency', 'shift_allowance')),
  amount NUMERIC(10,2) DEFAULT 0,
  record_date DATE,
  remark TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 9. Daily TimeSheet Overrides (Manual Adjustments)
CREATE TABLE IF NOT EXISTS public.timesheet_daily_overrides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  emp_no VARCHAR(20) REFERENCES public.employees(emp_no),
  date DATE NOT NULL,
  shift_code VARCHAR(20),
  real_in_1 TIME,
  real_out_1 TIME,
  diff_1 VARCHAR(20),
  late VARCHAR(20),
  real_in_2 TIME,
  real_out_2 TIME,
  diff_2 VARCHAR(20),
  total_working_hours NUMERIC(4,2),
  ot_15 NUMERIC(4,2),
  ot_30 NUMERIC(4,2),
  standby_allowance NUMERIC(10,2),
  emergency_allowance NUMERIC(10,2),
  code_leave VARCHAR(20),
  code VARCHAR(20),
  remark TEXT,
  edited_by UUID REFERENCES auth.users(id),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(emp_no, date)
);

-- Enable RLS
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shift_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.monthly_shift_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.time_attendance_raw ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ot_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.other_allowances ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.timesheet_daily_overrides ENABLE ROW LEVEL SECURITY;

-- Read policies for authenticated users
CREATE POLICY "Allow authenticated read departments" ON public.departments FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read shift_codes" ON public.shift_codes FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read employees" ON public.employees FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read plans" ON public.monthly_shift_plans FOR SELECT TO authenticated USING (true);
;
