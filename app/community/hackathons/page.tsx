'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Award, ArrowRight, Clock, Trophy, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function HackathonsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [registered, setRegistered] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-mono inline-flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5" /> Silicon Hackathons
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Global PPA Optimization Hackathons
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Compete against global semiconductor engineers to optimize RTL designs for minimum area, best timing slack, and lowest dynamic power.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-[#0b1329] border border-slate-700/85 shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono">
                Active Challenge #14
              </span>
              <h3 className="text-2xl font-bold text-white">RISC-V 32-Bit PPA Power Reduction Challenge</h3>
            </div>
            <span className="px-4 py-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono text-xs font-bold flex items-center gap-2 w-fit">
              <Clock className="w-4 h-4" /> 48 Hours Remaining
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Optimize the provided 32-bit RISC-V pipeline core to achieve less than <code className="text-cyan-300">12,000 gate equivalents</code> while maintaining a clock frequency above <code className="text-cyan-300">500 MHz</code> under worst-case PVT corners.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-slate-400">1st Prize</span>
              <div className="text-amber-400 font-bold text-sm">$5,000 + Direct Interview</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-slate-400">Participants</span>
              <div className="text-cyan-400 font-bold text-sm">480 Engineers</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-slate-400">Evaluation</span>
              <div className="text-emerald-400 font-bold text-sm">Automated PPA Score</div>
            </div>
          </div>

          {!registered ? (
            <button
              onClick={() => setRegistered(true)}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-500 hover:opacity-95 text-white font-semibold text-xs shadow-xl shadow-amber-600/30 transition-all flex items-center justify-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              <span>Register Team & Download Starter RTL</span>
            </button>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 text-emerald-400 text-xs font-mono flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Registered successfully! Starter kit downloaded to your Cloud VLSI Lab workspace.</span>
            </div>
          )}
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
