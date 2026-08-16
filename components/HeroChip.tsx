'use client';

import React, { useState } from 'react';
import { Cpu, Zap, Shield, Activity, Layers, Terminal } from 'lucide-react';

export default function HeroChip() {
  const [activeRegion, setActiveRegion] = useState<string | null>('RTL');

  const regions = [
    {
      id: 'RTL',
      name: 'RTL Design',
      desc: 'Register Transfer Level • Verilog',
      details: 'Translating architecture specs into synthesizable hardware descriptions with high optimization for power, performance, and area (PPA).',
      icon: Terminal,
      color: 'from-blue-600 to-orange-500',
    },
    {
      id: 'Verification',
      name: 'Design Verification',
      desc: 'Functional Verification • UVM',
      details: 'Ensuring 100% bug-free silicon using advanced constrained random testbenches, Universal Verification Methodology (UVM), and functional coverage metrics.',
      icon: Shield,
      color: 'from-orange-500 to-amber-600',
    },
    {
      id: 'Physical Design',
      name: 'Physical Design',
      desc: 'Floorplanning • CTS • STA',
      details: 'Transforming netlists into physical GDSII layouts with optimal timing closure, low power distribution, and zero DRC/LVS violations.',
      icon: Layers,
      color: 'from-blue-700 to-indigo-600',
    },
    {
      id: 'DFT',
      name: 'Design for Test (DFT)',
      desc: 'Scan insertion • ATPG • MBIST',
      details: 'Embedding built-in self-test and scan chains to guarantee manufacturing testability and high yield across semiconductor fabrication.',
      icon: Activity,
      color: 'from-amber-600 to-orange-700',
    },
    {
      id: 'RISC-V',
      name: 'RISC-V Architecture',
      desc: 'Open ISA • Custom SoC Core',
      details: 'Designing bespoke processors and custom instruction set accelerators for next-generation AI and edge computing silicon.',
      icon: Cpu,
      color: 'from-orange-500 via-amber-500 to-blue-600',
    }
  ];

  const currentInfo = regions.find(r => r.id === activeRegion) || regions[0];

  return (
    <div className="relative w-full max-w-lg md:max-w-xl mx-auto bg-[#0b1329]/95 border border-orange-500/30 rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col justify-between overflow-hidden space-y-4">
      {/* Background Circuit Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      {/* Header Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono">
          <Zap className="w-3.5 h-3.5 animate-bounce" />
          <span>Silphor Silicon Core v4.2</span>
        </div>
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Interactive Die</span>
      </div>

      {/* Central Interactive Chip Die Grid (All 5 blocks neatly gridded) */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {regions.map((region) => {
          const Icon = region.icon;
          const isActive = activeRegion === region.id;
          return (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              onMouseEnter={() => setActiveRegion(region.id)}
              className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-300 flex items-start gap-2.5 ${
                isActive 
                  ? 'bg-[#131f47] border-orange-500 shadow-lg shadow-orange-500/20 scale-[1.02]' 
                  : 'bg-[#080E24]/80 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className={`p-2 rounded-xl bg-gradient-to-br ${region.color} text-white shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-white text-xs truncate">{region.name}</h4>
                <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{region.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Tooltip / Information Bar */}
      <div className="relative z-10 p-3 sm:p-4 rounded-2xl bg-[#080E24]/90 border border-orange-500/30 backdrop-blur-md">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-orange-400 uppercase tracking-wide">{currentInfo.name}</span>
          <span className="text-[10px] font-mono bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded">Active Block</span>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed line-clamp-2">{currentInfo.details}</p>
      </div>
    </div>
  );
}
