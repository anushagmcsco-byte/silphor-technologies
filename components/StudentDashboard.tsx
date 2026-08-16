'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Award, BookOpen, Clock, Flame, Sparkles, TrendingUp, CheckCircle, Zap } from 'lucide-react';

export default function StudentDashboard() {
  const skillData = [
    { subject: 'RTL Design', proficiency: 90 },
    { subject: 'Verilog', proficiency: 85 },
    { subject: 'SystemVerilog', proficiency: 78 },
    { subject: 'UVM Verification', proficiency: 68 },
    { subject: 'STA & Timing', proficiency: 72 },
    { subject: 'Physical Design', proficiency: 75 },
    { subject: 'TCL Scripting', proficiency: 80 },
    { subject: 'RISC-V SoC', proficiency: 65 },
  ];

  const progressData = [
    { month: 'Jan', hours: 24, projects: 2 },
    { month: 'Feb', hours: 42, projects: 4 },
    { month: 'Mar', hours: 58, projects: 7 },
    { month: 'Apr', hours: 85, projects: 10 },
  ];

  return (
    <div className="space-y-8">
      {/* Top Welcome & Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Overall Mastery</span>
            <h3 className="text-3xl font-bold text-white mt-1">78%</h3>
            <span className="text-xs text-emerald-400 mt-1 inline-flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> +12% this month
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Award className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Cloud Lab Hours</span>
            <h3 className="text-3xl font-bold text-white mt-1">142 hrs</h3>
            <span className="text-xs text-cyan-400 mt-1 inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Active simulator
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Zap className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Learning Streak</span>
            <h3 className="text-3xl font-bold text-white mt-1">18 Days</h3>
            <span className="text-xs text-amber-400 mt-1 inline-flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" /> On fire!
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Flame className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Completed Projects</span>
            <h3 className="text-3xl font-bold text-white mt-1">10 IPs</h3>
            <span className="text-xs text-purple-400 mt-1 inline-flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> Verified GDSII
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Skill Proficiency Bar Chart */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">VLSI Skill Proficiency Analytics</h3>
              <p className="text-xs text-slate-400">Real-time telemetry across RTL, verification, and backend domains</p>
            </div>
            <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full">Updated Today</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="subject" stroke="#64748b" fontSize={11} interval={0} angle={-25} textAnchor="end" height={50} />
                <YAxis stroke="#64748b" fontSize={11} domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#0B132B', borderColor: '#334155', borderRadius: '12px', color: '#fff' }} />
                <Bar dataKey="proficiency" fill="#2563eb" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Recommended Learning */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-br from-[#0b1329] to-indigo-950 border border-indigo-500/30 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Silphor AI Adaptive Learning Engine</span>
            </div>
            <h3 className="text-lg font-bold text-white">Personalized Skill Gap Recommendation</h3>
            <p className="text-xs text-slate-300 mt-2">Based on your recent UVM simulation lab and STA quiz telemetry, Silphor AI recommends:</p>
            
            <div className="space-y-3 mt-4">
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">1</div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Advanced UVM Scoreboard Assertions</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Estimated time: 3 hours • Lab #4</p>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">2</div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Clock Domain Crossing (CDC) Masterclass</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Estimated time: 2 hours • Video & Quiz</p>
                </div>
              </div>
            </div>
          </div>

          <a 
            href="/cloud-vlsi-lab" 
            className="mt-6 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-lg shadow-blue-600/30 text-center block transition-all"
          >
            Start Recommended Lab Now
          </a>
        </div>
      </div>
    </div>
  );
}
