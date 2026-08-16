'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Cpu, Shield, Zap, ArrowRight, CheckCircle2, Server, Database, Activity } from 'lucide-react';
import Link from 'next/link';

export default function SolutionsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const solutions = [
    {
      title: 'Automotive & ASIL-D Safety SoCs',
      desc: 'High-reliability semiconductor solutions designed for ISO 26262 ASIL-D functional safety compliance in autonomous driving and EV powertrains.',
      icon: Shield,
      features: ['Dual-Core Lockstep Architectures', 'Built-In Self-Test (BIST) IP Integration', 'Fault Injection & Coverage Verification', 'Robust Thermal & Voltage Monitoring']
    },
    {
      title: 'AI & Edge Neural Accelerators',
      desc: 'Custom ASIC and FPGA hardware architectures tailored for low-latency matrix multiplication, transformer inference, and edge computer vision.',
      icon: Cpu,
      features: ['Custom Systolic Array Processing Elements', 'Quantized Precision Support (INT8/FP16)', 'High-Bandwidth Memory (HBM) Interfaces', 'Ultra-Low Power Leakage Management']
    },
    {
      title: '5G / 6G Telecom & Networking ASICs',
      desc: 'High-throughput packet processing, ultra-low latency MAC/PHY layers, and multi-gigabit serial-deserializer (SerDes) integration.',
      icon: Activity,
      features: ['100G/400G Ethernet MAC IP Integration', 'Low-Jitter Phase Locked Loops (PLL)', 'Advanced Clock Domain Crossing (CDC) Checks', 'Rigorous Multi-Corner STA Signoff']
    },
    {
      title: 'IoT & Ultra-Low-Power Edge Nodes',
      desc: 'Energy-harvesting compatible microcontroller units (MCUs) featuring deep-sleep power gating and secure hardware enclaves.',
      icon: Zap,
      features: ['Sub-Threshold Voltage Operation', 'Hardware Root of Trust & Cryptographic Cores', 'Ultra-Compact Floorplanning & Placement', 'Advanced UPF Power State Verification']
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Industry Solutions</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Domain-Specific Silicon Solutions</h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Delivering robust, silicon-proven architectures across Automotive, Edge AI, 5G Telecommunications, and Ultra-Low-Power IoT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{sol.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{sol.desc}</p>

                  <div className="space-y-2 pt-2">
                    {sol.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/contact" 
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white font-medium text-xs text-center border border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Solution Architecture</span>
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
