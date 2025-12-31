import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useVelocity, useSpring, AnimatePresence } from 'framer-motion';
import { portfolioSections } from '../data';
import ArchitecturalLights from '../components/ArchitecturalLights';

const Portfolio = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="overflow-x-hidden min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
         <ArchitecturalLights />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-50" />
      </div>
      
      {/* Hero Header */}
      <div className="h-screen flex flex-col justify-center items-center relative z-10 px-6">
        <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6"
        >
          No 72 Hoors, Just 72 Shades of Interior Design
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-[9rem] font-serif text-neutral-900 leading-[0.9] tracking-tighter text-center"
        >
          Curated<br />Spaces.
        </motion.h1>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-12 flex flex-col items-center gap-4"
        >
          <div className="w-px h-16 bg-neutral-300"></div>
          <span className="text-[10px] uppercase tracking-widest text-neutral-400">Scroll</span>
        </motion.div>
      </div>

      {/* Content Sections with Solid Background to block particles */}
      <div className="relative z-20 bg-neutral-50">
        {portfolioSections.map((section, index) => (
          <PortfolioSection 
            key={section.id} 
            section={section} 
            index={index} 
            // Alternating layout for visual rhythm
            reversed={index % 2 !== 0} 
            onOpen={() => setSelectedSection(section)}
          />
        ))}
        {/* Spacing at bottom */}
        <div className="h-32" />
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedSection && (
          <PortfolioModal section={selectedSection} onClose={() => setSelectedSection(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const PortfolioSection = ({ section, index, reversed, onOpen }) => {
  const containerRef = useRef(null);
  
  // Horizontal Scroll Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax for the images container
  const xMovement = useTransform(
    scrollYProgress, 
    [0, 1], 
    reversed ? [-50, 50] : [50, -50] 
  );
  
  // Ghost Layer moves faster/slower for depth
  const xMovementLayer2 = useTransform(
    scrollYProgress, 
    [0, 1], 
    reversed ? [-100, 100] : [100, -100] 
  );

  // Velocity Skew Effect
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const skewX = useSpring(useTransform(scrollVelocity, [-2000, 2000], [15, -15]), {
    stiffness: 200,
    damping: 30
  });

  return (
    <section ref={containerRef} className="min-h-screen py-20 flex flex-col justify-center relative overflow-hidden group">
      
      {/* Unique Kinetic Background Title */}
      <div className="absolute top-10 left-0 w-full h-full overflow-hidden pointer-events-none z-0 flex items-start justify-center">
        
        {/* Layer 1: The Shadow/Depth (Filled) */}
        <motion.h2 
          style={{ x: xMovement, skewX }}
          className="absolute top-0 text-[13vw] font-serif leading-none whitespace-nowrap text-neutral-100 tracking-widest origin-bottom-left select-none"
        >
          {section.title}
        </motion.h2>

        {/* Layer 2: The Outline (Stroke) */}
        <motion.h2 
          style={{ x: xMovementLayer2, skewX }}
          className="absolute top-0 text-[13vw] font-serif leading-none whitespace-nowrap text-transparent tracking-widest origin-bottom-left select-none transition-transform duration-700 ease-out group-hover:translate-x-4 group-hover:-translate-y-2"
        >
          <span className="bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-400 opacity-30" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}>
            {section.title}
          </span>
        </motion.h2>
      </div>

      <div className={`relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>
         
         {/* Text Side */}
        <div className={`lg:col-span-4 flex flex-col gap-8 ${reversed ? 'lg:order-last lg:text-right items-end' : 'lg:text-left items-start'}`}>
          <div>
            <span className="block text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-4">
              0{index + 1} — {section.subtitle}
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-neutral-900 leading-tight">
              {section.title}
            </h2>
          </div>
          <p className="text-neutral-500 text-lg leading-relaxed max-w-md">
            {section.description}
          </p>
          <button 
            onClick={onOpen}
            className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-900 border-b border-neutral-900 pb-1 hover:opacity-60 transition-opacity"
          >
            View Project
          </button>
        </div>

        {/* Interactive Gallery Side */}
        <div className={`lg:col-span-8 ${reversed ? 'lg:order-first' : ''}`}>
           {/* Horizontal Scroll Area */}
           <div className="relative flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
             {section.images.map((img, i) => (
               <PortfolioCard key={i} img={img} index={i} onClick={onOpen} />
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

const PortfolioCard = ({ img, index, onClick }) => {
  return (
    <motion.div 
      className="relative flex-shrink-0 w-[85vw] md:w-[400px] aspect-[4/5] md:aspect-[3/4] snap-center group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
    >
      <div className="w-full h-full overflow-hidden relative shadow-lg">
        <img 
          src={img.url} 
          alt={img.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Title Reveal */}
        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <span className="text-white font-serif text-2xl">{img.title}</span>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioModal = ({ section, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
      <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg"
          onClick={onClose}
      >
          <div className="w-full h-full max-w-[19200px] mx-auto relative flex flex-col" onClick={e => e.stopPropagation()}>
              
              {/* Header */}
              <div className="absolute top-0 left-0 w-full z-20 p-8 flex justify-between items-start pointer-events-none">
                   <div>
                       <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 block mb-2">{section.subtitle}</span>
                       <h2 className="text-4xl md:text-6xl font-serif text-white">{section.title}</h2>
                   </div>
                   <button 
                      onClick={onClose}
                      className="pointer-events-auto p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors group"
                   >
                       <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                   </button>
              </div>

              {/* Gallery Scroll */}
              <div className="flex-1 overflow-y-auto px-4 md:px-12 pt-40 pb-20">
                  <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                      {section.images.map((img, idx) => (
                           <motion.div 
                              key={idx}
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="break-inside-avoid relative group overflow-hidden cursor-zoom-in"
                              onClick={() => setSelectedImage(img)}
                           >
                              <img 
                                src={img.url} 
                                alt={img.title} 
                                className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                              />
                              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                  {img.title}
                              </div>
                           </motion.div>
                      ))}
                  </div>
              </div>
          </div>

          {/* Lightbox Overlay */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[110] bg-black flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              >
                  <motion.img 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    src={selectedImage.url} 
                    alt={selectedImage.title}
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-sm tracking-widest uppercase">
                    {selectedImage.title}
                  </div>
                  <button className="absolute top-6 right-6 text-white p-4 hover:bg-white/10 rounded-full">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
              </motion.div>
            )}
          </AnimatePresence>
      </motion.div>
  );
}

export default Portfolio;
