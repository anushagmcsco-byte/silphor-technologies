'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MessageSquare, X, Send, Bot, User, Code, Copy, Check, ChevronUp, ChevronDown } from 'lucide-react';

interface FloatingWidgetsProps {
  externalAIOpen?: boolean;
  onCloseExternalAI?: () => void;
}

export default function FloatingWidgets({ externalAIOpen, onCloseExternalAI }: FloatingWidgetsProps) {
  const [internalAiOpen, setInternalAiOpen] = useState(false);
  const aiOpen = externalAIOpen || internalAiOpen;

  const handleToggleAi = () => {
    if (aiOpen) {
      setInternalAiOpen(false);
      if (onCloseExternalAI) onCloseExternalAI();
    } else {
      setInternalAiOpen(true);
    }
  };

  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: "Hello! I'm Silphor AI. How can I assist you with VLSI, semiconductor technology, learning programs, or engineering today?",
      time: 'Just now'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputVal;
    if (!textToSend.trim()) return;

    const userMsg = { sender: 'user' as const, text: textToSend, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    if (!customText) setInputVal('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: textToSend, context: 'Floating Chatbot Widget' })
      });
      const data = await res.json();
      setMessages(prev => [...prev, {
        sender: 'ai',
        text: data.text || 'I am ready to help with any VLSI or semiconductor query.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (e) {
      setMessages(prev => [...prev, {
        sender: 'ai',
        text: 'Sorry, I encountered a connection error. Please try again.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const whatsappNumber = "919876543210"; // Official placeholder number
  const whatsappMessage = encodeURIComponent("Hello Silphor Technologies, I would like to know more about your VLSI programs and services.");

  return (
    <>
      {/* Floating AI Chat Window */}
      {aiOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[92vw] sm:w-[420px] h-[550px] max-h-[80vh] bg-[#0b1329] border border-slate-700/80 rounded-2xl shadow-2xl z-[9999] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 px-4 py-3 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-4 h-4 animate-spin" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">SILPHOR AI</h3>
                <p className="text-[10px] text-cyan-300">Your VLSI & Semiconductor Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={() => { setInternalAiOpen(false); if (onCloseExternalAI) onCloseExternalAI(); }}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 transition-colors"
                aria-label="Close AI chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#080E24]/70">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                  m.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                }`}>
                  {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>
                <div className={`max-w-[78%] p-3 rounded-2xl text-xs leading-relaxed ${
                  m.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-800/90 border border-slate-700 text-slate-200 rounded-tl-none'
                }`}>
                  <div className="whitespace-pre-wrap">{m.text}</div>
                  <div className={`text-[9px] mt-1 text-right ${m.sender === 'user' ? 'text-blue-200' : 'text-slate-400'}`}>
                    {m.time}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-cyan-400 bg-slate-800/60 p-3 rounded-2xl w-fit">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>Silphor AI is analyzing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-[#0b1329] border-t border-slate-800 flex gap-1.5 overflow-x-auto text-[11px] whitespace-nowrap">
            <button onClick={() => handleSendMessage("Explain setup and hold violation")} className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700">
              Setup & Hold
            </button>
            <button onClick={() => handleSendMessage("Debug my Verilog code")} className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700">
              Debug Verilog
            </button>
            <button onClick={() => handleSendMessage("How do I start Physical Design?")} className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700">
              Physical Design
            </button>
          </div>

          {/* Input */}
          <div className="p-3 bg-[#0b1329] border-t border-slate-800 flex items-center gap-2">
            <input 
              type="text"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about RTL, STA, UVM, or programs..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <button 
              onClick={() => handleSendMessage()}
              aria-label="Send message"
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Buttons Container (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-3">
        {/* Silphor AI Toggle Button */}
        <button
          onClick={handleToggleAi}
          aria-label="Ask Silphor AI"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
          <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 border border-slate-700 text-white text-xs font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Ask Silphor AI
          </span>
        </button>

        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 border border-slate-700 text-white text-xs font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}
