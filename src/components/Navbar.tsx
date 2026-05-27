import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Why REINO', href: '#about' },
    { title: 'Curriculum', href: '#curriculum' },
    { title: 'Faculty', href: '#team' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg glass-nav' : 'bg-transparent'}`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="flex items-center gap-2">
               <img src="/REINO.png" alt="REINO Academy" className="h-12 w-auto" />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.title}
                  href={link.href} 
                  className="hover:text-reino-gold transition-colors text-sm font-semibold tracking-widest uppercase font-sans"
                >
                  {link.title}
                </a>
              ))}
              <a 
                href="https://tally.so/r/ob0GkP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 border border-reino-gold bg-reino-gold text-reino-navy hover:bg-reino-navy hover:text-reino-gold transition-all duration-300 font-extrabold text-sm uppercase tracking-wider font-sans"
              >
                Join The Next Cohort
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button 
              type="button" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-reino-gold hover:text-white p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-reino-navy-light border-b border-reino-gold/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.title}
                  href={link.href} 
                  className="block px-3 py-3 text-base font-semibold hover:text-reino-gold bg-reino-navy rounded-sm font-sans uppercase tracking-widest"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <a 
                href="https://tally.so/r/ob0GkP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center block px-3 py-3 text-base font-extrabold text-reino-navy bg-reino-gold mt-4 font-sans uppercase tracking-widest hover:bg-reino-navy hover:text-reino-gold transition-all duration-300 border border-reino-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                Join The Next Cohort
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
