'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const jobs = [
    {
      title: 'Senior RTL Design Engineer',
      dept: 'ASIC Design',
      location: 'Bengaluru, India (#45 East Link Road)',
      type: 'Full-time',
      exp: '4 - 8 Years',
      desc: 'Seeking experienced RTL designers with deep expertise in Verilog, SystemVerilog, AMBA AXI protocols, and low-power ASIC design.'
    },
    {
      title: 'UVM Verification Lead',
      dept: 'Functional Verification',
      location: 'Bengaluru / Hybrid',
      type: 'Full-time',
      exp: '5 - 10 Years',
      desc: 'Lead complex SoC verification projects using UVM methodology, constrained random verification, and coverage-driven closure.'
    },
    {
      title: 'Physical Design / STA Specialist',
      dept: 'Backend Implementation',
      location: 'Bengaluru, India',
      type: 'Full-time',
      exp: '3 - 7 Years',
      desc: 'Execute floorplanning, CTS, routing, and signoff STA using Synopsys PrimeTime and Cadence Innovus for sub-7nm process nodes.'
    },
    {
      title: 'VLSI Research Intern (RTL / AI)',
      dept: 'R&D / Academic Programs',
      location: 'Bengaluru (HQ)',
      type: 'Internship (6 Months)',
      exp: 'Final Year / Fresh Graduate',
      desc: 'Work alongside principal architects on RISC-V extensions and AI hardware accelerators. Top interns receive full-time offers.'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Careers at Silphor</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Build the Silicon Future With Us</h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Join our elite team of semiconductor architects, verification specialists, and physical design experts in Bengaluru.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {jobs.map((job, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono">
                    {job.dept}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-mono">
                    {job.exp}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{job.desc}</p>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{job.location}</span>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs text-center shadow-lg shadow-blue-600/20 transition-all shrink-0 flex items-center justify-center gap-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
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
