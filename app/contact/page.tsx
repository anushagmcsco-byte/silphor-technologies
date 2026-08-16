'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#080E24] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenAI={() => setAiOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Silphor Technologies</h1>
          <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} text-sm`}>Have questions about our VLSI programs, cloud labs, or engineering services? Reach out to our team.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-3xl border shadow-xl space-y-6 ${darkMode ? 'bg-[#0b1329] border-slate-700/80 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Headquarters</h3>
              
              <div className={`space-y-4 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                  <span>#45 East Link Road,<br />Malleswaram 3rd Cross,<br />Karnataka, Bengaluru - 5860003, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>contact@silphortech.com (Placeholder)</span>
                </div>
              </div>

              <div className={`pt-4 border-t ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                <span className={`text-xs font-mono uppercase tracking-wider block mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Official WhatsApp Support</span>
                <a 
                  href="https://wa.me/919876543210?text=Hello%20Silphor%20Technologies,%20I%20would%20like%20to%20know%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-medium text-xs shadow-lg shadow-emerald-500/20 hover:opacity-95 transition-opacity"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 rounded-3xl border shadow-xl ${darkMode ? 'bg-[#0b1329] border-slate-700/80 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Inquiry Submitted Successfully</h3>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Thank you for contacting Silphor Technologies. Our team will get in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Send Us a Message</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Full Name</label>
                      <input type="text" required className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} placeholder="Rahul Sharma" />
                    </div>
                    <div className="space-y-2">
                      <label className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email Address</label>
                      <input type="email" required className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} placeholder="rahul@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Area of Interest</label>
                    <select className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}>
                      <option>VLSI Training Programs</option>
                      <option>Cloud VLSI Lab Access</option>
                      <option>Engineering Services / ASIC Consulting</option>
                      <option>University & College Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Message / Requirements</label>
                    <textarea rows={4} required className={`w-full border rounded-xl p-4 text-sm focus:outline-none focus:border-cyan-500 resize-none ${darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} placeholder="Describe your inquiry..."></textarea>
                  </div>

                  <button type="submit" className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
      <FloatingWidgets externalAIOpen={aiOpen} onCloseExternalAI={() => setAiOpen(false)} />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
