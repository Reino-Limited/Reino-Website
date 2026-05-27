import { Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

const faculty = [
  {
    name: 'SHARON ONI',
    role: 'Founder & Lead Strategist, REINO',
    bio: 'Bridging the gap between data infrastructure and human decision-making. Experience with TEDx, global consulting, and teaching data analysis.',
    linkedin: 'https://www.linkedin.com/in/iamsharononi',
    image: '/principal.jpg'
  },
  {
    name: 'PROMISE-PAUL ILUOKHAUNO',
    role: 'Co-founder & Head of Operations, REINO',
    bio: 'Driving operational excellence and technological integration. An expert in systems architecture and capacity building.',
    linkedin: 'https://www.linkedin.com/in/iluokhauno-promise-paul-100796199/',
    image: '/principal2.jpeg'
  }
];

export default function Faculty() {
  return (
    <section id="team" className="pt-24 pb-0 bg-reino-navy border-t border-reino-gold/5 relative overflow-hidden z-30">
      <div className="absolute -right-20 top-20 text-[20rem] font-serif font-bold text-white opacity-[0.02] select-none pointer-events-none">R</div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-30">
        <div className="text-center mb-16">
          <h2 className="text-reino-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">Leadership</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-semibold text-white uppercase">The faculty</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-30">
          {faculty.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              viewport={{ once: true }}
              tabIndex={0} 
              whileTap={{ scale: 0.98 }}
              className="group relative focus:outline-none cursor-pointer md:cursor-default"
            >
              {/* FIX APPLIED HERE: Replaced h-[450px] with aspect-[4/5] md:aspect-[3/4] */}
              <div className="relative aspect-[4/5] md:aspect-[3/4] max-h-[600px] bg-gray-800 overflow-hidden border-b-4 border-reino-gold">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top filter contrast-110 grayscale transition-all duration-1000
                             group-hover:grayscale-0 group-focus:grayscale-0 group-active:grayscale-0 
                             group-hover:scale-105 group-focus:scale-105 group-active:scale-105" 
                />
              </div>
              <div className="pt-6 pb-12 bg-reino-navy transition-colors duration-300 group-focus:bg-white/[0.02] group-active:bg-white/[0.02] md:group-focus:bg-reino-navy md:group-active:bg-reino-navy">
                <h4 className="text-2xl font-serif font-extrabold text-white uppercase">{member.name}</h4>
                <p className="text-reino-gold uppercase tracking-widest text-xs font-extrabold mb-4 font-sans">{member.role}</p>
                <p className="text-reino-muted leading-relaxed mb-4 font-sans font-normal">{member.bio}</p>
                <div className="flex gap-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-reino-muted hover:text-[#0077B5] transition-all duration-300 transform hover:scale-110">
                    <Linkedin size={24} fill="currentColor" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
