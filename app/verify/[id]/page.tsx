'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { ShieldCheck, CheckCircle2, Award, Cpu } from 'lucide-react';

export default function VerifyCertificatePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-2xl text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono inline-block">
            ✓ Certificate Officially Verified
          </span>

          <h1 className="text-3xl font-extrabold text-white">Silphor Technologies Verification Authority</h1>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-left max-w-xl mx-auto space-y-3 font-mono text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Candidate Name:</span>
              <span className="text-white font-semibold">Anusha Sharma</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Program:</span>
              <span className="text-cyan-400">Advanced ASIC RTL Design & Verification</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Certificate ID:</span>
              <span className="text-white">SILPHOR-2026-VLSI-8942</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Issue Date:</span>
              <span className="text-slate-300">August 14, 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Verification Status:</span>
              <span className="text-emerald-400 font-bold">AUTHENTIC & VALID</span>
            </div>
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
