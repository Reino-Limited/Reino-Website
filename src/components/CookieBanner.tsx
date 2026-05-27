import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 w-full bg-reino-navy-light border-t border-reino-gold/20 p-4 z-50 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-reino-muted text-center md:text-left">
            We use data to optimize your experience. By continuing, you agree to our privacy standards.
          </p>
          <button 
            onClick={() => setIsVisible(false)} 
            className="px-6 py-2 bg-reino-gold text-reino-navy text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
          >
            Accept
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
