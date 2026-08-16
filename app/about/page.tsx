'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Cpu, MapPin, Shield, Sparkles, Award, Users, BookOpen, CheckCircle2, ArrowRight, Building2, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const stats = [
    { label: 'Trained Engineers', value: '4,500+' },
    { label: 'Placement Rate', value: '96.8%' },
    { label: 'MNC Hiring Partners', value: '120+' },
    { label: 'Industry Patents & Papers', value: '35+' },
  ];

  const leadership = [
    {
      name: 'Dr. V. Raghavan',
      role: 'Founder & Chief Silicon Architect',
      bio: '25+ years in tier-1 semiconductor design (Intel, Qualcomm). Expert in ultra-low power SoC architectures and multi-core interconnects.'
    },
    {
      name: 'Ananya Deshmukh',
      role: 'VP of Functional Verification & UVM',
      bio: 'Former Verification Lead at Broadcom. Pioneer in AI-assisted coverage closure and UVM testbench architectures.'
    },
    {
      name: 'Col. Rajesh Sharma (Retd.)',
      role: 'Director of Academic Operations & Placements',
      bio: 'Oversees industry partnerships, campus recruitment drives, and elite lab infrastructure at Malleswaram HQ.'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Foundation in Bengaluru', desc: 'Started as a specialized VLSI consulting and advanced training studio at Malleswaram.' },
    { year: '2020', title: 'Cloud EDA Lab Launch', desc: 'Deployed industry-standard containerized EDA environments (Synopsys VCS, Cadence Innovus) for remote learners.' },
    { year: '2022', title: 'RISC-V Center of Excellence', desc: 'Established open-source RISC-V SoC tape-out training pipeline and research division.' },
    { year: '2025', title: 'Global Semiconductor Partner Network', desc: 'Expanded hiring alliances across Bengaluru, Hyderabad, Austin, and Munich.' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 text-xs font-mono">
            About Silphor Technologies
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Pioneering the Future of Silicon & VLSI Talent
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Silphor Technologies Private Limited is a premier semiconductor research, EDA consulting, and advanced VLSI training organization. Headquartered in Bengaluru, we bridge the gap between academic theory and complex sub-7nm silicon tape-out realities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((st, i) => (
            <div key={i} className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 text-center space-y-2 shadow-xl">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">{st.value}</div>
              <div className="text-xs text-slate-300 font-medium">{st.label}</div>
            </div>
          ))}
        </div>

        {/* HQ & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-cyan-400 border border-blue-500/30 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Bengaluru Headquarters</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Located at the heart of India's silicon valley:
            </p>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1 font-mono text-xs text-cyan-300">
              <p>#45 East Link Road,</p>
              <p>Malleswaram 3rd Cross,</p>
              <p>Bengaluru, Karnataka - 5860003, India</p>
            </div>
            <p className="text-xs text-slate-400">
              Equipped with 24/7 cloud EDA workstations, high-speed emulation benches, and dedicated hardware debugging labs.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Core Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To democratize access to advanced semiconductor EDA workflows, accelerate RISC-V SoC innovation, and empower engineers worldwide with practical, industry-proven VLSI capabilities.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Hands-on project-based curriculum</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Mentorship from Principal Silicon Architects</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Direct placement pipelines with tier-1 MNCs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Executive Leadership</span>
            <h2 className="text-3xl font-bold text-white">Led by Industry Pioneers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl font-mono shadow-lg shadow-blue-600/30">
                    {leader.name.charAt(3)}
                  </div>
                  <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                  <span className="text-xs font-mono text-cyan-400 block">{leader.role}</span>
                  <p className="text-xs text-slate-300 leading-relaxed pt-2">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones / History */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Our Journey</span>
            <h2 className="text-3xl font-bold text-white">Milestones of Innovation</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-xl space-y-3 relative overflow-hidden">
                <span className="text-3xl font-black text-cyan-400/20 font-mono absolute top-4 right-4">0{i+1}</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono w-fit block">
                  {m.year}
                </span>
                <h3 className="text-lg font-bold text-white">{m.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-800/40 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Join the Silphor Engineering Ecosystem</h3>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">
            Whether you are an aspiring VLSI engineer or a semiconductor enterprise seeking ASIC consulting, we are here to collaborate.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <span>Get in Touch With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
