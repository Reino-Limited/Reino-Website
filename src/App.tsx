/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Components
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Pedagogy from './components/Pedagogy';
import StrategicEdge from './components/StrategicEdge';
import Curriculum from './components/Curriculum';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-x-hidden cursor-none">
      <Preloader isLoading={isLoading} />
      <CustomCursor />

      {/* Grid Pattern Background */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />

      <Navbar />

      <main>
        <Hero />
        <Partners />
        <About />
        <Curriculum />
        <Pedagogy />
        <StrategicEdge />
        <Faculty />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      <CookieBanner />

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 bg-reino-gold text-reino-navy w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-white transition-all cursor-pointer group"
            aria-label="Back to top"
          >
            <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
