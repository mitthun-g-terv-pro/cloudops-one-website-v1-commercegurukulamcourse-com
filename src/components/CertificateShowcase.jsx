import { Award, ShieldCheck, CheckCircle2, QrCode, Sparkles, ExternalLink } from 'lucide-react';

export default function CertificateShowcase({ onEnrollClick }) {
  return (
    <section className="relative py-20 bg-[#020916] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300 mb-4">
              <Award size={14} /> EMPLOYER-VERIFIED RESUME BADGE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Stand Out To Employers <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300">
                With QR-Verified Certificates
              </span>
            </h2>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Upon completing the AIRA 3-Month Program, you earn an official, ISO 9001:2015 certified Certificate of Practical Execution equipped with a unique QR verification URL.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">Direct LinkedIn Integration:</strong> Add 1-click credential badge to your LinkedIn profile.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">Live QR Code Verification:</strong> Hiring managers can scan to view your real practical project portfolio.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">ISO & Government Tax Authorized:</strong> Recognized across Big-4, Investment Banks & Top Corporates.</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onEnrollClick}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 px-7 py-3.5 text-xs font-extrabold uppercase text-slate-950 hover:scale-105 transition shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                Earn Your Certificate <Sparkles size={16} />
              </button>
            </div>

          </div>

          {/* Right Official Certificate Image Display */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/30 via-emerald-500/30 to-cyan-500/30 blur-2xl opacity-75 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative rounded-3xl border-2 border-amber-400/50 bg-[#061426] p-2 sm:p-3 shadow-[0_0_60px_rgba(245,158,11,0.25)] overflow-hidden transition-all duration-300 hover:scale-[1.02]">
              <img 
                src="/aira_official_certificate.jpg" 
                alt="Commerce Gurukulam AIRA 3-Month Program Official Certificate" 
                className="w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute bottom-4 right-4 bg-slate-950/85 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                <Sparkles size={12} className="text-emerald-400" /> OFFICIAL VERIFIED CREDENTIAL
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
