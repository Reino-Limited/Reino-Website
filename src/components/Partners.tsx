import { Globe, Layers } from 'lucide-react';

export default function Partners() {
  return (
    <div id="trust" className="bg-reino-navy border-b border-reino-gold/10 relative z-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <p className="text-center text-reino-muted text-xs font-bold tracking-[0.2em] uppercase mb-8 opacity-60">
          Alumni From & Impact At
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {/* TEDx */}
          <div className="flex items-center group cursor-default">
            <span className="text-2xl font-black font-sans text-white tracking-tighter">TED</span>
            <span className="text-2xl font-black font-sans text-red-600 relative -top-1">x</span>
            <span className="text-lg font-bold text-white ml-1">Mowe</span>
          </div>
          
          {/* FONT HALL */}
          <div className="flex items-center gap-2 group cursor-default">
            <Globe className="text-blue-400" size={24} />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-serif font-bold text-white tracking-wide">FONT HALL</span>
              <span className="text-[0.55rem] text-reino-muted uppercase tracking-widest text-right">Consulting</span>
            </div>
          </div>
          
          {/* THE CAVE */}
          <div className="flex items-center group cursor-default">
            <span className="text-2xl font-bold font-sans text-white border-2 border-white px-2 py-1">THE CAVE</span>
            <span className="ml-2 text-xs font-bold text-reino-gold uppercase w-12 leading-tight">Annual Conf.</span>
          </div>
          
          {/* The Adullam */}
          <div className="flex items-center gap-2 group cursor-default">
            <Layers className="text-reino-gold" size={24} />
            <div>
              <span className="block text-lg font-bold text-white leading-none">The Adullam</span>
              <span className="text-[0.6rem] text-reino-muted uppercase tracking-wider">Skill Acquisition Program</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
