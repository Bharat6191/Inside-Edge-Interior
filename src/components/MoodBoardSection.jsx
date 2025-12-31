import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MoodBoardSection = ({ title, concept, description, palette, images, orientation = 'left' }) => {
  const isLeft = orientation === 'left';
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="min-h-screen w-full py-24 px-4 md:px-12 lg:px-24 flex items-center bg-neutral-50 overflow-hidden relative">
      <div className={`w-full max-w-7xl mx-auto flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
        
        {/* Text Side - Kept for SEO/Accessibility but minimized visual impact if needed */}
        <motion.div 
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/3 flex flex-col gap-6 z-10"
        >
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2 font-sans">{concept}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-tight">
              {title}
            </h2>
          </div>
          <p className="text-neutral-600 leading-relaxed font-light">
            {description}
          </p>

          {/* Palette Dots */}
          <div className="flex items-center gap-3 mt-4">
            {palette.map((color, index) => (
              <div 
                key={index}
                className="w-8 h-8 rounded-full border border-neutral-200 shadow-sm"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </motion.div>

        {/* Visual Side - Aesthetic Collage */}
        <div className="lg:w-2/3 w-full relative h-[600px] md:h-[700px] flex items-center justify-center">
          {/* Decorative Background Blob */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-neutral-100 rounded-full blur-3xl opacity-60 pointer-events-none`} />

          {/* Aesthetic Detail Image (Background) */}
          {images[1] && (
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className={`absolute top-12 ${isLeft ? 'right-4 md:right-12' : 'left-4 md:left-12'} w-[35%] aspect-[3/4] z-0 opacity-90`}
            >
              <img 
                src={images[1]} 
                alt="Aesthetic detail" 
                className="w-full h-full object-cover rounded-sm shadow-lg grayscale-[20%] cursor-zoom-in"
                onClick={() => setSelectedImage(images[1])}
              />
            </motion.div>
          )}

          {/* Main Poster Image (Smaller & Centered) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20 w-[55%] md:w-[50%] h-auto shadow-2xl rounded-sm overflow-hidden border-[6px] border-white"
          >
            <img 
              src={images[0]} 
              alt={`${title} Mood Board`} 
              className="w-full h-auto object-contain block cursor-zoom-in"
              onClick={() => setSelectedImage(images[0])}
            />
          </motion.div>

          {/* Aesthetic Material Detail (Foreground) */}
          {images[2] && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`absolute bottom-20 ${isLeft ? 'left-4 md:left-20' : 'right-4 md:right-20'} w-[28%] aspect-square z-30`}
            >
              <div className="w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden">
                <img 
                  src={images[2]} 
                  alt="Material Texture" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-zoom-in"
                  onClick={() => setSelectedImage(images[2])}
                />
              </div>
            </motion.div>
          )}
        </div>

      </div>

      
      <AnimatePresence>
        {selectedImage && (
          <MoodBoardModal 
            src={selectedImage} 
            title={title}
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const MoodBoardModal = ({ src, title, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center bg-transparent"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image wrapper, but better UX usually allows clicking image to do nothing or standard? Actually let's generic click to close, but maybe buttons?
        // Actually for a simple lightbox, clicking anywhere often closes, but let's keep image distinct so we can add controls if needed later. But for now, simple is best.
      >
        <img 
          src={src} 
          alt={title} 
          className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
        />
        <button 
           onClick={onClose}
           className="absolute top-[-40px] right-0 text-white/70 hover:text-white transition-colors"
        >
           Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default MoodBoardSection;
