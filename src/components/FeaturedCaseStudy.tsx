import React from "react";

/**
 * Featured case study component for University of Memphis [SF][CA].
 * Simplified from React version: removed motion animations, kept clean layout.
 */
const FeaturedCaseStudy: React.FC = () => {
  const featured = {
    slug: "university-of-memphis",
    title: "University of Memphis:\nGive to the Legacy",
    subtitle: "Driving Legacy Donations Through Cinematic Storytelling",
    ctaLabel: "View Case Study",
    heroImage: "/case_studies/case_study_1_images/casestudy1image1.png",
  };

  return (
    <section
      id="featured-case-study"
      style={{
        position: "relative",
        marginTop: "1.5rem",
        overflow: "hidden",
        background: "var(--color-bg)",
        padding: "3rem 1rem",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--maxw)",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: 520, display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              opacity: 0.7,
              color: "var(--color-accent)",
            }}
          >
            Featured Case Study
          </span>

          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              lineHeight: 1.15,
              fontWeight: 900,
              color: "var(--color-fg)",
              textAlign: "center",
              whiteSpace: "pre-line",
            }}
          >
            {featured.title}
          </h2>

          <figure style={{ width: "100%", display: "flex", justifyContent: "center", margin: "0" }}>
            <img
              alt="University of Memphis case study still"
              src={featured.heroImage}
              loading="lazy"
              style={{
                width: "100%",
                maxWidth: 480,
                height: 260,
                objectFit: "cover",
                display: "block",
                borderRadius: 12,
                boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            />
          </figure>

          <p
            className="featured-subtitle"
            style={{
              fontSize: "1rem",
              lineHeight: 1.6,
              opacity: 0.85,
              color: "var(--color-fg)",
              textAlign: "center",
              maxWidth: 420,
            }}
          >
            {featured.subtitle}
          </p>

          <a
            href={`/projects/${featured.slug}`}
            className="btn"
            style={{
              display: "inline-flex",
              marginTop: "0.5rem",
              background: "var(--color-accent)",
              color: "#F5F7FB",
              padding: "0.75rem 1.5rem",
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
              width: "fit-content",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            {featured.ctaLabel}
          </a>
        </div>
      </div>

      <style>
        {`\n          @media (max-width: 900px) {\n            #featured-case-study { padding: 2rem 1rem; }\n            #featured-case-study h2 { font-size: clamp(1.5rem, 6vw, 1.9rem); }\n          }\n        `}
      </style>
    </section>
  );
};

export default FeaturedCaseStudy;
