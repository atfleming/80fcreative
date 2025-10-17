import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ShowreelTitle = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [1, 1.5]);
  const y = useTransform(scrollYProgress, [0, 0.4], ["100vh", "0vh"]);

  return (
    <motion.div 
      ref={ref}
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-10 pointer-events-none"
      style={{ opacity, scale, y }}
    >
      <h1 className="text-8xl font-2p-press-start text-highlight">
        SHOWREEL
      </h1>
    </motion.div>
  );
};