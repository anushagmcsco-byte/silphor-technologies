'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Cpu, Search, Bell, Moon, Sun, User, Menu, X, 
  ChevronDown, Sparkles, MessageSquare, ShieldCheck, BookOpen, 
  Layers, Terminal, BarChart3, Briefcase, Award, PhoneCall
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenAI: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ onOpenSearch, onOpenAI, darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New UVM Lab Assignment', time: '10m ago', unread: true },
    { id: 2, title: 'Silicon Challenge #42 Live', time: '2h ago', unread: true },
    { id: 3, title: 'Certificate Verified for RISC-V SoC', time: '1d ago', unread: false },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? darkMode ? 'bg-[#080E24]/90 backdrop-blur-md border-b border-orange-500/20 shadow-xl' : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${darkMode ? 'from-blue-600 to-orange-500 shadow-orange-500/25' : 'from-blue-600 to-cyan-500 shadow-blue-500/25'} flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform`}>
            <Cpu className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className={`font-bold text-lg tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Silphor
            </span>
            <span className={`block text-[10px] tracking-widest font-semibold uppercase ${darkMode ? 'text-orange-400' : 'text-cyan-500'}`}>
              Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link href="/" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}>
            Home
          </Link>
          <Link href="/courses" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'} flex items-center gap-1.5`}>
            <BookOpen className="w-4 h-4 text-orange-400" /> Courses
          </Link>
          <Link href="/dashboard" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors text-orange-400 hover:bg-orange-500/10 flex items-center gap-1.5`}>
            <ShieldCheck className="w-4 h-4" /> Dashboards & Management
          </Link>
          <Link href="/about" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}>
            About
          </Link>

          {/* Technology Labs Dropdown */}
          <div className="relative group">
            <button 
              className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              Technology Labs <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
            <div className={`absolute top-full left-0 w-80 p-3 rounded-2xl shadow-2xl border ${darkMode ? 'bg-[#0B132B] border-slate-800' : 'bg-white border-slate-200'} hidden group-hover:grid gap-2 z-50`}>
              <Link href="/technology-labs" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <Layers className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">Technology Labs Overview</div>
                  <div className="text-xs text-slate-400">Explore all 20+ EDA & AI tools</div>
                </div>
              </Link>
              <Link href="/ai-debugger" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <Sparkles className="w-5 h-5 text-purple-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">AI Code Debugger</div>
                  <div className="text-xs text-slate-400">Analyze Verilog/SystemVerilog RTL</div>
                </div>
              </Link>
              <Link href="/ai-waveform" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <BarChart3 className="w-5 h-5 text-cyan-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">AI Waveform Analyzer</div>
                  <div className="text-xs text-slate-400">VCD/FST simulation debug</div>
                </div>
              </Link>
              <Link href="/ai-sta" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <Terminal className="w-5 h-5 text-emerald-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">AI STA Assistant</div>
                  <div className="text-xs text-slate-400">Setup & hold timing closure</div>
                </div>
              </Link>
              <Link href="/rtl-netlist" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <Cpu className="w-5 h-5 text-amber-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">RTL → Netlist Explorer</div>
                  <div className="text-xs text-slate-400">Animated synthesis & gates</div>
                </div>
              </Link>
              <Link href="/floorplan" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <Layers className="w-5 h-5 text-indigo-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">Chip Floorplan Studio</div>
                  <div className="text-xs text-slate-400">Interactive macros & blocks</div>
                </div>
              </Link>
              <Link href="/virtual-tapeout" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <ShieldCheck className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">Virtual Tapeout Center</div>
                  <div className="text-xs text-slate-400">End-to-end GDSII pipeline</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Career Dropdown */}
          <div className="relative group">
            <button 
              className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              Career <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
            <div className={`absolute top-full left-0 w-72 p-3 rounded-2xl shadow-2xl border ${darkMode ? 'bg-[#0B132B] border-slate-800' : 'bg-white border-slate-200'} hidden group-hover:grid gap-2 z-50`}>
              <Link href="/career" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <Briefcase className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">Career Center</div>
                  <div className="text-xs text-slate-400">Roadmaps & placement tracks</div>
                </div>
              </Link>
              <Link href="/ai-interviewer" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <Sparkles className="w-5 h-5 text-purple-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">AI Interviewer</div>
                  <div className="text-xs text-slate-400">Mock VLSI interviews & feedback</div>
                </div>
              </Link>
              <Link href="/career-twin" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <Award className="w-5 h-5 text-emerald-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">AI Career Twin</div>
                  <div className="text-xs text-slate-400">Role readiness & skill gaps</div>
                </div>
              </Link>
              <Link href="/mentors" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <User className="w-5 h-5 text-cyan-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">Silphor Mentors</div>
                  <div className="text-xs text-slate-400">Book 1:1 expert guidance</div>
                </div>
              </Link>
              <Link href="/talent-hub" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <ShieldCheck className="w-5 h-5 text-amber-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">Talent Hub</div>
                  <div className="text-xs text-slate-400">Hiring portal for companies</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Community Dropdown */}
          <div className="relative group">
            <button 
              className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              Community <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
            <div className={`absolute top-full left-0 w-72 p-3 rounded-2xl shadow-2xl border ${darkMode ? 'bg-[#0B132B] border-slate-800' : 'bg-white border-slate-200'} hidden group-hover:grid gap-2 z-50`}>
              <Link href="/community/answers" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <MessageSquare className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">VLSI Answers</div>
                  <div className="text-xs text-slate-400">Technical Q&A & AI assistance</div>
                </div>
              </Link>
              <Link href="/community/open-silicon" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <Cpu className="w-5 h-5 text-cyan-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">Open Silicon</div>
                  <div className="text-xs text-slate-400">Public RISC-V & RTL repos</div>
                </div>
              </Link>
              <Link href="/community/hackathons" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <Award className="w-5 h-5 text-amber-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">Silicon Hackathons</div>
                  <div className="text-xs text-slate-400">PPA optimization challenges</div>
                </div>
              </Link>
              <Link href="/community/leaderboard" className={`flex items-start gap-3 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}>
                <BarChart3 className="w-5 h-5 text-emerald-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">Global Leaderboard</div>
                  <div className="text-xs text-slate-400">Rankings & skill scores</div>
                </div>
              </Link>
            </div>
          </div>
        </nav>

        {/* Action Utilities */}
        <div className="flex items-center gap-3">
          {/* Search Button */}
          <button 
            onClick={onOpenSearch}
            aria-label="Global Search"
            className={`p-2.5 rounded-xl border transition-all ${
              darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Search className="w-4 h-4" />
          </button>

          {/* AI Quick Button */}
          <button 
            onClick={onOpenAI}
            aria-label="Silphor AI Assistant"
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-orange-500 to-amber-500 text-white font-medium text-xs shadow-md shadow-orange-500/20 hover:opacity-95 transition-opacity"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>Silphor AI</span>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              aria-label="Notifications"
              className={`relative p-2.5 rounded-xl border transition-all ${
                darkMode ? 'bg-[#0B132B] border-orange-500/30 text-slate-300 hover:bg-[#131f47] hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            </button>
            {notificationsOpen && (
              <div className={`absolute right-0 mt-2 w-80 p-3 rounded-2xl shadow-2xl border ${darkMode ? 'bg-[#0B132B] border-orange-500/30 text-slate-200' : 'bg-white border-slate-200 text-slate-800'} z-50`}>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-orange-500/20">
                  <span className="font-semibold text-sm">Notifications</span>
                  <span className="text-[10px] bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded-full">3 New</span>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {notifications.map(n => (
                    <div key={n.id} className={`p-2 rounded-xl text-xs flex items-start gap-2 transition-colors ${darkMode ? 'hover:bg-[#131f47]' : 'hover:bg-slate-50'}`}>
                      <div className={`w-2 h-2 rounded-full mt-1 ${n.unread ? 'bg-orange-500' : 'bg-slate-600'}`}></div>
                      <div className="flex-1">
                        <div className="font-medium">{n.title}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{n.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className={`p-2.5 rounded-xl border transition-all ${
              darkMode ? 'bg-[#0B132B] border-orange-500/30 text-orange-400 hover:bg-[#131f47]' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4 text-orange-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary CTA */}
          <Link 
            href="/contact"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-lg shadow-blue-600/25 transition-all"
          >
            Get Started
          </Link>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Mobile Menu"
            className={`lg:hidden p-2.5 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 py-6 space-y-3 ${darkMode ? 'bg-[#070B14] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'} shadow-2xl`}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Home</Link>
          <Link href="/courses" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-orange-400">Courses</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">About</Link>
          <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Solutions</Link>
          <Link href="/vlsi-programs" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">VLSI Programs</Link>
          <Link href="/cloud-vlsi-lab" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Cloud VLSI Lab</Link>
          <Link href="/ai-lab" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Silphor AI</Link>
          <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Projects</Link>
          <Link href="/career" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Career Center</Link>
          <Link href="/challenges" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Challenges</Link>
          <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Student Dashboard</Link>
          <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Admin Dashboard</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Contact Us</Link>
          <div className="pt-4 border-t border-slate-700 flex gap-3">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex-1 text-center py-2.5 rounded-xl bg-blue-600 text-white font-medium text-sm">
              Get Started
            </Link>
            <button onClick={() => { setMobileMenuOpen(false); onOpenAI(); }} className="flex-1 text-center py-2.5 rounded-xl bg-cyan-600 text-white font-medium text-sm flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Silphor AI
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
