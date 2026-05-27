import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-24 bg-reino-gold relative overflow-hidden text-reino-navy text-center">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        <h2 className="text-4xl font-serif font-extrabold mb-6 uppercase tracking-tight">Ready to own the room?</h2>
        <p className="text-xl mb-10 font-normal leading-relaxed font-sans">
          The June 2026 Cohort is strictly curated to ensure high-fidelity mentorship and unparalleled strategic growth.
        </p>
        <a 
          href="https://tally.so/r/ob0GkP" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-12 py-5 bg-reino-navy text-white font-extrabold uppercase tracking-widest hover:bg-white hover:text-reino-navy transition-all duration-300 shadow-2xl font-sans border border-reino-gold"
        >
          Join The Waitlist Now
        </a>
      </motion.div>
    </section>
  );
}
