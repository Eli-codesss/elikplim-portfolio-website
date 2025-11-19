"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "uTest (remote)",
      role: "Quality Assurance Engineer (freelance)",
      date: "Apr 2024 – Present",
      bullets: [
        "Conducted manual testing on websites, mobile apps and web apps.",
        "Executed API testing using Postman.",
        "Collaborated with cross-functional teams to identify & resolve defects.",
      ],
    },
    {
      company: "Innorik — Accra (hybrid)",
      role: "Full-Stack Developer (National Service)",
      date: "Nov 2024 – Aug 2025",
      bullets: [
        "Developed frontend features to fetch & display API data.",
        "Optimized apps for responsiveness and performance.",
        "Refactored 5K+ lines of legacy code, reducing integration bugs by ~30%.",
        "Delivered 5+ production-ready features using React and .NET.",
      ],
    },
    {
      company: "SLB — Takoradi (on-site)",
      role: "Engineer (Intern)",
      date: "Oct 2023 – Dec 2023",
      bullets: [
        "Inventory of petrophysical logging tools",
        "System integrity checks & data validation",
        "Internal campaign presentations",
      ],
    },
    {
      company: "AmaliTech — Takoradi",
      role: "Frontend Developer (Intern)",
      date: "May 2023 – Jun 2023",
      bullets: [
        "Built responsive landing pages",
        "Implemented interactive e-commerce features",
      ],
    },
    {
      company: "Ghana Rubber Estates Ltd (GREL)",
      role: "I.T. Technician (Intern)",
      date: "Oct 2021 – Nov 2021",
      bullets: [
        "Routine maintenance & troubleshooting",
        "Prepared technical reports",
        "Gained SAP proficiency",
      ],
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "7rem 1.5rem 5rem", // ← Same generous top padding as About
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Section Title */}
      <h2
        style={{
          fontSize: "4.5rem",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "4rem",
          background: "linear-gradient(to right, #06b6d4, #a855f7, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Experience
      </h2>

      {/* Experience Cards */}
      <div style={{ display: "grid", gap: "4.5rem" }}>
        {experiences.map((exp, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "2rem",
              borderRadius: "1.5rem",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  padding: "1rem",
                  background: "rgba(6, 182, 212, 0.15)",
                  borderRadius: "1rem",
                  flexShrink: 0,
                }}
              >
                <Briefcase
                  style={{ width: "2rem", height: "2rem", color: "#06b6d4" }}
                />
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "700",
                    color: "#f1f5f9",
                    marginBottom: "0.5rem",
                  }}
                >
                  {exp.role}
                </h3>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "#06b6d4",
                    fontWeight: "500",
                    marginBottom: "1.5rem",
                  }}
                >
                  {exp.company} • {exp.date}
                </p>

                {/* Bullets */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {exp.bullets.map((bullet, bi) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 + bi * 0.1 }}
                      style={{
                        display: "flex",
                        gap: "1rem",
                        fontSize: "1.125rem",
                        color: "#94a3b8",
                        lineHeight: "1.75",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          color: "#06b6d4",
                          flexShrink: 0,
                          marginTop: "0.25rem",
                        }}
                      >
                        ▹
                      </span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
