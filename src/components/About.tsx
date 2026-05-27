import { useEffect, useState, useRef } from 'react';
import { Quote } from 'lucide-react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

function Counter({ target, duration = 2, decimals = 0 }: { target: number; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      const totalSteps = duration * 60;
      const increment = (end - start) / totalSteps;
      
      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-reino-navy relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-reino-gold text-sm font-bold tracking-[0.2em] uppercase mb-2">The Philosophy</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6 uppercase">
              More than just "learning tools."
            </h3>
            <p className="text-reino-muted text-lg leading-relaxed mb-6 font-sans font-normal">
              Most courses teach you <em>where to click</em>. REINO teaches you <em>how to think</em>. 
              We bridge the gap between technical skill and high-level strategic decision making.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-reino-gold/20 pt-8">
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-4xl font-serif font-extrabold text-white">
                    <Counter target={75} />
                  </span>
                  <span className="text-3xl font-serif font-extrabold text-reino-gold">+</span>
                </div>
                <p className="text-sm text-reino-gold uppercase tracking-wider mt-1 font-sans font-extrabold">Alumni Trained</p>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-4xl font-serif font-extrabold text-white">
                    <Counter target={4.9} decimals={1} />
                  </span>
                  <span className="text-3xl font-serif font-extrabold text-reino-gold">/5</span>
                </div>
                <p className="text-sm text-reino-gold uppercase tracking-wider mt-1 font-sans font-extrabold">Satisfaction Score</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-reino-gold/20 transform rotate-3 rounded-sm" />
            <div className="relative bg-reino-navy-light p-10 border border-reino-gold/30 shadow-2xl">
              <Quote className="text-reino-gold mb-6 opacity-50" size={40} />
              <p className="text-xl text-white italic font-serif leading-relaxed uppercase">
                "In the digital economy, data literacy is not a skill—it is a language. 
                Those who cannot speak it will be left out of the conversation."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
