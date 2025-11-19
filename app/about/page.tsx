import Image from "next/image";

export default function About() {
  return (
    <section
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "6rem 1.5rem 5rem", // ← This gives you generous top padding
        paddingTop: "7rem", // Extra top padding (adjust as needed: 6rem, 8rem, 10rem...)
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
          gap: "4rem",
        }}
        className="md:grid-cols-3" // only keeping this if you still use Tailwind elsewhere
      >
        {/* Main Content */}
        <div
          style={{
            gridColumn: "span 1",
            // "@media (min-width: 768px)": { gridColumn: "span 2" },
          }}
        >
          <div style={{ marginBottom: "4rem" }}>
            <h1
              className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{
                fontSize: "4.5rem",
                fontWeight: "700",
                lineHeight: "1",
                marginBottom: "2rem",
                textAlign: "center",

                // color: "linear-gradient(to right, #22D3EE, #C084FC, #F472B6)",
                // WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                // backgroundClip: "text",
              }}
            >
              About
            </h1>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75",
                color: "#94a3b8",
                marginBottom: "2rem",
              }}
            >
              Software engineer, quality assurance engineer, IT technician,
              networking specialist, virtual assistant, and researcher.
              Passionate about building engaging user interfaces and solving
              complex technical problems.
            </p>
          </div>

          {/* What I Do */}
          <div style={{ marginBottom: "4rem" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1.5rem",
              }}
            >
              What I Do
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Frontend & Full-stack development using React/Next.js and .NET stacks.",
                "Manual & API testing (Postman, Playwright) to ensure product quality.",
                "Networking, system troubleshooting, and infrastructure optimizations.",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    fontSize: "1.125rem",
                    color: "#94a3b8",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      color: "#06b6d4",
                      marginTop: "0.375rem",
                      flexShrink: 0,
                    }}
                  >
                    ▹
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Education
            </h3>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#94a3b8",
                lineHeight: "1.75",
              }}
            >
              <strong style={{ color: "#e2e8f0" }}>
                BSc Computer Science & Engineering
              </strong>
              <br />
              University of Mines & Technology, Tarkwa
              <span
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  opacity: 0.8,
                  marginTop: "0.25rem",
                }}
              >
                Class of 2024
              </span>
            </p>
            <br />
            <p
              style={{
                fontSize: "1.125rem",
                color: "#94a3b8",
                lineHeight: "1.75",
              }}
            >
              <strong style={{ color: "#e2e8f0" }}>General Science</strong>
              <br />
              Archbishop Porter Girls' Secondary School
              <span
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  opacity: 0.8,
                  marginTop: "0.25rem",
                }}
              >
                Class of 2020
              </span>
            </p>
          </div>
        </div>

        {/* Optional Sidebar – still inline-styled */}
        {/* 
        <aside style={{ display: "grid", gap: "2rem" }}>
          <div style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", padding: "1.5rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.1)" }}>
            <p style={{ fontWeight: "600", marginBottom: "0.75rem" }}>Contact</p>
            <p style={{ fontSize: "0.875rem", color: "#cbd5e1" }}>elikpliyaa@gmail.com</p>
            <p style={{ fontSize: "0.875rem", color: "#cbd5e1" }}>+233 50 664 6709</p>
          </div>
        </aside>
        */}
      </div>
    </section>
  );
}
