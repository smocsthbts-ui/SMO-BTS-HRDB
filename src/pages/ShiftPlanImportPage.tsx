import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import * as XLSX from 'xlsx';
import dayjs from 'dayjs';
import {
  Upload,
  Download,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Building2,
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react';
import { downloadShiftPlanTemplate } from '../lib/excelTemplates';
import { ShiftPlanEntry } from '../types';

export const ShiftPlanImportPage: React.FC = () => {
  const {
    departments,
    employees,
    shiftCodes,
    importShiftPlan,
    currentUser,
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
    selectedDept,
    setSelectedDept,
    showToast,
    setActiveTab
  } = useApp();

  const [targetDept, setTargetDept] = useState(selectedDept === 'ALL' ? currentUser.departmentCode : selectedDept);
  const [targetMonth, setTargetMonth] = useState(selectedMonth);
  const [targetYear, setTargetYear] = useState(selectedYear);

  const [parsedEntries, setParsedEntries] = useState<ShiftPlanEntry[]>([]);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [validationWarnings, setValidationWarnings] = useState<string[]>([]);
  const [fileName, setFileName] = useState('');

  // Download template for chosen department
  const handleDownloadTemplate = () => {
    downloadShiftPlanTemplate(targetDept, employees, targetYear, targetMonth);
    showToast(`ดาวน์โหลดแบบฟอร์ม Shift Plan ของแผนก ${targetDept} สำเร็จ`);
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setValidationErrors([]);
    setValidationWarnings([]);
    setParsedEntries([]);

    const reader = new FileReader();
    reader.onload = evt => {
      try {
        const bstr = evt.target?.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json<any[]>(ws, { header: 1 });

        if (data.length < 2) {
          setValidationErrors(['ไฟล์ไม่มีข้อมูลหรือรูปแบบไม่ถูกต้อง']);
          return;
        }

        const entries: ShiftPlanEntry[] = [];
        const errors: string[] = [];
        const warnings: string[] = [];

        // Department employees
        const deptEmployees = employees.filter(emp => emp.departmentCode === targetDept);
        const deptEmpNos = new Set(deptEmployees.map(e => e.empNo));
        const allEmpNos = new Set(employees.map(e => e.empNo));

        // Valid shift codes for target department
        const validCodes = new Set(
          shiftCodes
            .filter(sc => sc.departmentCode === targetDept || sc.departmentCode === 'ADM' || sc.departmentCode === 'GM')
            .map(sc => sc.shiftCode.toUpperCase())
        );
        // Include common codes
        ['D', 'A', 'E', 'N', 'H', 'AL', 'W', 'D2', 'T', 'SL2'].forEach(c => validCodes.add(c));

        // Row 0 is header: ID, Name, 1, 2, ..., 31
        for (let r = 1; r < data.length; r++) {
          const row = data[r];
          if (!row || row.length === 0 || !row[0]) continue;

          const rawId = String(row[0]).trim();
          const empNo = rawId.padStart(4, '0');
          const empName = row[1] ? String(row[1]).trim() : '';

          // 1. Validate employee exists
          if (!allEmpNos.has(empNo)) {
            errors.push(`แถวที่ ${r + 1}: ไม่พบรหัสพนักงาน ${empNo} (${empName}) ในฐานข้อมูลระบบ`);
            continue;
          }

          // 2. Validate employee belongs to the selected department
          if (!deptEmpNos.has(empNo)) {
            const actualEmp = employees.find(e => e.empNo === empNo);
            errors.push(
              `แถวที่ ${r + 1}: พนักงาน ${empNo} (${empName}) สังกัดแผนก ${actualEmp?.departmentCode || 'อื่น'} ไม่ตรงกับแผนก ${targetDept} ที่เลือกอัปโหลด!`
            );
            continue;
          }

          // 3. Parse daily shifts (columns index 2 to 32)
          for (let day = 1; day <= 31; day++) {
            const colIdx = day + 1; // col 0 is ID, 1 is Name, 2 is day 1
            const cellValue = row[colIdx];
            if (cellValue !== undefined && cellValue !== null && String(cellValue).trim() !== '') {
              const code = String(cellValue).trim().toUpperCase();

              // Check if code is recognized
              if (!validCodes.has(code)) {
                warnings.push(`พนักงาน ${empNo} วันที่ ${day}: พบรหัสกะ '${code}' ที่ไม่มีอยู่ในฐานข้อมูลของแผนก ${targetDept}`);
              }

              entries.push({
                id: `sp-${empNo}-${targetYear}-${targetMonth}-${day}-${Date.now()}`,
                year: targetYear,
                month: targetMonth,
                empNo,
                day,
                shiftCode: code
              });
            }
          }
        }

        setParsedEntries(entries);
        setValidationErrors(errors);
        setValidationWarnings(Array.from(new Set(warnings)));
      } catch (err: any) {
        setValidationErrors([`เกิดข้อผิดพลาดในการอ่านไฟล์: ${err.message || err}`]);
      }
    };
    reader.readAsBinaryString(file);
  };

  // Submit and save
  const handleConfirmImport = () => {
    if (validationErrors.length > 0) {
      showToast('กรุณาแก้ไขข้อผิดพลาดก่อนยืนยันการนำเข้า', 'error');
      return;
    }

    if (parsedEntries.length === 0) {
      showToast('ไม่พบรายการกะที่จะนำเข้า', 'warning');
      return;
    }

    importShiftPlan(targetYear, targetMonth, targetDept, parsedEntries);
    setSelectedYear(targetYear);
    setSelectedMonth(targetMonth);
    setSelectedDept(targetDept);
    setActiveTab('dashboard');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-md">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Upload className="w-5 h-5 text-siemens-teal-light" />
          นำเข้าตารางการทำงานพนักงาน (Import Monthly Shift Plan)
        </h1>
        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
          ขั้นตอนการอัปโหลดตารางทำงานประจำเดือนของแต่ละแผนก ระบบจะบังคับเลือกเดือน-ปีและแผนกให้ตรงก่อนการอัปโหลด และตรวจสอบความถูกต้องของรายชื่อพนักงานอย่างเข้มงวด
        </p>
      </div>

      {/* Step 1: Mandatory Pickers & Template Download */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900 border border-slate-800 p-5 rounded-xl">
        <div>
          <label className="block text-xs font-semibold text-teal-300 mb-1.5 flex items-center gap-1.5">
            <Building2 className="w-4 h-4" /> 1. แผนกที่ต้องการอัปโหลด (Department) *
          </label>
          <select
            value={targetDept}
            onChange={e => {
              setTargetDept(e.target.value);
              setParsedEntries([]);
              setValidationErrors([]);
            }}
            className="w-full bg-slate-950 text-white text-xs border border-slate-700 rounded-lg p-2.5 font-medium focus:border-teal-400 focus:outline-none"
          >
            {departments.map(d => (
              <option key={d.code} value={d.code}>{d.code} - {d.name}</option>
            ))}
          </select>
          <p className="text-[11px] text-slate-500 mt-1">* ข้อมูลพนักงานในไฟล์ต้องสังกัดแผนกนี้เท่านั้น</p>
        </div>

        <div>
          <label className="block text-xs font-semibold text-teal-300 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-4 h-4" /> 2. เดือนและปี (Month - Year) *
          </label>
          <div className="grid grid-cols-2 gap-2">
            <select
              value={targetMonth}
              onChange={e => setTargetMonth(Number(e.target.value))}
              className="bg-slate-950 text-white text-xs border border-slate-700 rounded-lg p-2.5 font-medium focus:border-teal-400 focus:outline-none"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {dayjs(`2026-${i + 1}-01`).format('MMMM')} ({i + 1})
                </option>
              ))}
            </select>
            <select
              value={targetYear}
              onChange={e => setTargetYear(Number(e.target.value))}
              className="bg-slate-950 text-white text-xs border border-slate-700 rounded-lg p-2.5 font-medium focus:border-teal-400 focus:outline-none"
            >
              <option value={2025}>2025</option>
              <option value={2026}>2026</option>
              <option value={2027}>2027</option>
            </select>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">* ข้อมูลจะบันทึกทับตารางของเดือนนี้</p>
        </div>

        <div className="flex flex-col justify-end">
          <label className="block text-xs font-semibold text-slate-400 mb-1.5">
            แบบฟอร์มมาตรฐานประจำแผนก:
          </label>
          <button
            onClick={handleDownloadTemplate}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/40 rounded-lg text-xs font-semibold transition shadow-sm"
          >
            <Download className="w-4 h-4 text-teal-400" />
            ดาวน์โหลด Template แผนก {targetDept} (.xlsx)
          </button>
          <p className="text-[10px] text-slate-500 mt-1 text-center">
            (มีรายชื่อและ GID ของพนักงานแผนก {targetDept} พร้อมคอลัมน์ 1-31 วัน)
          </p>
        </div>
      </div>

      {/* Step 2: Upload Dropzone */}
      <div className="bg-slate-900 border-2 border-dashed border-slate-700 hover:border-teal-500/60 p-8 rounded-xl text-center transition-colors">
        <FileSpreadsheet className="w-12 h-12 mx-auto text-teal-400 mb-3" />
        <h3 className="text-sm font-semibold text-white mb-1">
          เลือกไฟล์ Shift Plan (.xlsx หรือ .csv) สำหรับแผนก {targetDept}
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          รองรับไฟล์ตามรูปแบบตัวอย่าง Shift Plan.xlsx ที่มีคอลัมน์ ID, Name และวันที่ 1-31
        </p>

        <label className="inline-flex items-center gap-2 px-5 py-2.5 bg-siemens-petrol hover:bg-teal-700 text-white text-xs font-semibold rounded-lg cursor-pointer transition shadow-md">
          <Upload className="w-4 h-4" />
          <span>เลือกไฟล์อัปโหลด</span>
          <input
            type="file"
            accept=".xlsx, .xls, .csv"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>

        {fileName && (
          <p className="text-xs text-teal-300 font-mono mt-3">
            ไฟล์ที่เลือก: <strong>{fileName}</strong>
          </p>
        )}
      </div>

      {/* Step 3: Validation Results & Warnings */}
      {(validationErrors.length > 0 || validationWarnings.length > 0 || parsedEntries.length > 0) && (
        <div className="space-y-4">
          {/* Errors */}
          {validationErrors.length > 0 && (
            <div className="bg-rose-950/70 border border-rose-600/80 p-4 rounded-xl text-rose-200 text-xs">
              <div className="flex items-center gap-2 font-bold text-rose-300 mb-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                พบข้อผิดพลาดที่ไม่อนุญาตให้อัปโหลด ({validationErrors.length} รายการ):
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-300 max-h-48 overflow-y-auto font-mono text-[11px]">
                {validationErrors.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Warnings */}
          {validationWarnings.length > 0 && (
            <div className="bg-amber-950/70 border border-amber-600/80 p-4 rounded-xl text-amber-200 text-xs">
              <div className="flex items-center gap-2 font-bold text-amber-300 mb-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                การแจ้งเตือนรหัสกะ (Shift Code Warning) ({validationWarnings.length} รายการ):
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-300 max-h-36 overflow-y-auto font-mono text-[11px]">
                {validationWarnings.map((warn, i) => (
                  <li key={i}>{warn}</li>
                ))}
              </ul>
              <p className="text-[11px] text-amber-400/90 mt-2 font-medium">
                * ท่านยังสามารถบันทึกได้ แต่ระบบแนะนำให้เพิ่ม Shift Code ดังกล่าวในหน้ารหัสกะทำงาน
              </p>
            </div>
          )}

          {/* Success Summary & Confirm Button */}
          {validationErrors.length === 0 && parsedEntries.length > 0 && (
            <div className="bg-emerald-950/60 border border-emerald-600/70 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-emerald-200">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-white">ตรวจสอบข้อมูลผ่านเรียบร้อย!</h4>
                  <p className="text-slate-300 mt-0.5">
                    พร้อมนำเข้าตารางกะรวม <strong className="text-emerald-300">{parsedEntries.length}</strong> รายการ สำหรับแผนก{' '}
                    <strong className="text-white">{targetDept}</strong> ({targetMonth}/{targetYear})
                  </p>
                </div>
              </div>

              <button
                onClick={handleConfirmImport}
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-lg transition flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                ยืนยันการบันทึกทับตารางทำงาน
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};