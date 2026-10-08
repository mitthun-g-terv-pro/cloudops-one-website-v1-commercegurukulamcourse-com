import { Zap, Clock, ShieldCheck, ArrowRight, Award, Flame, CheckCircle, Calendar, Sparkles, BookOpen } from 'lucide-react';

export default function FastTrackBanner({ onEnrollClick }) {
  return (
    <section id="aira-program" className="relative py-20 overflow-hidden bg-gradient-to-b from-[#030a16] via-[#071329] to-[#030a16]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container */}
        <div className="relative rounded-3xl border-2 border-amber-400/50 bg-gradient-to-r from-amber-950/40 via-slate-900 to-emerald-950/40 p-8 sm:p-12 shadow-[0_0_50px_rgba(245,158,11,0.2)] overflow-hidden">
          
          {/* Top Background Badge */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 via-yellow-300 to-emerald-400 text-slate-950 font-black text-xs uppercase tracking-widest px-6 py-2 rounded-bl-2xl shadow-lg flex items-center gap-1.5">
            <Flame size={14} className="fill-slate-950" /> FLAGSHIP 3-MONTH PROGRAM
          </div>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300 mb-4">
              <Sparkles size={14} className="text-amber-400" /> DISCOVER THE AIRA 3-MONTH JOURNEY
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white leading-tight">
              Everything You Need To Know About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-400">
                The AIRA 3-Month Program
              </span>
            </h2>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong className="text-white">AIRA (Artificial Intelligence, Reporting & Analytics)</strong> is a 3-Month intensive career multiplier designed specifically for commerce undergraduates and graduates to bridge the gap between college theory and high-paying corporate execution.
            </p>

            {/* 3-Month Timeline Grid */}
            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              
              {/* Month 1 */}
              <div className="rounded-2xl border border-amber-400/30 bg-slate-950/90 p-5 relative group hover:border-amber-400 transition">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-amber-300 uppercase tracking-wider">MONTH 1</span>
                  <span className="text-[10px] font-extrabold text-slate-950 bg-amber-400 px-2 py-0.5 rounded shadow-sm">
                    CORE TAX & TALLY
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-white mb-2">Practical Accounting, GST & Corporate Tax</h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400 shrink-0" /> Live GSTR-1 & 3B Govt Portal Filing</li>
                  <li className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400 shrink-0" /> Tally Prime Inventory & Payroll</li>
                  <li className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400 shrink-0" /> Income Tax (ITR-1 to 4) Real Filing</li>
                </ul>
              </div>

              {/* Month 2 */}
              <div className="rounded-2xl border border-emerald-400/30 bg-slate-950/90 p-5 relative group hover:border-emerald-400 transition">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-emerald-300 uppercase tracking-wider">MONTH 2</span>
                  <span className="text-[10px] font-extrabold text-slate-950 bg-emerald-400 px-2 py-0.5 rounded shadow-sm">
                    WALL STREET DEALS
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-white mb-2">Wall Street Financial Modeling & DCF</h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400 shrink-0" /> 3-Statement Integrated Models</li>
                  <li className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400 shrink-0" /> DCF Valuation & WACC Sensitivity</li>
                  <li className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400 shrink-0" /> LBO Waterfalls & M&A Pitch Books</li>
                </ul>
              </div>

              {/* Month 3 */}
              <div className="rounded-2xl border border-cyan-400/30 bg-slate-950/90 p-5 relative group hover:border-cyan-400 transition">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-cyan-300 uppercase tracking-wider">MONTH 3</span>
                  <span className="text-[10px] font-extrabold text-slate-950 bg-cyan-300 px-2 py-0.5 rounded shadow-sm">
                    AI & ANALYTICS
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-white mb-2">AI Finance Prompting & Power BI Lab</h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400 shrink-0" /> AI Prompts for SEC 10-K Extractions</li>
                  <li className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400 shrink-0" /> Power BI Executive KPI Dashboards</li>
                  <li className="flex items-center gap-1.5"><CheckCircle size={13} className="text-emerald-400 shrink-0" /> 1-on-1 Boardroom Defense & Mock Prep</li>
                </ul>
              </div>

            </div>

            {/* Program Track Options Banner */}
            <div className="mt-8 rounded-2xl bg-slate-900/80 p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Calendar size={24} className="text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">NEXT COHORT LAUNCH: OCTOBER 15</h4>
                  <p className="text-xs text-slate-300">Early Bird Offer Valid Until <strong className="text-amber-300">September 30</strong> • Choose Online or Professional Diploma Track</p>
                </div>
              </div>
              <button
                onClick={() => onEnrollClick()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-emerald-400 to-emerald-500 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 hover:scale-105 transition shadow-lg shadow-emerald-500/20 whitespace-nowrap cursor-pointer"
              >
                Apply For AIRA 3-Month Program <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

