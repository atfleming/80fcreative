import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { InstagramIcon, MenuIcon, XIcon } from 'lucide-react';
export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };
    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    };
    const scrollToContact = () => {
      document.getElementById('contact')?.scrollIntoView({
        behavior: 'smooth'
      });
    };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <section id="hero" className="min-h-[70vh] w-full flex flex-col relative pt-6 overflow-hidden bg-digital-black">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-digital-black/90 via-digital-black/70 to-digital-black/90 z-10"></div>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
          <source src="https://res.cloudinary.com/da2wgtiau/video/upload/v1760393870/80fco_website_header_video_bkgd_720p_small_jcuvrl.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img src="/Hero_Image_background.png" alt="Neon cityscape background" className="w-full h-full object-cover" />
        </video>
      </div>
      {/* Header with logo and navigation */}
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center mb-8 md:mb-12 relative z-10">
        {/* Left side - Index Menu Button */}
        <div className="w-1/3 flex justify-start">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }}>
            <button onClick={toggleMenu} className="flex items-center space-x-2 text-highlight hover:text-electric-cyan transition-colors font-ui">
              <span>Index</span>
              {isMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </motion.div>
        </div>
        {/* Center - Logo */}
        <motion.div className="w-1/3 flex justify-center" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3,
        duration: 0.5
      }}>
          <img src="/80fco_logo.png" alt="80F Creative" className="h-12 filter drop-shadow-[0_0_8px_rgba(0,255,247,0.8)]" />
        </motion.div>
        {/* Right side - Social links and Contact button */}
        <div className="w-1/3 flex justify-end space-x-6">
          <motion.div className="flex space-x-4 items-center" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.4,
          duration: 0.5
        }}>
            <a href="https://instagram.com/thefilmjerk" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-highlight hover:text-electric-cyan transition-colors">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <Button variant="outline" className="ml-2" onClick={scrollToContact}>
              Contact
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Dropdown menu */}
      <AnimatePresence>
        {isMenuOpen && <motion.div className="absolute top-16 left-0 w-64 bg-digital-black/90 backdrop-blur-md border border-electric-cyan/30 z-50 shadow-lg shadow-electric-cyan/20" initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -10
      }} transition={{
        duration: 0.2
      }}>
            <div className="py-3 px-4">
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection('hero')} className="text-highlight hover:text-electric-cyan transition-colors font-ui w-full text-left">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-highlight hover:text-electric-cyan transition-colors font-ui w-full text-left">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('featured-case-study')} className="text-highlight hover:text-electric-cyan transition-colors font-ui w-full text-left">
                    Work
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-highlight hover:text-electric-cyan transition-colors font-ui w-full text-left">
                    About
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>}
      </AnimatePresence>
      {/* Main hero content */}
      <div className="container mx-auto px-4 md:px-6 flex-grow flex items-end relative z-10">
        <motion.div className="w-full flex flex-col justify-end gap-4 mb-0" variants={container} initial="hidden" animate="show">
          <div>
            <motion.h2 variants={item} className="text-xl md:text-2xl lg:text-3xl text-electric-cyan text-left" style={{
            fontFamily: "'VT323', monospace",
            textShadow: '0 0 10px rgba(0, 255, 247, 0.7), 0 0 20px rgba(0, 255, 247, 0.5), 0 0 30px rgba(0, 255, 247, 0.3)',
            letterSpacing: '0.05em',
            textTransform: 'lowercase',
            fontStyle: 'italic',
            fontWeight: 'normal',
            lineHeight: '1.2'
          }}>
              80f creative: a digital agency telling stories
              <br />
              through film, photography, and design.
            </motion.h2>
          </div>
          {/* <motion.p variants={item} className="text-lg md:text-xl text-highlight text-left mb-0" style={{
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: '0.02em'
        }}>
            portfolio for filmmaker and creative, andrew trent fleming
          </motion.p>*/}

        </motion.div>
      </div>
    </section>;
};