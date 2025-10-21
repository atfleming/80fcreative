import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ShowreelTitle = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  
  return (
    <motion.div 
      ref={ref}
      className="relative z-10 flex w-full items-center justify-center px-4 py-8"
      style={{ opacity, scale }}
    >
      <h1 className="font-2p-press-start text-5xl text-highlight sm:text-6xl md:text-7xl lg:text-8xl">
        SHOWREEL
      </h1>
    </motion.div>
  );
};