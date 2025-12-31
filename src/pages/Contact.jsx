import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ArchitecturalLights from '../components/ArchitecturalLights';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
  };

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
            Get in Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-[8rem] font-serif text-neutral-900 mb-8 leading-[0.9] text-center"
          >
            Let's Create<br/>Together.
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
      <div className="relative z-10 bg-neutral-50 min-h-screen">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-20 lg:py-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left Column: Visual & Info */}
            <div className="lg:col-span-5 flex flex-col gap-12 sticky top-32">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] overflow-hidden bg-neutral-200"
              >
                 <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Inside Edge Studio" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="flex flex-col gap-8"
              >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div>
                        <span className="block text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4 h-px border-t border-neutral-200 pt-4">Visit</span>
                        <p className="text-lg text-neutral-800 leading-relaxed font-serif">
                          123 Design Avenue,<br/>
                          Creative District,<br/>
                          Mumbai 400001
                        </p>
                     </div>
                     <div>
                        <span className="block text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4 h-px border-t border-neutral-200 pt-4">Contact</span>
                        <div className="flex flex-col gap-2">
                          <a href="mailto:hello@insideedge.com" className="text-lg text-neutral-800 font-serif hover:text-neutral-500 transition-colors">hello@insideedge.com</a>
                          <a href="tel:+919876543210" className="text-lg text-neutral-800 font-serif hover:text-neutral-500 transition-colors">+91 98765 43210</a>
                        </div>
                     </div>
                  </div>
                  
                  <div>
                    <span className="block text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4 h-px border-t border-neutral-200 pt-4">Follow</span>
                    <div className="flex gap-6">
                      {['Instagram', 'LinkedIn', 'Pinterest', 'Behance'].map((social) => (
                        <a key={social} href="#" className="text-sm font-medium text-neutral-900 hover:text-neutral-500 transition-colors">
                          {social}
                        </a>
                      ))}
                    </div>
                  </div>
              </motion.div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-7 lg:pl-12">
               <motion.div
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white p-8 md:p-16 shadow-2xl shadow-neutral-100"
               >
                 <h3 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">Send a Message</h3>
                 <p className="text-neutral-500 text-lg mb-12">Tell us about your project, timeline, and budget.</p>

                 <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="group">
                       <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-3">Your Name</label>
                       <input 
                          type="text" 
                          name="name" 
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full bg-neutral-50 border-b-2 border-neutral-100 px-0 py-4 text-xl text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all placeholder:text-neutral-300"
                          placeholder="John Doe"
                          required
                       />
                     </div>
                     <div className="group">
                       <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-3">Email Address</label>
                       <input 
                          type="email" 
                          name="email" 
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full bg-neutral-50 border-b-2 border-neutral-100 px-0 py-4 text-xl text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all placeholder:text-neutral-300"
                          placeholder="john@example.com"
                          required
                       />
                     </div>
                   </div>

                   <div className="group">
                       <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-3">Project Details</label>
                       <textarea 
                          name="message" 
                          value={formState.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full bg-neutral-50 border-b-2 border-neutral-100 px-0 py-4 text-xl text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all resize-none placeholder:text-neutral-300"
                          placeholder="Tell us about your space..."
                          required
                       />
                   </div>

                   <div className="flex items-center justify-between pt-8 mt-4">
                      <span className="hidden md:block text-neutral-400 text-sm">We typically search in 24 hours</span>
                      <button type="submit" className="px-12 py-5 bg-neutral-900 text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl w-full md:w-auto">
                        Send Message
                      </button>
                   </div>
                 </form>
               </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
