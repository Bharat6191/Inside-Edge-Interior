import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const projects = [
  { 
    id: 1, 
    name: "The Azure Villa", 
    location: "Cannes", 
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    gallery: [
       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200", // bedroom
       "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200", // kitchen
       "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1200"  // pool
    ]
  },
  { 
    id: 2, 
    name: "Kyoto Tea House", 
    location: "Kyoto", 
    image: "https://images.unsplash.com/photo-1590333748338-d629e4564ad9?q=80&w=1000&auto=format&fit=crop",
    gallery: [
         "https://images.unsplash.com/photo-1590333748338-d629e4564ad9?q=80&w=1200",
         "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1200", // wooden int
         "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200", // plants
         "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200"  // calm corner
    ]
  },
  { 
    id: 3, 
    name: "Urban Loft 42", 
    location: "New York", 
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
     gallery: [
         "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
         "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200", // living
         "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200", // dining
         "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200"  // modern kitchen
    ]
  },
  { 
    id: 4, 
    name: "Desert Oasis", 
    location: "Palm Springs", 
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    gallery: [
         "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
         "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200", // outdoor
         "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1200", // pool details
         "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?q=80&w=1200"  // sunny corner
    ]
  },
];

const ProjectStrip = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20 bg-neutral-900 text-neutral-50 overflow-hidden">
      <div className="px-6 mb-12 flex items-baseline justify-between max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif">Signature Projects</h2>
        <span className="hidden md:inline-block text-neutral-400 text-sm tracking-widest uppercase">Selected Works 2023-2024</span>
      </div>

      <div className="flex overflow-x-auto scrollbar-hide pb-8 px-6 gap-6 md:gap-10 snap-x snap-mandatory">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            onClick={() => setSelectedProject(project)}
            className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-center aspect-[4/5] relative group cursor-pointer overflow-hidden rounded-sm"
          >
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            
            <div className="absolute bottom-0 left-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="block text-xs uppercase tracking-widest text-neutral-300 mb-2">{project.location}</span>
              <h3 className="text-2xl font-serif leading-none">{project.name}</h3>
              <p className="text-xs text-neutral-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Gallery +</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectModal = ({ project, onClose }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-neutral-900 w-full max-w-7xl h-[90vh] overflow-hidden rounded-sm relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                 {/* Header */}
                 <div className="p-8 border-b border-neutral-800 flex justify-between items-center bg-neutral-900 z-10">
                     <div>
                         <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 block mb-2">{project.location}</span>
                         <h2 className="text-3xl font-serif text-white">{project.name}</h2>
                     </div>
                     <button onClick={onClose} className="p-2 hover:bg-neutral-800 rounded-full transition-colors">
                         <FiX className="text-2xl text-white" />
                     </button>
                 </div>

                 {/* Gallery Grid */}
                 <div className="flex-1 overflow-y-auto p-4 md:p-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {project.gallery.map((img, index) => (
                             <div 
                                key={index} 
                                className={`relative group ${index === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'} cursor-zoom-in`}
                                onClick={() => setSelectedImage(img)}
                             >
                                 <img 
                                    src={img} 
                                    alt={`${project.name} detail ${index + 1}`} 
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                                 />
                                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                             </div>
                         ))}
                     </div>
                 </div>
            </motion.div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <motion.img 
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={selectedImage}
                            alt="Full screen view"
                            className="max-w-full max-h-full object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                         <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }} 
                            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
                        >
                             <FiX className="text-4xl" />
                         </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default ProjectStrip;
