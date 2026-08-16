'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Terminal, Sparkles, AlertTriangle, CheckCircle2, Play } from 'lucide-react';
import Link from 'next/link';

export default function AiStaPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleRun = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 1200);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-mono flex items-center justify-center gap-1.5 w-fit mx-auto">
            <Terminal className="w-3.5 h-3.5" /> Silphor AI STA Assistant
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Static Timing Analysis & Closure Studio
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Upload STA reports, SDC constraint files, or PrimeTime logs to identify setup violations, hold violations, clock skew, and critical paths.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Report Input */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1329] border border-slate-700/85 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white">STA Report & SDC Constraints</h3>
            
            <textarea
              rows={12}
              className="w-full p-4 rounded-2xl bg-[#080E24] border border-slate-800 font-mono text-xs text-slate-200 focus:outline-none focus:border-emerald-500 resize-none"
              defaultValue={`# PrimeTime Timing Report - Corner: fast_125c
Path 1: VIOLATED (-0.34ns slack)
  Startpoint: u_cpu/pc_reg[3] (rising edge-triggered flip-flop)
  Endpoint:   u_alu/operand_b_reg[3] (rising edge-triggered flip-flop)
  Clock:      clk_core (period 2.50ns)
  Data Delay: 2.78ns
  Logic Levels: 14 levels of combinational standard cells`}
            />

            <button
              onClick={handleRun}
              disabled={analyzing}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 text-white font-semibold text-sm shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
            >
              {analyzing ? <Sparkles className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
              <span>{analyzing ? 'Analyzing Critical Path...' : 'Run AI STA Diagnostic'}</span>
            </button>
          </div>

          {/* Critical Path & Recommendations */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1329] border border-slate-700/85 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Critical Path Breakdown</h3>

              {analyzed ? (
                <div className="space-y-4 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-red-950/20 border border-red-800/40 space-y-2">
                    <div className="flex justify-between text-red-400 font-bold">
                      <span>Setup Violation</span>
                      <span>Slack: -0.34 ns</span>
                    </div>
                    <div className="text-[11px] text-slate-300 space-y-1">
                      <p>Startpoint: <span className="text-cyan-300">u_cpu/pc_reg[3]</span></p>
                      <p>Logic Depth: <span className="text-amber-300">14 combinational gates</span></p>
                      <p>Endpoint: <span className="text-cyan-300">u_alu/operand_b_reg[3]</span></p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold uppercase tracking-widest text-[10px] block">AI Optimization Recommendation</span>
                    <p className="text-slate-300 font-sans text-xs leading-relaxed">
                      1. Pipeline the ALU operand multiplexer to reduce combinational logic depth from 14 to 7 levels.<br />
                      2. Resize upstream drivers from x1 to x4 drive strength.<br />
                      3. Check clock skew on register bank 3.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center text-slate-400 space-y-3">
                  <Terminal className="w-10 h-10 text-slate-600 animate-pulse" />
                  <p className="text-xs">Click 'Run AI STA Diagnostic' to evaluate setup/hold slack and critical paths.</p>
                </div>
              )}
            </div>

            {analyzed && (
              <button 
                onClick={() => alert('SDC constraints and pipelining recommendations exported!')}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700"
              >
                Export Optimized SDC Constraints
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
