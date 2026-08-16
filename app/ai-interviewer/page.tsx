'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Sparkles, Briefcase, Award, CheckCircle2, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function AiInterviewerPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [mode, setMode] = useState('RTL & Verification');
  const [started, setStarted] = useState(false);
  const [answer, setAnswer] = useState('');
  const [evaluated, setEvaluated] = useState(false);

  const handleEvaluate = () => {
    setEvaluated(true);
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/40 text-xs font-mono inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Silphor AI Interviewer
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Mock Semiconductor Technical Interviews
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Practice tier-1 MNC interviews (Intel, Qualcomm, Broadcom, NVIDIA) with real-time AI technical evaluation, scoring, and feedback.
          </p>
        </div>

        {!started ? (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0b1329] border border-slate-700/85 shadow-xl space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">Select Interview Domain</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['RTL & Verification', 'Physical Design & STA', 'RISC-V Architecture', 'DFT & Testability'].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`p-4 rounded-2xl border text-left text-xs font-semibold transition-all ${
                      mode === m ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {m} Interview Track
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStarted(true)}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Start Mock Interview Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0b1329] border border-slate-700/85 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-cyan-400">Question 1 of 5 ({mode})</span>
              <span className="text-xs font-mono text-amber-400">AI Evaluator Active</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-white font-medium">
              "Explain setup time and hold time violations, and describe 3 methods to fix a setup time violation in a high-speed ASIC data path."
            </div>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows={6}
              placeholder="Type your technical response here..."
              className="w-full p-4 rounded-2xl bg-[#080E24] border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-blue-500 resize-none"
            />

            {!evaluated ? (
              <button
                onClick={handleEvaluate}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all"
              >
                Submit Answer for AI Evaluation
              </button>
            ) : (
              <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Technical Evaluation Complete</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">Score: 88 / 100</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Excellent explanation of clock skew and combinational logic depth. To improve further, mention multi-vt cell swapping and gate resizing techniques.
                </p>
                <button
                  onClick={() => { setStarted(false); setEvaluated(false); setAnswer(''); }}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
                >
                  Next Question / Restart
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
