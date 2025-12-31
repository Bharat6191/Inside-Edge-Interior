import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const elementsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Element types - interior design themed
    const elementTypes = ['swatch', 'geometric', 'frame', 'circle', 'diamond'];

    // Rich color palettes for interior design
    const colorPalettes = [
      ['rgba(184, 147, 116, 0.5)', 'rgba(184, 147, 116, 0.8)'], // Warm tan
      ['rgba(106, 137, 129, 0.5)', 'rgba(106, 137, 129, 0.8)'], // Sage green
      ['rgba(74, 85, 104, 0.5)', 'rgba(74, 85, 104, 0.8)'],     // Slate
      ['rgba(218, 165, 140, 0.5)', 'rgba(218, 165, 140, 0.8)'], // Terracotta
      ['rgba(143, 117, 99, 0.5)', 'rgba(143, 117, 99, 0.8)'],   // Warm brown
    ];

    // Dynamic Design Element class
    class DesignElement {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 60 + 40; // Larger size for visibility
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.baseRotationSpeed = this.rotationSpeed;
        this.type = elementTypes[Math.floor(Math.random() * elementTypes.length)];
        this.palette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
        this.originalX = this.x;
        this.originalY = this.y;
        this.opacity = Math.random() * 0.3 + 0.3; // More visible
        this.scale = 1;
        this.targetScale = 1;
        this.floatOffset = Math.random() * Math.PI * 2; // For floating motion
        this.floatSpeed = Math.random() * 0.01 + 0.005;
      }

      update(mouse, time) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 250; // Larger interaction radius

        if (distance < maxDistance) {
          // Strong push force
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          this.vx -= Math.cos(angle) * force * 0.8;
          this.vy -= Math.sin(angle) * force * 0.8;
          
          // Dramatic rotation on hover
          this.rotationSpeed = this.baseRotationSpeed + force * 0.1;
          
          // Scale up on hover for dramatic effect
          this.targetScale = 1 + force * 0.5;
        } else {
          // Return to original position slowly
          this.vx += (this.originalX - this.x) * 0.0005;
          this.vy += (this.originalY - this.y) * 0.0005;
          this.rotationSpeed = this.baseRotationSpeed;
          this.targetScale = 1;
        }

        // Add gentle floating motion
        this.floatOffset += this.floatSpeed;
        const floatX = Math.sin(this.floatOffset) * 0.5;
        const floatY = Math.cos(this.floatOffset * 0.7) * 0.5;

        this.vx *= 0.94;
        this.vy *= 0.94;
        this.x += this.vx + floatX;
        this.y += this.vy + floatY;
        this.rotation += this.rotationSpeed;

        // Smooth scale transition
        this.scale += (this.targetScale - this.scale) * 0.1;

        // Wrapping
        if (this.x < -this.size * 2) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size * 2) this.x = -this.size;
        if (this.y < -this.size * 2) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size * 2) this.y = -this.size;
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.scale, this.scale);
        ctx.globalAlpha = this.opacity;

        const size = this.size;
        ctx.strokeStyle = this.palette[1];
        ctx.fillStyle = this.palette[0];
        ctx.lineWidth = 2;

        switch(this.type) {
          case 'swatch':
            // Color swatch with detail
            ctx.fillRect(-size * 0.3, -size * 0.3, size * 0.6, size * 0.6);
            ctx.strokeRect(-size * 0.3, -size * 0.3, size * 0.6, size * 0.6);
            // Add corner fold
            ctx.beginPath();
            ctx.moveTo(size * 0.3, -size * 0.3);
            ctx.lineTo(size * 0.2, -size * 0.2);
            ctx.lineTo(size * 0.3, -size * 0.15);
            ctx.closePath();
            ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.fill();
            break;
            
          case 'geometric':
            // Triangle
            ctx.beginPath();
            ctx.moveTo(0, -size * 0.4);
            ctx.lineTo(size * 0.35, size * 0.3);
            ctx.lineTo(-size * 0.35, size * 0.3);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
            
          case 'frame':
            // Picture frame
            ctx.lineWidth = 3;
            ctx.strokeRect(-size * 0.35, -size * 0.35, size * 0.7, size * 0.7);
            ctx.lineWidth = 1;
            ctx.strokeRect(-size * 0.28, -size * 0.28, size * 0.56, size * 0.56);
            break;
            
          case 'circle':
            // Circle
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            break;
            
          case 'diamond':
            // Diamond shape
            ctx.beginPath();
            ctx.moveTo(0, -size * 0.35);
            ctx.lineTo(size * 0.25, 0);
            ctx.lineTo(0, size * 0.35);
            ctx.lineTo(-size * 0.25, 0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
        }
        
        ctx.restore();
      }
    }

    // 30 elements for good coverage
    const elementCount = 30;
    elementsRef.current = Array.from({ length: elementCount }, () => new DesignElement());

    // Mouse move handler
    let mouseUpdateFrame = null;
    const handleMouseMove = (e) => {
      if (!mouseUpdateFrame) {
        mouseUpdateFrame = requestAnimationFrame(() => {
          mouseRef.current = { x: e.clientX, y: e.clientY };
          mouseUpdateFrame = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation loop with time
    let startTime = Date.now();
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const currentTime = Date.now() - startTime;

      for (let i = 0; i < elementsRef.current.length; i++) {
        elementsRef.current[i].update(mouseRef.current, currentTime);
        elementsRef.current[i].draw(ctx);
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mouseUpdateFrame) {
        cancelAnimationFrame(mouseUpdateFrame);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleBackground;
