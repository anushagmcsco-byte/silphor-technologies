'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { MessageSquare, Sparkles, ThumbsUp, ArrowRight, X, Plus } from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function VlsiAnswersPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTag, setNewTag] = useState('RTL / Design');
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: 'How to avoid deadlock in AXI4-Lite handshake channels?',
      author: 'Rahul Verma',
      tag: 'Protocol / AXI',
      votes: 34,
      answers: 5,
      aiSummary: 'Avoid combinatorial loops between AWREADY and WREADY by registering handshake state flags.'
    },
    {
      id: 2,
      title: 'Best practices for clock domain crossing (CDC) in high-speed RISC-V cores?',
      author: 'Sneha Rao',
      tag: 'CDC / STA',
      votes: 52,
      answers: 8,
      aiSummary: 'Use 2-stage synchronizers for control signals and asynchronous FIFO FIFOs for multi-bit data buses.'
    },
    {
      id: 3,
      title: 'Difference between functional coverage and code coverage in UVM?',
      author: 'Karthik S.',
      tag: 'Verification / UVM',
      votes: 41,
      answers: 6,
      aiSummary: 'Code coverage measures lines/branches hit by testbench; functional coverage measures spec scenarios validated.'
    }
  ]);

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newQ = {
      id: questions.length + 1,
      title: newTitle,
      author: 'You (Verified Designer)',
      tag: newTag,
      votes: 1,
      answers: 1,
      aiSummary: 'Silphor AI analysis: Verified standard practices recommend proper clock domain separation, assertion coverage, and synchronous reset handling.'
    };

    setQuestions([newQ, ...questions]);
    setNewTitle('');
    setModalOpen(false);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-8">
          <div className="space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 text-xs font-mono inline-flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" /> Silphor VLSI Answers
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Technical Q&A & Community Hub</h1>
          </div>

          <button 
            onClick={() => setModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-lg shadow-blue-600/30 transition-all w-fit flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Ask New Question (AI Instant Answer)</span>
          </button>
        </div>

        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="p-6 sm:p-8 rounded-3xl bg-[#0b1329] border border-slate-700/85 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono">
                  {q.tag}
                </span>
                <span className="text-xs font-mono text-slate-400">Asked by {q.author}</span>
              </div>

              <h3 className="text-xl font-bold text-white">{q.title}</h3>

              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-800/30 space-y-1">
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Silphor AI Instant Answer
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{q.aiSummary}</p>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><ThumbsUp className="w-4 h-4 text-cyan-400" /> {q.votes} Votes</span>
                  <span>{q.answers} Expert Answers</span>
                </div>
                <button className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold">
                  <span>View Discussion</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Ask Question Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#0b1329] border border-slate-700 shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Ask Technical Question</h3>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAskQuestion} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 block">Question Title / Topic</label>
                <input 
                  type="text" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. How to resolve setup violation on multi-cycle path in PrimeTime?"
                  className="w-full px-4 py-3 rounded-xl bg-[#080E24] border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 block">Category</label>
                <select 
                  value={newTag} 
                  onChange={(e) => setNewTag(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#080E24] border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                >
                  <option>RTL / Design</option>
                  <option>Verification / UVM</option>
                  <option>STA / Timing Closure</option>
                  <option>Physical Design & GDSII</option>
                </select>
              </div>

              <p className="text-[11px] text-purple-400 font-mono">
                ✨ Silphor AI will automatically analyze your question and generate an instant technical response and recommended practices.
              </p>

              <button 
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit & Get AI Answer</span>
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
