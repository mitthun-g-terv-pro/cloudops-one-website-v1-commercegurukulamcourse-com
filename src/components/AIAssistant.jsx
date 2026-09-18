import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  X,
  Bot,
  User,
  Sparkles,
  Volume2,
  VolumeX,
  PhoneCall,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Rocket,
  Clock,
  Award,
  BookOpen,
  Zap,
  Newspaper,
  TrendingUp
} from 'lucide-react';

const LATEST_NEWS_ITEMS = [
  {
    id: 1,
    tag: '⚡ ADMISSIONS',
    headline: 'Batch 14 Admissions: Only 8 of 40 Seats Remaining for Chennai Campus!'
  },
  {
    id: 2,
    tag: '📰 SEBI DIRECTIVE',
    headline: 'SEBI mandates practical LBO modeling & AI audit skills for M&A Analysts in 2026.'
  },
  {
    id: 3,
    tag: '🏆 PLACEMENT ALERT',
    headline: 'Top PE & IB firms hire 12 Gurukulam graduates at avg ₹14.5 LPA package!'
  },
  {
    id: 4,
    tag: '🤖 AI IN FINANCE',
    headline: 'Big 4 Audit firms deploy AI SEC extractions—Master AI Prompting in our Labs!'
  },
  {
    id: 5,
    tag: '📈 MARKET UPDATE',
    headline: 'Indian PE/VC deal flow surges 34%—High demand for Valuation & DCF Masters.'
  },
  {
    id: 6,
    tag: '🏦 RBI AUDIT NORMS',
    headline: 'RBI introduces tighter NPA audit guidelines—Demand spikes for forensic accountants.'
  },
  {
    id: 7,
    tag: '🌐 GIFT CITY JOBS',
    headline: 'GIFT City IFSC sees record $5.2B inflows—Boutique IB desks scaling hiring.'
  },
  {
    id: 8,
    tag: '💼 SALARY BENCHMARK',
    headline: 'Corporate Finance starting packages up 28% for candidates with hands-on LBO decks.'
  },
  {
    id: 9,
    tag: '🔥 INDUSTRY TREND',
    headline: 'Big 4 Valuation teams transition from manual Excel to AI financial modeling.'
  },
  {
    id: 10,
    tag: '🏛️ WALL STREET DEALS',
    headline: 'Bulge-bracket IB firms prioritize candidates with verified institutional deal decks.'
  },
  {
    id: 11,
    tag: '📍 CHENNAI CAMPUS',
    headline: 'Chennai Residential Accelerator open: 3-month immersive CFO war room training.'
  },
  {
    id: 12,
    tag: '⚠️ SKILL GAP ALERT',
    headline: 'Commerce graduates without practical deal experience face 40% lower callback rates.'
  },
  {
    id: 13,
    tag: '🚀 NEW MODULE',
    headline: 'Startup Cap Table & VC Liquidation Math added to Gurukulam Master Module 9.'
  },
  {
    id: 14,
    tag: '⚡ 5 AM DISCIPLINE',
    headline: '5:00 AM Elite Discipline Protocol producing top 1% market analysts in India.'
  },
  {
    id: 15,
    tag: '🔍 FORENSIC AUDIT',
    headline: 'Forensic Accounting AI tools adopted by 80% of top corporate governance boards.'
  },
  {
    id: 16,
    tag: '📊 PRIVATE CREDIT',
    headline: 'Private Credit funds expand in India—Urgent industry demand for Debt Sizing skills.'
  },
  {
    id: 17,
    tag: '🎙️ CFO DEFENSES',
    headline: 'Direct 1-on-1 CFO pitch defenses begin for Cohort 14 candidate evaluation.'
  },
  {
    id: 18,
    tag: '🎓 ALUMNI NETWORK',
    headline: 'Gurukulam alumni pool crosses 450+ placed across IB, PE, and Big 4 desks.'
  },
  {
    id: 19,
    tag: '💻 DEAL TERMINAL',
    headline: 'Real-time Dalal Street market terminal sandbox now active for student deal building.'
  },
  {
    id: 20,
    tag: '🎁 ACCESS GRANT',
    headline: 'Student Access Grant open for early applicants—Up to ₹30,000 tuition sponsorship.'
  }
];

const CATEGORIES = [
  { id: 'all', label: '🔥 All FAQs' },
  { id: 'fee', label: '🎓 Admissions & Seats' },
  { id: 'schedule', label: '⚡ 5 AM Schedule' },
  { id: 'curriculum', label: '🤖 AI & LBO Labs' },
  { id: 'placement', label: '🏆 Placements' },
  { id: 'location', label: '📍 Location' }
];

const SUGGESTIONS = [
  { text: 'How do I apply for the Student Access Grant?', cat: 'fee' },
  { text: 'What is the 5:00 AM Daily Discipline Protocol?', cat: 'schedule' },
  { text: 'How does 100% Placement Support & Referral work?', cat: 'placement' },
  { text: 'Where is the residential campus located?', cat: 'location' },
  { text: 'What AI tools and Wall Street LBO models will I build?', cat: 'curriculum' },
  { text: 'Who can apply? Is CA or Commerce degree mandatory?', cat: 'fee' },
];

// Granular Knowledge Base for Chanakya AI 2.0
const KNOWLEDGE_BASE = [
  {
    keywords: ['fee', 'tuition', 'cost', 'price', '90,000', '90k', 'payment', 'installment', 'grant', 'admission'],
    title: 'Admissions & Program Inclusions',
    response: `The Commerce Gurukulam Executive Accelerator is an all-inclusive residential learning program.

✨ **What the program covers:**
• 3-Month Luxury Residential Accommodation & Gourmet Dining
• Enterprise Licenses for Wall Street & Dalal Street Valuation Software
• Custom AI Prompt Engineering & Forensic Audit Lab Access
• 1-on-1 Mentorship with practicing CFOs & Investment Directors
• 100% Placement Referral Pipeline Access

Seats are strictly capped at **40 candidates per cohort** to ensure a 1:5 mentor-to-student ratio.`,
    actions: ['apply', 'whatsapp']
  },
  {
    keywords: ['location', 'chennai', 'where', 'place', 'bengaluru', 'city', 'address', 'campus', 'vanagaram', 'mettukuppam'],
    title: 'Campus Location & Address',
    response: `The residential accelerator campus is located in **Chennai**:

📍 **Address:** Mettukuppam Rd, Odamanagar, Vanagaram, Chennai, Tamil Nadu 600095
🏢 **Setup:** State-of-the-art deal room terminal labs, CFO war rooms, and residential suites.`,
    actions: ['apply', 'whatsapp']
  },
  {
    keywords: ['5 am', '5am', 'schedule', 'routine', 'daily', 'timing', 'time', 'hours'],
    title: '5:00 AM Daily Execution Protocol',
    response: `The program operates on an intense **5:00 AM Elite Discipline Protocol**:

• **05:00 AM** — Mindset Conditioning & Morning Market Briefing
• **09:00 AM** — Live Wall Street & Dalal Street LBO Modeling
• **02:00 PM** — AI SEC Extraction & Forensic Audit Lab
• **06:00 PM** — CFO Mentor War Room & Boardroom Pitch Defenses

This daily rigor conditions you to think, model, and present like a top 1% deal-maker before the markets open.`,
    actions: ['apply']
  },
  {
    keywords: ['placement', 'job', 'salary', 'hiring', 'interview', 'referral', 'career', 'lpa', 'recruit'],
    title: '100% Placement Referral Pipeline',
    response: `We provide **100% Dedicated Placement Referral Support**.

🏆 **Career Outcomes & Hiring Partners:**
• Direct referral access to boutique Investment Banks, PE firms, VC funds, and Corporate Finance teams.
• Graduate with a verified portfolio of **7 institutional deal decks**.
• Undergo 1-on-1 boardroom pitch defenses reviewed by active CFO mentors.`,
    actions: ['apply', 'whatsapp']
  },
  {
    keywords: ['lbo', 'dcf', 'model', 'ai', 'curriculum', 'learn', 'syllabus', 'subjects', 'audit'],
    title: 'Live Deal Labs & AI Integration',
    response: `Zero textbooks. You build institutional-grade deal models from Day 1:

🤖 **Core Labs You Master:**
1. **Wall Street LBO Terminal Sandbox** (Debt sizing & MOIC waterfalls)
2. **Real-Time AI Voice Pitch Simulator** (Boardroom question defenses)
3. **VC Cap Table & Term Sheet Builder** (Dilution & Liquidation math)
4. **AI Financial Audit Lab** (Forensic review & SEC filing extraction)
5. **Advanced DCF & Intrinsic Valuation** (WACC & Comps analysis)`,
    actions: ['apply']
  },
  {
    keywords: ['eligibility', 'qualify', 'who', 'background', 'undergrad', 'graduate', 'ca', 'cfa', 'cs', 'student'],
    title: 'Candidate Eligibility & Cohort Selection',
    response: `Commerce Gurukulam accepts ambitious candidates from:

🎓 **Eligible Backgrounds:**
• Commerce & Finance Undergraduate Students
• Recent Commerce & MBA Graduates
• Early-career Working Professionals & Analysts
• CA, CFA, CS, and CMA Aspirants

Selection is based on career ambition, commitment to the 5:00 AM discipline, and 1-on-1 executive screening interview performance.`,
    actions: ['apply']
  },
  {
    keywords: ['contact', 'phone', 'whatsapp', 'email', 'number', 'reach', 'call', 'support'],
    title: 'Admissions Desk Contact',
    response: `You can reach our Executive Admissions Board directly:

📞 **WhatsApp / Phone:** +91 84288 81144
📧 **Email:** learn@commercegurukulam.com
📍 **Address:** Mettukuppam Rd, Odamanagar, Vanagaram, Chennai, Tamil Nadu 600095

Our admissions team is online to assist with cohort slot reservations and screening interviews.`,
    actions: ['whatsapp', 'apply']
  }
];

export default function AIAssistant({ onApplyClick, isOpen: externalIsOpen, setIsOpen: externalSetIsOpen }) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = externalSetIsOpen || setInternalIsOpen;

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [showNewsFeed, setShowNewsFeed] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % LATEST_NEWS_ITEMS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentNews = LATEST_NEWS_ITEMS[currentNewsIndex];

  const [activeTab, setActiveTab] = useState('all');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: `Hello! I am **Chanakya AI**, your Executive Admissions Concierge at **Commerce Gurukulam**.

I can answer any questions about our 3-Month Executive Accelerator, admissions criteria, 5:00 AM discipline, live LBO labs, or 100% placement pipeline in Chennai.

How can I assist your career today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actions: ['apply', 'whatsapp']
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  // Voice Text-to-Speech handler
  const speakMessage = (text) => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const cleanText = text.replace(/[*#_`•]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = (userText) => {
    if (!userText.trim()) return;

    const userMsg = {
      id: Date.now(),
      type: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let matchedEntry = KNOWLEDGE_BASE.find(item =>
        item.keywords.some(kw => lower.includes(kw))
      );

      let responseText = '';
      let actions = ['apply', 'whatsapp'];

      if (matchedEntry) {
        responseText = matchedEntry.response;
        actions = matchedEntry.actions || actions;
      } else {
        responseText = `Great question regarding **Commerce Gurukulam**!

Our 3-Month Executive Residential Accelerator in **Chennai** is designed strictly for 40 candidates. 

You will build live Wall Street LBO models, master AI SEC filing extractions, and participate in 5:00 AM CFO mentor war rooms with **100% Placement Support**.

Would you like to schedule a 1-on-1 screening call or connect on WhatsApp?`;
      }

      const botMsg = {
        id: Date.now() + 1,
        type: 'bot',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: actions
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsLoading(false);
    }, 400);
  };

  const filteredSuggestions = SUGGESTIONS.filter(
    s => activeTab === 'all' || s.cat === activeTab
  );

  return (
    <>
      {/* Official 3D Ninja Turtle Mascot Floating Trigger (Replaces Old Green Pill Button) */}
      {!isOpen && (
        <div className="fixed bottom-3 right-4 sm:right-8 z-50 pointer-events-auto select-none flex flex-col items-center">

          {/* Mascot Speech Bubble with Auto-Cycling Latest News Ticker */}
          {showNewsFeed && (
            <div
              onClick={() => {
                setIsOpen(true);
                handleSendMessage(`Tell me more about this update: ${currentNews.headline}`);
              }}
              className="mb-2 w-[250px] sm:w-[290px] rounded-2xl bg-gradient-to-r from-slate-950 via-[#071324] to-slate-950 border border-amber-400/70 p-2.5 shadow-[0_0_35px_rgba(245,158,11,0.45)] backdrop-blur-md relative cursor-pointer group hover:border-amber-300 transition-all hover:scale-[1.02]"
            >
              {/* Prominent Floating Close X Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNewsFeed(false);
                }}
                className="absolute -top-2.5 -right-2.5 z-30 w-6 h-6 rounded-full bg-slate-950 border border-amber-400/90 text-amber-300 hover:bg-amber-400 hover:text-slate-950 transition flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.6)] cursor-pointer"
                title="Close Live News Feed"
              >
                <X size={12} />
              </button>

              {/* Header / Live News Badge */}
              <div className="flex items-center justify-between gap-1.5 pb-1.5 mb-1.5 border-b border-amber-400/20 pr-3">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-2 w-2 relative shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                  </span>
                  <span className="text-[9px] font-black tracking-wider uppercase text-amber-300 flex items-center gap-1">
                    <Newspaper size={10} className="text-amber-400" /> LIVE NEWS
                  </span>
                </div>
                <span className="text-[8px] font-black text-amber-300 bg-amber-400/15 border border-amber-400/30 px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                  {currentNews.tag}
                </span>
              </div>

              {/* News Headline content with smooth transition */}
              <div className="relative overflow-hidden min-h-[38px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentNews.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <p className="text-[11px] font-bold text-slate-100 leading-snug group-hover:text-amber-200 transition">
                      "{currentNews.headline}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Sub-footer tip */}
              <div className="mt-1.5 pt-1 border-t border-white/10 flex items-center justify-between text-[9px] text-slate-400">
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <Zap size={9} /> Click box for AI analysis
                </span>
              </div>

              {/* Pointer arrow down to Mascot */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#071324] border-b border-r border-amber-400/70 rotate-45" />
            </div>
          )}

          {/* Interactive Official Ninja Mascot Character */}
          <div
            onClick={() => setIsOpen(true)}
            className="relative flex flex-col items-center cursor-pointer group"
          >
            {/* Ground Contact Shadow */}
            <motion.div
              animate={{ scaleX: [0.85, 1.1, 0.85], opacity: [0.5, 0.8, 0.5] }}
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

            {/* Mascot Character Avatar */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [-1, 2, -1], scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 flex flex-col items-center filter drop-shadow-[0_16px_25px_rgba(0,0,0,0.9)]"
            >
              <div className="relative h-36 sm:h-44 w-auto group-hover:scale-105 transition-transform">
                <img
                  src="/official_ninja_mascot.png"
                  alt="Commerce Gurukulam Official Ninja Turtle Mascot Avatar"
                  className="h-full w-auto object-contain pointer-events-auto rounded-2xl"
                />

                {/* Status Badge */}
                <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-amber-400 text-slate-950 font-black text-[8px] px-2 py-0.5 rounded-full uppercase flex items-center gap-0.5 shadow-md border border-amber-300">
                  <Zap size={8} /> Ask Ninja
                </div>
              </div>
            </motion.div>

            {/* Callout Action Tag */}
            <span className="mt-1 relative z-10 text-[9px] font-black uppercase tracking-wider text-amber-300 bg-slate-950/90 border border-amber-400/40 px-2.5 py-0.5 rounded-full shadow-lg group-hover:bg-amber-400 group-hover:text-slate-950 transition">
              Click to Talk with Ninja Sensei 🥷
            </span>

          </div>

        </div>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100%-2rem)] sm:w-[400px] md:w-[440px] shadow-[0_0_60px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden border border-emerald-500/30 bg-[#07111e] backdrop-blur-xl flex flex-col h-[560px] md:h-[620px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 via-[#0b172a] to-slate-950 p-4 border-b border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-amber-400 p-0.5 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] overflow-hidden flex items-center justify-center text-yellow-400">
                  <img
                    src="/ninja_turtle_mascot.jpg"
                    alt="Ninja Turtle Mascot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-100 flex items-center gap-1.5">
                  Ninja Sensei AI 🥷 <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-1.5 py-0.2 rounded-md uppercase font-semibold">Skill Mascot</span>
                </h3>
                <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> Gurukulam Commerce Advisor
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => speakMessage(messages[messages.length - 1]?.text || '')}
                className={`p-2 rounded-lg transition cursor-pointer ${isSpeaking ? 'bg-yellow-400/20 text-yellow-300 animate-bounce' : 'text-slate-400 hover:text-white'}`}
                title="Listen to AI voice"
              >
                {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex gap-1.5 p-2 bg-slate-950/90 border-b border-white/5 overflow-x-auto no-scrollbar scrollbar-none">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition cursor-pointer ${activeTab === cat.id
                  ? 'bg-gradient-to-r from-yellow-400 to-emerald-400 text-slate-950 shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-white/5'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs md:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.type === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-yellow-500/10 border border-yellow-400/30 text-yellow-300 flex items-center justify-center shrink-0 mt-1">
                    <Bot size={14} />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${msg.type === 'user'
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-950 rounded-br-xs font-semibold shadow-md'
                    : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-bl-xs shadow-md'
                    }`}
                >
                  {/* Rich Text Format formatting */}
                  <div className="space-y-1.5 whitespace-pre-wrap">
                    {msg.text.split('\n').map((line, idx) => {
                      if (line.startsWith('• ') || line.startsWith('* ')) {
                        return (
                          <div key={idx} className="flex items-start gap-1.5 pl-1">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span>{line.substring(2)}</span>
                          </div>
                        );
                      }
                      return <p key={idx}>{line}</p>;
                    })}
                  </div>

                  {/* Interactive Action Buttons inside Bot Message */}
                  {msg.type === 'bot' && msg.actions && (
                    <div className="mt-3 pt-2.5 border-t border-slate-800 flex flex-wrap gap-2">
                      {msg.actions.includes('apply') && (
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            if (onApplyClick) onApplyClick();
                          }}
                          className="px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-emerald-400 text-slate-950 font-bold text-[11px] rounded-lg transition cursor-pointer flex items-center gap-1 hover:scale-105"
                        >
                          <Rocket size={12} /> Apply for Screening
                        </button>
                      )}
                      {msg.actions.includes('whatsapp') && (
                        <a
                          href="https://wa.me/918428881144?text=Hi%20Chanakya%20AI%20Advisor!%20I%20have%20questions%20about%20Commerce%20Gurukulam."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 hover:bg-emerald-500/30 font-bold text-[11px] rounded-lg transition cursor-pointer flex items-center gap-1"
                        >
                          <MessageSquare size={12} /> WhatsApp Desk (+91 84288 81144)
                        </a>
                      )}
                    </div>
                  )}

                  <span className={`block text-[9px] mt-1.5 ${msg.type === 'user' ? 'text-slate-800 text-right' : 'text-slate-500'}`}>
                    {msg.timestamp}
                  </span>
                </div>

                {msg.type === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-yellow-400 text-slate-950 flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <div className="w-7 h-7 rounded-lg bg-yellow-500/10 border border-yellow-400/30 text-yellow-300 flex items-center justify-center shrink-0">
                  <Bot size={14} />
                </div>
                <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[10px] text-slate-400 ml-1">Chanakya is analyzing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          {filteredSuggestions.length > 0 && (
            <div className="px-3 py-2 bg-slate-950/80 border-t border-slate-800/80">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
                <Sparkles size={10} className="text-yellow-400" /> Suggested Queries:
              </p>
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
                {filteredSuggestions.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(item.text)}
                    className="text-left px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-yellow-400/40 text-[11px] text-slate-300 whitespace-nowrap transition shrink-0 cursor-pointer"
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Box */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Chanakya about fees, 5 AM discipline, Chennai campus..."
                className="flex-1 bg-slate-900/90 border border-slate-700/80 focus:border-yellow-400 text-slate-100 rounded-xl px-3.5 py-2.5 text-xs md:text-sm placeholder-slate-500 focus:outline-none transition"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="bg-gradient-to-r from-yellow-400 to-emerald-400 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 text-slate-950 p-2.5 rounded-xl font-bold transition cursor-pointer shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
