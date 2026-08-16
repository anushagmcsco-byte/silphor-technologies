'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Sparkles, Terminal, CheckCircle2, ArrowRight, Code, AlertTriangle, Play } from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function AiDebuggerPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [code, setCode] = useState(`module synchronous_fifo #(
  parameter DATA_WIDTH = 8,
  parameter DEPTH = 16
)(
  input logic clk,
  input logic rst,
  input logic wr_en,
  input logic rd_en,
  input logic [DATA_WIDTH-1:0] wdata,
  output logic [DATA_WIDTH-1:0] rdata,
  output logic full,
  output logic empty
);
  // Bug: Pointer rollover logic issue in depth calculation
  logic [4:0] wr_ptr, rd_ptr;
  // ...
endmodule`);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        problem: 'FIFO pointer rollover condition fails when DEPTH is not a strict power of 2, leading to data corruption and potential X propagation.',
        rootCause: 'Binary pointer is wrapping at DEPTH rather than 2^N, causing address out-of-bounds access.',
        explanation: 'In synchronous FIFOs using non-power-of-two depths, pointer increment must use modulo arithmetic or explicit wraparound check (ptr == DEPTH - 1 ? 0 : ptr + 1).',
        suggestedFix: 'Replace standard binary increment with explicit wraparound comparison against DEPTH-1.',
        correctedCode: `always_ff @(posedge clk or posedge rst) begin\n  if (rst) wr_ptr <= '0;\n  else if (wr_en && !full)\n    wr_ptr <= (wr_ptr == DEPTH - 1) ? '0 : wr_ptr + 1;\nend`,
        testcases: [
          'Test 1: Write until full, verify full flag asserts.',
          'Test 2: Read until empty, verify empty flag asserts.',
          'Test 3: Simultaneous read and write at boundary conditions.'
        ]
      });
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    }, 1200);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/40 text-xs font-mono flex items-center justify-center gap-1.5 w-fit mx-auto">
            <Sparkles className="w-3.5 h-3.5" /> Silphor AI Code Debugger
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Analyze Verilog & SystemVerilog RTL
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Paste your HDL code or testbench below to instantly detect syntax errors, logic bugs, race conditions, and get AI-powered root-cause explanations and verified fixes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1329] border border-slate-700/85 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white">RTL Source Code / Testbench</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">SystemVerilog / Verilog</span>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={14}
              className="w-full p-4 rounded-2xl bg-[#080E24] border border-slate-800 font-mono text-xs text-slate-200 focus:outline-none focus:border-purple-500 resize-none"
            />

            <button
              onClick={handleAnalyze}
              disabled={analyzing}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {analyzing ? (
                <>
                  <Sparkles className="w-5 h-5 animate-spin" />
                  <span>Analyzing RTL & Race Conditions...</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  <span>Run AI Code Analysis & Debugger</span>
                </>
              )}
            </button>
          </div>

          {/* Results Panel */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1329] border border-slate-700/85 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">AI Diagnostic Report</h3>
              </div>

              {result ? (
                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-2xl bg-red-950/20 border border-red-800/40 space-y-1">
                    <span className="font-mono text-red-400 uppercase tracking-widest text-[10px] block font-bold">Detected Problem</span>
                    <p className="text-slate-200 leading-relaxed">{result.problem}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-800/40 space-y-1">
                    <span className="font-mono text-amber-400 uppercase tracking-widest text-[10px] block font-bold">Root Cause</span>
                    <p className="text-slate-200 leading-relaxed">{result.rootCause}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <span className="font-mono text-cyan-400 uppercase tracking-widest text-[10px] block font-bold">Explanation & Best Practices</span>
                    <p className="text-slate-200 leading-relaxed">{result.explanation}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 space-y-2">
                    <span className="font-mono text-emerald-400 uppercase tracking-widest text-[10px] block font-bold">Corrected Code Snippet</span>
                    <pre className="font-mono text-[11px] text-emerald-300 overflow-x-auto">{result.correctedCode}</pre>
                  </div>
                </div>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center text-slate-400 space-y-3">
                  <AlertTriangle className="w-10 h-10 text-slate-600 animate-pulse" />
                  <p className="text-xs">Paste your RTL code and click 'Run AI Code Analysis' to inspect race conditions and timing hazards.</p>
                </div>
              )}
            </div>

            {result && (
              <div className="flex gap-3 pt-4 border-t border-slate-800">
                <button 
                  onClick={() => alert('Fix applied to editor workspace successfully!')}
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-lg shadow-emerald-600/30 transition-all"
                >
                  Apply Fix to Workspace
                </button>
                <button 
                  onClick={() => alert('Testbench generated successfully!')}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700"
                >
                  Generate Testbench
                </button>
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
