"use client";
import { motion } from "framer-motion";
import { Code2, Zap, Wrench, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Core",
    icon: <Code2 style={{ width: "2rem", height: "2rem" }} />,
    gradientFrom: "#06b6d4",
    gradientTo: "#3b82f6",
    skills: [
      { name: "JavaScript / TypeScript", level: 95 },
      { name: "C++", level: 85 },
      { name: "C# / .NET", level: 82 },
      { name: "Java", level: 78 },
    ],
  },
  {
    title: "Frontend & Frameworks",
    icon: <Zap style={{ width: "2rem", height: "2rem" }} />,
    gradientFrom: "#a855f7",
    gradientTo: "#ec4899",
    skills: [
      { name: "React / Next.js", level: 94 },
      { name: "Tailwind CSS", level: 96 },
      { name: "HTML5 / CSS3", level: 98 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    title: "Tools & Testing",
    icon: <Wrench style={{ width: "2rem", height: "2rem" }} />,
    gradientFrom: "#10b981",
    gradientTo: "#059669",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Postman (API Testing)", level: 90 },
      { name: "VS Code / Rider", level: 95 },
      { name: "Visual Studio", level: 88 },
    ],
  },
  {
    title: "Networking & Systems",
    icon: <Globe style={{ width: "2rem", height: "2rem" }} />,
    gradientFrom: "#f97316",
    gradientTo: "#ef4444",
    skills: [
      { name: "TCP/IP & Routing", level: 90 },
      { name: "Cisco Packet Tracer", level: 85 },
      { name: "Network Troubleshooting", level: 88 },
      { name: "SQL / NoSQL", level: 78 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "7rem 1.5rem 6rem", // Same top padding as all other sections
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Gradient Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "5rem" }}
      >
        <h1
          style={{
            fontSize: "4.5rem",
            fontWeight: "700",
            background: "linear-gradient(to right, #06b6d4, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "1.5rem",
          }}
        >
          Skills & Expertise
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#94a3b8",
            maxWidth: "720px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Proficient in modern web technologies, quality assurance, and
          networking. Always learning and pushing the boundaries of what’s
          possible.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
        }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "1.5rem",
              padding: "2rem",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = category.gradientFrom + "60";
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Category Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  padding: "1rem",
                  background: `linear-gradient(to bottom right, ${category.gradientFrom}, ${category.gradientTo})`,
                  borderRadius: "1rem",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                {category.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#f1f5f9",
                  }}
                >
                  {category.title}
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
                  Proficiency Level
                </p>
              </div>
            </div>

            {/* Skill Bars */}
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + i * 0.1, duration: 0.6 }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span style={{ fontWeight: "600", color: "#e2e8f0" }}>
                      {skill.name}
                    </span>
                    <span
                      style={{
                        color: category.gradientFrom,
                        fontWeight: "bold",
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div
                    style={{
                      height: "12px",
                      background: "rgba(255, 255, 255, 0.08)",
                      borderRadius: "999px",
                      overflow: "hidden",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.8,
                        ease: "easeOut",
                        delay: i * 0.15,
                      }}
                      style={{
                        height: "100%",
                        background: `linear-gradient(to right, ${category.gradientFrom}, ${category.gradientTo})`,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Shine Effect */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                          animation: "shimmer 2s infinite",
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional: Add this to your global CSS for the shimmer */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
