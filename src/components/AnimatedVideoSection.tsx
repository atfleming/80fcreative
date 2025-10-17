
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AnimatedVideoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [inView]);

  const scale = useTransform(
    scrollY,
    [0, 400],
    [0.9, 1]
  );

  const opacity = useTransform(
    scrollY,
    [0, 400],
    [0.6, 1]
  );

  return (
    <motion.div
      ref={containerRef}
      className="flex justify-center my-8"
      style={{ 
        scale,
        opacity,
        willChange: 'transform'
      }}
    >
      <div className="w-full max-w-4xl aspect-video">
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
