'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Trophy, Award, BarChart3, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function LeaderboardPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const leaders = [
    { rank: 1, name: 'Alexandre Dubois', xp: '9,450 XP', category: 'RTL & Verification', badge: 'Grand Master' },
    { rank: 2, name: 'Priya Narayanan', xp: '8,920 XP', category: 'Physical Design & STA', badge: 'Expert' },
    { rank: 3, name: 'Marcus Chen', xp: '8,310 XP', category: 'RISC-V Architecture', badge: 'Expert' },
    { rank: 4, name: 'Elena Rostova', xp: '7,840 XP', category: 'UVM Verification', badge: 'Advanced' },
    { rank: 5, name: 'Arjun Mehta', xp: '7,500 XP', category: 'DFT & Testability', badge: 'Advanced' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-mono inline-flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5" /> Global Silphor Leaderboard
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Top Semiconductor Engineers & Designers
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Rankings based on verified lab achievements, challenge bug fixes, PPA optimization scores, and interview performance.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1329] border border-slate-700/85 shadow-xl space-y-6">
          <div className="space-y-4">
            {leaders.map((l) => (
              <div key={l.rank} className="p-5 rounded-2xl bg-[#080E24] border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                    l.rank === 1 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' :
                    l.rank === 2 ? 'bg-slate-300/20 text-slate-300 border border-slate-300/40' :
                    l.rank === 3 ? 'bg-amber-700/20 text-amber-600 border border-amber-700/40' :
                    'bg-slate-900 text-slate-400'
                  }`}>
                    #{l.rank}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">{l.name}</h3>
                    <p className="text-xs text-slate-400 font-mono">{l.category}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono hidden sm:inline-block">
                    {l.badge}
                  </span>
                  <span className="font-mono text-amber-400 font-bold text-sm">{l.xp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
