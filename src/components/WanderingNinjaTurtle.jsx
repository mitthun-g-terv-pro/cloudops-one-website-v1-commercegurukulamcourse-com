import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Zap, Move } from 'lucide-react';

const NINJA_TIPS = [
  "🥷 Hey! Did you know 90% of commerce grads fail live GST filing tests?",
  "⚡ Master Tally Prime & Excel shortcuts in just 30 days!",
  "💼 Build 3 institutional Wall Street DCF valuation models for your resume!",
  "🎓 Colleges teach 2008 theory. We teach what Big-4 and corporates use today!",
  "🤖 Custom AI finance prompt engineering is built into every module!",
  "✨ Click me anytime to ask Ninja Sensei AI about admissions!"
];

export default function WanderingNinjaTurtle({ onNinjaClick }) {
  const [tipIndex, setTipIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  // Rotate speech tips periodically
  useEffect(() => {
    if (isMinimized) return;
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % NINJA_TIPS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isMinimized]);

  const handleMascotClick = (e) => {
    // Distinguish click from drag
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 600);
    if (onNinjaClick) onNinjaClick();
  };

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 left-4 z-[90] flex items-center gap-2 bg-emerald-950/90 border border-emerald-400/40 text-emerald-300 px-3.5 py-2 rounded-full shadow-xl text-xs font-bold hover:scale-105 transition cursor-pointer backdrop-blur-md"
      >
        <span className="animate-pulse text-base">🥷</span> Show Skill Ninja
      </button>
    );
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragSnapToOrigin={false}
      className="fixed bottom-3 left-4 sm:left-8 z-[90] pointer-events-auto select-none cursor-grab active:cursor-grabbing touch-none"
    >
      <div className="relative flex flex-col items-center">

        {/* Dynamic Speech Bubble showing tips */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tipIndex}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-2 max-w-[220px] sm:max-w-[260px] rounded-2xl bg-gradient-to-r from-slate-950 via-[#061628] to-slate-950 border border-amber-400/60 p-2.5 shadow-[0_0_30px_rgba(245,158,11,0.4)] backdrop-blur-md relative z-10"
          >
            <div className="flex items-start justify-between gap-1.5">
              <p className="text-[11px] font-bold text-slate-100 leading-snug">
                {NINJA_TIPS[tipIndex]}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMinimized(true);
                }}
                className="text-slate-400 hover:text-white p-0.5 shrink-0 cursor-pointer"
                title="Minimize Ninja"
              >
                <X size={12} />
              </button>
            </div>

            {/* Pointer triangle */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#061628] border-b border-r border-amber-400/60 rotate-45" />
          </motion.div>
        </AnimatePresence>

        {/* DRAGGABLE & ANIMATED MOVING MASCOT CHARACTER */}
        <div className="relative flex flex-col items-center cursor-pointer group" onClick={handleMascotClick}>

          {/* Ground Contact Shadow with breathing pulse */}
          <motion.div
            animate={{
              scaleX: [0.85, 1.1, 0.85],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="absolute -bottom-1 w-24 h-4 bg-black/90 rounded-full blur-sm z-0"
          />

          {/* Floating Energy Sparks */}
          <motion.div
            animate={{ opacity: [0.3, 0.9, 0.3], y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="absolute bottom-2 text-amber-400 opacity-80 pointer-events-none"
          >
            <Sparkles size={14} className="animate-spin text-amber-300" />
          </motion.div>

          {/* Continuous Floating Body Motion Animation */}
          <motion.div
            animate={{
              y: isJumping ? [0, -55, 0] : [0, -8, 0],
              rotate: isJumping ? [0, -15, 15, 0] : [-1, 2, -1],
              scale: isJumping ? 1.1 : [1, 1.03, 1]
            }}
            transition={{
              y: { duration: isJumping ? 0.6 : 2, repeat: isJumping ? 0 : Infinity, ease: 'easeInOut' },
              rotate: { duration: 2, repeat: isJumping ? 0 : Infinity, ease: 'easeInOut' },
              scale: { duration: 2, repeat: isJumping ? 0 : Infinity, ease: 'easeInOut' }
            }}
            className="relative z-10 flex flex-col items-center filter drop-shadow-[0_16px_25px_rgba(0,0,0,0.9)]"
          >
            {/* Pristine Crisp Official Ninja Mascot Avatar */}
            <div className="relative h-36 sm:h-44 w-auto group-hover:scale-105 transition-transform">
              <img
                src="/official_ninja_mascot.png"
                alt="Commerce Gurukulam Official Ninja Turtle Mascot Avatar"
                className="h-full w-auto object-contain pointer-events-auto rounded-2xl"
              />

              {/* Draggable Indicator Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-amber-400 text-slate-950 font-black text-[8px] px-2 py-0.5 rounded-full uppercase flex items-center gap-0.5 shadow-md border border-amber-300">
                <Move size={8} /> Moveable
              </div>
            </div>
          </motion.div>

          {/* Interactive Action Tag */}
          <span className="mt-1 relative z-10 text-[9px] font-black uppercase tracking-wider text-amber-300 bg-slate-950/90 border border-amber-400/40 px-2.5 py-0.5 rounded-full shadow-lg group-hover:bg-amber-400 group-hover:text-slate-950 transition flex items-center gap-1">
            <Move size={10} /> Drag to Move | Click to Talk 🥷
          </span>

        </div>

      </div>
    </motion.div>
  );
}
