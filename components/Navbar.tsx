"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          padding: "1.5rem 2rem",
          borderBottom: "1px solid rgba(100, 100, 150, 0.15)",
          background: "rgba(10, 10, 25, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo - Stylish Developer Style */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontSize: "2rem",
                fontWeight: "900",
                letterSpacing: "-0.5px",
                background:
                  "linear-gradient(90deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                position: "relative",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "none";
              }}
            >
              Elikplim<span style={{ color: "#06b6d4" }}>.dev</span>
              {/* Subtle animated underline */}
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                style={{
                  position: "absolute",
                  bottom: "-8px",
                  left: 0,
                  height: "3px",
                  background:
                    "linear-gradient(90deg, transparent, #06b6d4, transparent)",
                  borderRadius: "2px",
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "none",
              gap: "3rem",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  position: "relative",
                  color: "#cbd5e1",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  textDecoration: "none",
                  padding: "0.5rem 0",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#a78bfa";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#cbd5e1";
                }}
              >
                {link.name}
                <motion.span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    width: 0,
                    background: "linear-gradient(90deg, #06b6d4, #ec4899)",
                    borderRadius: "2px",
                  }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            ))}
            {/* Optional Mode Toggle */}
            {/* <ModeToggle /> */}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: "block",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              zIndex: 1000,
            }}
            className="mobile-only"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X size={32} color="#a78bfa" strokeWidth={2.5} />
              ) : (
                <Menu size={32} color="#a78bfa" strokeWidth={2.5} />
              )}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(10, 10, 30, 0.98)",
              backdropFilter: "blur(20px)",
              zIndex: 998,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "3rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: "3rem",
                    fontWeight: "700",
                    color: "#f8fafc",
                    textDecoration: "none",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(90deg, #06b6d4, #ec4899)";
                    e.currentTarget.style.webkitBackgroundClip = "text";
                    e.currentTarget.style.webkitTextFillColor = "transparent";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "none";
                    e.currentTarget.style.webkitTextFillColor = "#f8fafc";
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Breakpoints - Inline Style Only */}
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-only {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
