'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Cpu, Terminal, Shield, ArrowRight, CheckCircle2, BookOpen, Layers } from 'lucide-react';
import Link from 'next/link';

export default function TechnologyPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const techPillars = [
    {
      title: 'Advanced EDA Tool Orchestration',
      desc: 'Seamless integration with Synopsys (VCS, Verdi, Design Compiler, PrimeTime) and Cadence (Genus, Innovus) toolchains via our cloud containerized infrastructure.',
      icon: Terminal
    },
    {
      title: 'RISC-V Open Standard Ecosystem',
      desc: 'Custom instruction set extensions, vector processing units, and multi-core coherent interconnects built entirely on open RISC-V architectures.',
      icon: Cpu
    },
    {
      title: 'AI-Augmented Verification & Signoff',
      desc: 'Proprietary machine learning models that predict routing congestion, identify functional coverage gaps, and accelerate timing closure convergence.',
      icon: Layers
    },
    {
      title: 'Robust Silicon Security & Cryptography',
      desc: 'Hardware roots of trust, side-channel attack mitigation, and post-quantum cryptographic accelerators embedded directly into SoC pipelines.',
      icon: Shield
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Silphor Core Technology</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Next-Generation Silicon Architecture</h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Discover the cutting-edge EDA pipelines, RISC-V frameworks, and AI-accelerated methodologies powering Silphor Technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techPillars.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{tech.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/60 to-cyan-950/60 border border-blue-800/40 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Experience Our Cloud EDA Lab</h3>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Test Verilog simulation, waveform analysis, and Static Timing Analysis directly in your browser.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/cloud-vlsi-lab" 
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <span>Launch Cloud VLSI Lab</span>
              <ArrowRight className="w-4 h-4" />
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
