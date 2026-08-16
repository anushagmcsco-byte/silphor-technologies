'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Briefcase, CheckCircle2, ArrowRight, Sparkles, Award, BookOpen, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function CareerPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const tracks = [
    {
      title: 'RTL Design Engineer',
      level: 'Entry to Senior',
      openings: '14 Active Roles',
      skills: 'Verilog, SystemVerilog, AMBA AXI, Low Power UPF',
      desc: 'Design high-performance SoC blocks, RISC-V compute cores, and power-optimized controllers.'
    },
    {
      title: 'Functional Verification Specialist',
      level: 'Mid to Advanced',
      openings: '22 Active Roles',
      skills: 'UVM, SystemVerilog, Assertions (SVA), Coverage Closure',
      desc: 'Build robust UVM testbenches, verification IPs, and achieve rigorous functional coverage closure.'
    },
    {
      title: 'Physical Design & STA Engineer',
      level: 'Advanced',
      openings: '18 Active Roles',
      skills: 'Cadence Innovus, Synopsys PrimeTime, Floorplanning, CTS',
      desc: 'Take netlists to GDSII signoff, manage timing closure, and resolve multi-mode multi-corner DRC/LVS.'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 text-xs font-mono">
            Silphor Career Center
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Accelerate Your Semiconductor Career
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Connect directly with 120+ tier-1 semiconductor hiring partners in Bengaluru, Hyderabad, Austin, and Munich through verified skill passports and direct placement pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono">
                    {track.level}
                  </span>
                  <span className="text-xs font-mono text-cyan-400">{track.openings}</span>
                </div>

                <h3 className="text-2xl font-bold text-white">{track.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{track.desc}</p>

                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">Required Skills</span>
                  <p className="text-xs text-slate-200 font-mono">{track.skills}</p>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs text-center shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Apply for Placement Track</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
