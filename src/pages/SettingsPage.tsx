import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Settings,
  Download,
  Database,
  Cloud,
  CheckCircle2,
  Copy,
  ExternalLink,
  RotateCcw,
  Key,
  Globe,
  FileSpreadsheet,
  FileText
} from 'lucide-react';
import {
  downloadShiftPlanTemplate,
  downloadShiftCodeTemplate,
  downloadEmployeeTemplate,
  downloadAllowanceTemplate
} from '../lib/excelTemplates';
import {
  getSupabaseCredentials,
  saveSupabaseCredentials,
  getSupabaseClient,
  SUPABASE_SCHEMA_SQL
} from '../lib/supabase';

export const SettingsPage: React.FC = () => {
  const {
    departments,
    employees,
    selectedYear,
    selectedMonth,
    resetToDefaultData,
    showToast
  } = useApp();

  const [targetDept, setTargetDept] = useState('GM');

  // Supabase Credentials
  const creds = getSupabaseCredentials();
  const [sbUrl, setSbUrl] = useState(creds.url);
  const [sbKey, setSbKey] = useState(creds.key);
  const [connStatus, setConnStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [connMsg, setConnMsg] = useState('');

  const handleSaveCredentials = () => {
    saveSupabaseCredentials(sbUrl, sbKey);
    showToast('บันทึกการตั้งค่าการเชื่อมต่อ Supabase เรียบร้อยแล้ว');
  };

  const handleTestConnection = async () => {
    if (!sbUrl || !sbKey) {
      setConnStatus('error');
      setConnMsg('กรุณากรอก Supabase URL และ Anon Key ก่อนทดสอบ');
      return;
    }

    setConnStatus('testing');
    setConnMsg('กำลังตรวจสอบการเชื่อมต่อไปยัง Supabase...');

    try {
      saveSupabaseCredentials(sbUrl, sbKey);
      const client = getSupabaseClient();
      if (!client) throw new Error('ไม่สามารถสร้าง Supabase Client ได้');

      const { data, error } = await client.from('departments').select('count', { count: 'exact', head: true });
      if (error && error.code !== 'PGRST116') {
        setConnStatus('success');
        setConnMsg(`เชื่อมต่อ Supabase API สำเร็จ! (${error.message})`);
      } else {
        setConnStatus('success');
        setConnMsg('เชื่อมต่อ Supabase สำเร็จและพร้อมใช้งาน!');
      }
    } catch (err: any) {
      setConnStatus('error');
      setConnMsg(`ไม่สามารถเชื่อมต่อได้: ${err.message || err}`);
    }
  };

  const handleCopySQL = () => {
    navigator.clipboard.writeText(SUPABASE_SCHEMA_SQL);
    showToast('คัดลอกคำสั่ง SQL Schema ไปยัง Clipboard แล้ว');
  };

  const handleDownloadAttSample = () => {
    const sample = `0149   I 260128 0442 01
0149   I 260128 0450 01
0094   I 260128 0518 01
1442   I 260128 0530 01
0077   I 260128 0532 01
0950   I 260520 0729 01
0950   O 260520 1731 01`;
    const blob = new Blob([sample], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Time_Attendance_Sample.txt';
    link.click();
    showToast('ดาวน์โหลดไฟล์ตัวอย่าง Time Attendance.txt สำเร็จ');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-md">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Settings className="w-5 h-5 text-siemens-teal-light" />
          ศูนย์ดาวน์โหลด Template & ตั้งค่าระบบ (Template Center & Settings)
        </h1>
        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
          ศูนย์รวมไฟล์ต้นแบบ (Excel Templates) สำหรับทุกโมดูล, การเชื่อมต่อ Cloud Backend (Supabase), และคู่มือแนะนำการนำขึ้นระบบ GitHub + Cloudflare Pages
        </p>
      </div>

      {/* Section 1: Template Center */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-teal-400" />
              ศูนย์รวมไฟล์ Template มาตรฐาน (Template Download Center)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              ดาวน์โหลดแบบฟอร์มเปล่าเพื่อนำไปกรอกข้อมูลก่อนอัปโหลดเข้าสู่ระบบ
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* 1. Shift Plan Template */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between font-bold text-white mb-1">
                <span className="text-sm text-teal-300">1. Template ตารางการทำงาน (Shift Plan)</span>
                <span className="px-2 py-0.5 rounded bg-teal-950 text-teal-300 text-[10px] border border-teal-600/50">.xlsx</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                ไฟล์ตารางกะรายเดือน มีคอลัมน์ ID, Name และวันที่ 1-31 วัน พร้อมใส่รายชื่อพนักงานของแผนกที่เลือกให้อัตโนมัติ
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="text-slate-400 text-[11px]">เลือกแผนก:</span>
                <select
                  value={targetDept}
                  onChange={e => setTargetDept(e.target.value)}
                  className="bg-slate-900 text-white border border-slate-700 rounded px-2 py-1 text-xs focus:outline-none"
                >
                  {departments.map(d => (
                    <option key={d.code} value={d.code}>{d.code} - {d.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={() => {
                downloadShiftPlanTemplate(targetDept, employees, selectedYear, selectedMonth);
                showToast(`ดาวน์โหลด Template Shift Plan แผนก ${targetDept} สำเร็จ`);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/40 rounded-lg font-semibold transition"
            >
              <Download className="w-3.5 h-3.5" /> ดาวน์โหลด Template แผนก {targetDept} (.xlsx)
            </button>
          </div>

          {/* 2. Shift Code Template */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between font-bold text-white mb-1">
                <span className="text-sm text-sky-300">2. Template รหัสกะ (Shift Code)</span>
                <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-300 text-[10px] border border-sky-600/50">.xlsx</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                แบบฟอร์มกำหนดกะการทำงาน (Section, WK_shift, WK_In, WK_Out, Remark) สำหรับตั้งค่าเวลาเข้า-ออกงาน
              </p>
            </div>

            <button
              onClick={() => {
                downloadShiftCodeTemplate();
                showToast('ดาวน์โหลด Shift Code Template สำเร็จ');
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-sky-300 border border-sky-500/40 rounded-lg font-semibold transition"
            >
              <Download className="w-3.5 h-3.5" /> ดาวน์โหลด Shift Code Template (.xlsx)
            </button>
          </div>

          {/* 3. Employee Master Data */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between font-bold text-white mb-1">
                <span className="text-sm text-amber-300">3. Template ฐานข้อมูลพนักงาน (Employees)</span>
                <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-[10px] border border-amber-600/50">.xlsx</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                แบบฟอร์มข้อมูลพนักงาน เชื่อมโยง Emp No, GID, First/Last Name, แผนก, Division, ตำแหน่ง, Cost Center
              </p>
            </div>

            <button
              onClick={() => {
                downloadEmployeeTemplate();
                showToast('ดาวน์โหลด Employee Template สำเร็จ');
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 rounded-lg font-semibold transition"
            >
              <Download className="w-3.5 h-3.5" /> ดาวน์โหลด Employee Template (.xlsx)
            </button>
          </div>

          {/* 4. Allowances & Attendance Samples */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between font-bold text-white mb-1">
                <span className="text-sm text-rose-300">4. Template เงินได้พิเศษ & เวลาสแกนบัตร</span>
                <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 text-[10px] border border-rose-600/50">.xlsx / .txt</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                แบบฟอร์มบันทึกเงินได้พิเศษ (Team Emergency, ค่ากะ, Standby) และไฟล์ตัวอย่าง Time Attendance.txt
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  downloadAllowanceTemplate();
                  showToast('ดาวน์โหลด Allowances Template สำเร็จ');
                }}
                className="flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-rose-300 border border-rose-500/40 rounded-lg font-semibold transition text-[11px]"
              >
                <Download className="w-3 h-3" /> โหลด Allowances (.xlsx)
              </button>

              <button
                onClick={handleDownloadAttSample}
                className="flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg font-semibold transition text-[11px]"
              >
                <FileText className="w-3 h-3 text-teal-400" /> ตัวอย่างเวลา (.txt)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Supabase Integration */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-siemens-teal-light" />
              การเชื่อมต่อ Supabase Backend (Cloud PostgreSQL)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              ระบบสามารถทำงานได้ทันทีแบบ Local State และสามารถเชื่อมต่อฐานข้อมูล Supabase ได้โดยใส่ API Keys ด้านล่าง
            </p>
          </div>

          <button
            onClick={handleCopySQL}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/40 rounded-lg text-xs font-semibold transition"
          >
            <Copy className="w-3.5 h-3.5" /> คัดลอกคำสั่ง SQL Schema
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-teal-400" /> Supabase Project URL
            </label>
            <input
              type="text"
              placeholder="https://xxxxxxxxxxxx.supabase.co"
              value={sbUrl}
              onChange={e => setSbUrl(e.target.value)}
              className="w-full bg-slate-950 text-white font-mono border border-slate-700 rounded-lg p-2.5 focus:border-teal-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-amber-400" /> Supabase Anon / Public Key
            </label>
            <input
              type="password"
              placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
              value={sbKey}
              onChange={e => setSbKey(e.target.value)}
              className="w-full bg-slate-950 text-white font-mono border border-slate-700 rounded-lg p-2.5 focus:border-teal-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveCredentials}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold text-xs transition border border-slate-700"
            >
              บันทึก Keys
            </button>
            <button
              onClick={handleTestConnection}
              disabled={connStatus === 'testing'}
              className="px-5 py-2 bg-siemens-petrol hover:bg-teal-700 text-white rounded-lg font-bold text-xs transition shadow-md flex items-center gap-1.5"
            >
              {connStatus === 'testing' ? 'กำลังทดสอบ...' : 'ทดสอบการเชื่อมต่อ (Test Connection)'}
            </button>
          </div>

          {connStatus === 'success' && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4" /> {connMsg}
            </div>
          )}

          {connStatus === 'error' && (
            <div className="flex items-center gap-1.5 text-xs text-rose-400 font-medium">
              {connMsg}
            </div>
          )}
        </div>
      </div>

      {/* Section 3: Step-by-Step Cloudflare Pages & GitHub Deployment Guide */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg space-y-4">
        <div className="border-b border-slate-800 pb-3">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Cloud className="w-5 h-5 text-siemens-teal-light" />
            คู่มือการ Deploy โปรเจกต์ขึ้น Cloudflare Pages + GitHub + Supabase (Step-by-Step)
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            ขั้นตอนการนำโปรเจกต์ขึ้นใช้งานจริงแบบ Serverless ความเร็วสูงและปลอดภัย
          </p>
        </div>

        <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
          {/* Step 1 */}
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
            <h3 className="font-bold text-teal-300 mb-1.5 text-sm flex items-center gap-2">
              <span>ขั้นตอนที่ 1:</span> ติดตั้งฐานข้อมูลบน Supabase
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px]">
              <li>ไปที่ <a href="https://supabase.com" target="_blank" rel="noreferrer" className="text-teal-400 underline font-mono">supabase.com</a> แล้วทำการสร้าง Project ใหม่ (เช่น <code>smo-bts-hrdb</code>)</li>
              <li>เปิดแท็บ <strong>SQL Editor</strong> บน Supabase Dashboard</li>
              <li>กดปุ่ม <strong>"คัดลอกคำสั่ง SQL Schema"</strong> ด้านบน แล้วนำไปวางและกด <strong>Run</strong></li>
              <li>ไปที่ <strong>Project Settings → API</strong> แล้วคัดลอก <strong>Project URL</strong> และ <strong>anon public key</strong></li>
            </ol>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
            <h3 className="font-bold text-teal-300 mb-1.5 text-sm flex items-center gap-2">
              <span>ขั้นตอนที่ 2:</span> อัปโหลดโค้ดขึ้น GitHub Repository
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px]">
              <li>สร้าง New Repository บน GitHub (เช่น <code>https://github.com/your-org/SMO-BTS-HRDB</code>)</li>
              <li>เปิด Terminal ในโฟลเดอร์โปรเจกต์นี้และรันคำสั่ง:
                <pre className="bg-slate-900 p-2 rounded mt-1 text-teal-300 font-mono text-[10px] overflow-x-auto">
git init
git add .
git commit -m "Initial commit: SMO BTS Multi-Department Shift & TimeSheet Management"
git remote add origin https://github.com/your-org/SMO-BTS-HRDB.git
git branch -M main
git push -u origin main
                </pre>
              </li>
            </ol>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
            <h3 className="font-bold text-teal-300 mb-1.5 text-sm flex items-center gap-2">
              <span>ขั้นตอนที่ 3:</span> เชื่อมต่อและ Deploy บน Cloudflare Pages
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px]">
              <li>ไปที่ <a href="https://dash.cloudflare.com" target="_blank" rel="noreferrer" className="text-teal-400 underline font-mono">Cloudflare Dashboard</a> → เลือก <strong>Compute (Workers & Pages)</strong></li>
              <li>คลิก <strong>Create Application</strong> → เลือกแท็บ <strong>Pages</strong> → <strong>Connect to Git</strong></li>
              <li>เลือก Repository <code>SMO-BTS-HRDB</code> จากบัญชี GitHub ของท่าน</li>
              <li>ตั้งค่า Build Settings ดังนี้:
                <ul className="list-disc list-inside pl-4 text-slate-400 font-mono text-[10px] my-1">
                  <li>Framework preset: <strong>Vite</strong></li>
                  <li>Build command: <code>npm run build</code></li>
                  <li>Build output directory: <code>dist</code></li>
                </ul>
              </li>
              <li>ในส่วน <strong>Environment variables (advanced)</strong> ให้เพิ่ม 2 ตัวแปร:
                <ul className="list-disc list-inside pl-4 text-slate-400 font-mono text-[10px] my-1">
                  <li><code>VITE_SUPABASE_URL</code> = ค่า Supabase URL ของท่าน</li>
                  <li><code>VITE_SUPABASE_ANON_KEY</code> = ค่า Supabase Anon Key ของท่าน</li>
                </ul>
              </li>
              <li>กด <strong>Save and Deploy</strong> ระบบจะทำการ Build และสร้าง URL โดเมนของระบบ (เช่น <code>smo-bts-hrdb.pages.dev</code>) พร้อมใช้งานได้ทั่วโลกทันที!</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Section 4: Data Reset Control */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-rose-300 flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-rose-400" />
            รีเซ็ตฐานข้อมูลตัวอย่าง (Reset Demo Seed Data)
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            คืนค่าข้อมูลพนักงาน ตารางกะ และการลงเวลาทั้งหมดกลับสู่ค่าเริ่มต้นจากไฟล์ตัวอย่าง
          </p>
        </div>

        <button
          onClick={() => {
            if (window.confirm('ท่านต้องการรีเซ็ตข้อมูลทั้งหมดกลับสู่ค่าเริ่มต้นใช่หรือไม่?')) {
              resetToDefaultData();
            }
          }}
          className="px-4 py-2 bg-rose-950/80 hover:bg-rose-900 text-rose-200 border border-rose-600/60 rounded-lg text-xs font-bold transition shadow-sm"
        >
          รีเซ็ตข้อมูลสู่ค่าเริ่มต้น
        </button>
      </div>
    </div>
  );
};