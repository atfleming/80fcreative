import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <motion.header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-digital-black/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div className="flex items-center" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }}>
          <img src="/80fco_logo.png" alt="80F Creative" className="h-8 filter drop-shadow-[0_0_4px_rgba(0,255,247,0.6)]" />
        </motion.div>
        <motion.nav className="hidden md:flex items-center space-x-8" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.4
      }}>
          <button onClick={() => scrollToSection('portfolio')} className="text-highlight hover:text-electric-cyan transition-colors font-ui">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('about')} className="text-highlight hover:text-electric-cyan transition-colors font-ui">
            About
          </button>
          <button onClick={() => scrollToSection('services')} className="text-highlight hover:text-electric-cyan transition-colors font-ui">
            Creative Services
          </button>
          {/* Development button temporarily hidden */}
          {/* <button
           onClick={() => scrollToSection('development')}
           className="text-highlight hover:text-electric-cyan transition-colors font-ui"
           >
           Development
           </button> */}
          {/* Newsletter button temporarily hidden */}
          {/* <button
           onClick={() => scrollToSection('newsletter')}
           className="text-highlight hover:text-electric-cyan transition-colors font-ui"
           >
           Newsletter
           </button> */}
          <button onClick={() => scrollToSection('contact')} className="text-highlight hover:text-electric-cyan transition-colors font-ui">
            Contact
          </button>
        </motion.nav>
        <motion.div className="md:hidden" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.4
      }}>
          <button className="text-highlight">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.header>;
};