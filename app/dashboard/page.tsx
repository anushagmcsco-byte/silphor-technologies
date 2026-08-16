'use client';

export const dynamic = 'force-dynamic';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import StudentDashboard from '@/components/StudentDashboard';
import AdminDashboard from '@/components/AdminDashboard';
import { 
  User, Shield, Briefcase, BookOpen, Award, BarChart3, Users, 
  Layers, Cpu, CheckCircle2, Plus, ArrowRight, Settings, FileText, Calendar, Trash2, Edit3, ExternalLink 
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardRoute() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'student' | 'mentor' | 'instructor' | 'company' | 'admin' | 'users' | 'programs' | 'projects' | 'certificates' | 'courses' | 'analytics'>('student');

  // Management State for CRUD
  const [usersList, setUsersList] = useState([
    { id: 1, name: 'Anusha Rao', email: 'anusha@silphor.io', role: 'Student', status: 'Active', verified: true },
    { id: 2, name: 'Dr. Ramesh Kumar', email: 'ramesh@silphor.io', role: 'Mentor', status: 'Active', verified: true },
    { id: 3, name: 'Vikram Sundaram', email: 'vikram@silphor.io', role: 'Instructor', status: 'Active', verified: true },
    { id: 4, name: 'Qualcomm Hiring Team', email: 'hr@qualcomm.com', role: 'Company', status: 'Active', verified: true },
    { id: 5, name: 'Admin Superuser', email: 'admin@silphor.io', role: 'Admin', status: 'Active', verified: true },
  ]);

  const [programsList, setProgramsList] = useState([
    { id: 1, title: 'Advanced RTL Design & Verification (UVM)', duration: '16 Weeks', enrolled: 450, status: 'Active' },
    { id: 2, title: 'Physical Design, STA & GDSII Signoff', duration: '20 Weeks', enrolled: 320, status: 'Active' },
    { id: 3, title: 'RISC-V Processor Architecture & SoC Integration', duration: '12 Weeks', enrolled: 280, status: 'Active' },
  ]);

  const [projectsList, setProjectsList] = useState([
    { id: 1, name: '32-Bit RISC-V RV32I Core', category: 'RTL', lead: 'Student Pool A', status: 'In Review' },
    { id: 2, name: 'AXI4-Lite Interconnect VIP', category: 'Verification', lead: 'Student Pool B', status: 'Passed' },
    { id: 3, name: 'Low Power Asynchronous FIFO', category: 'Physical Design', lead: 'Student Pool C', status: 'Tapeout Ready' },
  ]);

  const [certificatesList, setCertificatesList] = useState([
    { id: 'SIL-CERT-8841', holder: 'Anusha Rao', course: 'Verified VLSI Skill Passport', date: 'August 2026', status: 'Verified' },
    { id: 'SIL-CERT-9102', holder: 'Karthik S.', course: 'Advanced UVM Verification', date: 'July 2026', status: 'Verified' },
  ]);

  const [coursesList, setCoursesList] = useState([
    { id: 'rtl-verification', title: 'Advanced ASIC RTL Design & Verification', category: 'Design & Verification', duration: '24 Weeks', level: 'Advanced' },
    { id: 'physical-design', title: 'Physical Design & Timing Closure Masterclass', category: 'Physical Design', duration: '24 Weeks', level: 'Advanced' },
    { id: 'riscv-soc', title: 'RISC-V SoC Architecture & Implementation', category: 'SoC Architecture', duration: '20 Weeks', level: 'Advanced' },
    { id: 'uvm-specialist', title: 'UVM & Functional Verification Specialist', category: 'Verification', duration: '16 Weeks', level: 'Intermediate' },
    { id: 'nano-fab', title: 'Nano Fab & Semiconductor Process Engineering', category: 'Nano Fab & Process', duration: '16 Weeks', level: 'Advanced' }
  ]);

  // Form states for Create/Edit
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalType, setModalType] = useState<'users' | 'programs' | 'projects' | 'certificates' | 'courses'>('courses');
  const [formData, setFormData] = useState({ title: '', email: '', role: 'Student', duration: '16 Weeks', category: 'Design & Verification', level: 'Advanced', holder: 'Anusha Rao', course: 'VLSI Track', name: 'New Project', lead: 'Student Pool' });

  const handleCreateItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalType === 'courses') {
      const newId = formData.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const newItem = { id: newId, title: formData.title, category: formData.category, duration: formData.duration, level: formData.level };
      setCoursesList([...coursesList, newItem]);
      setShowAddModal(false);
      window.location.href = `/courses/${newId}`;
    } else if (modalType === 'programs') {
      const newItem = { id: Date.now(), title: formData.title, duration: formData.duration, enrolled: 120, status: 'Active' };
      setProgramsList([...programsList, newItem]);
      setShowAddModal(false);
    } else if (modalType === 'projects') {
      const newItem = { id: Date.now(), name: formData.title, category: formData.category, lead: formData.lead, status: 'In Progress' };
      setProjectsList([...projectsList, newItem]);
      setShowAddModal(false);
    } else if (modalType === 'certificates') {
      const newItem = { id: `SIL-CERT-${Math.floor(1000 + Math.random() * 9000)}`, holder: formData.holder, course: formData.course, date: 'August 2026', status: 'Verified' };
      setCertificatesList([...certificatesList, newItem]);
      setShowAddModal(false);
    } else if (modalType === 'users') {
      const newItem = { id: Date.now(), name: formData.title, email: formData.email, role: formData.role, status: 'Active', verified: true };
      setUsersList([...usersList, newItem]);
      setShowAddModal(false);
    }
  };

  const handleDeleteUser = (id: number) => setUsersList(usersList.filter(u => u.id !== id));
  const handleDeleteProgram = (id: number) => setProgramsList(programsList.filter(p => p.id !== id));
  const handleDeleteProject = (id: number) => setProjectsList(projectsList.filter(pr => pr.id !== id));
  const handleDeleteCert = (id: string) => setCertificatesList(certificatesList.filter(c => c.id !== id));
  const handleDeleteCourse = (id: string) => setCoursesList(coursesList.filter(c => c.id !== id));

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header & Role / Management Tab Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-orange-500/20 pb-6">
          <div>
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Enterprise Command Center</span>
            <h1 className="text-3xl font-extrabold mt-1">Multi-Role Dashboards & Management</h1>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'student', label: 'Student', icon: User },
              { id: 'mentor', label: 'Mentor', icon: Calendar },
              { id: 'instructor', label: 'Instructor', icon: BookOpen },
              { id: 'company', label: 'Company', icon: Briefcase },
              { id: 'admin', label: 'Admin', icon: Shield },
              { id: 'courses', label: 'Courses (CRUD)', icon: BookOpen },
              { id: 'users', label: 'Users', icon: Users },
              { id: 'programs', label: 'Programs', icon: Layers },
              { id: 'projects', label: 'Projects', icon: Cpu },
              { id: 'certificates', label: 'Certificates', icon: Award },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            ].map((tab) => {
              const IconC = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-blue-600 via-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25' 
                      : 'bg-[#0b1329] text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <IconC className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'student' && <StudentDashboard />}

        {activeTab === 'mentor' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-[#0b1329] border border-orange-500/30 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Mentor Portal</span>
                  <h2 className="text-2xl font-bold mt-1">Scheduled 1:1 Guidance Sessions</h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
                  Online & Available
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#080E24] border border-slate-800 space-y-3">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>Today, 4:00 PM IST</span>
                    <span className="text-orange-400">Code Review</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">RTL FIFO Pointer Bug Review with Anusha Rao</h3>
                  <p className="text-xs text-slate-300">Focus on wraparound logic in non-power-of-two synchronous FIFO modules.</p>
                  <button onClick={() => alert('Joined mentor video call room!')} className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 hover:opacity-95 text-white text-xs font-medium shadow-md shadow-orange-500/20">
                    Launch Mentor Video Room
                  </button>
                </div>

                <div className="p-6 rounded-2xl bg-[#080E24] border border-slate-800 space-y-3">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>Tomorrow, 6:30 PM IST</span>
                    <span className="text-purple-400">Mock Interview</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">STA Timing Closure Mock Session</h3>
                  <p className="text-xs text-slate-300">Evaluating setup violations and pipeline register insertion techniques.</p>
                  <button onClick={() => alert('Session details confirmed!')} className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700">
                    View Session Notes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'instructor' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-[#0b1329] border border-orange-500/30 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Instructor Portal</span>
                  <h2 className="text-2xl font-bold mt-1">Course Curriculum & Student Submissions</h2>
                </div>
                <button onClick={() => { setModalType('programs'); setShowAddModal(true); }} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 text-white text-xs font-medium flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>Create Assignment</span>
                </button>
              </div>

              <div className="space-y-4">
                {programsList.map((prog) => (
                  <div key={prog.id} className="p-5 rounded-2xl bg-[#080E24] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-base font-bold text-white">{prog.title}</h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">Duration: {prog.duration} • Enrolled Students: {prog.enrolled}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => alert(`Opening grading portal for ${prog.title}`)} className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700">
                        Grade Submissions
                      </button>
                      <button onClick={() => handleDeleteProgram(Number(prog.id))} className="p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'company' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-[#0b1329] border border-orange-500/30 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Company Talent Portal</span>
                  <h2 className="text-2xl font-bold mt-1">Hiring Assessments & Shortlisted Candidates</h2>
                </div>
                <button onClick={() => alert('Private assessment created successfully!')} className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>Create Private Assessment</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-[#080E24] border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-slate-400">Active Pipeline</span>
                  <div className="text-3xl font-extrabold text-white">24 Candidates</div>
                  <p className="text-xs text-emerald-400 font-mono">98% Signoff Ready</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#080E24] border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-slate-400">Tests Conducted</span>
                  <div className="text-3xl font-extrabold text-white">12 Assessments</div>
                  <p className="text-xs text-orange-400 font-mono">Avg Score: 89/100</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#080E24] border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-slate-400">Offers Extended</span>
                  <div className="text-3xl font-extrabold text-white">6 Offers</div>
                  <p className="text-xs text-purple-400 font-mono">Acceptance Rate: 100%</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'admin' && <AdminDashboard />}

        {/* Courses Management Tab (Full CRUD + Redirection to Course Detail Page) */}
        {activeTab === 'courses' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-[#0b1329] border border-orange-500/30 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Course Catalog Management</span>
                  <h2 className="text-2xl font-bold mt-1">Manage Semiconductor Courses & Syllabi</h2>
                </div>
                <button 
                  onClick={() => { setModalType('courses'); setShowAddModal(true); }} 
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-orange-500 to-amber-500 hover:opacity-95 text-white text-xs font-medium flex items-center gap-2 shadow-lg shadow-orange-500/25"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Course</span>
                </button>
              </div>

              <div className="space-y-4">
                {coursesList.map((course) => (
                  <div key={course.id} className="p-5 rounded-2xl bg-[#080E24] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 text-[10px] font-mono">
                          {course.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400">Duration: {course.duration}</span>
                      </div>
                      <h3 className="text-base font-bold text-white">{course.title}</h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/courses/${course.id}`}
                        className="px-4 py-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/30 text-xs font-mono flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View Page</span>
                      </Link>
                      <button 
                        onClick={() => handleDeleteCourse(course.id)}
                        className="p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20"
                        title="Delete Course"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-[#0b1329] border border-orange-500/30 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">User & Role Management</span>
                  <h2 className="text-2xl font-bold mt-1">Platform Users & Permission Control</h2>
                </div>
                <button onClick={() => { setModalType('users'); setShowAddModal(true); }} className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>Add New User</span>
                </button>
              </div>

              <div className="space-y-3">
                {usersList.map((u) => (
                  <div key={u.id} className="p-4 rounded-2xl bg-[#080E24] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-xs">
                        {u.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">{u.name}</div>
                        <div className="text-xs text-slate-400 font-mono">{u.email}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 text-xs font-mono">
                        {u.role}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
                        {u.status}
                      </span>
                      <button onClick={() => handleDeleteUser(u.id)} className="p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Programs Tab */}
        {activeTab === 'programs' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-[#0b1329] border border-orange-500/30 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Program Management</span>
                  <h2 className="text-2xl font-bold mt-1">Semiconductor Engineering Curriculum</h2>
                </div>
                <button onClick={() => { setModalType('programs'); setShowAddModal(true); }} className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Program</span>
                </button>
              </div>

              <div className="space-y-4">
                {programsList.map((p) => (
                  <div key={p.id} className="p-5 rounded-2xl bg-[#080E24] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-base font-bold text-white">{p.title}</h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">Duration: {p.duration} • Enrolled: {p.enrolled}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
                        {p.status}
                      </span>
                      <button onClick={() => handleDeleteProgram(Number(p.id))} className="p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-[#0b1329] border border-orange-500/30 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Project Management</span>
                  <h2 className="text-2xl font-bold mt-1">Open Silicon & Capstone Repositories</h2>
                </div>
                <button onClick={() => { setModalType('projects'); setShowAddModal(true); }} className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>New Repository</span>
                </button>
              </div>

              <div className="space-y-4">
                {projectsList.map((pr) => (
                  <div key={pr.id} className="p-5 rounded-2xl bg-[#080E24] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-base font-bold text-white font-mono">{pr.name}</h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">Category: {pr.category} • Lead: {pr.lead}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 text-xs font-mono">
                        {pr.status}
                      </span>
                      <button onClick={() => handleDeleteProject(Number(pr.id))} className="p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === 'certificates' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-[#0b1329] border border-orange-500/30 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Certificate Management</span>
                  <h2 className="text-2xl font-bold mt-1">Verified Skill Passports & Credentials</h2>
                </div>
                <button onClick={() => { setModalType('certificates'); setShowAddModal(true); }} className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>Issue Certificate</span>
                </button>
              </div>

              <div className="space-y-4">
                {certificatesList.map((c) => (
                  <div key={c.id} className="p-5 rounded-2xl bg-[#080E24] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="font-bold text-sm text-white font-mono">{c.id}</div>
                      <p className="text-xs text-slate-300 mt-0.5">{c.course} issued to <span className="text-orange-300 font-bold">{c.holder}</span> ({c.date})</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {c.status}
                      </span>
                      <button onClick={() => handleDeleteCert(c.id)} className="p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-[#0b1329] border border-orange-500/30 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Analytics & Reporting</span>
                <h2 className="text-2xl font-bold mt-1">Platform Telemetry & Learning Velocity</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-[#080E24] border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-slate-400">Total Active Learners</span>
                  <div className="text-3xl font-extrabold text-white">4,820</div>
                  <p className="text-xs text-emerald-400 font-mono">+18% this month</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#080E24] border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-slate-400">Labs Completed</span>
                  <div className="text-3xl font-extrabold text-white">32,400</div>
                  <p className="text-xs text-orange-400 font-mono">99.4% success rate</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#080E24] border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-slate-400">Hiring Partners</span>
                  <div className="text-3xl font-extrabold text-white">128</div>
                  <p className="text-xs text-purple-400 font-mono">Tier-1 MNCs</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#080E24] border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-slate-400">Placement Rate</span>
                  <div className="text-3xl font-extrabold text-white">94.2%</div>
                  <p className="text-xs text-amber-400 font-mono">Verified Signoff</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Add / Create Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-[#0b1329] border border-orange-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white capitalize">Add New {modalType}</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white text-sm">✕</button>
            </div>

            <form onSubmit={handleCreateItem} className="space-y-4">
              {modalType === 'users' ? (
                <>
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">User Name</label>
                    <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Rahul Sharma" className="w-full px-4 py-3 rounded-xl bg-[#080E24] border border-slate-700 text-xs text-white focus:outline-none focus:border-orange-500" />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Email Address</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="rahul@silphor.io" className="w-full px-4 py-3 rounded-xl bg-[#080E24] border border-slate-700 text-xs text-white focus:outline-none focus:border-orange-500" />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Role</label>
                    <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-[#080E24] border border-slate-700 text-xs text-white focus:outline-none focus:border-orange-500">
                      <option value="Student">Student</option>
                      <option value="Mentor">Mentor</option>
                      <option value="Instructor">Instructor</option>
                      <option value="Company">Company</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Title / Name</label>
                    <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Advanced Low-Power SoC Design" className="w-full px-4 py-3 rounded-xl bg-[#080E24] border border-slate-700 text-xs text-white focus:outline-none focus:border-orange-500" />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Category / Track</label>
                    <input type="text" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} placeholder="Design & Verification" className="w-full px-4 py-3 rounded-xl bg-[#080E24] border border-slate-700 text-xs text-white focus:outline-none focus:border-orange-500" />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Duration / Details</label>
                    <input type="text" value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} placeholder="20 Weeks" className="w-full px-4 py-3 rounded-xl bg-[#080E24] border border-slate-700 text-xs text-white focus:outline-none focus:border-orange-500" />
                  </div>
                </>
              )}

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 py-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-medium hover:bg-slate-700">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-orange-500 to-amber-500 text-white text-xs font-semibold shadow-lg shadow-orange-500/30">
                  Save & Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
