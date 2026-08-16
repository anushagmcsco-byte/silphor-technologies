'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { useParams } from 'next/navigation';
import { CheckCircle2, ArrowRight, BookOpen, Cpu, Clock, Award, Shield, Terminal, FileText, Check } from 'lucide-react';
import Link from 'next/link';

export default function CourseDetailPage() {
  const params = useParams();
  const id = (params?.id as string) || 'rtl-verification';
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

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
      category: 'Physical Design / Backend',
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
        { week: 'Weeks 13-16', title: 'Coverage Closure & Debug', topics: ['Functional Coverage Planning & Metric Analysis', 'Code Coverage (Toggle, FSM, Branch, Statement)', 'Finding & Fixing Corner-Case Bugs', 'Final Verification Project Signoff'] }
      ]
    }
  };

  const course = courseData[id] || courseData['rtl-verification'];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Course Header */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0b1329] via-[#0B132B] to-[#1e1b4b] border border-slate-700/80 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 text-xs font-mono">
                {course.category}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-mono">
                {course.level}
              </span>
              <span className="text-xs font-mono text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" /> {course.duration}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">{course.title}</h1>
            
            <p className="text-slate-300 text-base leading-relaxed">{course.description}</p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">Industry Toolchain Stack</span>
              <p className="text-sm text-slate-200 font-mono">{course.tools}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 transition-all flex items-center gap-2"
              >
                <span>Enroll in Program</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/cloud-vlsi-lab" 
                className="px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Test Cloud EDA Lab</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Key Learning Outcomes</span>
              <h3 className="text-xl font-bold text-white">What You Will Master</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.outcomes.map((outcome: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Curriculum */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Comprehensive Curriculum</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1">Syllabus & Learning Modules</h2>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">Industry Verified Syllabus</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {course.syllabus.map((mod: any, idx: number) => (
              <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white">{mod.title}</h3>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40 w-fit">{mod.week}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {mod.topics.map((topic: string, i: number) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs text-slate-300 font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-800/40 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to Transform Your VLSI Career?</h3>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Join thousands of silicon engineers placed at tier-1 semiconductor MNCs across Bengaluru, Hyderabad, and worldwide.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-lg shadow-blue-600/30 transition-all"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
