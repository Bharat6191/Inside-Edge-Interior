import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiLayout, FiDollarSign, FiBox, FiClock, FiAward, FiCheckCircle } from 'react-icons/fi';

const features = [
  {
    icon: <FiLayout />,
    title: "Tailored For You",
    description: "Your space is an extension of you. We craft layouts that fit your life like a glove.",
    id: "01"
  },
  {
    icon: <FiDollarSign />,
    title: "Smart Luxury",
    description: "High-end aesthetics sourced intelligently. We make your budget look expensive.",
    id: "02"
  },
  {
    icon: <FiBox />,
    title: "Visualize First",
    description: "Don't guess. Walk through your future home with our photorealistic 3D renders.",
    id: "03"
  },
  {
    icon: <FiCheckCircle />,
    title: "Total Care",
    description: "From concept to cushion. We handle the contractors, you handle the compliments.",
    id: "04"
  },
  {
    icon: <FiAward />,
    title: "Uncompromising",
    description: "Quality isn't an option, it's our baseline. We only use materials that last.",
    id: "05"
  },
  {
    icon: <FiClock />,
    title: "Deadline Driven",
    description: "We respect your calendar. Our rigorous management ensures on-time ease.",
    id: "06"
  }
];

const WhyUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Animation variants for the grid items
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <section ref={ref} className="bg-white text-neutral-900 py-32 px-6 md:px-0">
            <div className="max-w-[1920px] mx-auto">
                
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-24 px-6 md:px-12">
                   <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                   >
                        <div className="w-px h-16 bg-neutral-900 mx-auto mb-6"></div>
                        <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">The Inside Edge Standard</span>
                   </motion.div>
                   <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif max-w-4xl leading-tight"
                   >
                       Elevating the art of <br/> <span className="italic text-neutral-400">living well.</span>
                   </motion.h2>
                </div>

                {/* Minimalist Grid */}
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-neutral-100">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            custom={index}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={itemVariants}
                            className="group border-r border-b border-neutral-100 p-12 md:p-16 hover:bg-neutral-50 transition-colors duration-500 flex flex-col justify-between min-h-[320px] relative overflow-hidden"
                        >
                             {/* Decorative Number */}
                             <span className="absolute top-8 right-8 text-6xl font-serif text-neutral-100 group-hover:text-black/5 transition-colors duration-500 select-none">
                                 {feature.id}
                             </span>

                             <div className="relative z-10 text-3xl mb-8 group-hover:scale-110 origin-left transition-transform duration-500 text-neutral-800">
                                 {feature.icon}
                             </div>
                             
                             <div className="relative z-10">
                                <h3 className="text-2xl font-serif mb-4 text-neutral-900">{feature.title}</h3>
                                <p className="text-neutral-500 leading-relaxed text-sm md:text-base max-w-xs transition-colors group-hover:text-neutral-600">
                                    {feature.description}
                                </p>
                             </div>

                             {/* Hover Line */}
                             <div className="absolute bottom-0 left-0 w-0 h-1 bg-neutral-900 group-hover:w-full transition-all duration-700 ease-out" />
                        </motion.div>
                    ))}
                </div>
                
                {/* Bottom decorative element */}
                <div className="flex justify-center mt-20">
                     <button className="text-xs uppercase tracking-[0.2em] font-medium border-b border-neutral-900 pb-1 hover:opacity-50 transition-opacity">
                        Start Your Journey
                     </button>
                </div>

            </div>
        </section>
    );
};

export default WhyUs;
