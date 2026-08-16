'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { BarChart3, Sparkles, Upload, Terminal, CheckCircle2, AlertTriangle, Play } from 'lucide-react';
import Link from 'next/link';

export default function AiWaveformPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleRun = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 1500);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 text-xs font-mono flex items-center justify-center gap-1.5 w-fit mx-auto">
            <BarChart3 className="w-3.5 h-3.5" /> Silphor AI Waveform Analyzer
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Analyze VCD & FST Simulation Traces
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Upload simulation dumps, VCD files, or waveform screenshots to detect clock jitter, reset glitches, protocol violations, and unexpected X/Z propagation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload & Controls */}
          <div className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/85 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white">Upload Waveform Dump</h3>
            
            <div className="border-2 border-dashed border-slate-700 hover:border-cyan-500 rounded-2xl p-8 text-center space-y-3 cursor-pointer transition-colors bg-slate-900/50">
              <Upload className="w-8 h-8 text-cyan-400 mx-auto" />
              <div className="text-xs text-slate-300 font-medium">Drag & Drop VCD / FST file here</div>
              <div className="text-[10px] text-slate-500">Supports ModelSim, VCS, and GTKWave logs</div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-400 block">Target Signal Group</label>
              <input type="text" placeholder="e.g. u_top/u_fifo/wdata[7:0]" className="w-full px-4 py-3 rounded-xl bg-[#080E24] border border-slate-800 text-xs text-slate-200" defaultValue="u_soc_top/axi_bus/*" />
            </div>

            <button
              onClick={handleRun}
              disabled={analyzing}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
            >
              {analyzing ? <Sparkles className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
              <span>{analyzing ? 'Scanning Traces...' : 'Run AI Waveform Analysis'}</span>
            </button>
          </div>

          {/* Waveform Viewer / Timeline */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-[#0b1329] border border-slate-700/85 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Signal Timeline & Trace Inspector</h3>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40">
                {analyzed ? '1 Issue Detected @ 245 ns' : 'Ready for Trace'}
              </span>
            </div>

            {/* Simulated Waveform Graphic */}
            <div className="p-6 rounded-2xl bg-[#080E24] border border-slate-800 space-y-4 font-mono text-xs">
              <div className="flex justify-between text-[10px] text-slate-500 border-b border-slate-800 pb-2">
                <span>0 ns</span>
                <span>100 ns</span>
                <span>200 ns</span>
                <span className="text-red-400 font-bold">245 ns (Bug)</span>
                <span>400 ns</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="w-24 text-slate-400 text-[11px]">clk</span>
                  <div className="flex-1 flex gap-1">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className={`h-4 flex-1 border-t-2 ${i % 2 === 0 ? 'border-cyan-400' : 'border-slate-700'}`}></div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-24 text-slate-400 text-[11px]">rst_n</span>
                  <div className="flex-1 h-4 flex items-center">
                    <div className="w-12 h-full bg-slate-700 border-b-2 border-slate-700"></div>
                    <div className="flex-1 h-full border-t-2 border-cyan-400"></div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-24 text-slate-400 text-[11px]">axi_awvalid</span>
                  <div className="flex-1 h-4 flex items-center">
                    <div className="w-24 h-full bg-slate-800"></div>
                    <div className="w-16 h-full bg-blue-600/40 border border-blue-500 flex items-center justify-center text-[9px] text-blue-300">HIGH</div>
                    <div className="flex-1 h-full bg-slate-800"></div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-24 text-red-400 text-[11px]">rdata_out</span>
                  <div className="flex-1 h-4 flex items-center">
                    <div className="w-32 h-full bg-slate-800"></div>
                    <div className="w-20 h-full bg-red-600/30 border border-red-500 flex items-center justify-center text-[9px] text-red-400 animate-pulse">3'bXXX (Z)</div>
                    <div className="flex-1 h-full bg-slate-800"></div>
                  </div>
                </div>
              </div>
            </div>

            {analyzed && (
              <div className="p-4 rounded-2xl bg-red-950/20 border border-red-800/40 space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Protocol Violation Detected @ 245 ns</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Read data bus <code className="text-red-300">rdata_out</code> transitions to High-Impedance (Z) while <code className="text-cyan-300">arready</code> is asserted without valid payload data from memory bank 2.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
