import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
          className="fixed inset-0 bg-reino-navy z-[9999] flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [1, 0.8, 1],
                boxShadow: [
                  '0 0 0 0 rgba(212, 175, 55, 0.7)',
                  '0 0 0 20px rgba(212, 175, 55, 0)',
                  '0 0 0 0 rgba(212, 175, 55, 0)'
                ]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="h-24 w-24 flex items-center justify-center rounded-full border border-reino-gold/20 mb-4 mx-auto overflow-hidden bg-reino-navy-light"
            >
               <img src="/REINO.png" alt="R" className="h-16 w-auto" />
            </motion.div>
            <motion.p 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-reino-gold text-xs font-bold tracking-[0.3em] uppercase"
            >
              Initializing...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
