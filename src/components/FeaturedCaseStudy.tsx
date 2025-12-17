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
        padding: "4rem 1rem",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--maxw)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Text Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
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
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              lineHeight: 1.3,
              fontWeight: 900,
              color: "var(--color-fg)",
              whiteSpace: "pre-line",
            }}
          >
            {featured.title}
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.6,
              opacity: 0.8,
              color: "var(--color-fg)",
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

        {/* Image */}
        <figure
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "1rem",
            background: "var(--color-bg)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <img
            alt="University of Memphis case study still"
            src={featured.heroImage}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </figure>
      </div>

      {/* Responsive: Stack on mobile */}
      <style>
        {`
          @media (max-width: 900px) {
            #featured-case-study > div {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default FeaturedCaseStudy;
