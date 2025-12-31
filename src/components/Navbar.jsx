import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 mx-auto z-50 transition-all duration-500 ease-in-out flex items-center justify-between
          ${isScrolled 
            ? 'top-2 md:top-6 w-[92%] md:w-[90%] max-w-5xl rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/50 shadow-lg shadow-neutral-900/5 py-2 md:py-3 px-4 md:px-8' 
            : 'top-0 w-full bg-transparent py-4 md:py-6 px-4 md:px-12'
          }
        `}
      >
        {/* Logo */}
        <Link to="/" className="text-lg md:text-xl font-serif tracking-tight text-neutral-900 z-50 relative group" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="font-bold">Inside Edge.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" label="Home" currentPath={location.pathname} />
          <NavLink to="/portfolio" label="Portfolio" currentPath={location.pathname} />
          <NavLink to="/virtual-design-studio" label="Virtual Studio" currentPath={location.pathname} />
          <div className="w-px h-4 bg-neutral-300 mx-2"></div>
          <Link to="/contact" className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-900 hover:opacity-60 transition-opacity">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-neutral-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 flex flex-col items-end gap-[5px]">
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-current block transition-all"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-4 h-0.5 bg-current block transition-all"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-current block transition-all"
            />
          </div>
        </button>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-neutral-50 flex flex-col items-center justify-center"
          >
             <motion.div 
               className="flex flex-col items-center gap-8"
               initial="hidden"
               animate="visible"
               exit="hidden"
               variants={{
                 hidden: { opacity: 0 },
                 visible: {
                   opacity: 1,
                   transition: {
                     staggerChildren: 0.1
                   }
                 }
               }}
             >
                <MobileNavLink to="/" label="Home" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink to="/portfolio" label="Portfolio" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink to="/virtual-design-studio" label="Virtual Studio" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink to="/contact" label="Contact" onClick={() => setIsMobileMenuOpen(false)} />
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ to, label, currentPath }) => {
  const isActive = currentPath === to;

  return (
    <Link to={to} className="relative group">
      <span className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isActive ? 'text-neutral-900 font-bold' : 'text-neutral-500'}`}>
        {label}
      </span>
      {/* Underline animation - visible if active or hovered */}
      <span className={`absolute -bottom-1 left-0 h-[1px] bg-neutral-900 transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
    </Link>
  );
};

const MobileNavLink = ({ to, label, onClick }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <Link 
        to={to} 
        onClick={onClick}
        className="text-3xl font-serif text-neutral-900 hover:text-neutral-500 transition-colors"
      >
        {label}
      </Link>
    </motion.div>
  )
}

export default Navbar;
