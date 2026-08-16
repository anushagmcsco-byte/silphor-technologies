'use client';

import React from 'react';
import { Award, CheckCircle2, Download, Share2, Shield, Cpu } from 'lucide-react';

export default function SkillPassport() {
  const verifiedSkills = [
    { name: 'RTL Design', level: 'Expert', verified: true },
    { name: 'Verilog / SystemVerilog', level: 'Expert', verified: true },
    { name: 'UVM Verification', level: 'Advanced', verified: true },
    { name: 'STA & Timing Closure', level: 'Advanced', verified: true },
    { name: 'Physical Design', level: 'Advanced', verified: true },
    { name: 'TCL & EDA Automation', level: 'Expert', verified: true },
    { name: 'RISC-V SoC Architecture', level: 'Advanced', verified: true },
    { name: 'Linux EDA Environment', level: 'Expert', verified: true },
  ];

  return (
    <div className="bg-[#0b1329] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <Shield className="w-4 h-4" />
            <span>Silphor Skill Passport</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Verified Semiconductor Engineer Profile</h3>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition-colors">
            <Download className="w-3.5 h-3.5" /> Download PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-lg shadow-blue-600/30 transition-all">
            <Share2 className="w-3.5 h-3.5" /> Share Passport
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
        {verifiedSkills.map((skill, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-white text-sm">{skill.name}</h4>
              <span className="text-[10px] text-cyan-400 font-mono mt-0.5 block">{skill.level}</span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
