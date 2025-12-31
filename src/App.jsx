import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import VirtualDesignStudio from './pages/VirtualDesignStudio';
import Contact from './pages/Contact';
import ContactFloatingButton from './components/ContactFloatingButton';
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-stone-200 selection:text-neutral-900 overflow-x-hidden">
        
        {/* Site-wide Particle Background */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <ParticleBackground />
        </div>

        {/* Content Content Wrapper - zIndex 2 to sit above particles */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/virtual-design-studio" element={<VirtualDesignStudio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <Footer />
          <ContactFloatingButton />
        </div>
      </div>
    </Router>
  );
}

export default App;
