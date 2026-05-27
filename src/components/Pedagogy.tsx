import { Microscope, DraftingCompass, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

const pedagogySteps = [
  {
    icon: Microscope,
    title: 'Diagnosis',
    description: 'We strip away bad habits. You learn to audit data sources and clean messy structures before you ever build a chart.',
    number: '1'
  },
  {
    icon: DraftingCompass,
    title: 'Deployment',
    description: "You don't just learn syntax; you build live projects. Dashboards, databases, and financial models that solve real problems.",
    number: '2'
  },
  {
    icon: Rocket,
    title: 'Dominance',
    description: 'Graduation isn\'t the end. We equip you with the portfolio and confidence to command respect in any boardroom.',
    number: '3'
  }
];

export default function Pedagogy() {
  return (
    <section className="py-24 bg-reino-navy relative border-t border-reino-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-reino-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">Our Pedagogy</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-semibold text-white uppercase text-center">The REINO protocol</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-reino-gold/30 to-transparent z-0" />
          
          {pedagogySteps.map((step, index) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 bg-reino-navy p-6 group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-24 h-24 bg-reino-navy-light border border-reino-gold/30 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="absolute -top-2 -right-2 bg-reino-gold text-reino-navy text-xs font-extrabold w-6 h-6 flex items-center justify-center rounded-full font-sans">
                  {step.number}
                </span>
                <step.icon className="text-reino-gold" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-white text-center mb-3 font-serif uppercase">{step.title}</h4>
              <p className="text-reino-muted text-center text-sm leading-relaxed font-sans font-normal">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
