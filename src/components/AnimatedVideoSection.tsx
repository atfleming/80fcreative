
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AnimatedVideoSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.8], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <motion.div
      ref={ref} 
      className="relative min-h-screen w-full flex items-center justify-center"
      style={{ scale, opacity }}
    >
      <div className="w-full max-w-7xl aspect-video">
        <video
          ref={videoRef}
          src="/80fco reel.mov"
          controls
          loop
          className="rounded-lg w-full h-full object-cover"
          preload="auto"
          muted
        />
      </div>
    </motion.div>
  );
};
