'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { BookOpen, Search, ArrowRight, Star, Clock, Cpu, Award, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CoursesPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const courses = [
    {
      id: 'rtl-verification',
      title: 'Advanced ASIC RTL Design & Verification',
      category: 'Design & Verification',
      duration: '6 Months (24 Weeks)',
      level: 'Advanced',
      rating: '4.9/5 (1,240 reviews)',
      tools: 'Synopsys VCS, Verdi, Design Compiler, SystemVerilog, UVM',
      desc: 'Master industry-standard RTL design and functional verification methodologies. Build robust UVM testbenches from scratch.',
      link: '/courses/rtl-verification'
    },
    {
      id: 'physical-design',
      title: 'Physical Design & Timing Closure Masterclass',
      category: 'Physical Design',
      duration: '6 Months (24 Weeks)',
      level: 'Advanced',
      rating: '4.95/5 (980 reviews)',
      tools: 'Cadence Genus, Innovus, Synopsys PrimeTime',
      desc: 'Transform netlists into physical GDSII layouts with optimal timing closure, low power distribution, and zero DRC/LVS violations.',
      link: '/courses/physical-design'
    },
    {
      id: 'riscv-soc',
      title: 'RISC-V SoC Architecture & Implementation',
      category: 'SoC Architecture',
      duration: '5 Months (20 Weeks)',
      level: 'Advanced',
      rating: '4.88/5 (750 reviews)',
      tools: 'RISC-V GCC, Spike Simulator, Verilator, GTKWave',
      desc: 'Design a fully functional 32-bit pipelined RISC-V processor core from microarchitecture specification to FPGA prototyping.',
      link: '/courses/riscv-soc'
    },
    {
      id: 'uvm-specialist',
      title: 'UVM & Functional Verification Specialist',
      category: 'Verification',
      duration: '4 Months (16 Weeks)',
      level: 'Intermediate',
      rating: '4.92/5 (620 reviews)',
      tools: 'SystemVerilog, UVM, Questa Sim, VCS',
      desc: 'Deep dive into constrained random verification, functional coverage, scoreboards, assertions (SVA), and protocol compliance.',
      link: '/courses/uvm-specialist'
    },
    {
      id: 'nano-fab',
      title: 'Nano Fab & Semiconductor Process Engineering',
      category: 'Nano Fab & Process',
      duration: '4 Months',
      level: 'Advanced',
      rating: '4.96/5 (New)',
      tools: 'Cleanroom Simulation, Lithography, Yield Metrology',
      desc: 'Specialized training for Process Engineers, Lithography Engineers, Yield & Metrology Specialists, and Integration Engineers.',
      link: '/courses/nano-fab'
    }
  ];

  const categories = ['All', 'Design & Verification', 'Physical Design', 'SoC Architecture', 'Verification', 'Nano Fab & Process'];

  const filteredCourses = courses.filter(c => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesQuery = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5 animate-pulse" />
            <span>Industry-Standard Semiconductor Curriculum</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Explore Professional <span className="bg-gradient-to-r from-blue-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">VLSI & Chip Design Courses</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Gain hands-on expertise with industry-standard EDA toolchains from Synopsys, Cadence, and Siemens. Taught by veteran semiconductor architects with 100% placement assistance.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0b1329] p-4 sm:p-6 rounded-3xl border border-slate-700/80 shadow-xl">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses by title, topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#080E24] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-[#080E24] text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-2xl flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 text-xs font-mono">
                    {course.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {course.rating}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {course.desc}
                </p>

                <div className="pt-2 border-t border-slate-800 space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center justify-between">
                    <span>Duration:</span>
                    <span className="text-slate-200">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Tools:</span>
                    <span className="text-orange-300 truncate max-w-[180px]">{course.tools}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <Link
                  href={course.link}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-orange-500 to-amber-500 text-white font-semibold text-xs shadow-lg shadow-orange-500/25 hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>View Course Details & Curriculum</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
