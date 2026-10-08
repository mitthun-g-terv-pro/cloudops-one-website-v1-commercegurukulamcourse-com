import { useState, useEffect } from 'react';
import { Calendar, Flame, Cloud, ArrowRight, Sparkles, Clock, CheckCircle2, Timer } from 'lucide-react';

export default function CohortLaunchBanner({ onEnrollClick }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: October 15, 2026
    const targetDate = new Date('2026-10-15T09:00:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-amber-500/10 rounded-3xl blur-3xl -z-10 pointer-events-none" />

      {/* Main Glassmorphic Container */}
      <div className="relative rounded-3xl border border-amber-400/40 bg-gradient-to-r from-slate-950 via-[#09172a] to-slate-950 p-6 sm:p-10 shadow-[0_0_60px_rgba(245,158,11,0.25)] backdrop-blur-xl overflow-hidden">
        
        {/* Decorative Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500" />

        {/* Floating Live Status Badge */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-extrabold text-xs uppercase tracking-wider shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span>AIRA 3-Month Program Admissions</span>
          </div>

          <div className="text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-400/30 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Clock size={14} className="text-emerald-400 animate-spin" /> Limited Early Bird Seats Available
          </div>
        </div>

        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Your Commerce Career Starts <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-400 bg-clip-text text-transparent">October 15</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg font-bold text-slate-200 flex items-center justify-center gap-2 flex-wrap">
            <span>3 Months of Industry-Focused Learning with</span>
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-400 text-slate-950 font-black text-lg px-3 py-0.5 rounded-md shadow-md uppercase tracking-wider border border-amber-200">
              AIRA
            </span>
          </p>
        </div>

        {/* Real-time Live Countdown Timer */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-amber-300 mb-3 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full shadow-sm">
            <Timer size={14} className="text-amber-400 animate-spin" /> Live Countdown to Oct 15 Course Launch
          </div>
          
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 text-center max-w-md sm:max-w-lg w-full">
            {/* Days */}
            <div className="rounded-2xl bg-slate-900/90 border border-amber-400/50 p-3 sm:p-4 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <span className="block text-2xl sm:text-4xl font-black text-amber-300 font-mono tracking-tight">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="rounded-2xl bg-slate-900/90 border border-emerald-400/50 p-3 sm:p-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <span className="block text-2xl sm:text-4xl font-black text-emerald-300 font-mono tracking-tight">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="rounded-2xl bg-slate-900/90 border border-amber-400/50 p-3 sm:p-4 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <span className="block text-2xl sm:text-4xl font-black text-amber-300 font-mono tracking-tight">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                Mins
              </span>
            </div>

            {/* Seconds */}
            <div className="rounded-2xl bg-slate-900/90 border border-red-500/60 p-3 sm:p-4 shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-pulse">
              <span className="block text-2xl sm:text-4xl font-black text-red-400 font-mono tracking-tight">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                Secs
              </span>
            </div>
          </div>
        </div>

        {/* 3 Key Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          
          {/* Card 1: Course Launch */}
          <div className="group relative rounded-2xl bg-slate-900/90 border border-emerald-500/30 p-5 hover:border-emerald-400/70 transition-all hover:scale-[1.02] shadow-lg flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-400/20">
                  Course Launch
                </span>
                <h3 className="text-lg font-black text-slate-100 mt-2">
                  October 15, 2026
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Interactive live deal room sessions & hands-on practical execution.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-[11px] text-emerald-400 font-bold">
              <CheckCircle2 size={13} className="mr-1" /> Cohort Slot Capped at 40
            </div>
          </div>

          {/* Card 2: Early Bird Offer */}
          <div className="group relative rounded-2xl bg-slate-900/90 border border-amber-500/40 p-5 hover:border-amber-400/80 transition-all hover:scale-[1.02] shadow-lg flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition">
                <span className="text-2xl">🔥</span>
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded border border-amber-400/30">
                  Early Bird Offer
                </span>
                <h3 className="text-lg font-black text-amber-300 mt-2">
                  Valid until September 30
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Unlock tuition grant discount & priority 1-on-1 CFO mentorship slot.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-[11px] text-amber-300 font-bold">
              <Flame size={13} className="mr-1 text-amber-400 animate-pulse" /> Save up to ₹30,000 on Enrollment
            </div>
          </div>

          {/* Card 3: Cloud Learning Access */}
          <div className="group relative rounded-2xl bg-slate-900/90 border border-blue-500/30 p-5 hover:border-blue-400/70 transition-all hover:scale-[1.02] shadow-lg flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition">
                <span className="text-2xl">☁️</span>
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-400/20">
                  Cloud Learning Access
                </span>
                <h3 className="text-base font-bold text-slate-100 mt-2 leading-snug">
                  Get anytime access to course materials & prep resources
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  24/7 cloud LMS sandbox with Wall Street models & SEC audit labs.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-[11px] text-blue-300 font-bold">
              <Cloud size={13} className="mr-1 text-blue-400" /> Instant Access Upon Registration
            </div>
          </div>

        </div>

        {/* High-Converting CTA Banner Button */}
        <div className="text-center pt-2">
          <button
            onClick={onEnrollClick}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400 px-8 py-4 text-base sm:text-lg font-black text-slate-950 shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:shadow-[0_0_60px_rgba(16,185,129,0.7)] transition-all hover:scale-105 cursor-pointer uppercase tracking-wider border border-amber-200"
          >
            <Sparkles size={20} className="text-slate-950 animate-spin" />
            Limited Early Bird Enrollment — Register Now
            <ArrowRight size={22} className="text-slate-950" />
          </button>
        </div>

      </div>

    </section>
  );
}
