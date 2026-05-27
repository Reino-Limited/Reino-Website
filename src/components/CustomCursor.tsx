import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .cursor-pointer')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-reino-gold rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-reino-gold/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
        }}
      />
    </>
  );
}
