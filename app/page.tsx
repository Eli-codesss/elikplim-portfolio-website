"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        style={{
          paddingTop: "100px",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--background)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            width: "100%",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          {/* Main Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4rem",
            }}
            className="from-tablet-side-by-side"
          >
            {/* TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                maxWidth: "680px",
                order: 2,
              }}
              className="from-tablet-left-align from-tablet-order-1"
            >
              <p
                style={{
                  fontSize: "1.9rem",
                  color: "#94a3b8",
                  marginBottom: "0.5rem",
                  fontWeight: 400,
                }}
                className="sm:text-2.5xl md:text-3xl"
              >
                Hi, my name is
              </p>

              <h1
                style={{
                  fontSize: "4rem",
                  fontWeight: 900,
                  lineHeight: "1.05",
                  marginBottom: "1rem",
                  color: "#f1f5f9",
                }}
                className="sm:text-5.5xl md:text-6.5xl lg:text-7.5xl xl:text-8xl"
              >
                Elikplim Yaa
                <span style={{ color: "#a78bfa" }}> Anumu.</span>
              </h1>

              <p
                style={{
                  fontSize: "1.8rem",
                  color: "#94a3b8",
                  marginBottom: "2rem",
                  fontWeight: 500,
                }}
                className="sm:text-2xl md:text-2.5xl"
              >
                I build reliable software & test systems that work.
              </p>

              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.8",
                  color: "#cbd5e1",
                  marginBottom: "3rem",
                }}
                className="sm:text-lg md:text-xl"
              >
                I'm a software engineer and quality assurance specialist
                passionate about creating performant, accessible applications.
                Currently freelancing as a QA engineer at uTest and recently
                completed national service as a Front-End Developer at Innorik.
              </p>

              {/* Buttons */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  justifyContent: "center",
                }}
                className="from-tablet-justify-start"
              >
                <a
                  href="/CVElikplimYaaAnumu.pdf" // ← Starts with /, no "public", no ".."
                  download="Elikplim_Yaa_Anumu_Resume.pdf" // ← Clean downloaded filename
                  target="_blank" // ← Optional: opens in new tab if not downloading
                  rel="noopener noreferrer" // ← Security best practice
                  style={{
                    backgroundColor: "#a78bfa",
                    color: "#000",
                    padding: "1.25rem 2.5rem",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderRadius: "0",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 20px rgba(167, 139, 250, 0.4)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#8b5cf6")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#a78bfa")
                  }
                >
                  <Download size={22} />
                  Download Résumé
                </a>

                <Link
                  href="https://github.com/Eli-codesss"
                  style={{
                    border: "2px solid #64748b",
                    color: "#94a3b8",
                    padding: "1.25rem 2.5rem",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    borderRadius: "0",
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#a78bfa";
                    e.currentTarget.style.color = "#a78bfa";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#64748b";
                    e.currentTarget.style.color = "#94a3b8";
                  }}
                >
                  View Projects
                </Link>
              </div>
            </motion.div>

            {/* CIRCULAR IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              style={{
                order: 1,
                flexShrink: 0,
              }}
              className="from-tablet-order-2"
            >
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "8px solid rgba(167, 139, 250, 0.3)",
                  boxShadow: "0 25px 70px rgba(0, 0, 0, 0.5)",
                  transition: "all 0.6s ease",
                }}
                className="sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px]"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.06)";
                  e.currentTarget.style.boxShadow =
                    "0 35px 90px rgba(167, 139, 250, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 70px rgba(0, 0, 0, 0.5)";
                }}
              >
                <Image
                  src="/images/portfolio-picture.jpg"
                  alt="Elikplim Yaa Anumu"
                  width={1000}
                  height={1000}
                  priority
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(90%)",
                    transition: "filter 1s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.filter = "grayscale(0%)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter = "grayscale(90%)")
                  }
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESPONSIVE BREAKPOINT: Side-by-side from 640px (tablets & up) */}
      <style jsx>{`
        @media (min-width: 640px) {
          .from-tablet-side-by-side {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 4rem !important;
          }
          .from-tablet-left-align {
            align-items: flex-start !important;
            text-align: left !important;
          }
          .from-tablet-justify-start {
            justify-content: flex-start !important;
          }
          .from-tablet-order-1 {
            order: 1 !important;
          }
          .from-tablet-order-2 {
            order: 2 !important;
          }

          /* Image sizes */
          .sm\\:w-96 {
            width: 384px !important;
            height: 384px !important;
          }
          .md\\:w-\\[420px\\] {
            width: 420px !important;
            height: 420px !important;
          }
          .lg\\:w-\\[480px\\] {
            width: 480px !important;
            height: 480px !important;
          }
          .xl\\:w-\\[520px\\] {
            width: 520px !important;
            height: 520px !important;
          }
        }
      `}</style>
    </>
  );
}
