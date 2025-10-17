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
      className="relative w-full min-h-[50vh] flex items-center justify-center z-10"
      style={{ opacity, scale }}
    >
      <h1 className="text-8xl font-2p-press-start text-highlight">
        SHOWREEL
      </h1>
    </motion.div>
  );
};