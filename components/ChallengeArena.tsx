'use client';

import React, { useState } from 'react';
import { Trophy, Flame, CheckCircle, ArrowRight, Zap, Code, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ChallengeArena() {
  const [solved, setSolved] = useState(false);

  const handleSolve = () => {
    setSolved(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="bg-[#0b1329] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <Trophy className="w-4 h-4" />
            <span>Silicon Challenge Arena</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Daily RTL Bug Fix Challenge</h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5" /> +250 XP Reward
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        <div className="lg:col-span-7 space-y-4">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Problem Description</span>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              The following synchronous FIFO module has a bug in its pointer rollover condition when depth is non-power-of-two. Identify and fix the logic bug in the write pointer increment.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#080E24] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
            <pre>{`always_ff @(posedge clk or posedge rst) begin
  if (rst) 
    wr_ptr <= 0;
  else if (wr_en && !full)
    wr_ptr <= (wr_ptr == DEPTH-1) ? 0 : wr_ptr + 1; // Bug here?
end`}</pre>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <h4 className="text-sm font-semibold text-white">Challenge Status</h4>
            {solved ? (
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                <h5 className="font-bold text-emerald-300 text-sm">Challenge Successfully Completed!</h5>
                <p className="text-xs text-slate-300">+250 XP added to your Silphor Skill Passport.</p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-slate-400">Testbench assertions ready for compilation.</p>
                <button
                  onClick={handleSolve}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-95 text-white font-medium text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Verify & Submit Solution</span>
                </button>
              </div>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-500/30 text-xs text-slate-300">
            <span className="font-semibold text-white block mb-1">Leaderboard Standing</span>
            You are currently ranked <strong className="text-cyan-400">#14</strong> among 5,420 registered Silphor engineers.
          </div>
        </div>
      </div>
    </div>
  );
}
