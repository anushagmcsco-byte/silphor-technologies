'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import HeroChip from '@/components/HeroChip';
import RtlToGdsPipeline from '@/components/RtlToGdsPipeline';
import CloudVlsiLab from '@/components/CloudVlsiLab';
import TimingAnalysisLab from '@/components/TimingAnalysisLab';
import ChallengeArena from '@/components/ChallengeArena';
import SkillPassport from '@/components/SkillPassport';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { 
  Cpu, Zap, Shield, Activity, Terminal, Layers, Sparkles, 
  ArrowRight, CheckCircle2, BookOpen, Briefcase, Trophy, Users, 
  Star, ChevronRight, Play, ExternalLink, MapPin
} from 'lucide-react';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);

  const techStrip = [
    'VLSI', 'ASIC', 'FPGA', 'EDA', 'RTL', 'SystemVerilog', 'UVM', 'DFT', 'RISC-V'
  ];

  const coreAreas = [
    { title: 'RTL Design', desc: 'Verilog, SystemVerilog, RTL Architecture & PPA Optimization', icon: Terminal, color: 'from-blue-600 to-cyan-500' },
    { title: 'Design Verification', desc: 'SystemVerilog, UVM, Functional Verification & Coverage', icon: Shield, color: 'from-cyan-500 to-indigo-600' },
    { title: 'Physical Design', desc: 'Synthesis, Floorplanning, CTS, Routing & STA Closure', icon: Layers, color: 'from-indigo-600 to-purple-600' },
    { title: 'DFT', desc: 'Scan chain insertion, ATPG, MBIST & JTAG testing', icon: Activity, color: 'from-emerald-500 to-teal-600' },
    { title: 'Analog Design', desc: 'Custom layout, transistor sizing and spice verification', icon: Zap, color: 'from-amber-500 to-orange-600' },
    { title: 'RISC-V SoC', desc: 'Open Instruction Set Architecture & custom pipeline IPs', icon: Cpu, color: 'from-blue-500 to-purple-600' },
  ];

  const solutions = [
    { title: 'VLSI Training Programs', desc: 'Industry-aligned immersive programs in ASIC design, verification, and physical layout.', href: '/vlsi-programs', icon: BookOpen },
    { title: 'Cloud VLSI Lab', desc: 'Browser-based Verilog editor, VCS simulation engine, and waveform viewer.', href: '/cloud-vlsi-lab', icon: Terminal },
    { title: 'Engineering Services', desc: 'Bespoke ASIC/FPGA design consulting, RTL verification, and STA timing closure.', href: '/engineering-services', icon: Shield },
    { title: 'Career Development', desc: 'AI resume analyzer, ATS scoring, mock technical interviews, and placement support.', href: '/career', icon: Briefcase },
  ];

  const programsList = [
    { name: 'Advanced ASIC RTL Design & Verification', duration: '6 Months', level: 'Advanced', tools: 'Synopsys VCS, Verdi', link: '/vlsi-programs' },
    { name: 'Physical Design & Timing Closure Masterclass', duration: '6 Months', level: 'Advanced', tools: 'Cadence Genus, Innovus', link: '/vlsi-programs' },
    { name: 'UVM & Functional Verification Specialist', duration: '4 Months', level: 'Intermediate', tools: 'SystemVerilog, UVM', link: '/vlsi-programs' },
    { name: 'RISC-V SoC Architecture & Implementation', duration: '5 Months', level: 'Advanced', tools: 'RISC-V GCC, Spike, Verilator', link: '/vlsi-programs' },
  ];

  const projectsList = [
    { name: '32-Bit RISC-V Pipelined Processor', tech: 'SystemVerilog', diff: 'Advanced', score: '98/100' },
    { name: 'AXI4 Interconnect Protocol VIP', tech: 'UVM', diff: 'Advanced', score: '95/100' },
    { name: 'Asynchronous FIFO with Gray Code Pointers', tech: 'Verilog', diff: 'Intermediate', score: '99/100' },
    { name: 'SPI Master & Slave Controller IP', tech: 'Verilog', diff: 'Beginner', score: '97/100' },
  ];

  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar 
        onOpenSearch={() => setSearchOpen(true)} 
        onOpenAI={() => setAiModalOpen(true)} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ${darkMode ? 'bg-orange-600/10' : 'bg-blue-600/10'} rounded-full blur-[120px] pointer-events-none`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${darkMode ? 'bg-orange-500/10 border-orange-500/30 text-orange-400' : 'bg-blue-500/10 border-blue-500/30 text-blue-700'} text-xs font-mono border`}>
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>Silphor Technologies Private Limited</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Engineering the Future of <span className={`bg-gradient-to-r ${darkMode ? 'from-blue-500 via-orange-400 to-amber-500' : 'from-blue-600 via-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>Semiconductor Technology</span>
              </h1>

              <p className={`text-sm font-mono ${darkMode ? 'text-orange-400' : 'text-cyan-600'} uppercase tracking-widest`}>
                VLSI • AI • EDA • Semiconductor Engineering • Industry-Ready Skills
              </p>

              <p className={`text-base max-w-2xl leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Silphor Technologies delivers advanced VLSI learning, semiconductor engineering capabilities, hands-on technology platforms, and career-focused programs designed for the next generation of chip engineers.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link 
                  href="/solutions" 
                  className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-xl shadow-blue-600/30 flex items-center gap-2 transition-all hover:scale-102"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/vlsi-programs" 
                  className={`px-6 py-3.5 rounded-2xl font-medium text-sm transition-all hover:scale-102 ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700' : 'bg-slate-200 hover:bg-slate-300 text-slate-900 border border-slate-300'}`}
                >
                  Start Your VLSI Journey
                </Link>
                <button 
                  onClick={() => setAiModalOpen(true)}
                  className={`px-6 py-3.5 rounded-2xl font-medium text-sm transition-all flex items-center gap-2 ${darkMode ? 'bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30' : 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 border border-cyan-500/30'}`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Talk to Silphor AI</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Chip Hero */}
            <div className="lg:col-span-5">
              <HeroChip />
            </div>

          </div>
        </div>
      </section>

      {/* Technology Capability Strip */}
      <div className={`border-y py-6 transition-colors ${darkMode ? 'border-slate-800 bg-[#0b1329]/60 text-slate-400' : 'border-slate-200 bg-white/80 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono uppercase tracking-widest">
            {techStrip.map((item, idx) => (
              <span key={idx} className={`px-4 py-2 rounded-xl border transition-all cursor-default ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400' : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-500 hover:text-cyan-600 shadow-sm'}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Company Introduction & Stats */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className={`text-xs font-mono ${darkMode ? 'text-cyan-500' : 'text-cyan-600'} uppercase tracking-widest`}>Global Semiconductor Leader</span>
            <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Building the Next Generation of Semiconductor Engineers</h2>
            <p className={`leading-relaxed text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Headquartered at #45 East Link Road, Malleswaram 3rd Cross, Bengaluru, Silphor Technologies bridges the gap between academic theory and advanced commercial chip tape-outs. We combine EDA cloud infrastructure with AI-powered mentorship.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'}`}>
                <h4 className={`text-2xl font-bold font-mono ${darkMode ? 'text-white' : 'text-slate-900'}`}>5,000+</h4>
                <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Trained VLSI Engineers</p>
              </div>
              <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'}`}>
                <h4 className={`text-2xl font-bold font-mono ${darkMode ? 'text-white' : 'text-slate-900'}`}>100+</h4>
                <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Advanced Chip Projects</p>
              </div>
              <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'}`}>
                <h4 className={`text-2xl font-bold font-mono ${darkMode ? 'text-white' : 'text-slate-900'}`}>20+</h4>
                <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Industry Programs</p>
              </div>
              <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'}`}>
                <h4 className={`text-2xl font-bold font-mono ${darkMode ? 'text-white' : 'text-slate-900'}`}>95%</h4>
                <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Practical Lab Learning</p>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-6 border rounded-3xl p-8 shadow-2xl ${darkMode ? 'bg-[#0b1329] border-slate-700/85 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
            <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Core Philosophy</h3>
            <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              &ldquo;Learn. Build. Verify. Optimize. Innovate.&rdquo;
            </p>
            <div className="space-y-3">
              <div className={`flex items-start gap-3 p-3 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}>
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className={`block ${darkMode ? 'text-white' : 'text-slate-900'}`}>Cloud VLSI Workstations</strong>
                  <span className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Zero installation required. Access industry-standard simulation right in your browser.</span>
                </div>
              </div>
              <div className={`flex items-start gap-3 p-3 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}>
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className={`block ${darkMode ? 'text-white' : 'text-slate-900'}`}>Silphor AI Companion</strong>
                  <span className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Instant debugging for Verilog, SystemVerilog, UVM testbenches, and STA setup violations.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Areas */}
      <section className={`py-20 border-y ${darkMode ? 'bg-[#090e1d]/50 border-slate-800 text-white' : 'bg-slate-100/60 border-slate-200 text-slate-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className={`text-xs font-mono ${darkMode ? 'text-cyan-500' : 'text-cyan-600'} uppercase tracking-widest`}>Specialized Domains</span>
            <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Core Technology & Engineering Areas</h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Comprehensive coverage across the entire semiconductor design lifecycle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div key={idx} className={`p-6 rounded-3xl border shadow-xl hover:border-cyan-500/50 transition-all group ${darkMode ? 'bg-[#0b1329] border-slate-700/80 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{area.title}</h3>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className={`text-xs font-mono ${darkMode ? 'text-cyan-500' : 'text-cyan-600'} uppercase tracking-widest`}>Enterprise & Student Ecosystem</span>
          <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Comprehensive Silphor Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <div key={idx} className={`p-8 rounded-3xl border shadow-xl flex flex-col justify-between ${darkMode ? 'bg-[#0b1329] border-slate-700/80 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-cyan-500 border border-blue-500/30 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{sol.title}</h3>
                  <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{sol.desc}</p>
                </div>
                <Link href={sol.href} className={`inline-flex items-center gap-2 font-semibold text-xs transition-colors ${darkMode ? 'text-cyan-500 hover:text-cyan-400' : 'text-cyan-600 hover:text-cyan-700'}`}>
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive RTL → GDSII Pipeline */}
      <section className={`py-24 border-y ${darkMode ? 'bg-[#090e1d]/50 border-slate-800' : 'bg-slate-100/60 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className={`text-xs font-mono ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} uppercase tracking-widest`}>Interactive Engineering Flow</span>
            <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>RTL to GDSII Design Journey</h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Click each stage to inspect tools, challenges, and interview preparation questions.</p>
          </div>
          <RtlToGdsPipeline />
        </div>
      </section>

      {/* Cloud VLSI Lab Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className={`text-xs font-mono ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} uppercase tracking-widest`}>Cloud EDA Workstation</span>
          <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Experience the Cloud VLSI Lab</h2>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Write Verilog, compile designs, and run simulations instantly in your browser.</p>
        </div>
        <CloudVlsiLab />
      </section>

      {/* STA Timing Analysis Lab */}
      <section className={`py-24 border-y ${darkMode ? 'bg-[#090e1d]/50 border-slate-800' : 'bg-slate-100/60 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className={`text-xs font-mono ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} uppercase tracking-widest`}>Timing Closure Lab</span>
            <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Interactive Static Timing Analysis</h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Adjust clock periods and combinational delays to evaluate setup and hold slacks.</p>
          </div>
          <TimingAnalysisLab />
        </div>
      </section>

      {/* VLSI Programs Catalog */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-16">
          <div>
            <span className={`text-xs font-mono ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} uppercase tracking-widest`}>Industry Programs</span>
            <h2 className={`text-3xl sm:text-4xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Featured VLSI Programs</h2>
          </div>
          <Link href="/vlsi-programs" className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs border transition-colors ${darkMode ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700' : 'bg-slate-200 text-slate-900 border-slate-300 hover:bg-slate-300'}`}>
            <span>View All Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programsList.map((prog, idx) => (
            <div key={idx} className={`p-6 rounded-3xl border shadow-xl flex flex-col justify-between ${darkMode ? 'bg-[#0b1329] border-slate-700/80 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-500/10 text-blue-600'} px-2.5 py-0.5 rounded-full`}>{prog.level}</span>
                  <span className={`text-[10px] font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{prog.duration}</span>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{prog.name}</h3>
                <p className={`text-xs font-mono mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Tools: {prog.tools}</p>
              </div>
              <Link href={prog.link} className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs text-center transition-colors block">
                Program Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Silicon Challenge Arena */}
      <section className={`py-24 border-y ${darkMode ? 'bg-[#090e1d]/50 border-slate-800' : 'bg-slate-100/60 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className={`text-xs font-mono ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} uppercase tracking-widest`}>Gamified Engineering</span>
            <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Silicon Challenge Arena</h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Solve daily RTL bugs and timing optimization puzzles to earn XP and leaderboards.</p>
          </div>
          <ChallengeArena />
        </div>
      </section>

      {/* Skill Passport */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className={`text-xs font-mono ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} uppercase tracking-widest`}>Verified Credentials</span>
          <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Silphor Skill Passport</h2>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Verified skill badges endorsed by top semiconductor engineering leaders.</p>
        </div>
        <SkillPassport />
      </section>

      {/* Final CTA */}
      <section className={`py-24 border-t relative overflow-hidden text-center ${darkMode ? 'bg-gradient-to-br from-blue-950 via-[#0b1329] to-indigo-950 border-slate-800' : 'bg-gradient-to-br from-blue-100 via-white to-indigo-100 border-slate-200'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className={`text-3xl sm:text-5xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Ready to Build the Future of Semiconductor Technology?</h2>
          <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Learn, build, innovate, and grow with Silphor Technologies Private Limited.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/vlsi-programs" className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-xl shadow-blue-600/30 transition-all">
              Explore VLSI Programs
            </Link>
            <Link href="/contact" className={`px-6 py-3.5 rounded-xl font-medium text-sm transition-all ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700' : 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 shadow-sm'}`}>
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiModalOpen} onCloseExternalAI={() => setAiModalOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
