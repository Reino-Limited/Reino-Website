import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Particles from './Particles';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <Particles />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-reino-gold/10 rounded-full blur-3xl animate-pulse z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-block px-4 py-1 mb-6 border border-reino-gold/50 rounded-full bg-reino-navy-light"
        >
          <p className="text-reino-gold text-[0.65rem] font-extrabold tracking-[0.2em] uppercase animate-pulse font-sans">
            Next Cohort: June 2026
          </p>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold text-white mb-6 leading-tight mx-auto uppercase">
          LEAD. BUILD. <br />
          <span className="text-gold-gradient">TRANSCEND.</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-reino-muted font-light leading-relaxed font-sans">
          12 Weeks. 3 Essential Tools. Zero Tech Background Required.
          Master Excel, SQL, and Power BI to become your team’s most valuable strategic asset.
        </p>
        
        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center items-center w-full">
          <a 
            href="https://tally.so/r/ob0GkP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-reino-gold text-reino-navy font-extrabold uppercase tracking-widest hover:bg-reino-navy hover:text-reino-gold transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] font-sans border border-reino-gold"
          >
            Join The Waitlist
          </a>
          <a 
            href="#curriculum" 
            className="group px-8 py-4 border border-reino-muted text-white font-extrabold uppercase tracking-widest hover:border-reino-gold hover:text-reino-gold transition-all duration-300 flex items-center gap-3 font-sans"
          >
            View Curriculum 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
      >
        <a href="#trust" className="text-reino-muted hover:text-reino-gold transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
