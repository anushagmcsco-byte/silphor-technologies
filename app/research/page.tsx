'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { BookOpen, FileText, Download, ArrowRight, Award, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function ResearchPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const papers = [
    {
      title: 'Optimizing Clock Tree Synthesis for High-Performance 3nm RISC-V SoCs',
      authors: 'Dr. V. Raghavan, Ananya Deshmukh, Silphor R&D Team',
      conference: 'IEEE International Symposium on VLSI (ISVLSI 2025)',
      abstract: 'This paper presents novel CTS heuristics incorporating machine learning-based skew prediction to achieve 14% power reduction in multi-core RISC-V processors.',
      category: 'Physical Design'
    },
    {
      title: 'AI-Driven UVM Testbench Generation and Coverage Closure Automation',
      authors: 'K. R. Sundaram, Silphor Verification Lab',
      conference: 'Design Automation Conference (DAC 2025)',
      abstract: 'Demonstrating automated sequence generation using LLMs to target corner-case functional coverage holes in complex AXI interconnect controllers.',
      category: 'Verification & AI'
    },
    {
      title: 'Energy-Efficient Approximate Computing Units for Edge AI Accelerators',
      authors: 'Silphor Research Division',
      conference: 'IEEE Transactions on VLSI Systems',
      abstract: 'A novel arithmetic logic unit architecture utilizing dynamic precision scaling to optimize energy-delay product in mobile neural network processors.',
      category: 'SoC Architecture'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">R&D Publications</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Silicon Research & Whitepapers</h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Exploring the frontiers of VLSI design, physical verification, RISC-V architectures, and AI-augmented semiconductor workflows.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {papers.map((paper, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono">
                  {paper.category}
                </span>
                <span className="text-xs font-mono text-cyan-400">{paper.conference}</span>
              </div>

              <h3 className="text-xl font-bold text-white">{paper.title}</h3>
              <p className="text-xs font-mono text-slate-400">{paper.authors}</p>
              
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                {paper.abstract}
              </p>

              <div className="flex justify-end pt-2">
                <Link 
                  href="/contact" 
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-medium text-xs border border-slate-700 transition-all flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Request Full Paper PDF</span>
                </Link>
              </div>
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
