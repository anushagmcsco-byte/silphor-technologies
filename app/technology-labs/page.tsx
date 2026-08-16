'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Cpu, Sparkles, Terminal, BarChart3, ShieldCheck, Layers, ArrowRight, BookOpen, Zap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function TechnologyLabsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const labs = [
    {
      title: 'Silphor AI Code Debugger',
      desc: 'Analyze Verilog/SystemVerilog RTL, detect syntax & logic bugs, and generate verified testbenches instantly.',
      href: '/ai-debugger',
      icon: Sparkles,
      color: 'from-purple-600 to-indigo-600',
      badge: 'AI Powered'
    },
    {
      title: 'AI Waveform Analyzer',
      desc: 'Upload VCD/FST simulation logs to detect timing violations, clock races, and unexpected X/Z states.',
      href: '/ai-waveform',
      icon: BarChart3,
      color: 'from-blue-600 to-cyan-500',
      badge: 'Simulation Debug'
    },
    {
      title: 'AI STA Assistant',
      desc: 'Analyze Static Timing Analysis (STA) reports, SDC constraints, setup/hold violations, and critical paths.',
      href: '/ai-sta',
      icon: Terminal,
      color: 'from-emerald-600 to-teal-500',
      badge: 'Timing Closure'
    },
    {
      title: 'RTL → Netlist Explorer',
      desc: 'Visualize animated transformations from high-level Verilog RTL down to synthesized gate-level netlists.',
      href: '/rtl-netlist',
      icon: Cpu,
      color: 'from-amber-600 to-orange-500',
      badge: 'Synthesis'
    },
    {
      title: 'Chip Floorplan Studio',
      desc: 'Interactive chip floorplanning tool for macro placement, power grid synthesis, and congestion analysis.',
      href: '/floorplan',
      icon: Layers,
      color: 'from-indigo-600 to-violet-500',
      badge: 'Physical Design'
    },
    {
      title: 'Virtual Tapeout Center',
      desc: 'End-to-end 13-stage verification pipeline from RTL specification to final GDSII streaming and signoff.',
      href: '/virtual-tapeout',
      icon: ShieldCheck,
      color: 'from-cyan-600 to-blue-600',
      badge: 'Flagship Pipeline'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 text-xs font-mono">
            Silphor Technology Labs
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Build. Simulate. Analyze. Optimize.
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Explore advanced semiconductor engineering workstations, AI-powered design assistants, and complete hardware verification toolchains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labs.map((lab, idx) => {
            const IconComp = lab.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl bg-[#0b1329] border border-slate-700/85 shadow-xl flex flex-col justify-between space-y-6 hover:border-cyan-500/50 transition-all group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${lab.color} flex items-center justify-center text-white shadow-lg`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
                      {lab.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{lab.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{lab.desc}</p>
                </div>

                <Link 
                  href={lab.href}
                  className="py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-xs border border-slate-800 flex items-center justify-between transition-all group-hover:border-cyan-500/40"
                >
                  <span>Open Engineering Lab</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
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
