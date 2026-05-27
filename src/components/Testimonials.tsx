import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "I have really Gained a lot from this training with REINO, from the well detailed illustrations and case studies to being carried along during open discussions it was a wholesome experience and I'm looking forward to participating in future trainings hosted by REINO",
    author: "O. M.",
    role: "Data Graduate"
  },
  {
    quote: "This has genuinely been the best beginner class I have ever attended. I've never met a tutor more patient and as gifted in teaching as Sharon is. Well done to the entire team",
    author: "Glory A.",
    role: "Project Manager & Virtual Assistant"
  },
  {
    quote: "Reino was the best platform for me because it helped me understand the concepts much better than I did before joining the cohort.",
    author: "F. G.",
    role: "Data Graduate"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-reino-navy relative z-20 border-t border-reino-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-reino-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">Proven Impact</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-semibold text-white uppercase">Alumni voices</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.author}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-reino-navy-light p-8 border border-reino-gold/20 relative"
            >
              <div className="absolute -top-4 left-8 bg-reino-gold p-2 rounded-sm shadow-lg">
                <Quote className="text-reino-navy" size={20} />
              </div>
              <p className="text-reino-muted italic mb-8 mt-4 leading-relaxed font-serif font-normal">"{t.quote}"</p>
              <div>
                <h5 className="text-white font-extrabold font-serif">{t.author}</h5>
                <p className="text-reino-gold text-xs uppercase tracking-wider font-sans font-normal">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
