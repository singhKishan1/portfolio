import { useReveal } from "@/hooks/useReveal";
import { SLabel } from "@/components/ui/SLabel";
import { EXPERIENCE } from "@/data/experience";
import { Clock, ChevronRight } from "lucide-react";

export function Experience() {
  const [ref, on] = useReveal();
  return (
    <section id="experience" ref={ref} className={`reveal ${on ? "on" : ""}`}>
      <div className="wrap">
        <SLabel>// 03 — CAREER</SLabel>
        <h2 className="h2">Experience</h2>
        <p className="sub" style={{ marginBottom: 48 }}>
          Where I've applied these principles in the real world.
        </p>

        <div style={{ position: "relative", paddingLeft: 32 }}>
          <div className="tl-line" />
          {EXPERIENCE.map((exp, i) => (
            <div key={i} style={{ position: "relative", marginBottom: 24 }}>
              <div className="tl-dot" />
              <div className="card" style={{ padding: 26 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 12,
                    marginBottom: 20,
                  }}
                >
                  <div>
                    <h3
                      style={{ fontSize: 18, fontWeight: 700, marginBottom: 5 }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{ display: "flex", gap: 8, alignItems: "center" }}
                    >
                      <span
                        className="acc"
                        style={{
                          fontFamily: "var(--font-m)",
                          fontSize: 13,
                          fontWeight: 500,
                        }}
                      >
                        {exp.company}
                      </span>
                      <span style={{ color: "var(--border2)" }}>·</span>
                      <span
                        style={{
                          fontFamily: "var(--font-m)",
                          fontSize: 11,
                          color: "var(--muted)",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", gap: 6, alignItems: "center" }}
                  >
                    <Clock size={12} color="var(--muted)" />
                    <span
                      style={{
                        fontFamily: "var(--font-m)",
                        fontSize: 12,
                        color: "var(--muted)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginBottom: 20,
                  }}
                >
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start",
                      }}
                    >
                      <ChevronRight
                        size={13}
                        color="var(--accent)"
                        style={{ marginTop: 2, flexShrink: 0 }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-m)",
                          fontSize: 12.5,
                          color: "var(--muted)",
                          lineHeight: 1.65,
                        }}
                      >
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {exp.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div
          style={{
            marginTop: 28,
            padding: "20px 24px",
            border: "1px solid var(--border)",
            borderRadius: 12,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-m)",
                fontSize: 10,
                color: "var(--muted)",
                marginBottom: 6,
                textTransform: "uppercase",
                letterSpacing: ".12em",
              }}
            >
              Education
            </div>
            <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 3 }}>
              B.Tech — Computer Science & Engineering
            </h4>
            <span
              className="acc"
              style={{ fontFamily: "var(--font-m)", fontSize: 13 }}
            >
              United College of Engineering & Research · Prayagraj
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-m)",
              fontSize: 12,
              color: "var(--muted)",
            }}
          >
            2019 — 2023
          </span>
        </div>
      </div>
    </section>
  );
}
