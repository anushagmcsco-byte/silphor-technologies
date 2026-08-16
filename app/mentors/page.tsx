'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { User, Award, ArrowRight, Star, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function MentorsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const mentors = [
    {
      name: 'Dr. Ramesh Kumar',
      role: 'Principal SoC Architect',
      company: 'Ex-Intel / Broadcom',
      expertise: 'RTL Design, Low Power, AMBA AXI',
      rating: '4.9 (120+ sessions)',
      badge: 'Available Today'
    },
    {
      name: 'Ananya Sharma',
      role: 'Lead Verification Architect',
      company: 'Ex-Qualcomm / NVIDIA',
      expertise: 'UVM, SystemVerilog, Protocol Verification',
      rating: '5.0 (95+ sessions)',
      badge: 'Available Tomorrow'
    },
    {
      name: 'Vikram Sundaram',
      role: 'Senior Physical Design Fellow',
      company: 'Ex-AMD / ARM',
      expertise: 'STA, Floorplanning, CTS, GDSII Signoff',
      rating: '4.8 (110+ sessions)',
      badge: 'Available This Week'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-mono">
            Silphor Industry Mentors
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Learn Directly from Principal Silicon Architects
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Book 1:1 expert guidance sessions for architectural code reviews, complex debugging, timing closure advice, and mock interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((m, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono">
                    {m.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-mono">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{m.rating}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">{m.name}</h3>
                  <p className="text-sm font-semibold text-blue-400 mt-0.5">{m.role}</p>
                  <p className="text-xs text-slate-400">{m.company}</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">Specialization</span>
                  <p className="text-xs text-slate-200">{m.expertise}</p>
                </div>
              </div>

              <button 
                onClick={() => alert(`Booking request sent for ${m.name}! A calendar invite will be emailed shortly.`)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 1:1 Mentor Session</span>
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
