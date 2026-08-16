'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { useParams } from 'next/navigation';
import { BookOpen, CheckCircle2, ArrowRight, Star, Clock, Cpu, Award, Shield, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function CourseDetailPageRoute() {
  const params = useParams();
  const id = (params?.id as string) || 'rtl-verification';
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  const courseData: Record<string, any> = {
    'rtl-verification': {
      title: 'Advanced ASIC RTL Design & Verification',
      category: 'Design & Verification',
      duration: '6 Months (24 Weeks)',
      level: 'Advanced',
      rating: '4.9/5 (1,240 reviews)',
      tools: 'Synopsys VCS, Verdi, Design Compiler, SystemVerilog, UVM',
      description: 'Master industry-standard RTL design and functional verification methodologies. Build robust UVM testbenches from scratch, write reusable VIPs, and achieve rigorous code and functional coverage on complex SoC blocks.',
      outcomes: [
        'Design complex ASIC RTL blocks in Verilog & SystemVerilog with low-power UPF annotations',
        'Architect reusable UVM testbenches with sequences, drivers, monitors, and scoreboards',
        'Verify AMBA AXI4 and AHB communication protocols with complete assertion checks',
        'Perform RTL synthesis using Design Compiler and debug waveforms with Verdi'
      ],
      syllabus: [
        { week: 'Weeks 1-4', title: 'Advanced Verilog & SystemVerilog OOP', topics: ['Interfaces, Virtual Interfaces & Modports', 'Classes, Inheritance, Polymorphism, & Parameterized Classes', 'Mailboxes, Semaphores, & Event Synchronization', 'Randomization, Constraints, & Distribution Weights'] },
        { week: 'Weeks 5-10', title: 'Universal Verification Methodology (UVM)', topics: ['UVM Architecture, Factory Pattern, & Phases', 'Sequence Items, Sequences, & Sequencers', 'Drivers, Monitors, Agents, & Scoreboards', 'Register Abstraction Layer (RAL) Integration'] },
        { week: 'Weeks 11-16', title: 'Protocol Verification & Assertions', topics: ['AMBA AXI4 / AHB Protocol Verification & Handshaking', 'SystemVerilog Assertions (SVA) - Concurrent & Immediate', 'Functional Coverage, Cross Coverage, & Binning', 'Code Coverage Closure & Debugging with Verdi'] },
        { week: 'Weeks 17-24', title: 'Synthesis & Timing Closure Essentials', topics: ['RTL Synthesis with Synopsys Design Compiler', 'Static Timing Analysis (STA) setup & hold fundamentals', 'Clock Domain Crossing (CDC) principles & synchronization', 'Capstone Tape-out Verification & Signoff Project'] }
      ]
    },
    'physical-design': {
      title: 'Physical Design & Timing Closure Masterclass',
      category: 'Physical Design',
      duration: '6 Months (24 Weeks)',
      level: 'Advanced',
      rating: '4.95/5 (980 reviews)',
      tools: 'Cadence Genus, Innovus, Synopsys PrimeTime',
      description: 'Comprehensive hands-on training on physical design flow from netlist to GDSII signoff. Learn advanced floorplanning, power planning, multi-corner multi-mode (MCMM) STA, and physical verification.',
      outcomes: [
        'Execute complete physical design flow from synthesized netlist to GDSII',
        'Perform floorplanning, aspect ratio management, and power ring/mesh generation',
        'Execute Clock Tree Synthesis (CTS), skew tuning, and hold buffer insertion',
        'Perform multi-corner multi-mode (MCMM) STA and DRC/LVS physical verification'
      ],
      syllabus: [
        { week: 'Weeks 1-4', title: 'Floorplanning & Power Grid Synthesis', topics: ['Floorplan Planning, Aspect Ratios, & Utilization', 'Pin Placement, Macro Management, & Blockages', 'Power Ring, Mesh, and Strip Generation (IR Drop)', 'Electromigration (EM) and Voltage Drop Mitigation'] },
        { week: 'Weeks 5-10', title: 'Placement & Clock Tree Synthesis (CTS)', topics: ['Standard Cell Placement & Congestion Optimization', 'Clock Tree Synthesis (CTS) & Skew / Latency Tuning', 'Hold Buffer Insertion & Crosstalk Prevention', 'Post-CTS Optimization & Timing Repair'] },
        { week: 'Weeks 11-16', title: 'Routing & Signal Integrity', topics: ['Global and Detailed Routing Strategies', 'Antenna Effect & Diode Insertion Rules', 'Signal Integrity, Crosstalk Noise, & SI Closure', 'ECO Implementation (Timing & Functional Patching)'] },
        { week: 'Weeks 17-24', title: 'Signoff STA & Physical Verification', topics: ['Multi-Corner Multi-Mode (MCMM) Setup & Hold Closure', 'Signoff STA with Synopsys PrimeTime', 'DRC, LVS, and ERC Physical Verification with Calibre', 'GDSII Database Final Streaming & Tape-out Signoff'] }
      ]
    },
    'riscv-soc': {
      title: 'RISC-V SoC Architecture & Implementation',
      category: 'SoC Architecture',
      duration: '5 Months (20 Weeks)',
      level: 'Advanced',
      rating: '4.88/5 (750 reviews)',
      tools: 'RISC-V GCC, Spike Simulator, Verilator, GTKWave',
      description: 'Design a fully functional 32-bit pipelined RISC-V processor core from microarchitecture specification to FPGA prototyping and software execution.',
      outcomes: [
        'Implement RV32I instruction set architecture in synthesizable Verilog',
        'Design 5-stage pipelined datapath with hazard detection and forwarding',
        'Integrate AXI-Lite interconnects, memory-mapped peripherals, and caches',
        'Synthesize and run bare-metal C programs on FPGA hardware development boards'
      ],
      syllabus: [
        { week: 'Weeks 1-4', title: 'RISC-V ISA & Microarchitecture Spec', topics: ['RV32I Instruction Set Architecture & Decoding', 'Single-cycle Processor Datapath & Control Unit', 'ALU Design & Immediate Generation Logic', 'Assembly Programming & GNU Toolchain Setup'] },
        { week: 'Weeks 5-10', title: 'Pipelining & Hazard Resolution', topics: ['5-Stage Pipeline Architecture (IF/ID/EX/MEM/WB)', 'Data Hazards & Forwarding Unit Implementation', 'Control Hazards & Branch Prediction Logic', 'Load-Use Data Hazard Stalls & Flushing'] },
        { week: 'Weeks 11-16', title: 'Cache & Memory Subsystems', topics: ['Direct-Mapped & Set-Associative Cache Design', 'AXI-Lite Bus Interconnect Protocol Master/Slave', 'Memory Mapped I/O (MMIO) Peripherals', 'UART Transmitter/Receiver & Timer Controller Integration'] },
        { week: 'Weeks 17-20', title: 'Verification & FPGA Prototyping', topics: ['Writing Self-Checking Verilog Testbenches', 'Verilator Fast C++ Simulation Workflow', 'FPGA Synthesis, Implementation, & On-Chip Debug', 'Final RISC-V SoC Capstone Project Presentation'] }
      ]
    },
    'uvm-specialist': {
      title: 'UVM & Functional Verification Specialist',
      category: 'Verification',
      duration: '4 Months (16 Weeks)',
      level: 'Intermediate',
      rating: '4.92/5 (620 reviews)',
      tools: 'SystemVerilog, UVM, Questa Sim, VCS',
      description: 'Deep dive into constrained random verification, functional coverage, scoreboards, assertions (SVA), and protocol compliance for complex SoC interfaces.',
      outcomes: [
        'Build scalable UVM verification environments from scratch',
        'Write complex functional coverage models, covergroups, and cross-bins',
        'Implement Register Abstraction Layers (RAL) for memory-mapped registers',
        'Achieve 100% verification closure on protocol controllers'
      ],
      syllabus: [
        { week: 'Weeks 1-4', title: 'Constrained Random Verification & SVA', topics: ['Advanced Randomization & Inline Constraints', 'SystemVerilog Assertions (SVA) for Protocol Checking', 'Immediate vs Concurrent Assertions', 'Property, Sequence, and Assert statements'] },
        { week: 'Weeks 5-8', title: 'Advanced UVM Architecture', topics: ['UVM Factory Overrides & Configuration Database', 'Virtual Sequences & Multi-Agent Coordination', 'Scoreboard Architectures & Self-Checking Predictors', 'Transaction-Level Modeling (TLM) Ports & Exports'] },
        { week: 'Weeks 9-12', title: 'Register Abstraction Layer (RAL)', topics: ['RAL Model Generation & Integration', 'Frontdoor vs Backdoor Access Methods', 'Built-in UVM RAL Test Sequences', 'Error Injection & Status Verification'] },
        { week: 'Weeks 13-16', title: 'Coverage Closure & Tapeout Project', topics: ['Functional Coverage Analysis & Metric Holes Fixing', 'Code Coverage Optimization & Waiver Management', 'Regression Test Suite Management with LSF/Grid', 'Final Verification Signoff Project Presentation'] }
      ]
    },
    'nano-fab': {
      title: 'Nano Fab & Semiconductor Process Engineering',
      category: 'Nano Fab & Process',
      duration: '4 Months (16 Weeks)',
      level: 'Advanced',
      rating: '4.96/5 (New)',
      tools: 'Cleanroom Simulation, Lithography, Yield Metrology',
      description: 'Specialized training for Process Engineers, Lithography Engineers, Yield & Metrology Specialists, and Integration Engineers covering semiconductor fabrication fundamentals.',
      outcomes: [
        'Understand semiconductor wafer cleaning, oxidation, and diffusion processes',
        'Master photolithography mask alignment, exposure, and photoresist chemistry',
        'Analyze chemical vapor deposition (CVD) and physical vapor deposition (PVD)',
        'Perform yield analysis, defect metrology, and CMOS process integration'
      ],
      syllabus: [
        { week: 'Weeks 1-4', title: 'Wafer Preparation & Oxidation', topics: ['Silicon Single Crystal Growth & Czochralski Method', 'Wafer Slicing, Polishing, & RCA Cleaning Protocols', 'Thermal Oxidation (Dry & Wet) & Deal-Grove Model', 'Diffusion Physics & Ion Implantation Fundamentals'] },
        { week: 'Weeks 5-8', title: 'Photolithography & Etching', topics: ['Photoresist Chemistry (Positive vs Negative Resists)', 'Optical Lithography, Steppers, & Resolution Limits', 'Plasma Etching, RIE, & Wet Chemical Etching', 'Planarization (CMP - Chemical Mechanical Planarization)'] },
        { week: 'Weeks 9-12', title: 'Thin Film Deposition & Metallization', topics: ['Chemical Vapor Deposition (CVD) & PECVD', 'Physical Vapor Deposition (PVD) & Sputtering', 'Atomic Layer Deposition (ALD) for High-k Dielectrics', 'Copper Interconnect Metallization & Dual Damascene'] },
        { week: 'Weeks 13-16', title: 'Yield, Metrology & CMOS Integration', topics: ['Defect Inspection, SEM, TEM, and Ellipsometry', 'Yield Modeling & Statistical Process Control (SPC)', 'Complete CMOS Process Flow Integration', 'Advanced FinFET & Gate-All-Around (GAA) Architectures'] }
      ]
    }
  };

  const course = courseData[id] || courseData['rtl-verification'];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link href="/courses" className="text-xs font-mono text-orange-400 hover:underline inline-flex items-center gap-1.5">
            ← Back to All Courses Catalog
          </Link>
        </div>

        {/* Hero Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0b1329] via-[#0B132B] to-[#1e1b4b] border border-slate-700/80 shadow-2xl relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono">
              {course.category}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
              {course.level}
            </span>
            <span className="text-xs font-mono text-slate-300 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {course.rating}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {course.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            {course.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400">Duration</span>
              <div className="text-white font-bold text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" /> {course.duration}
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400">Industry Tools</span>
              <div className="text-white font-bold text-sm flex items-center gap-2 truncate">
                <Cpu className="w-4 h-4 text-blue-400 shrink-0" /> <span className="truncate">{course.tools}</span>
              </div>
            </div>
            <div className="space-y-1 sm:col-span-2 lg:col-span-1">
              <span className="text-xs font-mono text-slate-400">Certification</span>
              <div className="text-white font-bold text-sm flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" /> Verified Skill Passport
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => {
                setEnrolled(true);
                alert(`Successfully enrolled in ${course.title}! Your learning dashboard has been updated.`);
              }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-orange-500 to-amber-500 hover:opacity-95 text-white font-semibold text-sm shadow-xl shadow-orange-500/30 transition-all flex items-center gap-2"
            >
              <span>{enrolled ? 'Enrolled Successfully ✔' : 'Enroll in Course Now'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/dashboard"
              className="px-8 py-4 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <span>View in Student Dashboard</span>
            </Link>
          </div>
        </div>

        {/* What You Will Master */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-2xl space-y-6">
          <h2 className="text-2xl font-bold text-white">What You Will Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.outcomes.map((outcome: string, idx: number) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#080E24] border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Curriculum Syllabus */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Comprehensive Curriculum</span>
              <h2 className="text-2xl font-bold text-white mt-1">Syllabus & Weekly Modules</h2>
            </div>
            <span className="px-4 py-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/30 text-xs font-mono w-fit">
              Hands-on EDA Lab Included
            </span>
          </div>

          <div className="space-y-6">
            {course.syllabus.map((mod: any, idx: number) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#080E24] border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <h3 className="text-lg font-bold text-white">{mod.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono w-fit">
                    {mod.week}
                  </span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {mod.topics.map((topic: string, tIdx: number) => (
                    <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
