import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 mx-auto z-50 transition-all duration-500 ease-in-out flex items-center justify-between
        ${isScrolled 
          ? 'top-6 w-[90%] max-w-5xl rounded-full bg-white/80 backdrop-blur-md border border-neutral-200/50 shadow-lg shadow-neutral-900/5 py-3 px-8' 
          : 'top-0 w-full bg-transparent py-6 px-6 md:px-12'
        }
      `}
    >
      {/* Logo */}
      <Link to="/" className="text-xl font-serif tracking-tight text-neutral-900 z-50 relative group">
        <span className="font-bold">Inside Edge.</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <NavLink to="/" label="Home" currentPath={location.pathname} />
        <NavLink to="/portfolio" label="Portfolio" currentPath={location.pathname} />
        <NavLink to="/virtual-design-studio" label="Virtual Studio" currentPath={location.pathname} />
        <div className="hidden md:block w-px h-4 bg-neutral-300 mx-2"></div>
        <Link to="/contact" className="hidden md:block text-xs uppercase tracking-[0.2em] font-medium text-neutral-900 hover:opacity-60 transition-opacity">
          Contact
        </Link>
      </div>
    </motion.nav>
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

export default Navbar;
