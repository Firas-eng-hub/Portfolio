import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * CosmicBackground Component
 * Animated star field with constellation lines
 * Performance-optimized with Canvas API
 */
const CosmicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    let constellations = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    // Initialize stars
    const initStars = () => {
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 8000);
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }

      // Create constellation connections (nearby stars)
      constellations = [];
      const maxDistance = 150;
      
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length && constellations.length < 50; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            constellations.push({
              from: i,
              to: j,
              opacity: (1 - distance / maxDistance) * 0.15,
            });
          }
        }
      }
    };

    // Animation loop
    const animate = (time) => {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw constellation lines
      constellations.forEach(({ from, to, opacity }) => {
        const starFrom = stars[from];
        const starTo = stars[to];
        
        ctx.strokeStyle = `rgba(201, 169, 97, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(starFrom.x, starFrom.y);
        ctx.lineTo(starTo.x, starTo.y);
        ctx.stroke();
      });

      // Draw and animate stars (twinkling)
      stars.forEach((star, index) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const currentOpacity = star.opacity + twinkle * 0.2;
        
        ctx.fillStyle = `rgba(241, 245, 249, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle star movement
        star.y += 0.05;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)' }}
    />
  );
};

/**
 * FloatingParticle Component
 * Individual animated particle for hero section
 */
export const FloatingParticle = ({ delay = 0, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} rounded-full bg-metallic-gold/30 absolute`}
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0 
      }}
      animate={{
        y: [null, Math.random() * -100 - 50],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 4,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
    />
  );
};

export default CosmicBackground;
