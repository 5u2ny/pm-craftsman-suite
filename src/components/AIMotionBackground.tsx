import { useEffect, useRef } from 'react';

const AIMotionBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      pulsePhase: number;
    }> = [];

    // Data streams
    const streams: Array<{
      x: number;
      y: number;
      speed: number;
      opacity: number;
      trail: Array<{ x: number; y: number; opacity: number }>;
    }> = [];

    // Initialize nodes
    for (let i = 0; i < 15; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Initialize data streams
    for (let i = 0; i < 8; i++) {
      streams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        trail: [],
      });
    }

    let mouseX = 0;
    let mouseY = 0;

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Mouse interaction
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          node.vx += dx * 0.00005;
          node.vy += dy * 0.00005;
        }

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Boundaries
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Damping
        node.vx *= 0.999;
        node.vy *= 0.999;

        // Pulsing effect
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.1 + 0.9;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${node.opacity * pulse})`;
        ctx.fill();

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i < j) {
            const dx = otherNode.x - node.x;
            const dy = otherNode.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
              const opacity = (1 - distance / 120) * 0.1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      // Update and draw data streams
      streams.forEach((stream) => {
        // Add to trail
        stream.trail.push({ 
          x: stream.x, 
          y: stream.y, 
          opacity: stream.opacity 
        });
        
        if (stream.trail.length > 20) {
          stream.trail.shift();
        }

        // Update position
        stream.x += Math.sin(time * 0.5 + stream.x * 0.01) * stream.speed;
        stream.y += Math.cos(time * 0.3 + stream.y * 0.01) * stream.speed * 0.5;

        // Wrap around
        if (stream.x > canvas.width + 50) stream.x = -50;
        if (stream.y > canvas.height + 50) stream.y = -50;
        if (stream.x < -50) stream.x = canvas.width + 50;
        if (stream.y < -50) stream.y = canvas.height + 50;

        // Draw trail
        stream.trail.forEach((point, index) => {
          const alpha = (index / stream.trail.length) * point.opacity * 0.3;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
          ctx.fill();
        });
      });

      // Digital rain effect
      if (Math.random() < 0.1) {
        const x = Math.random() * canvas.width;
        ctx.font = '10px monospace';
        ctx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.1 + 0.05})`;
        ctx.fillText(Math.random() > 0.5 ? '0' : '1', x, 20);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default AIMotionBackground;