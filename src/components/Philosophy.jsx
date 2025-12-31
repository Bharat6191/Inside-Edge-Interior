import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="py-24 md:py-32 bg-stone-100 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-10">
            Our Philosophy
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light mb-12">
            "We believe that a space should not just be seen, but felt. It should be a pause in a chaotic world, a breath of fresh air, and a reflection of the soul that inhabits it."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t border-neutral-200 pt-16">
            <div>
              <h3 className="font-serif text-xl mb-3">Materiality</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">Honest textures and natural elements that age beautifully over time.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-3">Balance</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">The perfect equilibrium between negative space and curated objects.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-3">Emotion</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">Design that evokes calm, comfort, and a sense of belonging.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
