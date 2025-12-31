import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiX, FiPhone } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const ContactFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const socialLinks = [
    { icon: <FaInstagram />, label: 'Instagram', href: '#', color: 'hover:text-pink-600' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', href: '#', color: 'hover:text-green-500' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: <FaFacebookF />, label: 'Facebook', href: '#', color: 'hover:text-blue-500' },
    { icon: <FiPhone />, label: '+1 (555) 000-0000', href: 'tel:+15550000000', color: 'hover:text-neutral-900' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 pointer-events-none">
      
      {/* Menu Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="flex flex-col gap-3 pointer-events-auto items-end mb-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, x: 20, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    transition: { delay: index * 0.05, duration: 0.3 }
                  }
                }}
                className={`flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-full shadow-lg border border-white/20 text-neutral-600 transition-colors ${link.color} group hover:pl-5`}
              >
                <span className="text-xs font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-12 whitespace-nowrap bg-white/90 px-2 py-1 rounded shadow-sm pointer-events-none">
                  {link.label}
                </span>
                <span className="text-lg">{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <motion.button
        onClick={toggleOpen}
        className="pointer-events-auto w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-300 relative group"
        whileTap={{ scale: 0.9 }}
      >
        {/* Animated Rings for Attention (only when closed) */}
        {!isOpen && (
            <>
                <motion.div 
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.5 }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 2, 
                        ease: "easeOut",
                        delay: 1 
                    }}
                    className="absolute inset-0 rounded-full border border-neutral-900/30"
                />
                 <motion.div 
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.5 }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 2, 
                        ease: "easeOut",
                        delay: 1.5
                    }}
                    className="absolute inset-0 rounded-full border border-neutral-900/10"
                />
            </>
        )}

        {/* Icon Transition */}
        <div className="relative w-6 h-6">
            <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 45 : 0,  opacity: isOpen ? 0 : 1 }}
                className="absolute inset-0"
            >
                <FiPlus className="w-full h-full" />
            </motion.div>
             <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 0 : -45, opacity: isOpen ? 1 : 0 }}
                className="absolute inset-0"
            >
                <FiX className="w-full h-full" />
            </motion.div>
        </div>
      </motion.button>
    </div>
  );
};

export default ContactFloatingButton;
