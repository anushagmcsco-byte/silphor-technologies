'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Award, Sparkles, CheckCircle2, ArrowRight, User, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function CareerTwinPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/40 text-xs font-mono inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Silphor AI Career Twin
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Personalized Semiconductor Career Roadmap
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Your AI Career Twin analyzes your verified skill passport, lab projects, and interview scores to forecast role readiness and recommend targeted growth paths.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-[#0b1329] border border-slate-700/85 shadow-xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">Role Readiness Forecast</span>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span>RTL Design Engineer</span>
                    <span className="text-emerald-400 font-bold">88% Ready</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[88%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span>Verification Engineer (UVM)</span>
                    <span className="text-cyan-400 font-bold">94% Ready</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-cyan-500 w-[94%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span>Physical Design Specialist</span>
                    <span className="text-amber-400 font-bold">72% Ready</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-amber-500 w-[72%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">AI Recommended Next Steps</span>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Complete the Advanced STA Timing Closure Capstone Lab.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Practice 3 more AXI protocol verification mock interviews.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Contribute to open-source RISC-V SoC repository.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link 
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <span>Schedule 1:1 Career Consultation</span>
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
