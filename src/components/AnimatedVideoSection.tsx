
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AnimatedVideoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.8], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch(() => {
              // Handle any autoplay restrictions gracefully
              console.log('Autoplay prevented by browser');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[30vh] md:min-h-[45vh]">
      <motion.div
        className="flex w-full min-h-[25vh] items-center justify-center px-4 pt-6 md:sticky md:top-0 md:-mt-20 md:px-4 md:pt-0 md:pb-2"
        style={{ scale, opacity }}
      >
        <div className="w-full max-w-7xl aspect-video">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/da2wgtiau/video/upload/v1761070301/80fco-reel_snemru.mov"
            loop
            playsInline
            autoPlay
            muted
            className="rounded-lg w-full h-full object-cover"
            preload="auto"
          />
        </div>
      </motion.div>
    </div>
  );
};
