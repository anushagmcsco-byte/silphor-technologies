'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import ChallengeArena from '@/components/ChallengeArena';
import { Trophy, Flame, CheckCircle, ArrowRight, Zap, Code, Shield, Terminal, Clock, Award } from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function ChallengesPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [solvedList, setSolvedList] = useState<Record<number, boolean>>({});

  const challenges = [
    {
      id: 1,
      title: 'Synchronous FIFO Pointer Rollover Bug',
      category: 'RTL Design & Bug Fix',
      difficulty: 'Intermediate',
      xp: 250,
      desc: 'Identify and fix the pointer rollover logic bug in a non-power-of-two synchronous FIFO module.',
      code: `always_ff @(posedge clk or posedge rst) begin\n  if (rst) wr_ptr <= 0;\n  else if (wr_en && !full)\n    wr_ptr <= (wr_ptr == DEPTH-1) ? 0 : wr_ptr + 1;\nend`
    },
    {
      id: 2,
      title: 'Clock Domain Crossing (CDC) Synchronizer Race',
      category: 'CDC & Timing Verification',
      difficulty: 'Advanced',
      xp: 400,
      desc: 'Resolve metastability issues in a multi-stage flip-flop synchronizer passing control signals across asynchronous clock domains.',
      code: `// Fix 2-flop synchronizer metastability window\nalways_ff @(posedge dest_clk or posedge rst) begin\n  if (rst) {q2, q1} <= 2'b00;\n  else     {q2, q1} <= {q1, async_sig};\nend`
    },
    {
      id: 3,
      title: 'AXI4-Lite Ready/Valid Handshake Deadlock',
      category: 'Protocol Verification',
      difficulty: 'Expert',
      xp: 600,
      desc: 'Fix the combinatorial loop and handshake deadlock condition in an AXI4-Lite slave address write channel.',
      code: `// AXI4-Lite AWREADY / AWVALID handshake state machine\nassign awready = ~s_aw_issued && wvalid;\nalways_ff @(posedge clk) begin\n  if (s_awready && s_awvalid) s_aw_issued <= 1'b1;\nend`
    }
  ];

  const handleSolveChallenge = (id: number) => {
    setSolvedList(prev => ({ ...prev, [id]: true }));
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-mono">
            Silicon Challenge Arena
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Daily RTL Debugging & Verification Arena
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Test your Verilog, SystemVerilog, UVM, and timing closure skills with real-world silicon bug fixes. Earn XP and climb the Global Silphor Leaderboard.
          </p>
        </div>

        {/* Featured Daily Challenge */}
        <ChallengeArena />

        {/* Challenge List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Active Challenges</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1">Available Silicon Quests</h2>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">Updated Daily</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {challenges.map((ch) => {
              const isSolved = solvedList[ch.id];
              return (
                <div key={ch.id} className="p-6 sm:p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono">
                          {ch.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono">
                          {ch.difficulty}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white pt-2">{ch.title}</h3>
                    </div>

                    <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono flex items-center gap-1.5 w-fit">
                      <Flame className="w-4 h-4" /> +{ch.xp} XP Reward
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">{ch.desc}</p>

                  <div className="p-4 rounded-2xl bg-[#080E24] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                    <pre>{ch.code}</pre>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span>Automated Testbench & Assertions Active</span>
                    </div>

                    {isSolved ? (
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold bg-emerald-950/40 px-4 py-2 rounded-xl border border-emerald-800/50">
                        <CheckCircle className="w-4 h-4" /> Completed (+{ch.xp} XP)
                      </div>
                    ) : (
                      <button
                        onClick={() => handleSolveChallenge(ch.id)}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-95 text-white font-medium text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                      >
                        <Zap className="w-4 h-4" />
                        <span>Submit Fix & Verify</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
