'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Terminal, Layers, Cpu, Zap, Shield } from 'lucide-react';

export default function RtlToGdsPipeline() {
  const stages = [
    { id: 'spec', name: '1. Specification', icon: HelpCircle, desc: 'Architecture specs, PPA targets, and protocol standards.' },
    { id: 'arch', name: '2. Architecture', icon: Cpu, desc: 'Micro-architecture definition, data paths, and state machines.' },
    { id: 'rtl', name: '3. RTL Design', icon: Terminal, desc: 'Coding hardware behavior in Verilog and SystemVerilog.' },
    { id: 'sim', name: '4. Simulation', icon: Shield, desc: 'Testbench verification, waveform debugging, and functional coverage.' },
    { id: 'synth', name: '5. Synthesis', icon: Layers, desc: 'Translating RTL gates into technology-mapped netlist.' },
    { id: 'floor', name: '6. Floorplan', icon: Zap, desc: 'Die sizing, power grid planning, and macro placement.' },
    { id: 'place', name: '7. Placement', icon: Cpu, desc: 'Placing standard cells and optimizing congestion.' },
    { id: 'cts', name: '8. CTS', icon: Zap, desc: 'Clock Tree Synthesis to minimize skew and insertion delay.' },
    { id: 'route', name: '9. Routing', icon: Layers, desc: 'Global and detailed metal layer routing with zero DRC.' },
    { id: 'sta', name: '10. STA', icon: Shield, desc: 'Static Timing Analysis for setup and hold closure.' },
    { id: 'gds', name: '11. GDSII', icon: CheckCircle2, desc: 'Final layout database generation for semiconductor fabrication.' },
  ];

  const [selectedStage, setSelectedStage] = useState(stages[2]); // Default RTL

  return (
    <div className="space-y-8">
      {/* Horizontal / Grid Pipeline Stepper */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const isSelected = selectedStage.id === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20 scale-102'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-cyan-400'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-slate-500">{stage.id.toUpperCase()}</span>
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-1">{stage.name}</h4>
                <p className="text-[11px] text-slate-400 line-clamp-2">{stage.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Card */}
      <div className="bg-[#0b1329] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span>Silphor EDA Workflow Engine</span>
              <span>•</span>
              <span>Stage Details</span>
            </div>
            <h3 className="text-2xl font-bold text-white">{selectedStage.name}</h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              Industry Standard Protocol
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Stage Purpose</h4>
              <p className="text-sm text-slate-200 leading-relaxed">{selectedStage.desc}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Primary Tools Used</h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-cyan-300 font-mono">Synopsys VCS</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-cyan-300 font-mono">Cadence Genus</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-cyan-300 font-mono">Siemens Questa</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Common Engineering Challenges</h4>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li>Timing closure and critical path delay optimization</li>
                <li>Clock skew minimization across high-frequency domains</li>
                <li>Dynamic and leakage power reduction</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Interview Spotlight Q&A</h4>
              <p className="text-xs text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                &ldquo;How do you handle asynchronous clock domain crossings (CDC) during this phase?&rdquo; — Frequently asked in senior VLSI interviews at top semiconductor firms.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950/60 to-slate-900 border border-blue-500/30 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">Mini Challenge</span>
              <h4 className="text-sm font-bold text-white mt-1">Verify {selectedStage.name} Testbench</h4>
              <p className="text-xs text-slate-300 mt-2">Execute simulation in the Cloud VLSI Lab to pass assertions and generate waveform logs.</p>
            </div>
            <a 
              href="/cloud-vlsi-lab" 
              className="mt-4 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-lg shadow-blue-600/30 transition-all"
            >
              <span>Launch Lab Simulation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
