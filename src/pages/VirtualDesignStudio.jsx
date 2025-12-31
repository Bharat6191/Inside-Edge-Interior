import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArchitecturalLights from '../components/ArchitecturalLights';

const serviceData = [
  {
    id: 'consultancy',
    title: 'Design Consultancy',
    description: 'Expert guidance on space planning, material selection, and styling. We help you refine your vision and make informed decisions to elevate your existing space.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'visualization',
    title: '2D & 3D Visualization',
    description: 'Immersive visual walkthroughs and detailed 2D layouts. Visualize every corner, texture, and lighting effect before we place a single brick.',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'execution',
    title: 'Turnkey Execution',
    description: 'Complete end-to-end interior solutions. From the initial concept to the final installation, we handle contractors, sourcing, and quality control.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'bespoke',
    title: 'Bespoke Furniture',
    description: 'Custom-designed furniture pieces tailored specifically to your taste and spatial requirements, crafted by skilled artisans.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000'
  }
];

const steps = [
  {
    id: 1,
    title: "Tell Us Your Needs",
    description: "Share your vision, budget, and measurements. We listen to every detail to understand your unique style and functional requirements.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Receive Multiple Design Options",
    description: "Get curated mood boards and layout concepts. Explore different directions before committing to the perfect look for your space.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Work Closely With Our Designer",
    description: "Collaborate one-on-one to refine the design. We iterate based on your feedback until every corner feels exactly right.",
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Shopping List & Local Store Links",
    description: "Receive a comprehensive shopping list with direct links to furniture and decor, curated specifically for your local availability.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Enjoy Your Dream Space",
    description: "Execute the design with ease. Watch your vision come to life and enjoy a home that perfectly reflects who you are.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  }
];

const VirtualDesignStudio = () => {
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
          <ArchitecturalLights />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-50" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center z-10 px-6">
           <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500 mb-6"
          >
            Our Design Philosophy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-[8rem] font-serif text-neutral-900 mb-8 leading-[0.9] text-center"
          >
            Virtual Design<br/>Studio.
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
      </section>

      {/* Main Content */}
      <div className="relative z-10 bg-neutral-50 pt-20 pb-20 md:pb-32 px-6 md:px-12 max-w-[1920px] mx-auto min-h-screen">

        {/* --- NEW SERVICES SECTION --- */}
        <ServicesTabs />

         {/* Section Divider */}
         <div className="w-full h-px bg-neutral-200 my-32 md:my-48" />

        {/* Steps Container */}
        <div className="max-w-5xl mx-auto flex flex-col gap-0 relative">
          
          <div className="text-center mb-32">
             <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6">How it Works</h2>
             <p className="text-neutral-500 max-w-xl mx-auto">A seamless journey from your first idea to the final flourish.</p>
          </div>

          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-32 bottom-0 w-px bg-neutral-200 -translate-x-1/2 hidden md:block" />

          {steps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// New Component: Cinematic Interactive Menu
const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(serviceData[0].id);
  const [modalOpen, setModalOpen] = useState(false);
  const activeService = serviceData.find(s => s.id === activeTab);

  return (
    <>
      <div className="max-w-[1920px] mx-auto mb-32 px-6 md:px-0">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6">Tailored Services</h2>
          <p className="text-neutral-500 max-w-xl mx-auto">Designing spaces that reflect your personality and lifestyle.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start border-t border-neutral-200 pt-12">
          
          {/* Left: Navigation Menu */}
          <div className="w-full lg:w-1/3 flex flex-col">
            {serviceData.map((service) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveTab(service.id)}
                onClick={() => setActiveTab(service.id)}
                className="group cursor-pointer py-8 border-b border-neutral-200 relative"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className={`text-3xl md:text-4xl font-serif transition-all duration-300 ${activeTab === service.id ? 'text-neutral-900 translate-x-4' : 'text-neutral-400 group-hover:text-neutral-600'}`}>
                    {service.title}
                  </h3>
                  <span className={`text-xs font-bold transition-opacity duration-300 ${activeTab === service.id ? 'opacity-100' : 'opacity-0'}`}>0{serviceData.indexOf(service) + 1}</span>
                </div>
                
                {/* Active Indicator Line */}
                <div className={`absolute bottom-0 left-0 h-[2px] bg-neutral-900 transition-all duration-500 ease-out ${activeTab === service.id ? 'w-full' : 'w-0'}`} />
                
                {/* Mobile Description (Always visible on mobile if active) */}
                <div className={`lg:hidden overflow-hidden transition-all duration-500 ${activeTab === service.id ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-neutral-500 text-sm mb-4">{service.description}</p>
                   <button onClick={() => setModalOpen(true)} className="text-xs uppercase tracking-[0.2em] font-bold border-b border-black pb-1">
                      View Details
                   </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual Preview (Desktop Sticky) */}
          <div className="hidden lg:block w-2/3 relative h-[600px]">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex gap-8 items-end"
              >
                {/* Main Image */}
                <div className="w-2/3 h-full relative overflow-hidden bg-neutral-100 cursor-pointer" onClick={() => setModalOpen(true)}>
                  <img 
                    src={activeService.image} 
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Text */}
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-6 max-w-sm border border-white/20 shadow-lg">
                     <p className="text-neutral-600 text-lg leading-relaxed">
                      {activeService.description}
                     </p>
                     <button onClick={(e) => { e.stopPropagation(); setModalOpen(true); }} className="mt-6 text-xs uppercase tracking-[0.2em] font-bold border-b border-black pb-1 hover:opacity-50 transition-opacity">
                        View Details
                     </button>
                  </div>
                </div>

                {/* Decorative Secondary Image (Offset) */}
                <div className="w-1/3 h-[80%] relative overflow-hidden bg-neutral-200">
                   <img 
                    src={activeService.image} 
                    alt="Detail"
                    className="w-full h-full object-cover grayscale brightness-110 scale-150"
                  />
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Modal Portal */}
      <AnimatePresence>
        {modalOpen && (
          <ServiceDetailModal 
            service={activeService} 
            onClose={() => setModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

const ProcessStep = ({ step, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col md:flex-row gap-8 md:gap-24 items-start md:items-center py-16 relative ${isEven ? '' : 'md:flex-row-reverse'}`}
    >
      {/* Number Circle (Center) */}
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10 w-14 h-14 bg-neutral-900 rounded-full text-white font-serif text-xl border-4 border-white/50 shadow-xl backdrop-blur-sm">
        {step.id}
      </div>

      {/* Content */}
      <div className={`md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
        <h3 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">{step.title}</h3>
        <p className="text-neutral-500 text-lg leading-relaxed max-w-md ml-0 md:ml-auto mr-auto md:mr-0 inline-block">
          {step.description}
        </p>
      </div>
      
      {/* Image side */}
      <div className={`w-full md:w-1/2 pl-20 md:pl-0 mt-8 md:mt-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl group"
        >
          <img 
            src={step.image} 
            alt={step.title}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          />
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// New Component: Service Detail Modal
const ServiceDetailModal = ({ service, onClose }) => {
  const navigate = useNavigate();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div 
        layoutId={`modal-${service.id}`}
        className="relative bg-white w-full max-w-5xl h-[80vh] md:h-[600px] shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        <button onClick={onClose} className="absolute top-6 right-6 z-20 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Modal Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full relative">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-neutral-900/10" />
        </div>

        {/* Modal Content */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center bg-neutral-50 overflow-y-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6">Service Detail</span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8">{service.title}</h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-8">
            {service.description} 
            <br/><br/>
            Our team ensures that every aspect of {service.title.toLowerCase()} is handled with precision and artistic flair. We collaborate closely with you to bring this vision to life.
          </p>
          
          <div className="mt-auto pt-8 border-t border-neutral-200">
             <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-neutral-900 text-white text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors w-full md:w-auto"
             >
                Book Consultation
             </button>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};
  
export default VirtualDesignStudio;
