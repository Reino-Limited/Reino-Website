import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const curriculumData = [
  {
    weeks: "Weeks 1-3",
    phase: "Phase One",
    title: "Strategic Infrastructure",
    description: "Aligning data architecture with organizational goals for unparalleled growth.",
    points: ["Data Architecture Basics", "Ecosystem Mapping", "Pipeline Deployment"]
  },
  {
    weeks: "Weeks 4-6",
    phase: "Phase Two",
    title: "Infrastructure & SQL",
    description: "Mastering the language of databases to pull raw value from the source and connect disparate data points.",
    points: ["SQL Foundations", "Advanced Joins & Aggregations", "Corporate Query Optimization"]
  },
  {
    weeks: "Weeks 7-9",
    phase: "Phase Three",
    title: "Executive Visualization",
    description: "Power BI and the psychology of data storytelling for executive presentation.",
    points: ["Dashboard Wireframing", "DAX Executive Metrics", "The Boardroom Pitch"]
  }
];

export default function Curriculum() {
  return (
    <section className="bg-reino-navy py-24 px-4 relative overflow-hidden">
      {/* Premium Background Lighting Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-reino-gold/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <span className="text-reino-gold text-sm font-bold tracking-[0.4em] uppercase mb-4 block">
          The Curriculum
        </span>
        <h2 className="text-white text-3xl md:text-5xl font-serif font-semibold uppercase tracking-wide">
          The Analytics Blueprint
        </h2>
      </div>

      {/* MASTER CONTAINER: Left-timeline on mobile, Center-timeline with alternating boxes on desktop */}
      <div className="max-w-6xl mx-auto relative pl-8 md:pl-0">
        
        {/* Timeline Center-line (Desktop) / Left-line (Mobile) */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-reino-gold/40 via-reino-gold/10 to-transparent" />

        <div className="space-y-16 relative z-10">
          {curriculumData.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="flex flex-col md:flex-row md:justify-between items-stretch relative w-full">
                
                {/* Timeline Node Point */}
                <div className="absolute -left-8 md:left-1/2 md:-translate-x-1/2 top-6 w-8 h-8 rounded-full bg-reino-gold text-reino-navy flex items-center justify-center font-sans font-bold text-sm border-4 border-reino-navy shadow-[0_0_15px_rgba(212,175,55,0.3)] z-20">
                  {index + 1}
                </div>

                {/* Left Side Content Container (Desktop Only - Empty for Odd entries) */}
                <div className={`hidden md:block w-[45%] ${isEven ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  {isEven && <CurriculumCard item={item} />}
                </div>

                {/* Right Side Content Container (Desktop Only - Empty for Even entries) */}
                <div className={`hidden md:block w-[45%] ${!isEven ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  {!isEven && <CurriculumCard item={item} />}
                </div>

                {/* Mobile View Content Container (Strictly forces uniform alignment on small screens) */}
                <div className="block md:hidden w-full text-left">
                  <CurriculumCard item={item} />
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// STYLISH CARD COMPONENT WITH INTEGRATED MOBILE TAP & VIEWPORT TOUCH GLOW EFFECTS
function CurriculumCard({ item }: { item: typeof curriculumData[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        borderColor: "rgba(212, 175, 55, 0.25)",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5), inset 0px 1px 1px rgba(255,255,255,0.05)"
      }}
      whileHover={{ 
        scale: 1.02, 
        borderColor: "rgba(212, 175, 55, 0.6)",
        boxShadow: "0px 15px 40px rgba(212, 175, 55, 0.15)"
      }}
      whileTap={{ 
        scale: 0.98,
        borderColor: "rgba(212, 175, 55, 0.8)",
        backgroundColor: "rgba(255, 255, 255, 0.05)"
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white/[0.03] p-6 sm:p-8 border border-white/10 backdrop-blur-md rounded-sm text-left h-full flex flex-col justify-between transition-colors duration-300 select-none"
    >
      <div className="text-left w-full">
        <div className="flex items-center gap-3 mb-3 text-left justify-start">
          <span className="text-reino-gold text-xs font-bold tracking-widest uppercase font-sans">
            {item.weeks}
          </span>
          <span className="text-white/20 text-xs">|</span>
          <span className="text-white/50 text-xs uppercase tracking-wider font-sans font-medium">
            {item.phase}
          </span>
        </div>

        {/* Fluid Responsive Typography: Scales dynamically down on mobile devices */}
        <h3 className="text-white text-xl sm:text-2xl font-serif font-semibold mb-4 uppercase tracking-tight break-words leading-tight text-left w-full">
          {item.title}
        </h3>

        <p className="text-reino-muted text-sm sm:text-base mb-6 font-sans font-normal leading-relaxed text-left w-full">
          {item.description}
        </p>
      </div>

      {/* STRICT LEFT ALIGNMENT SECURITY FOR CHECKLIST ITEMS */}
      <ul className="space-y-3.5 text-left w-full block justify-start items-start">
        {item.points.map((point, idx) => (
          <li key={idx} className="flex items-start justify-start gap-3 text-white/90 text-xs sm:text-sm text-left w-full">
            <Check className="text-reino-gold w-4 h-4 mt-0.5 shrink-0" size={16} />
            <span className="font-sans font-normal text-left block w-full tracking-wide">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
