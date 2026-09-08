import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Users,
  UserPlus,
  Shield,
  ShieldCheck,
  Building2,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lock
} from 'lucide-react';
import { Role } from '../types';

export const UserManagementPage: React.FC = () => {
  const {
    currentUser,
    users,
    departments,
    registerUser,
    activateUser,
    changeUserRole,
    showToast
  } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    departmentCode: 'GM'
  });

  if (currentUser.role !== 'admin') {
    return (
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl text-center text-slate-400 space-y-3">
        <Lock className="w-12 h-12 mx-auto text-amber-500" />
        <h2 className="text-lg font-bold text-white">เฉพาะผู้ดูแลระบบ (Admin Only)</h2>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          หน้าจัดการสิทธิ์และผู้ใช้งานถูกจำกัดสิทธิ์เฉพาะระดับ Admin เท่านั้น
        </p>
      </div>
    );
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      showToast('กรุณากรอกข้อมูลให้ครบถ้วน', 'error');
      return;
    }

    const res = registerUser(formData.name.trim(), formData.email.trim(), formData.departmentCode);
    if (res.success) {
      showToast(res.message, 'success');
      setIsModalOpen(false);
      setFormData({ name: '', email: '', departmentCode: 'GM' });
    } else {
      showToast(res.message, 'error');
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-md">
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-siemens-teal-light" />
            การจัดการสิทธิ์และผู้ใช้งานระบบ (User Role & Department Security)
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            ผู้ลงทะเบียนคนแรกจะเป็น <strong>Admin</strong> อัตโนมัติโดยไม่ต้อง Activate ส่วนผู้ใช้คนถัดไปต้องรอให้ Admin อนุมัติ (Activate) ก่อนเข้าใช้งาน
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-siemens-petrol hover:bg-teal-700 text-white text-xs font-bold transition shadow-md"
        >
          <UserPlus className="w-4 h-4" />
          ลงทะเบียนผู้ใช้ใหม่
        </button>
      </div>

      {/* Rules Information Box */}
      <div className="bg-slate-900/70 border border-slate-800 p-3.5 rounded-xl text-xs space-y-2">
        <div className="flex items-center gap-2 font-bold text-teal-300">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          ข้อกำหนดการจำกัดสิทธิ์ตามแผนก (Access Control Rules):
        </div>
        <ul className="list-disc list-inside text-slate-300 space-y-1 text-[11px]">
          <li><strong>Admin:</strong> มีสิทธิ์อัปโหลดและแก้ไขข้อมูลทุกแผนก, จัดการสิทธิ์ผู้ใช้, และเข้าถึงหน้า Export CSV สำหรับ Payroll</li>
          <li><strong>User:</strong> เข้าดูตารางทำงาน (Shift Plan) ของทุกแผนกได้ แต่แก้ไขได้เฉพาะพนักงานในแผนกที่สังกัดเท่านั้น</li>
          <li><strong>Pending User:</strong> ผู้ใช้งานที่สมัครใหม่จะต้องรอการ Activate จาก Admin จึงจะสามารถล็อกอินเข้าสู่ระบบได้</li>
        </ul>
      </div>

      {/* Users Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs select-none">
            <thead className="bg-slate-950 text-slate-300 font-sans">
              <tr className="border-b border-slate-800 text-[11px]">
                <th className="py-2.5 px-4 font-semibold">ชื่อ - นามสกุล</th>
                <th className="py-2.5 px-4 font-semibold">อีเมลล็อกอิน</th>
                <th className="py-2.5 px-4 font-semibold">แผนกสังกัด</th>
                <th className="py-2.5 px-4 font-semibold text-center">บทบาท (Role)</th>
                <th className="py-2.5 px-4 font-semibold text-center">สถานะ (Status)</th>
                <th className="py-2.5 px-4 font-semibold text-center">วันที่ลงทะเบียน</th>
                <th className="py-2.5 px-4 font-semibold text-right">จัดการบัญชี</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/60">
              {users.map(u => (
                <tr key={u.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-white">
                    {u.name}
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-300">
                    {u.email}
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 border border-slate-700 text-teal-300 font-mono">
                      {u.departmentCode}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <select
                      value={u.role}
                      onChange={e => changeUserRole(u.id, e.target.value as Role)}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider focus:outline-none cursor-pointer ${
                        u.role === 'admin'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                          : 'bg-teal-950 text-teal-300 border border-teal-600/50'
                      }`}
                    >
                      <option value="admin" className="bg-slate-900 text-amber-300">ADMIN</option>
                      <option value="user" className="bg-slate-900 text-teal-300">USER</option>
                    </select>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {u.isActive ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-600/60">
                        <CheckCircle2 className="w-3 h-3" /> Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-600/60">
                        <AlertTriangle className="w-3 h-3" /> Pending Activate
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center text-slate-400 font-mono">
                    {u.createdAt || '-'}
                  </td>
                  <td className="py-3 px-4 text-right">
                    {u.isActive ? (
                      <button
                        onClick={() => activateUser(u.id, false)}
                        className="px-3 py-1 bg-slate-800 hover:bg-rose-950 hover:text-rose-300 hover:border-rose-700 text-slate-300 border border-slate-700 rounded text-xs transition"
                      >
                        Deactivate
                      </button>
                    ) : (
                      <button
                        onClick={() => activateUser(u.id, true)}
                        className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded text-xs transition shadow"
                      >
                        อนุมัติ (Activate)
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-950 p-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>ผู้ใช้งานทั้งหมดในระบบ: <strong className="text-white">{users.length}</strong> บัญชี</span>
        </div>
      </div>

      {/* Register Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-md w-full p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-teal-400" />
                ลงทะเบียนผู้ใช้งานระบบ
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleRegister} className="space-y-3 text-xs">
              <div>
                <label className="block font-medium text-slate-300 mb-1">ชื่อ - นามสกุล *</label>
                <input
                  type="text"
                  required
                  placeholder="เช่น Somchai Prasert"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 text-white border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">อีเมลองค์กร (Siemens Email) *</label>
                <input
                  type="email"
                  required
                  placeholder="name@siemens.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 text-white font-mono border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">แผนกต้นสังกัด (Department) *</label>
                <select
                  value={formData.departmentCode}
                  onChange={e => setFormData({ ...formData, departmentCode: e.target.value })}
                  className="w-full bg-slate-950 text-white border border-slate-700 rounded-lg p-2 focus:border-teal-400 focus:outline-none"
                >
                  {departments.map(d => (
                    <option key={d.code} value={d.code}>{d.code} - {d.name}</option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-500 mt-1">
                  * ใช้สำหรับจำกัดสิทธิ์การแก้ไขตารางทำงานให้ตรงกับแผนกสังกัด
                </p>
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
                  ลงทะเบียน
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};