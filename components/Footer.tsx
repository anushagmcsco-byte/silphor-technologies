'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, Mail, MapPin, Phone, ArrowUpRight, Globe, Share2, ExternalLink } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`border-t pt-16 pb-12 transition-colors ${
      darkMode ? 'bg-[#060B1E] border-orange-500/20 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 pb-12 border-b border-orange-500/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${darkMode ? 'from-blue-600 to-orange-500 shadow-orange-500/25' : 'from-blue-600 to-cyan-500 shadow-blue-500/25'} flex items-center justify-center text-white shadow-lg`}>
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight text-white">
                  Silphor Technologies
                </span>
                <span className={`block text-[10px] tracking-widest font-semibold uppercase ${darkMode ? 'text-orange-400' : 'text-cyan-400'}`}>
                  Private Limited
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              &ldquo;Engineering the Future of Semiconductor Technology&rdquo;
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>#45 East Link Road, Malleswaram 3rd Cross, Karnataka, Bengaluru - 5860003, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>contact@silphortech.com (Placeholder)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Globe">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-colors" aria-label="External Link">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/career" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/challenges" className="hover:text-cyan-400 transition-colors">Silicon News</Link></li>
            </ul>
          </div>

          {/* Technology */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Technology</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions" className="hover:text-cyan-400 transition-colors">VLSI & EDA</Link></li>
              <li><Link href="/technology-labs" className="hover:text-cyan-400 transition-colors">Silphor AI Lab</Link></li>
              <li><Link href="/cloud-vlsi-lab" className="hover:text-cyan-400 transition-colors">Cloud VLSI Lab</Link></li>
              <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Engineering Services</Link></li>
            </ul>
          </div>

          {/* Learning */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Learning</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vlsi-programs" className="hover:text-cyan-400 transition-colors">VLSI Programs</Link></li>
              <li><Link href="/dashboard" className="hover:text-cyan-400 transition-colors">Project Lab</Link></li>
              <li><Link href="/challenges" className="hover:text-cyan-400 transition-colors">Challenge Arena</Link></li>
              <li><Link href="/community/answers" className="hover:text-cyan-400 transition-colors">Silicon Intelligence</Link></li>
            </ul>
          </div>

          {/* Dashboards & Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Dashboards & Portals</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dashboard" className="hover:text-cyan-400 transition-colors">Student & Admin Command Center</Link></li>
              <li><Link href="/dashboard" className="hover:text-cyan-400 transition-colors">Mentor & Instructor Portal</Link></li>
              <li><Link href="/dashboard" className="hover:text-cyan-400 transition-colors">Company Hiring Dashboard</Link></li>
              <li><Link href="/dashboard" className="hover:text-cyan-400 transition-colors">User & Role Management</Link></li>
              <li><Link href="/dashboard" className="hover:text-cyan-400 transition-colors">Program & Certificate Hub</Link></li>
            </ul>
          </div>

          {/* Business & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Business & Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/career" className="hover:text-cyan-400 transition-colors">For Universities</Link></li>
              <li><Link href="/talent-hub" className="hover:text-cyan-400 transition-colors">For Enterprises</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Silphor Technologies Private Limited. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center gap-1">
            Engineered with precision for global semiconductor excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
