"use client";

import { useState, useEffect } from "react";
import { Command } from "lucide-react";

interface NavProps {
  onCmd: () => void;
}

export function Nav({ onCmd }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 58,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
        background: scrolled ? "rgba(5,5,5,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "all .3s ease",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "var(--font-m)",
          fontSize: 13,
          color: "var(--accent)",
          textDecoration: "none",
          letterSpacing: ".04em",
          fontWeight: 500,
        }}
      >
        ks<span style={{ color: "var(--muted)" }}>.dev</span>
      </a>

      <div
        className="desktop-nav"
        style={{ display: "flex", gap: 28, alignItems: "center" }}
      >
        {["work", "philosophy", "experience", "skills", "blog", "contact"].map(
          (s) => (
            <a key={s} href={`#${s}`} className="nlink">
              {s}
            </a>
          ),
        )}
      </div>

      <button
        onClick={onCmd}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "var(--bg1)",
          border: "1px solid var(--border)",
          borderRadius: 6,
          padding: "5px 10px",
          cursor: "pointer",
          color: "var(--muted)",
          fontFamily: "var(--font-m)",
          fontSize: 11,
          transition: "border-color .15s, color .15s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--border2)";
          e.currentTarget.style.color = "var(--text)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.color = "var(--muted)";
        }}
      >
        <Command size={12} />
        <span>⌘K</span>
      </button>
    </nav>
  );
}
