import React, { useEffect, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

export const ShowreelTitle = () => {
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const element = document.getElementById('showreel-title');
    if (element) {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
    }
    setViewportHeight(window.innerHeight);

    const handleResize = () => {
      const element = document.getElementById('showreel-title');
      if (element) {
        const rect = element.getBoundingClientRect();
        setElementTop(rect.top + window.scrollY);
      }
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scale = useTransform(
    scrollY,
    [elementTop - viewportHeight, elementTop + 100],
    [1, 1.5]
  );

  const opacity = useTransform(
    scrollY,
    [elementTop - viewportHeight, elementTop],
    [1, 0]
  );

  return (
    <motion.div 
      id="showreel-title"
      className="w-full flex justify-center items-center py-12 sticky top-0 z-10"
      style={{ scale, opacity }}
    >
      <h2 className="text-4xl font-2p-press-start text-highlight">
        SHOWREEL
      </h2>
    </motion.div>
  );
};