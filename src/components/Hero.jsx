import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
        <div className="relative z-10 text-center px-6">
        <div>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6"
          >
            Interior Design Studio
          </motion.span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-neutral-900 mb-8 leading-[1] cursor-default">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <FlipText>Timeless</FlipText>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              >
                <FlipText className="italic font-light text-neutral-500">Aesthetics</FlipText>
              </motion.div>
            </div>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-4 mt-8"
          >
            <div className="w-px h-16 bg-neutral-300"></div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-400">Scroll</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const FlipText = ({ children, className = "" }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden whitespace-nowrap ${className}`}
      style={{ lineHeight: 1 }}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        transition={{
          duration: 0.5,
          ease: [0.33, 1, 0.68, 1], // easeInOutCubic-ish
        }}
      >
        <span className="block">{children}</span>
        <span className="absolute top-full left-0 block">{children}</span>
      </motion.div>
    </motion.div>
  );
};
