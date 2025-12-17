import React, { useRef, useEffect } from "react";

/**
 * Simplified Showreel component for Astro without external deps [SF][DM].
 * Autoplays when in view and uses inline styles to avoid Tailwind.
 */
const AnimatedVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ padding: "3rem 0", background: "var(--color-bg)" }}>
      <div className="container">
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", fontWeight: 700, textAlign: "center" }}>Showreel</h2>
        <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ position: "relative", paddingTop: "56.25%", borderRadius: 12, overflow: "hidden", boxShadow: "0 12px 32px rgba(0,0,0,0.15)" }}>
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/da2wgtiau/video/upload/v1761070301/80fco-reel_snemru.mov"
              loop
              playsInline
              autoPlay
              muted
              preload="auto"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedVideoSection;
