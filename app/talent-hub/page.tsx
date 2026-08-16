'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Building2, Search, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function TalentHubPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const candidates = [
    {
      name: 'Verified Candidate #8401',
      role: 'Senior RTL & RISC-V Designer',
      score: '96 / 100',
      skills: ['Verilog', 'SystemVerilog', 'AXI4', 'RISC-V'],
      experience: '4 Years Experience',
      badge: 'Silicon Signoff Ready'
    },
    {
      name: 'Verified Candidate #9124',
      role: 'UVM Verification Lead',
      score: '94 / 100',
      skills: ['UVM', 'SystemVerilog', 'Assertions', 'Coverage'],
      experience: '5 Years Experience',
      badge: 'Top 1% Global'
    },
    {
      name: 'Verified Candidate #7332',
      role: 'Physical Design & STA Engineer',
      score: '91 / 100',
      skills: ['Innovus', 'PrimeTime', 'Floorplanning', 'CTS'],
      experience: '3 Years Experience',
      badge: 'Signoff Ready'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-mono">
            Silphor Talent Hub (Company Portal)
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Hire Verified Semiconductor Engineering Talent
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Search pre-screened RTL designers, verification experts, and physical design engineers with rigorously verified skill passports and lab test results.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3 w-full sm:w-auto flex-1">
            <Search className="w-5 h-5 text-slate-400" />
            <input type="text" placeholder="Filter by skill (e.g. UVM, STA, RISC-V, Innovus)..." className="w-full bg-transparent text-sm text-slate-200 focus:outline-none" />
          </div>
          <button onClick={() => alert('Search filters applied!')} className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-lg shadow-emerald-600/30 transition-all shrink-0">
            Search Candidates
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {candidates.map((c, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
                    {c.badge}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 font-bold">{c.score}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{c.name}</h3>
                  <p className="text-sm font-semibold text-cyan-300 mt-0.5">{c.role}</p>
                  <p className="text-xs text-slate-400">{c.experience}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {c.skills.map((s, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => alert('Interview request sent to candidate secure mailbox!')}
                className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition-all"
              >
                Request Technical Interview
              </button>
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
