'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Cpu, Shield, Zap, ArrowRight, CheckCircle2, Server, Code } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const services = [
    {
      title: 'ASIC RTL Design & Microarchitecture',
      desc: 'End-to-end RTL design for complex ASICs, SoCs, and AI accelerators. Expertise in AMBA protocols (AXI4, AHB, APB), RISC-V integration, and low-power architectures.',
      icon: Cpu,
      features: ['Microarchitecture Specification', 'Verilog / SystemVerilog RTL Coding', 'Low Power Design (UPF / CPF)', 'Clock Domain Crossing (CDC) Verification']
    },
    {
      title: 'Advanced Verification & UVM Services',
      desc: 'Comprehensive functional verification using UVM, constrained random testbenches, assertions (SVA), and protocol compliance for high-reliability chips.',
      icon: Shield,
      features: ['UVM Testbench Architecture', 'Protocol VIP Integration (PCIe, USB, AXI)', 'Code & Functional Coverage Closure', 'Formal Verification & Assertion Checks']
    },
    {
      title: 'Physical Design & Timing Closure',
      desc: 'Turnkey physical implementation from synthesized netlist to GDSII signoff. Expert floorplanning, placement, CTS, routing, and multi-corner STA signoff.',
      icon: Zap,
      features: ['Floorplanning & Power Grid Synthesis', 'Clock Tree Synthesis (CTS) & Skew Tuning', 'Setup, Hold, and Leakage Optimization', 'DRC / LTV Signoff & GDSII Generation']
    },
    {
      title: 'FPGA Prototyping & Emulation',
      desc: 'Rapid FPGA prototyping on Xilinx/AMD UltraScale and Intel Stratix platforms for early software bring-up and hardware verification.',
      icon: Server,
      features: ['ASIC-to-FPGA Partitioning', 'High-Speed Interface Integration', 'Embedded Software Co-Simulation', 'Hardware Debugging with Vivado / Quartus']
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Engineering Services</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Silicon Engineering & Consulting Services</h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Partner with Silphor Technologies for world-class ASIC design, rigorous verification, physical signoff, and custom IP development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{srv.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{srv.desc}</p>

                  <div className="space-y-2 pt-2">
                    {srv.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/contact" 
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-medium text-xs text-center border border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Service Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
