import { Check, Flag } from 'lucide-react';
import { motion } from 'motion/react';

const curriculumData = [
  {
    weeks: "Weeks 1-3",
    phase: "Phase One",
    title: "DATA ARCHITECTURE",
    description: "Transitioning from \"Spreadsheet User\" to \"Data Architect.\" We master complex logic and data structures before touching any visuals.",
    points: ["Advanced Excel for Decision Support", "Data Cleaning & Power Query Automation", "The Logic of Relational Databases"]
  },
  {
    weeks: "Weeks 4-6",
    phase: "Phase Two",
    title: "INFRASTRUCTURE & SQL",
    description: "Mastering the language of databases to pull raw value from the source and connect disparate data points.",
    points: ["SQL Foundations", "Advanced Joins & Aggregations", "Corporate Query Optimization"]
  },
  {
    weeks: "Weeks 7-9",
    phase: "Phase Three",
    title: "EXECUTIVE VISUALIZATION",
    description: "Power BI and the psychology of the \"Boardroom View.\" We build cinematic dashboards that drive immediate action.",
    points: ["DAX Modeling & Complex KPIs", "High-Fidelity UI/UX Dashboard Design", "The \"Decision Intelligence\" Storytelling Framework"]
  },
  {
    weeks: "Weeks 10-12",
    phase: "Phase Four",
    title: "THE \"WAR ROOM\"",
    description: "The culmination of the Master Trifecta. You will select a high-stakes business problem, solve it, and defend your logic.",
    points: ["Capstone Kickoff: Real-World Business Cases", "The Iteration Loop (Live Strategy Defense)", "The Grand Presentation & Portfolio Delivery"]
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="bg-reino-navy py-24 px-4 relative overflow-hidden font-sans">
      
      {/* FAINT BACKGROUND PARTICLE NODES & CONSTELLATION LATTICE */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="reino-particles" width="240" height="240" patternUnits="userSpaceOnUse">
            <line x1="15" y1="15" x2="130" y2="100" stroke="#D4AF37" strokeWidth="1" />
            <line x1="130" y1="100" x2="60" y2="190" stroke="#D4AF37" strokeWidth="1" />
            <line x1="60" y1="190" x2="210" y2="150" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="15" cy="15" r="2" fill="#D4AF37" />
            <circle cx="130" cy="100" r="3" fill="#D4AF37" />
            <circle cx="60" cy="190" r="2" fill="#D4AF37" />
            <circle cx="210" cy="150" r="2.5" fill="#D4AF37" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#reino-particles)" />
        </svg>
      </div>

      {/* HEADER BLOCK */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <span className="text-reino-gold text-sm font-bold tracking-[0.4em] uppercase mb-4 block">
          THE CURRICULUM
        </span>
        <h2 className="text-white text-3xl md:text-5xl font-serif font-bold uppercase tracking-wide">
          THE 12-WEEK BLUEPRINT
        </h2>
        <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto mt-6 font-normal">
          A structured, high-intensity progression from tactical tool mastery to executive-level strategic intuition.
        </p>
      </div>

      {/* TIMELINE TRACK */}
      <div className="max-w-6xl mx-auto relative pl-8 md:pl-0 z-10">
        
        {/* Central Vertical Timeline Vector */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-1/2 w-[1px] bg-reino-gold/30" />

        <div className="space-y-12 relative">
          {curriculumData.map((item, index) => {
            // Blocks 1 & 3 (index 0, 2) sit on the right side.
            // Blocks 2 & 4 (index 1, 3) sit on the left side.
            const sitsOnLeftOnDesktop = index === 1 || index === 3;
            const isPhase4 = index === 3;

            return (
              <div 
                key={index} 
                className={`flex w-full relative ${
                  sitsOnLeftOnDesktop ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Central Milestone Index Pin with Flag Logic */}
                <div className="absolute -left-8 md:left-1/2 md:-translate-x-1/2 top-10 w-8 h-8 rounded-full bg-reino-gold text-reino-navy flex items-center justify-center font-bold text-sm border-4 border-reino-navy z-30 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                  {isPhase4 ? <Flag size={14} strokeWidth={3} /> : index + 1}
                </div>

                {/* Card Container Framework */}
                <div className="w-full md:w-[46%]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    
                    /* EXACT BORDER LIGHT-UP LOGIC:
                       - Unhovered: Dark box, invisible borders.
                       - Hovered (Left Side Box): Thick RIGHT border on desktop (Thick left on mobile fallback).
                       - Hovered (Right Side Box): Thick LEFT border always.
                    */
                    className={`p-6 sm:p-8 bg-white/[0.02] relative group transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(212,175,55,0.08)] ${
                      sitsOnLeftOnDesktop 
                        ? "hover:border-l-4 hover:border-l-reino-gold md:hover:border-l-[1px] md:hover:border-l-white/10 md:hover:border-r-4 md:hover:border-r-reino-gold" 
                        : "hover:border-l-4 hover:border-l-reino-gold"
                    }`}
                  >
                    {/* Meta Section Metrics */}
                    <div className="flex items-center gap-2.5 mb-4 text-xs font-bold tracking-widest uppercase justify-start">
                      <span className="text-reino-gold">{item.weeks}</span>
                      <span className="text-white/30">|</span>
                      <span className="text-reino-gold">{item.phase}</span>
                    </div>

                    {/* Course Title Header - STRICTLY LEFT ALIGNED */}
                    <h3 className="text-white text-2xl sm:text-3xl font-serif font-bold mb-4 uppercase tracking-tight leading-tight group-hover:text-reino-gold transition-colors text-left">
                      {item.title}
                    </h3>

                    {/* Context Body Copy - STRICTLY LEFT ALIGNED */}
                    <p className="text-white/70 text-sm sm:text-base mb-8 font-normal leading-relaxed group-hover:text-white/90 transition-colors text-left">
                      {item.description}
                    </p>

                    {/* Bullet Verification Items Checklist - STRICTLY LEFT ALIGNED */}
                    <ul className="space-y-3.5 text-sm text-white/80 flex flex-col items-start">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 w-full text-left">
                          <Check className="text-reino-gold w-[18px] h-[18px] mt-[2px] shrink-0 opacity-70 group-hover:opacity-100" strokeWidth={2.5} size={18} />
                          <span className="tracking-wide font-normal block w-full group-hover:text-white transition-colors">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
