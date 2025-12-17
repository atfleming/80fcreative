import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { toggleTheme } = useTheme();

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

  return <motion.header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 pointer-events-none`} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className={`mx-auto max-w-6xl rounded-full border border-white/10 bg-corporate-navy text-white shadow-md px-4 md:px-6 ${scrolled ? 'py-2' : 'py-3'} grid grid-cols-3 items-center pointer-events-auto`} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }}>
          <motion.nav className="hidden md:flex items-center space-x-8" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.4
      }}>
          <button onClick={() => scrollToSection('portfolio')} className={`text-white hover:text-white/80 transition-colors font-sans`}>
            Portfolio
          </button>
          <button onClick={() => scrollToSection('about')} className={`text-white hover:text-white/80 transition-colors font-sans`}>
            About
          </button>
          <button onClick={() => scrollToSection('services')} className={`text-white hover:text-white/80 transition-colors font-sans`}>
            Creative Services
          </button>
          <button onClick={() => scrollToSection('contact')} className={`text-white hover:text-white/80 transition-colors font-sans`}>
            Contact
          </button>
          </motion.nav>
          <h1 className={`font-wordmark font-black text-xl md:text-2xl tracking-tight text-center`}>
            80F Creative
          </h1>
          <motion.div className="flex items-center justify-end space-x-2" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.4
      }}>
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors duration-300 bg-white/10 text-white hover:bg-white/20`}
            aria-label="Toggle theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          <button className={`md:hidden text-white`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>;
};