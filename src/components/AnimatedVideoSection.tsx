
import React, { useRef, useEffect, useState } from 'react';

export const AnimatedVideoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

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

  return (
    <div
      ref={containerRef}
      className={`transition-transform duration-700 ease-out flex justify-center my-8 ${
        inView ? 'scale-100' : 'scale-90 opacity-60'
      }`}
      style={{ willChange: 'transform' }}
    >
      <div className="w-full max-w-3xl aspect-video">
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
    </div>
  );
};
