import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    const createParticles = () => {
      const parent = canvas.parentElement;
      const dWidth = parent ? parent.offsetWidth : window.innerWidth;
      const dHeight = parent ? parent.offsetHeight : window.innerHeight;
      const particleCount = Math.floor((dWidth * dHeight) / 12000);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * dWidth,
          y: Math.random() * dHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Multiply particles on click - Replicating more but not too fast
      for (let i = 0; i < 20; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 15,
          y: y + (Math.random() - 0.5) * 15,
          vx: (Math.random() - 0.5) * 1.0,
          vy: (Math.random() - 0.5) * 1.0,
          size: Math.random() * 1.8 + 1,
        });
      }
      
      const maxParticles = 600; // Slightly lower limit to help performance
      if (particles.length > maxParticles) {
        particles.splice(0, particles.length - maxParticles);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#D4AF37';
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 1.0;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect to mouse (Grab effect)
        const mdx = p.x - mouseRef.current.x;
        const mdy = p.y - mouseRef.current.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 200) {
          ctx.globalAlpha = (1 - mdist / 200) * 0.9;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }

        // Connect to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.globalAlpha = (1 - dist / 150) * 0.9;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;
      createParticles();
    };

    const resizeObserver = new ResizeObserver(resize);
    const parent = canvas.parentElement;
    if (parent) {
      resizeObserver.observe(parent);
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    draw();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto z-0 cursor-crosshair"
      style={{ opacity: 0.8 }}
    />
  );
}
