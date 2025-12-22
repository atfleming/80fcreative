import React, { useRef, useEffect, useState } from "react";

/**
 * Simplified Showreel component for Astro without external deps [SF][DM].
 * Autoplays when in view and uses inline styles to avoid Tailwind.
 */
const AnimatedVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    if (showModal) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return (
    <>
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
              <button
                onClick={() => setShowModal(true)}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                aria-label="Play showreel"
              >
                <div
                  style={{
                    width: 100,
                    height: 100,
                    background: "#0B2545",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 4 }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "1rem",
          }}
          onClick={() => setShowModal(false)}
        >
          <button
            onClick={() => setShowModal(false)}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "white",
              fontSize: "2.5rem",
              cursor: "pointer",
              lineHeight: 1,
              opacity: 0.9,
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &times;
          </button>
          <div
            style={{ width: "100%", maxWidth: "1200px", aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/v0ad5Cv7kqg?autoplay=1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: 12 }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AnimatedVideoSection;
