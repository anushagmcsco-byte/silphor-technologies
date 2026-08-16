'use client';

import React, { useState } from 'react';
import { Sliders, Shield, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TimingAnalysisLab() {
  const [clockPeriod, setClockPeriod] = useState(10.0); // ns
  const [logicDelay, setLogicDelay] = useState(6.5); // ns
  const [setupTime, setSetupTime] = useState(0.8); // ns
  const [holdTime, setHoldTime] = useState(0.4); // ns
  const [clockSkew, setClockSkew] = useState(0.3); // ns

  // Calculations
  const requiredTime = clockPeriod - setupTime;
  const arrivalTime = logicDelay + clockSkew;
  const setupSlack = Number((requiredTime - arrivalTime).toFixed(2));

  const holdRequired = clockSkew;
  const holdArrival = logicDelay; // simplified
  const holdSlack = Number((holdArrival - holdRequired).toFixed(2));

  const isSetupViolation = setupSlack < 0;
  const isHoldViolation = holdSlack < 0;

  return (
    <div className="bg-[#0b1329] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Interactive Laboratory</span>
          <h3 className="text-2xl font-bold text-white mt-1">Static Timing Analysis (STA) Laboratory</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-mono border ${
            !isSetupViolation && !isHoldViolation 
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
              : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
          }`}>
            {!isSetupViolation && !isHoldViolation ? '✓ Timing Met' : '⚠ Timing Violation Detected'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Sliders Controls */}
        <div className="lg:col-span-5 space-y-6 bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
          <h4 className="text-sm font-semibold text-white flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cyan-400" /> Timing Parameter Controls
          </h4>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Clock Period:</span>
                <span className="font-mono text-cyan-400 font-bold">{clockPeriod} ns ({Number((1000/clockPeriod).toFixed(1))} MHz)</span>
              </div>
              <input 
                type="range" min="2.0" max="25.0" step="0.5" value={clockPeriod}
                onChange={e => setClockPeriod(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Combinational Logic Delay:</span>
                <span className="font-mono text-blue-400 font-bold">{logicDelay} ns</span>
              </div>
              <input 
                type="range" min="1.0" max="20.0" step="0.1" value={logicDelay}
                onChange={e => setLogicDelay(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Library Setup Time:</span>
                <span className="font-mono text-amber-400 font-bold">{setupTime} ns</span>
              </div>
              <input 
                type="range" min="0.1" max="2.0" step="0.1" value={setupTime}
                onChange={e => setSetupTime(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Clock Skew:</span>
                <span className="font-mono text-purple-400 font-bold">{clockSkew} ns</span>
              </div>
              <input 
                type="range" min="-1.0" max="1.5" step="0.1" value={clockSkew}
                onChange={e => setClockSkew(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Results & Visualizer */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-5 rounded-2xl border ${isSetupViolation ? 'bg-rose-950/20 border-rose-500/40' : 'bg-emerald-950/20 border-emerald-500/40'}`}>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Setup Slack</span>
              <div className={`text-3xl font-bold font-mono mt-2 ${isSetupViolation ? 'text-rose-400' : 'text-emerald-400'}`}>
                {setupSlack > 0 ? `+${setupSlack} ns` : `${setupSlack} ns`}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                {isSetupViolation ? 'Setup violation! Reduce logic depth or increase clock period.' : 'Setup check passed successfully.'}
              </p>
            </div>

            <div className={`p-5 rounded-2xl border ${isHoldViolation ? 'bg-rose-950/20 border-rose-500/40' : 'bg-emerald-950/20 border-emerald-500/40'}`}>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Hold Slack</span>
              <div className={`text-3xl font-bold font-mono mt-2 ${isHoldViolation ? 'text-rose-400' : 'text-emerald-400'}`}>
                {holdSlack > 0 ? `+${holdSlack} ns` : `${holdSlack} ns`}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                {isHoldViolation ? 'Hold violation! Add buffer delay to data path.' : 'Hold check passed successfully.'}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h4 className="text-sm font-semibold text-white">Critical Path Breakdown</h4>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-800/80">
                <span className="text-slate-400">Data Arrival Time (Launch FF → Capture FF):</span>
                <span className="text-cyan-400">{arrivalTime} ns</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-800/80">
                <span className="text-slate-400">Data Required Time (Clock Edge - Setup):</span>
                <span className="text-blue-400">{requiredTime} ns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
