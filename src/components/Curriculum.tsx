import { Check, Flag } from 'lucide-react';
import { motion } from 'motion/react';
import Particles from './Particles';

const curriculumPhases = [
  {
    week: 'Weeks 1-3',
    phase: 'Phase One',
    title: 'Data Architecture',
    description: 'Transitioning from "Spreadsheet User" to "Data Architect." We master complex logic and data structures before touching any visuals.',
    items: [
      'Advanced Excel for Decision Support',
      'Data Cleaning & Power Query Automation',
      'The Logic of Relational Databases'
    ]
  },
  {
    week: 'Weeks 4-6',
    phase: 'Phase Two',
    title: 'Infrastructure & SQL',
    description: 'Mastering the language of databases to pull raw value from the source and connect disparate data points.',
    items: [
      'SQL Foundations',
      'Advanced Joins & Aggregations',
      'Corporate Query Optimization'
    ],
    align: 'right'
  },
  {
    week: 'Weeks 7-9',
    phase: 'Phase Three',
    title: 'Executive Visualization',
    description: 'Power BI and the psychology of the "Boardroom View." We build cinematic dashboards that drive immediate action.',
    items: [
      'DAX Modeling & Complex KPIs',
      'High-Fidelity UI/UX Dashboard Design',
      'The "Decision Intelligence" Storytelling Framework'
    ]
  },
  {
    week: 'Weeks 10-12',
    phase: 'Phase Four',
    title: 'The "War Room"',
    description: 'The culmination of the Master Trifecta. You will select a high-stakes business problem, solve it, and defend your logic.',
    items: [
      'Capstone Kickoff: Real-World Business Cases',
      'The Iteration Loop (Live Strategy Defense)',
      'The Grand Presentation & Portfolio Delivery'
    ],
    align: 'right',
    icon: Flag
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-reino-navy-light relative border-t border-reino-gold/10 z-20 overflow-hidden">
      {/* Light Particle Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none h-full w-full">
        <Particles />
      </div>

      {/* Marquee */}
      <div className="absolute top-0 left-0 w-full bg-reino-gold py-2 overflow-hidden z-40 border-y border-reino-navy">
        <div className="whitespace-nowrap animate-marquee flex items-center">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <span className="text-reino-navy font-extrabold text-sm uppercase tracking-[0.3em] mx-12">Master The Tools</span>
              <span className="text-reino-navy font-extrabold text-sm uppercase tracking-[0.3em] mx-12">Excel</span>
              <span className="text-reino-navy font-extrabold text-sm uppercase tracking-[0.3em] mx-12">SQL</span>
              <span className="text-reino-navy font-extrabold text-sm uppercase tracking-[0.3em] mx-12">Power BI</span>
              <span className="text-reino-navy font-extrabold text-sm uppercase tracking-[0.3em] mx-12">Strategy</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-reino-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 pt-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-reino-gold text-sm font-extrabold tracking-[0.3em] uppercase mb-3 font-sans">The Curriculum</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-semibold text-white uppercase">The 12-week blueprint</h3>
          <p className="text-reino-muted mt-6 text-lg leading-relaxed font-sans font-normal">
            A structured, high-intensity progression from tactical tool mastery to executive-level strategic intuition.
          </p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-reino-gold before:via-reino-gold/30 before:to-transparent">
          {curriculumPhases.map((phase, index) => (
            <motion.div 
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between group md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:flex-row md:pl-0' : 'md:flex-row-reverse text-right md:pr-0'}`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-reino-navy-light bg-reino-gold text-reino-navy font-bold shrink-0 z-10 relative ${index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'}`}>
                {phase.icon ? <phase.icon size={16} /> : index + 1}
              </div>
              
              <div className={`w-[calc(100%-4rem)] md:w-[calc(100%-4rem)] p-8 bg-reino-navy border border-white/5 transition-all duration-500 shadow-2xl relative overflow-hidden ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} 
                border-l-4 border-l-transparent group-hover:border-l-[8px] group-hover:border-l-reino-gold
                ${index % 2 !== 0 ? 'md:border-l-0 md:group-hover:border-l-0 md:border-r-4 md:border-r-transparent md:group-hover:border-r-[8px] md:group-hover:border-r-reino-gold' : ''} 
                group-hover:border-reino-gold group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]`}>
                
                <p className="text-reino-gold text-xs font-extrabold tracking-widest uppercase mb-3 font-sans">
                  {phase.week} <span className="text-white/30 mx-2">|</span> {phase.phase}
                </p>
                <h4 className="text-2xl font-serif font-semibold text-white mb-4 uppercase">{phase.title}</h4>
                <p className="text-reino-muted text-sm leading-relaxed mb-6 font-sans font-normal">{phase.description}</p>
                <ul className={`text-sm text-gray-300 space-y-3 font-sans font-normal ${index % 2 !== 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                  {phase.items.map((item) => (
                    <li key={item} className={`flex items-start gap-3 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                      <Check className="text-reino-gold mt-1 shrink-0" size={14} />
                      <span className="">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://tally.so/r/ob0GkP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-reino-gold bg-transparent text-reino-gold font-extrabold uppercase tracking-widest hover:bg-reino-gold hover:text-reino-navy transition-all duration-300 font-sans"
          >
            Secure Your Spot
          </a>
        </div>
      </div>
    </section>
  );
}
