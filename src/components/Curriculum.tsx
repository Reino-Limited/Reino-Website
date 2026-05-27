import { Check, Flag } from 'lucide-react';
import { motion } from 'motion/react';

const curriculumData = [
  {
    weeks: "Weeks 1-3",
    phase: "Phase One",
    title: "DATA ARCHITECTURE",
    description: "Transitioning from \"Spreadsheet User\" to \"Data Architect.\" We master complex logic and data structures before touching any visuals.",
    points: ["Advanced Excel for Decision Support", "Data Cleaning & Power Query Automation", "The Logic of Relational Databases"],
    position: "right"
  },
  {
    weeks: "Weeks 4-6",
    phase: "Phase Two",
    title: "INFRASTRUCTURE & SQL",
    description: "Mastering the language of databases to pull raw value from the source and connect disparate data points.",
    points: ["SQL Foundations", "Advanced Joins & Aggregations", "Corporate Query Optimization"],
    position: "left"
  },
  {
    weeks: "Weeks 7-9",
    phase: "Phase Three",
    title: "EXECUTIVE VISUALIZATION",
    description: "Power BI and the psychology of the \"Boardroom View.\" We build cinematic dashboards that drive immediate action.",
    points: ["DAX Modeling & Complex KPIs", "High-Fidelity UI/UX Dashboard Design", "The \"Decision Intelligence\" Storytelling Framework"],
    position: "right"
  },
  {
    weeks: "Weeks 10-12",
    phase: "Phase Four",
    title: "THE \"WAR ROOM\"",
    description: "The culmination of the Master Trifecta. You will select a high-stakes business problem, solve it, and defend your logic.",
    points: ["Capstone Kickoff: Real-World Business Cases", "The Iteration Loop (Live Strategy Defense)", "The Grand Presentation & Portfolio Delivery"],
    position: "left"
  }
];

export default function Curriculum() {
  return (
    <section className="bg-reino-navy py-24 px-4 relative overflow-hidden">
      
      {/* FAINT BACKGROUND PARTICLE NODES & CONSTELLATION LATTICE */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="reino-particles" width="240" height="240" patternUnits="userSpaceOnUse">
            <line x1="15" y1="15" x2="130" y2="100" stroke="rgba(212,175,55,1)" strokeWidth="1" />
            <line x1="130" y1="100" x2="60" y2="190" stroke="rgba(212,175,55,1)" strokeWidth="1" />
            <line x1="60" y1="190" x2="210" y2="150" stroke="rgba(212,175,55,1)" strokeWidth="1" />
            <circle cx="15" cy="15" r="2" fill="rgba(212,175,55,1)" />
            <circle cx="130" cy="100" r="3" fill="rgba(212,175,55,1)" />
            <circle cx="60" cy="190" r="2" fill="rgba(212,175,55,1)" />
            <circle cx="210" cy="150" r="2.5" fill="rgba(212,175,55,1)" />
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
        <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto mt-6 font-sans font-normal">
          A structured, high-intensity progression from tactical tool mastery to executive-level strategic intuition.
        </p>
      </div>

      {/* TIMELINE TRACK */}
      <div className="max-w-6xl mx-auto relative pl-8 md:pl-0 z-10">
        
        {/* Central Vertical Timeline Vector */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-1/2 w-[1px] bg-reino-gold/40" />

        <div className="space-y-12 relative">
          {curriculumData.map((item, index) => {
            const isLeftCard = item.position === "left";
            const isPhase4 = index === 3;

            return (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-stretch relative w-full ${
                  isLeftCard ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Central Milestone Index Pin with Flag Logic */}
                <div className="absolute -left-8 md:left-1/2 md:-translate-x-1/2 top-10 w-8 h-8 rounded-full bg-reino-gold text-reino-navy flex items-center justify-center font-sans font-bold text-sm border-4 border-reino-navy z-30">
                  {isPhase4 ? <Flag size={14} strokeWidth={3} /> : index + 1}
                </div>

                {/* Card Container Framework */}
                <div className="w-full md:w-[46%] text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    
                    /* STRICT BORDER AND ALIGNMENT ENGINE based on attached images */
                    className={`p-6 sm:p-8 bg-white/[0.03] relative group transition-all duration-300 border border-transparent hover:shadow-[0_0_30px_rgba(212,175,55,0.08)] ${
                      isLeftCard 
                        ? "hover:border-reino-gold hover:border-l-4 md:hover:border-l md:hover:border-r-4 text-left md:text-right" 
                        : "hover:border-reino-gold hover:border-l-4 text-left"
                    }`}
                  >
                    {/* Meta Section Metrics */}
                    <div className={`flex items-center gap-2.5 mb-4 text-xs font-sans font-bold tracking-widest uppercase ${
                      isLeftCard ? "md:justify-end justify-start" : "justify-start"
                    }`}>
                      <span className="text-reino-gold">{item.weeks}</span>
                      <span className="text-white/30">|</span>
                      <span className="text-reino-gold">{item.phase}</span>
                    </div>

                    {/* Course Title Header */}
                    <h3 className="text-white text-2xl sm:text-3xl font-serif font-bold mb-4 uppercase tracking-tight leading-tight">
                      {item.title}
                    </h3>

                    {/* Context Body Copy */}
                    <p className="text-white/80 text-sm sm:text-base mb-8 font-sans font-normal leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bullet Verification Items Checklist */}
                    <ul className={`space-y-3.5 font-sans text-sm text-white/90 flex flex-col ${
                      isLeftCard ? "md:items-end items-start" : "items-start"
                    }`}>
                      {item.points.map((point, idx) => (
                        <li 
                          key={idx} 
                          /* Flex-row-reverse strictly controls right-sided checkmarks */
                          className={`flex items-start gap-3 w-full max-w-md ${
                            isLeftCard ? "md:flex-row-reverse md:text-right text-left" : "flex-row text-left"
                          }`}
                        >
                          <Check className="text-reino-gold w-[18px] h-[18px] mt-[2px] shrink-0" strokeWidth={2.5} size={18} />
                          <span className="tracking-wide font-normal block w-full">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Dead Space Grid Alignment Balance Column */}
                <div className="hidden md:block w-[46%]" />

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
