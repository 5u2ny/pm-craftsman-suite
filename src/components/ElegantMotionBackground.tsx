import { useEffect, useState } from 'react';

const ElegantMotionBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Parallax floating elements */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-br from-primary/[0.03] to-transparent rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
          top: '10%',
          left: '20%',
        }}
      />
      
      <div 
        className="absolute w-80 h-80 bg-gradient-to-tl from-accent/[0.04] to-transparent rounded-full blur-2xl transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * -0.015}px, ${mousePos.y * -0.015}px)`,
          bottom: '15%',
          right: '25%',
        }}
      />

      <div 
        className="absolute w-64 h-64 bg-gradient-to-tr from-primary/[0.02] to-transparent rounded-full blur-xl transition-transform duration-1200 ease-out"
        style={{
          transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`,
          top: '60%',
          left: '70%',
        }}
      />

      {/* Animated geometric shapes */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 border border-primary/[0.08] rounded-full animate-slow-spin"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-accent/[0.12] rounded-lg animate-slow-spin-reverse transform rotate-45"></div>
      <div className="absolute top-2/3 left-1/5 w-20 h-20 border border-primary/[0.06] rounded-full animate-gentle-float"></div>

      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.05" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.03" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <path
          d="M 0,50 Q 25,20 50,50 T 100,30"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          fill="none"
          className="animate-draw-line text-primary"
          vectorEffect="non-scaling-stroke"
        />
        
        <path
          d="M 100,70 Q 75,40 50,70 T 0,90"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          fill="none"
          className="animate-draw-line-reverse text-accent"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '80px 80px',
          transform: `translate(${mousePos.x * 0.005}px, ${mousePos.y * 0.005}px)`,
        }}
      />
    </div>
  );
};

export default ElegantMotionBackground;