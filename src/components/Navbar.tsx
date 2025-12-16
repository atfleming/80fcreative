import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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

  const bgColor = scrolled 
    ? theme === 'light' 
      ? 'bg-white/90 backdrop-blur-md' 
      : 'bg-corporate-slate/90 backdrop-blur-md'
    : 'bg-transparent';
  
  const textColor = theme === 'light' ? 'text-corporate-navy' : 'text-white';
  const hoverColor = theme === 'light' ? 'hover:text-electric-cyan' : 'hover:text-electric-cyan';

  return <motion.header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgColor} py-5`} initial={{
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
          <h1 className={`font-wordmark font-black text-xl md:text-2xl tracking-tight transition-colors duration-300 ${textColor}`}>
            80F Creative
          </h1>
        </motion.div>
        <motion.nav className="hidden md:flex items-center space-x-8" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.4
      }}>
          <button onClick={() => scrollToSection('portfolio')} className={`${textColor} ${hoverColor} transition-colors font-ui`}>
            Portfolio
          </button>
          <button onClick={() => scrollToSection('about')} className={`${textColor} ${hoverColor} transition-colors font-ui`}>
            About
          </button>
          <button onClick={() => scrollToSection('services')} className={`${textColor} ${hoverColor} transition-colors font-ui`}>
            Creative Services
          </button>
          <button onClick={() => scrollToSection('contact')} className={`${textColor} ${hoverColor} transition-colors font-ui`}>
            Contact
          </button>
        </motion.nav>
        <motion.div className="flex items-center space-x-4" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.4
      }}>
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors duration-300 ${theme === 'light' ? 'bg-gray-100 text-corporate-navy' : 'bg-gray-700 text-white'}`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          <button className={`md:hidden ${textColor}`}>
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