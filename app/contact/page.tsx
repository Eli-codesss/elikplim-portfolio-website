"use client";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/movrealp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 5000);
      }
    } catch (err) {
      alert(
        "Oops! Something went wrong. Try emailing me directly: elikpliyaa@gmail.com"
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "7rem 1.5rem 6rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          fontSize: "4.5rem",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "5rem",
          background: "linear-gradient(to right, #06b6d4, #a855f7, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Get in Touch
      </motion.h1>

      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: "1.25rem",
            color: "#94a3b8",
            textAlign: "center",
            marginBottom: "4rem",
            lineHeight: "1.8",
          }}
        >
          I’m open to new opportunities and collaborations. Drop me a message!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "1.5rem",
            padding: "3rem",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", gap: "1.5rem" }}
          >
            {/* Name */}
            <div style={{ position: "relative" }}>
              <User
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "1rem",
                  width: "1.25rem",
                  height: "1.25rem",
                  color: "#06b6d4",
                }}
              />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={{
                  width: "100%",
                  padding: "1rem 1rem 1rem 3rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                  borderRadius: "0.75rem",
                  color: "#e2e8f0",
                  fontSize: "1.1rem",
                  outline: "none",
                }}
              />
            </div>

            {/* Email */}
            <div style={{ position: "relative" }}>
              <Mail
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "1rem",
                  width: "1.25rem",
                  height: "1.25rem",
                  color: "#06b6d4",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={{
                  width: "100%",
                  padding: "1rem 1rem 1rem 3rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                  borderRadius: "0.75rem",
                  color: "#e2e8f0",
                  fontSize: "1.1rem",
                  outline: "none",
                }}
              />
            </div>

            {/* Message */}
            <div style={{ position: "relative" }}>
              <MessageCircle
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "1rem",
                  width: "1.25rem",
                  height: "1.25rem",
                  color: "#06b6d4",
                }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                style={{
                  width: "100%",
                  padding: "1rem 1rem 1rem 3rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                  borderRadius: "0.75rem",
                  color: "#e2e8f0",
                  fontSize: "1.1rem",
                  outline: "none",
                  resize: "none" as const,
                }}
              />
            </div>

            {/* Buttons + Success Message */}
            <div style={{ marginTop: "1rem" }}>
              <button
                type="submit"
                disabled={isSending}
                style={{
                  width: "100%",
                  padding: "1.1rem",
                  background: isSending
                    ? "#64748b"
                    : "linear-gradient(to right, #06b6d4, #ec4899)",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  border: "none",
                  borderRadius: "0.75rem",
                  cursor: isSending ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  opacity: isSending ? 0.7 : 1,
                }}
              >
                {isSending ? (
                  "Sending..."
                ) : sent ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send style={{ width: "1.4rem", height: "1.4rem" }} />
                    Send Message
                  </>
                )}
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    textAlign: "center",
                    marginTop: "1rem",
                    color: "#10b981",
                    fontWeight: "500",
                  }}
                >
                  Thank you! I’ll get back to you soon
                </motion.p>
              )}
            </div>
          </form>

          <p
            style={{
              textAlign: "center",
              marginTop: "2rem",
              color: "#64748b",
              fontSize: "0.95rem",
            }}
          >
            You can email me at{" "}
            <a
              href="mailto:elikpliyaa@gmail.com"
              style={{ color: "#06b6d4", textDecoration: "underline" }}
            >
              elikpliyaa@gmail.com
            </a>
          </p>
          <p
            style={{
              textAlign: "center",
              marginTop: "0.5rem",
              color: "#64748b",
              fontSize: "0.95rem",
            }}
          >
            Find me on{" "}
            <a
              href="https://www.linkedin.com/in/elikplim-anumu-b85ab5169?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              style={{ color: "#06b6d4", textDecoration: "underline" }}
            >
              LinkedIn
            </a>
          </p>
          <p
            style={{
              textAlign: "center",
              marginTop: "0.5rem",
              color: "#64748b",
              fontSize: "0.95rem",
            }}
          >
            Or collaboration with me on{" "}
            <a
              href="https://github.com/Eli-codesss"
              style={{ color: "#06b6d4", textDecoration: "underline" }}
            >
              GitHub
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
