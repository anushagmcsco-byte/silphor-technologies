'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { BookOpen, CheckCircle2, ArrowRight, Sparkles, Terminal, Shield, Cpu, Clock, Award, Users } from 'lucide-react';
import Link from 'next/link';

export default function VlsiProgramsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const programs = [
    {
      id: 'rtl-verification',
      title: 'Advanced ASIC RTL Design & Verification',
      category: 'Design & Verification',
      duration: '6 Months',
      level: 'Advanced',
      rating: '4.9/5 (1,240 reviews)',
      tools: 'Synopsys VCS, Verdi, Design Compiler, SystemVerilog, UVM',
      desc: 'Master industry-standard RTL design and functional verification methodologies. Benchmarked with ChipXpert curriculum standards. Build robust UVM testbenches from scratch, write reusable VIPs, and achieve rigorous coverage on complex SoC blocks.',
      modules: ['Advanced Verilog & SystemVerilog OOP', 'UVM Architecture & Phases', 'AMBA AXI4 / AHB Protocol Verification', 'Synthesis & Timing Closure Essentials']
    },
    {
      id: 'physical-design',
      title: 'Physical Design & Timing Closure Masterclass',
      category: 'Physical Design / Backend',
      duration: '6 Months',
      level: 'Advanced',
      rating: '4.95/5 (980 reviews)',
      tools: 'Cadence Genus, Innovus, Synopsys PrimeTime',
      desc: 'Comprehensive hands-on training on physical design flow from netlist to GDSII signoff. Learn advanced floorplanning, power planning, multi-corner multi-mode (MCMM) STA, and physical verification.',
      modules: ['Floorplanning & Power Grid Synthesis', 'Standard Cell Placement & CTS', 'Routing, SI, & ECO Implementation', 'Signoff STA & GDSII Streaming']
    },
    {
      id: 'riscv-soc',
      title: 'RISC-V SoC Architecture & Implementation',
      category: 'SoC Architecture',
      duration: '5 Months',
      level: 'Advanced',
      rating: '4.88/5 (750 reviews)',
      tools: 'RISC-V GCC, Spike Simulator, Verilator, GTKWave',
      desc: 'Design a fully functional 32-bit pipelined RISC-V processor core from microarchitecture specification to FPGA prototyping and software execution.',
      modules: ['RV32I ISA & 5-Stage Datapath', 'Hazard Resolution & Forwarding', 'AXI-Lite Bus Interconnect & Caches', 'FPGA Prototyping & SoC Debug']
    },
    {
      id: 'uvm-specialist',
      title: 'UVM & Functional Verification Specialist',
      category: 'Verification',
      duration: '4 Months',
      level: 'Intermediate',
      rating: '4.92/5 (620 reviews)',
      tools: 'SystemVerilog, UVM, Questa Sim, VCS',
      desc: 'Deep dive into constrained random verification, functional coverage, scoreboard architecture, register abstraction layer (RAL), and assertion-based verification.',
      modules: ['Constrained Random & Assertions (SVA)', 'Advanced UVM Scoreboards & Checkers', 'Register Abstraction Layer (RAL)', 'Coverage-Driven Verification Closure']
    },
    {
      id: 'nano-fab',
      title: 'Nano Fab & Semiconductor Process Engineering',
      category: 'Nano Fab & Process',
      duration: '4 Months',
      level: 'Advanced',
      rating: '4.96/5 (New)',
      tools: 'Cleanroom Simulation, Lithography, Yield Metrology',
      desc: 'Specialized training for Process Engineers, Lithography Engineers, Yield & Metrology Specialists, and Integration Engineers covering semiconductor fabrication fundamentals.',
      modules: ['Photolithography & Etch Techniques', 'Thin Film Deposition & Oxidation', 'Yield Analysis & Defect Metrology', 'CMOS Process Integration']
    }
  ];

  const filteredPrograms = activeCategory === 'All' 
    ? programs 
    : programs.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 text-xs font-mono">
            Industry Certification Programs
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Immersive VLSI Training & Career Tracks
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Gain production-ready ASIC design, verification, and physical implementation skills. Backed by 24/7 cloud EDA labs, real tape-out projects, and direct placement support with semiconductor MNCs.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {['All', 'Design & Verification', 'Physical Design', 'SoC Architecture', 'Verification', 'Nano Fab & Process'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-mono transition-all border ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30' 
                  : 'bg-[#0b1329] text-slate-300 border-slate-700/80 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrograms.map((prog) => (
            <div key={prog.id} className="p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono">
                    {prog.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {prog.duration}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{prog.level}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">{prog.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{prog.desc}</p>

                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">Toolchain Stack</span>
                  <p className="text-xs text-slate-200 font-mono">{prog.tools}</p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Key Curriculum Modules</span>
                  {prog.modules.map((mod, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <Link 
                  href={`/vlsi-programs/${prog.id}`} 
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs text-center shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>View Full Syllabus & Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact" 
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-all text-center"
                >
                  Apply
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why choose Silphor programs */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0b1329] via-[#0B132B] to-[#1e1b4b] border border-slate-700/80 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">The Silphor Advantage</span>
            <h2 className="text-3xl font-bold text-white">Why Engineers Choose Silphor</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-500/30 flex items-center justify-center font-mono font-bold">01</div>
              <h3 className="text-lg font-bold text-white">24/7 Cloud EDA Access</h3>
              <p className="text-xs text-slate-300 leading-relaxed">No expensive software licenses needed. Access Synopsys & Cadence toolchains directly in your browser.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono font-bold">02</div>
              <h3 className="text-lg font-bold text-white">Real Tape-Out Projects</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Build production-grade UVM testbenches and RISC-V SoC architectures used in actual commercial tape-outs.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-mono font-bold">03</div>
              <h3 className="text-lg font-bold text-white">Guaranteed Placement Support</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Direct interview pipelines with top semiconductor MNCs in Bengaluru, Hyderabad, and worldwide.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
