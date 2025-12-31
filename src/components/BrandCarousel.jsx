import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Solitaire', url: 'https://placehold.co/200x80/ffffff/000000?text=Solitaire' },
  { name: 'Nerolac', url: 'https://placehold.co/200x80/ffffff/000000?text=Nerolac' },
  { name: 'Jaquar', url: 'https://placehold.co/200x80/ffffff/000000?text=Jaquar' },
  { name: 'Syska', url: 'https://placehold.co/200x80/ffffff/000000?text=Syska' },
  { name: 'Havells', url: 'https://placehold.co/200x80/ffffff/000000?text=Havells' },
  { name: 'Asian Paints', url: 'https://placehold.co/200x80/ffffff/000000?text=Asian+Paints' },
  { name: 'Greenlam', url: 'https://placehold.co/200x80/ffffff/000000?text=Greenlam' },
  { name: 'CenturyPly', url: 'https://placehold.co/200x80/ffffff/000000?text=CenturyPly' },
  { name: 'Philips', url: 'https://placehold.co/200x80/ffffff/000000?text=Philips' }
];

const BrandCarousel = () => {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden border-t border-neutral-100">
      <div className="max-w-[1920px] mx-auto px-6 mb-16 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-4 block">Trusted Partners</span>
        <h2 className="text-4xl md:text-6xl font-serif text-neutral-900">Brands We Work With</h2>
      </div>

      <div className="relative w-full overflow-hidden mask-fade-sides">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
            className="flex gap-16 md:gap-32 px-16 items-center flex-shrink-0"
          >
            {[...brands, ...brands].map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`} 
                className="relative w-32 md:w-48 h-24 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer mix-blend-multiply"
              >
                <img 
                  src={brand.url} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
