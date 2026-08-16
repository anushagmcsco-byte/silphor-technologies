import Link from 'next/link';
import { Cpu, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-[#0b1329] border border-slate-700/80 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-blue-600/20 text-cyan-400 border border-blue-500/30 flex items-center justify-center mx-auto">
          <Cpu className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight">404 - Page Not Found</h1>
          <p className="text-sm text-slate-400">
            The semiconductor lab or page you are looking for does not exist or has been moved.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-lg shadow-blue-600/30 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Silphor Home</span>
        </Link>
      </div>
    </div>
  );
}
