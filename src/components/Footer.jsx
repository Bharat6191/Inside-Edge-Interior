import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 text-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-6">
          <img src="/inside-edge-logo.jpg" alt="Inside Edge" className="h-16 w-auto object-contain rounded-md bg-white p-1" />
        </div>
        <p className="text-xs uppercase tracking-widest mb-8">Timeless Interior Design</p>
        
        <div className="flex justify-center gap-8 text-xs uppercase tracking-wider mb-8">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <p className="text-[10px] text-neutral-600">
          © {new Date().getFullYear()} Inside Edge Design Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
