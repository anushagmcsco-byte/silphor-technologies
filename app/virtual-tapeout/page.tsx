'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { ShieldCheck, CheckCircle2, Clock, AlertTriangle, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function VirtualTapeoutPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    { name: '1. RTL Specification', status: 'Passed', score: '100%', desc: 'RTL syntax check and linting completed.' },
    { name: '2. Functional Verification', status: 'Passed', score: '98%', desc: 'UVM testbench assertions and coverage closure verified.' },
    { name: '3. Logic Synthesis', status: 'Passed', score: '95%', desc: 'Design Compiler netlist generated successfully.' },
    { name: '4. Static Timing Analysis (STA)', status: 'Warning', score: '82%', desc: '1 setup violation detected on ALU data path.' },
    { name: '5. DFT & Scan Insertion', status: 'Passed', score: '100%', desc: 'Boundary scan chains and ATPG test patterns inserted.' },
    { name: '6. Physical Design & Floorplan', status: 'Passed', score: '90%', desc: 'Core utilization at 75%, macros placed.' },
    { name: '7. Clock Tree Synthesis (CTS)', status: 'Passed', score: '94%', desc: 'Skew and latency optimized across 1,200 clock sinks.' },
    { name: '8. Detailed Routing & SI', status: 'Passed', score: '88%', desc: 'Signal integrity and crosstalk mitigation verified.' },
    { name: '9. DRC & LVS Signoff', status: 'Passed', score: '100%', desc: 'Zero design rule errors and netlist layout matches.' },
    { name: '10. IR Drop & EM Analysis', status: 'Warning', score: '85%', desc: 'Minor voltage drop on power grid VDD mesh.' },
    { name: '11. Power & Area Signoff', status: 'Passed', score: '92%', desc: 'Total static and dynamic power within thermal budget.' },
    { name: '12. GDSII Streaming', status: 'Passed', score: '100%', desc: 'Final OASIS / GDSII database compressed and validated.' },
    { name: '13. Virtual Tapeout Ready', status: 'Ready', score: '91%', desc: 'Ready for foundry submission and fabrication.' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-mono flex items-center justify-center gap-1.5 w-fit mx-auto">
            <ShieldCheck className="w-3.5 h-3.5" /> Silphor Virtual Tapeout Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            End-to-End Semiconductor Tapeout Pipeline
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Monitor all 13 stages of ASIC implementation from RTL specification to GDSII streamout and foundry signoff readiness.
          </p>
        </div>

        {/* Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((st, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`p-6 rounded-3xl bg-[#0b1329] border transition-all cursor-pointer shadow-xl space-y-4 ${
                activeStage === idx ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-slate-700/80 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-bold">{st.name}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${
                  st.status === 'Passed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
                  st.status === 'Warning' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' :
                  'bg-blue-500/10 text-blue-400 border-blue-500/30'
                }`}>
                  {st.status}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>Stage Score</span>
                  <span className="text-white font-bold">{st.score}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: st.score }}></div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Action / CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-800/40 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Virtual Tapeout Readiness: 91% (Signoff Ready)</h3>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">
            All DRC/LVS checks passed successfully. Ready for final GDSII signoff streamout.
          </p>
          <button 
            onClick={() => confetti({ particleCount: 120, spread: 90, origin: { y: 0.6 } })}
            className="px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-xl shadow-cyan-600/30 transition-all inline-flex items-center gap-2"
          >
            <span>Streamout Final GDSII Database</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
