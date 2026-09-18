import { motion } from 'framer-motion';
import { Quote, Sparkles, Star } from 'lucide-react';

const items = [
  {
    student: 'Ananya',
    image: '/students/ananya.jpg',
    track: 'Finance + M&A Track',
    quote: 'The toughest part of college was not understanding finance; it was translating it into work. Gurukulam made that shift visible in every case and model.'
  },
  {
    student: 'Vikram',
    image: '/students/vikram.png',
    track: 'Valuation & Transactions',
    quote: 'I went from memorizing ratios to building valuation narratives. The live feedback loop helped me understand how numbers become decisions.'
  },
  {
    student: 'Sana',
    image: '/students/sana.png',
    track: 'AI Finance Analysis',
    quote: 'The AI labs were not gimmicks. They taught me how to use tools correctly, read outputs critically and present insights with confidence.'
  }
];

export default function Experience() {
  return (
    <section className="relative py-20 bg-[#020916] overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-300 mb-3">
            <Sparkles size={14} className="text-amber-400" /> STUDENT EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            A rhythm built for <span className="text-amber-300">serious</span> <span className="text-emerald-400">finance students.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Real stories from students who bridged the gap between college theory and corporate deal execution.
          </p>
        </div>

        {/* Featured Student Inspiration Card */}
        <div className="mb-14 rounded-3xl border border-amber-400/40 bg-gradient-to-r from-slate-950 via-[#071527] to-slate-950 p-6 sm:p-10 shadow-[0_0_50px_rgba(245,158,11,0.15)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-bold text-xs uppercase tracking-wider mb-4">
              <Star size={14} className="text-amber-400 fill-amber-400" /> Your Career Transformation Starts Here
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
              Big Dreams Start with <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent">Small Steps.</span>
            </h3>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              Don't let college theory limit your ambition. Join 450+ Commerce Gurukulam graduates who built institutional-grade portfolios and unlocked top corporate placements.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-400/30 px-3 py-1 rounded-full">
                100% Practical Execution
              </span>
              <span className="text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full">
                CFO Mentorship
              </span>
            </div>
          </div>

          {/* Student Photo Banner */}
          <div className="relative shrink-0 max-w-[340px] sm:max-w-[380px] w-full rounded-2xl overflow-hidden border border-amber-400/50 shadow-2xl group">
            <img
              src="/students/pink_sweater_student.jpg"
              alt="Big Dreams Start with Small Steps - Commerce Gurukulam Student"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>

        {/* 3 Student Testimonial Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ student, image, track, quote }, index) => (
            <motion.article
              key={student}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl hover:border-emerald-500/50 transition-all hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 flex items-center justify-between gap-3">
                  {/* Student Photo Avatar */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-emerald-400/60 shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0 group-hover:border-amber-400 transition">
                      <img
                        src={image}
                        alt={`${student} - Commerce Gurukulam Graduate`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-100">{student}</h4>
                      <p className="text-[10px] uppercase font-black tracking-widest text-emerald-300 mt-0.5">{track}</p>
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-500/10 text-amber-300 shrink-0">
                    <Quote size={18} />
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-300 italic">
                  "{quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                <span className="text-amber-300 flex items-center gap-1">
                  <Star size={12} className="fill-amber-400 text-amber-400" /> Verified Graduate
                </span>
                <span className="text-emerald-400 font-mono text-[10px]">Cohort Alum</span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
