'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Cpu, GitFork, Star, ArrowRight, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function OpenSiliconPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const repos = [
    {
      name: 'silphor-riscv-rv32i',
      author: 'Silphor Core Team',
      desc: 'Open-source 32-bit RISC-V RV32I pipelined processor core with hazard detection and AXI4-Lite interface.',
      stars: 342,
      forks: 89,
      lang: 'SystemVerilog'
    },
    {
      name: 'uvm-axi-interconnect-vip',
      author: 'Community Contributor #42',
      desc: 'Fully configurable UVM Verification IP for AMBA AXI4 crossbar interconnects and master/slave agents.',
      stars: 215,
      forks: 44,
      lang: 'SystemVerilog / UVM'
    },
    {
      name: 'async-fifo-clock-domain-crossing',
      author: 'Dr. Ramesh Kumar',
      desc: 'Gray code pointer asynchronous FIFO with metastability prevention and timing assertion testbenches.',
      stars: 188,
      forks: 52,
      lang: 'Verilog'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-mono">
            Open Silicon Ecosystem
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Open-Source RISC-V Cores & Verification IPs
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover, fork, and collaborate on production-ready open-source RTL repositories, UVM verification IPs, and FPGA accelerators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {repos.map((repo, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono">
                    {repo.lang}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-400" /> {repo.stars}</span>
                    <span className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5 text-cyan-400" /> {repo.forks}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-mono">{repo.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">Maintained by {repo.author}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{repo.desc}</p>
              </div>

              <button 
                onClick={() => alert(`Repository ${repo.name} cloned to your Cloud VLSI Workspace!`)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                <span>Clone to Cloud VLSI Lab</span>
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
