import { Globe, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export default function Partners() {
  // We define the animation variants for a smooth "fade-in & color-up" effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0.5, filter: "grayscale(100%)" },
    visible: { 
      opacity: 1, 
      filter: "grayscale(0%)",
      transition: { duration: 0.8 } 
    }
  };

  return (
    <div id="trust" className="bg-reino-navy border-b border-reino-gold/10 relative z-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <p className="text-center text-reino-muted text-xs font-bold tracking-[0.2em] uppercase mb-8 opacity-60">
          Alumni From & Impact At
        </p>
        
        {/* Animated container that triggers on scroll */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-wrap justify-center gap-12 md:gap-24 items-center"
        >
          
          {/* TEDx */}
          <motion.div variants={itemVariants} tabIndex={0} className="flex items-center group cursor-pointer focus:outline-none">
            <span className="text-2xl font-black font-sans text-white tracking-tighter group-hover:text-white group-focus:text-white">TED</span>
            <span className="text-2xl font-black font-sans text-red-600 relative -top-1">x</span>
            <span className="text-lg font-bold text-white ml-1">Mowe</span>
          </motion.div>
          
          {/* FONT HALL */}
          <motion.div variants={itemVariants} tabIndex={0} className="flex items-center gap-2 group cursor-pointer focus:outline-none">
            <Globe className="text-blue-400" size={24} />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-serif font-bold text-white tracking-wide">FONT HALL</span>
              <span className="text-[0.55rem] text-reino-muted uppercase tracking-widest text-right">Consulting</span>
            </div>
          </motion.div>
          
          {/* THE CAVE */}
          <motion.div variants={itemVariants} tabIndex={0} className="flex items-center group cursor-pointer focus:outline-none">
            <span className="text-2xl font-bold font-sans text-white border-2 border-white px-2 py-1 group-hover:border-reino-gold group-hover:text-reino-gold transition-colors">THE CAVE</span>
            <span className="ml-2 text-xs font-bold text-reino-gold uppercase w-12 leading-tight">Annual Conf.</span>
          </motion.div>
          
          {/* The Adullam */}
          <motion.div variants={itemVariants} tabIndex={0} className="flex items-center gap-2 group cursor-pointer focus:outline-none">
            <Layers className="text-reino-gold" size={24} />
            <div>
              <span className="block text-lg font-bold text-white leading-none">The Adullam</span>
              <span className="text-[0.6rem] text-reino-muted uppercase tracking-wider">Skill Acquisition Program</span>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  );
}
