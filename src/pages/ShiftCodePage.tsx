import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import * as XLSX from 'xlsx';
import {
  Clock,
  Plus,
  Edit2,
  Trash2,
  Upload,
  Download,
  Building2,
  Search,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { ShiftCode } from '../types';
import { downloadShiftCodeTemplate } from '../lib/excelTemplates';

export const ShiftCodePage: React.FC = () => {
  const {
    departments,
    shiftCodes,
    addShiftCode,
    updateShiftCode,
    deleteShiftCode,
    importShiftCodes,
    currentUser,
    showToast
  } = useApp();

  const [selectedDept, setSelectedDept] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Modal for Add/Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCode, setEditingCode] = useState<ShiftCode | null>(null);
  const [formData, setFormData] = useState({
    departmentCode: 'GM',
    shiftCode: '',
    startTime: '08:00',
    endTime: '17:00',
    workHours: 8,
    remark: ''
  });

  const filteredCodes = shiftCodes.filter(sc => {
    if (selectedDept !== 'ALL' && sc.departmentCode !== selectedDept) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        sc.shiftCode.toLowerCase().includes(q) ||
        (sc.remark && sc.remark.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const openAddModal = () => {
    setEditingCode(null);
    setFormData({
      departmentCode: selectedDept === 'ALL' ? 'GM' : selectedDept,
      shiftCode: '',
      startTime: '08:00',
      endTime: '17:00',
      workHours: 8,
      remark: ''
    });
    setIsModalOpen(true);
  };

  const openEditModal = (sc: ShiftCode) => {
    setEditingCode(sc);
    setFormData({
      departmentCode: sc.departmentCode,
      shiftCode: sc.shiftCode,
      startTime: sc.startTime,
      endTime: sc.endTime,
      workHours: sc.workHours,
      remark: sc.remark || ''
    });
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.shiftCode.trim()) {
      showToast('กรุณากรอกรหัสกะ (Shift Code)', 'error');
      return;
    }

    if (editingCode) {
      updateShiftCode({
        ...editingCode,
        departmentCode: formData.departmentCode,
        shiftCode: formData.shiftCode.trim(),
        startTime: formData.startTime,
        endTime: formData.endTime,
        workHours: Number(formData.workHours) || 8,
        remark: formData.remark
      });
    } else {
      addShiftCode({
        id: `sc-custom-${Date.now()}`,
        departmentCode: formData.departmentCode,
        shiftCode: formData.shiftCode.trim(),
        startTime: formData.startTime,
        endTime: formData.endTime,
        workHours: Number(formData.workHours) || 8,
        remark: formData.remark
      });
    }
    setIsModalOpen(false);
  };

  // Upload Excel Shift Codes
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = evt => {
      try {
        const bstr = evt.target?.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json<any[]>(ws, { header: 1 });

        if (data.length < 2) {
          showToast('ไฟล์ไม่มีข้อมูล', 'error');
          return;
        }

        const newCodes: ShiftCode[] = [];
        // Expected headers: Section, WK_shift, WK_In, WK_Out, Remark
        for (let r = 1; r < data.length; r++) {
          const row = data[r];
          if (!row || !row[1]) continue;

          const toHHMM = (val: any) => {
            if (!val) return '';
            if (typeof val === 'number') {
              const mins = Math.round(val * 24 * 60);
              const h = Math.floor(mins / 60) % 24;
              const m = mins % 60;
              return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
            }
            return String(val).trim();
          };

          const dept = String(row[0] || 'GM').trim();
          const code = String(row[1]).trim();
          const inTime = toHHMM(row[2]);
          const outTime = toHHMM(row[3]);
          const rem = row[4] ? String(row[4]).trim() : '';

          newCodes.push({
            id: `sc-imported-${Date.now()}-${r}`,
            departmentCode: dept,
            shiftCode: code,
            startTime: inTime,
            endTime: outTime,
            workHours: inTime && outTime ? 8 : 0,
            remark: rem
          });
        }

        if (newCodes.length > 0) {
          importShiftCodes(newCodes);
        } else {
          showToast('ไม่พบข้อมูล Shift Code ที่ถูกต้องในไฟล์', 'warning');
        }
      } catch (err: any) {
        showToast(`เกิดข้อผิดพลาดในการนำเข้า: ${err.message}`, 'error');
      }
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="space-y-4">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-md">
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-siemens-teal-light" />
            การจัดการ Shift Code ประจำแผนก (Shift Code Master Data)
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            ระบุช่วงเวลาเริ่มต้น-สิ้นสุดการทำงานของแต่ละกะเพื่อใช้ในการคำนวณเวลาเข้างานและ Late โดยอัตโนมัติ
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={downloadShiftCodeTemplate}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
          >
            <Download className="w-3.5 h-3.5 text-teal-400" />
            โหลด Template
          </button>

          {currentUser.role === 'admin' && (
            <>
              <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/40 text-xs font-medium cursor-pointer transition shadow-sm">
                <Upload className="w-3.5 h-3.5 text-teal-400" />
                <span>นำเข้า Excel</span>
                <input
                  type="file"
                  accept=".xlsx, .xls, .csv"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              <button
                onClick={openAddModal}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-siemens-petrol hover:bg-teal-700 text-white text-xs font-bold transition shadow-sm"
              >
                <Plus className="w-4 h-4" />
                เพิ่ม Shift Code
              </button>
            </>
          )}
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-900/80 border border-slate-800 p-3 rounded-lg text-xs">
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

        <div className="md:col-span-2 flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-md border border-slate-800">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="ค้นหารหัสกะ หรือ คำอธิบายกะ..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Shift Codes Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto max-h-[68vh]">
          <table className="w-full text-left border-collapse text-xs select-none">
            <thead className="bg-slate-950 text-slate-300 sticky top-0 z-10">
              <tr className="border-b border-slate-800 text-[11px]">
                <th className="py-2.5 px-4 font-semibold">แผนก (Section)</th>
                <th className="py-2.5 px-4 font-semibold text-center">รหัสกะ (Shift Code)</th>
                <th className="py-2.5 px-4 font-semibold text-center">เวลาเข้างาน (In)</th>
                <th className="py-2.5 px-4 font-semibold text-center">เวลาออกงาน (Out)</th>
                <th className="py-2.5 px-4 font-semibold text-center">ชั่วโมงทำงาน</th>
                <th className="py-2.5 px-4 font-semibold">รายละเอียด / หมายเหตุ</th>
                {currentUser.role === 'admin' && (
                  <th className="py-2.5 px-4 font-semibold text-right">จัดการ</th>
                )}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/60">
              {filteredCodes.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-10 text-slate-500 font-sans">
                    <AlertCircle className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                    ไม่พบข้อมูล Shift Code ที่ตรงกับเงื่อนไข
                  </td>
                </tr>
              ) : (
                filteredCodes.map(sc => (
                  <tr key={sc.id} className="hover:bg-slate-800/40 transition-colors font-mono">
                    <td className="py-2.5 px-4 text-teal-300 font-semibold">
                      {sc.departmentCode}
                    </td>
                    <td className="py-2.5 px-4 text-center">
                      <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-siemens-petrol/60 text-teal-200 border border-teal-500/40">
                        {sc.shiftCode}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-center text-slate-200 font-bold">
                      {sc.startTime || '-'}
                    </td>
                    <td className="py-2.5 px-4 text-center text-slate-200 font-bold">
                      {sc.endTime || '-'}
                    </td>
                    <td className="py-2.5 px-4 text-center text-slate-300">
                      {sc.workHours ? `${sc.workHours} ชม.` : '-'}
                    </td>
                    <td className="py-2.5 px-4 text-slate-400 font-sans truncate max-w-xs">
                      {sc.remark || '-'}
                    </td>
                    {currentUser.role === 'admin' && (
                      <td className="py-2.5 px-4 text-right font-sans">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openEditModal(sc)}
                            className="p-1 text-slate-400 hover:text-teal-300 transition"
                            title="แก้ไข"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteShiftCode(sc.id)}
                            className="p-1 text-slate-400 hover:text-rose-400 transition"
                            title="ลบ"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-950 p-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>รวม Shift Code ทั้งหมด: <strong className="text-white">{filteredCodes.length}</strong> รายการ</span>
        </div>
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-md w-full p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-400" />
                {editingCode ? 'แก้ไข Shift Code' : 'เพิ่ม Shift Code ใหม่'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div>
                <label className="block font-medium text-slate-300 mb-1">แผนก (Department) *</label>
                <select
                  value={formData.departmentCode}
                  onChange={e => setFormData({ ...formData, departmentCode: e.target.value })}
                  className="w-full bg-slate-950 text-white border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                >
                  {departments.map(d => (
                    <option key={d.code} value={d.code}>{d.code} - {d.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">รหัสกะ (Shift Code) *</label>
                <input
                  type="text"
                  required
                  placeholder="เช่น D, D2, A, E, N, H, AL"
                  value={formData.shiftCode}
                  onChange={e => setFormData({ ...formData, shiftCode: e.target.value })}
                  className="w-full bg-slate-950 text-white font-mono uppercase border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">เวลาเข้างาน (In)</label>
                  <input
                    type="time"
                    value={formData.startTime}
                    onChange={e => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full bg-slate-950 text-white font-mono border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">เวลาออกงาน (Out)</label>
                  <input
                    type="time"
                    value={formData.endTime}
                    onChange={e => setFormData({ ...formData, endTime: e.target.value })}
                    className="w-full bg-slate-950 text-white font-mono border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">ชั่วโมงทำงานปกติ (ชั่วโมง)</label>
                <input
                  type="number"
                  step="0.5"
                  value={formData.workHours}
                  onChange={e => setFormData({ ...formData, workHours: Number(e.target.value) })}
                  className="w-full bg-slate-950 text-white font-mono border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">คำอธิบาย / รายละเอียดกะ</label>
                <input
                  type="text"
                  placeholder="เช่น Day Shift, Morning Shift, Public Holiday"
                  value={formData.remark}
                  onChange={e => setFormData({ ...formData, remark: e.target.value })}
                  className="w-full bg-slate-950 text-white border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition font-medium"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-siemens-petrol hover:bg-teal-700 text-white font-bold transition shadow-md"
                >
                  บันทึกข้อมูล
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};