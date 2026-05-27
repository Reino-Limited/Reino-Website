import { Crown, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function StrategicEdge() {
  return (
    <section className="bg-reino-gold py-24 px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <Crown className="text-reino-navy w-64 h-64 -mr-20 -mt-20" />
      </div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-reino-navy p-10 md:p-16 shadow-2xl relative z-10 border border-white/5"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-3/5">
            <span className="text-reino-gold text-sm font-bold tracking-[0.4em] uppercase mb-6 block">
              The Strategic Edge
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-serif font-semibold mb-8 leading-tight uppercase">
              Master the art of <br />
              <span className="text-reino-gold">decision intelligence.</span>
            </h2>
            <p className="text-reino-muted text-lg leading-relaxed mb-8 border-l-2 border-reino-gold pl-6 font-sans font-normal">
              Technical proficiency is the floor; strategic intuition is the ceiling. We don't just teach you how to build dashboards—we train you to command the boardroom by translating complex data into executive-level action. 
            </p>
            <div className="flex items-center gap-4 text-white/80 italic">
              <Quote className="text-reino-gold" size={24} />
              <span>the more AI automation tools are used, the more valuable human judgment becomes.</span>
            </div>
          </div>

          <div className="lg:w-1/3 w-full text-center bg-white/5 p-8 backdrop-blur-sm border border-white/10">
            <p className="text-reino-gold text-xs uppercase tracking-widest mb-4 font-sans font-extrabold">Phase One Focus</p>
            <h3 className="text-white text-2xl font-serif font-semibold mb-6 uppercase">Strategic infrastructure</h3>
            <p className="text-reino-muted text-sm font-sans font-normal">Aligning data architecture with organizational goals for unparalleled growth.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
