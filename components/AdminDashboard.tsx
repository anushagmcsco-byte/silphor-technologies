'use client';

import React, { useState } from 'react';
import { Users, BookOpen, ShieldCheck, TrendingUp, BarChart as BarChartIcon, DollarSign, Filter, Search } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([
    { id: 1, name: 'Rahul Sharma', email: 'rahul.s@example.com', program: 'Physical Design', source: 'AI Chatbot', status: 'New', date: '2026-08-14' },
    { id: 2, name: 'Priya Patel', email: 'priya.p@example.com', program: 'UVM & Verification', source: 'WhatsApp', status: 'Contacted', date: '2026-08-13' },
    { id: 3, name: 'Vikram Iyer', email: 'vikram.i@example.com', program: 'RISC-V SoC Design', source: 'Contact Form', status: 'Enrolled', date: '2026-08-12' },
  ]);

  const trafficData = [
    { day: 'Mon', students: 1200, leads: 45 },
    { day: 'Tue', students: 1450, leads: 62 },
    { day: 'Wed', students: 1380, leads: 58 },
    { day: 'Thu', students: 1690, leads: 74 },
    { day: 'Fri', students: 1920, leads: 90 },
    { day: 'Sat', students: 2400, leads: 112 },
    { day: 'Sun', students: 2150, leads: 98 },
  ];

  return (
    <div className="space-y-8">
      {/* Top Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Total Learners</span>
            <h3 className="text-3xl font-bold text-white mt-1">5,420</h3>
            <span className="text-xs text-emerald-400 mt-1 inline-flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> +18% this month
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-600/25 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Users className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Active Programs</span>
            <h3 className="text-3xl font-bold text-white mt-1">24 Active</h3>
            <span className="text-xs text-cyan-400 mt-1 inline-flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" /> 100% cloud synced
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/25 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Cloud Lab Sessions</span>
            <h3 className="text-3xl font-bold text-white mt-1">18,940</h3>
            <span className="text-xs text-purple-400 mt-1 inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 99.9% Uptime
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-500/25 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Pending Leads</span>
            <h3 className="text-3xl font-bold text-white mt-1">315</h3>
            <span className="text-xs text-amber-400 mt-1 inline-flex items-center gap-1">
              <BarChartIcon className="w-3.5 h-3.5" /> Needs review
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-500/25 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Analytics Chart */}
      <div className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">Platform Traffic & Lead Generation Velocity</h3>
            <p className="text-xs text-slate-400">Daily active learners and prospective engineering service inquiries</p>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="day" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} />
              <Tooltip contentStyle={{ backgroundColor: '#0B132B', borderColor: '#334155', borderRadius: '12px', color: '#fff' }} />
              <Area type="monotone" dataKey="students" stroke="#2563eb" fill="#2563eb33" strokeWidth={2} />
              <Area type="monotone" dataKey="leads" stroke="#06b6d4" fill="#06b6d433" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Lead Management Table */}
      <div className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">Inquiry & Lead Management</h3>
            <p className="text-xs text-slate-400">Tracked inquiries from AI Assistant, WhatsApp, and Program forms</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-xs text-slate-300 border border-slate-700 hover:bg-slate-700">
              <Filter className="w-3.5 h-3.5" /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-xs font-mono text-slate-400">
                <th className="pb-3 px-3">Name</th>
                <th className="pb-3 px-3">Email</th>
                <th className="pb-3 px-3">Program / Requirement</th>
                <th className="pb-3 px-3">Source</th>
                <th className="pb-3 px-3">Status</th>
                <th className="pb-3 px-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
              {leads.map(lead => (
                <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-3 font-semibold text-white">{lead.name}</td>
                  <td className="py-3 px-3 font-mono text-cyan-400">{lead.email}</td>
                  <td className="py-3 px-3">{lead.program}</td>
                  <td className="py-3 px-3 font-mono text-slate-400">{lead.source}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono ${
                      lead.status === 'Enrolled' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
                      lead.status === 'Contacted' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' :
                      'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-mono text-slate-500">{lead.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
