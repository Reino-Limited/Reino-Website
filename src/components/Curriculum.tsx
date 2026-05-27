import { Check } from 'lucide-react';
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
  }
];

export default function Curriculum() {
  return (
    <section className="bg-reino-navy py-24 px-4 relative overflow-hidden">
      
      {/* FAINT BACKGROUND PARTICLE NODES & CONSTELLATION LINES */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="particles" width="200" height="200" patternUnits="userSpaceOnUse">
            <line x1="10" y1="10" x2="120" y2="90" stroke="rgba(212,175,55,0.15)" strokeWidth="1" />
            <line x1="120" y1="90" x2="50" y2="170" stroke="rgba(212,175,55,0.15)" strokeWidth="1" />
            <line x1="50" y1="170" x2="190" y2="130" stroke="rgba(212,175,55,0.15)" strokeWidth="1" />
            <circle cx="10" cy="10" r="2" fill="rgba(212,175,55,0.4)" />
            <circle cx="120" cy="90" r="3" fill="rgba(212,175,55,0.3)" />
            <circle cx="50" cy="170" r="2" fill="rgba(212,175,55,0.5)" />
            <circle cx="190" cy="130" r="2.5" fill="rgba(212,175,55,0.3)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#particles)" />
        </svg>
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <span className="text-reino-gold text-sm font-bold tracking-[0.4em] uppercase mb-4 block">
          THE CURRICULUM
        </span>
        <h2 className="text-white text-3xl md:text-5xl font-serif font-semibold uppercase tracking-wide">
          THE 12-WEEK BLUEPRINT
        </h2>
        <p className="text-reino-muted text-sm md:text-base max-w-2xl mx-auto mt-4 font-sans font-normal opacity-80">
          A structured, high-intensity progression from tactical tool mastery to executive-level strategic intuition.
        </p>
      </div>

      {/* MAIN TIMELINE CONTAINER */}
      <div className="max-w-6xl mx-auto relative pl-8 md:pl-0 z-10">
        
        {/* Timeline Center Line */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-reino-gold/30" />

        <div className="space-y-16 relative">
          {curriculumData.map((item, index) => {
            const isLeftCard = item.position === "left";

            return (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-stretch relative w-full ${
                  isLeftCard ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Center Circle Badge */}
                <div className="absolute -left-8 md:left-1/2 md:-translate-x-1/2 top-8 w-8 h-8 rounded-full bg-reino-gold text-reino-navy flex items-center justify-center font-sans font-bold text-sm border-4 border-reino-navy shadow-[0_0_15px_rgba(212,175,55,0.2)] z-30">
                  {index + 1}
                </div>

                {/* Content Side Box Container */}
                <div className="w-full md:w-[46%] text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      boxShadow: "0px 10px 30px rgba(0,0,0,0.4)"
                    }}
                    whileHover={{ 
                      scale: 1.01,
                      boxShadow: "0px 15px 35px rgba(212,175,55,0.12)",
                      backgroundColor: "rgba(255, 255, 255, 0.03)"
                    }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, margin: "-40px" }}
                    /* ASYMMETRIC BORDER CONFIGURATION ENGINE */
                    className={`bg-white/[0.015] p-6 sm:p-8 border border-white/10 backdrop-blur-md rounded-sm relative group transition-all duration-300 ${
                      isLeftCard 
                        ? "border-l-4 border-l-reino-gold md:border-l-white/10 md:border-r-4 md:border-r-reino-gold text-left md:text-right" 
                        : "border-l-4 border-l-reino-gold text-left"
                    }`}
                  >
                    {/* Decorative Hover Node Dot */}
                    <div className={`absolute w-1.5 h-1.5 rounded-full bg-reino-gold opacity-0 group-hover:opacity-100 transition-opacity top-4 ${
                      isLeftCard ? "md:left-4 right-4" : "right-4"
                    }`} />

                    {/* Meta Timing Labels */}
                    <div className={`flex items-center gap-3 mb-4 text-xs font-sans font-bold tracking-widest uppercase ${
                      isLeftCard ? "md:justify-end justify-start" : "justify-start"
                    }`}>
                      <span className="text-reino-gold">{item.weeks}</span>
                      <span className="text-white/20">|</span>
                      <span className="text-white/50">{item.phase}</span>
                    </div>

                    {/* Main Phase Course Title */}
                    <h3 className="text-white text-xl sm:text-2xl font-serif font-semibold mb-4 uppercase tracking-tight leading-tight">
                      {item.title}
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-reino-muted text-sm sm:text-base mb-6 font-sans font-normal leading-relaxed opacity-90">
                      {item.description}
                    </p>

                    {/* Bullet Items Array Alignment Blocks */}
                    <ul className={`space-y-3.5 font-sans text-sm text-white/90 flex flex-col ${
                      isLeftCard ? "md:items-end items-start" : "items-start"
                    }`}>
                      {item.points.map((point, idx) => (
                        <li 
                          key={idx} 
                          className={`flex items-start gap-3 w-full max-w-md ${
                            isLeftCard ? "md:flex-row-reverse md:text-right text-left" : "text-left"
                          }`}
                        >
                          <Check className="text-reino-gold w-4 h-4 mt-0.5 shrink-0" size={16} />
                          <span className="tracking-wide font-normal block w-full">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Dead Column Balancing Block for Desktop Grid Array */}
                <div className="hidden md:block w-[46%]" />

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
