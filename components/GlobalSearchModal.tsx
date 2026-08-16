'use client';

import React, { useState } from 'react';
import { Search, X, Terminal, BookOpen, Layers, Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = [
    { title: 'Cloud VLSI Lab (Browser Verilog Simulator)', type: 'Lab', href: '/cloud-vlsi-lab', icon: Terminal },
    { title: 'Physical Design & STA Masterclass Program', type: 'Program', href: '/vlsi-programs', icon: BookOpen },
    { title: 'Silphor AI Assistant & Code Debugger', type: 'AI Tool', href: '/ai-lab', icon: Sparkles },
    { title: 'Engineering & ASIC Consulting Services', type: 'Solutions', href: '/engineering-services', icon: Layers },
    { title: 'Silicon Challenge Arena & Daily Bugs', type: 'Gamification', href: '/challenges', icon: Terminal },
  ].filter(r => r.title.toLowerCase().includes(query.toLowerCase()) || r.type.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-[99999] bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#0b1329] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input 
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search programs, labs, AI tools, or semiconductor topics..."
            className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder-slate-500"
            autoFocus
          />
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3 max-h-96 overflow-y-auto space-y-1.5">
          {results.map((res, idx) => {
            const Icon = res.icon;
            return (
              <Link 
                key={idx} 
                href={res.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-800/80 transition-colors group text-slate-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm group-hover:text-white">{res.title}</h4>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">{res.type}</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
