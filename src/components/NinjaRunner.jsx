import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, X } from 'lucide-react';

export default function NinjaRunner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically hide after the running sequence completes (5 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-x-0 bottom-16 z-[100] pointer-events-none overflow-hidden h-44 flex items-end">
        
        {/* Animated Ninja Mascot Container running across the screen */}
        <motion.div
          initial={{ x: '-25vw', opacity: 0 }}
          animate={{ x: '105vw', opacity: [0, 1, 1, 1, 0] }}
          transition={{ 
            duration: 5, 
            ease: [0.25, 0.1, 0.25, 1],
            times: [0, 0.1, 0.5, 0.9, 1] 
          }}
          className="relative flex items-end gap-3 pointer-events-auto cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          {/* Ninja Speech Bubble */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mb-6 rounded-2xl bg-gradient-to-r from-slate-950 via-[#07192e] to-slate-950 border-2 border-emerald-400 p-3.5 shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center gap-3 shrink-0 max-w-xs sm:max-w-md backdrop-blur-xl"
          >
            <div className="h-8 w-8 rounded-full bg-emerald-400/20 border border-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles size={16} className="text-amber-300 animate-spin" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1">
                GURUKULAM SKILL NINJA 🥷 <span className="text-emerald-400 font-bold">• Welcome!</span>
              </span>
              <p className="text-xs font-bold text-white mt-0.5 leading-snug">
                "Ready to master 18 corporate skills & become job-ready?"
              </p>
            </div>
            
            {/* Close / Skip button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
              }}
              className="ml-auto text-slate-400 hover:text-white p-1 rounded-lg transition"
              title="Close mascot animation"
            >
              <X size={14} />
            </button>
          </motion.div>

          {/* Running Ninja Character Avatar */}
          <div className="relative shrink-0">
            {/* Speed dust / energy glow trailing behind */}
            <motion.div 
              animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.9, 1.1, 0.9] }}
              transition={{ repeat: Infinity, duration: 0.3 }}
              className="absolute -left-6 bottom-2 w-16 h-12 bg-gradient-to-r from-emerald-500/40 via-amber-400/30 to-transparent blur-md rounded-full pointer-events-none"
            />
            
            {/* Bobbing Ninja Turtle Mascot Image */}
            <motion.div
              animate={{ y: [0, -12, 0, -12, 0], rotate: [-2, 3, -2, 3, -2] }}
              transition={{ repeat: Infinity, duration: 0.4, ease: 'easeInOut' }}
              className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-3xl overflow-hidden border-4 border-amber-400 shadow-[0_0_40px_rgba(251,191,36,0.6)] bg-slate-950"
            >
              <img
                src="/ninja_turtle_mascot.jpg"
                alt="Ninja Turtle Mascot"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute top-1 right-1 bg-emerald-500 text-slate-950 font-black text-[9px] px-1.5 py-0.5 rounded-full uppercase flex items-center gap-0.5">
                <Zap size={10} /> Fast
              </div>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
