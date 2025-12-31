import React, { useEffect, useRef } from 'react';

const ArchitecturalLights = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      time += 0.002;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Elegant, slow moving "light beams"
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      // Moving sunbeam positions
      const x1 = Math.sin(time) * 200 + canvas.width * 0.2;
      const y1 = Math.cos(time * 0.8) * 100;
      const x2 = Math.cos(time * 1.2) * 200 + canvas.width * 0.8;
      const y2 = canvas.height;

      // Soft light cone
      ctx.beginPath();
      ctx.moveTo(x1, -100);
      ctx.lineTo(x2 + 100, canvas.height + 100);
      ctx.lineTo(x2 - 300, canvas.height + 100);
      ctx.lineTo(x1 - 100, -100);
      ctx.closePath();

      // Subtle fill
      const beamGradient = ctx.createLinearGradient(x1, 0, x2, canvas.height);
      beamGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      beamGradient.addColorStop(0.5, 'rgba(255, 250, 240, 0.4)'); // Warm light
      beamGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = beamGradient;
      ctx.fill();

      // Second Beam (Interference)
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.8, -100);
      ctx.lineTo(canvas.width * 0.2, canvas.height + 100);
      ctx.lineTo(canvas.width * 0.4, canvas.height + 100);
      ctx.lineTo(canvas.width + 100, -100);
      ctx.closePath();
      
      const beam2Gradient = ctx.createLinearGradient(canvas.width, 0, 0, canvas.height);
      beam2Gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      beam2Gradient.addColorStop(0.5, 'rgba(240, 245, 255, 0.3)'); // Cool light
      beam2Gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
       
      ctx.fillStyle = beam2Gradient;
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none mix-blend-soft-light"
      style={{ zIndex: 0 }}
    />
  );
};

export default ArchitecturalLights;
