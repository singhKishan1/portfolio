"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { SLabel } from "@/components/ui/SLabel";
import { MetricPill } from "@/components/ui/MetricPill";
import { MutedLink } from "@/components/ui/MutedLink";
import { PROJECTS } from "@/data/projects";
import type { Project } from "@/types";
import {Github} from "@/components/ui/icons/Github";

import { ExternalLink, ChevronDown } from "lucide-react";

export function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  const [ref, on] = useReveal();

  return (
    <section id="work" ref={ref} className={`reveal ${on ? "on" : ""}`}>
      <div className="wrap">
        <SLabel>// 01 — SELECTED WORK</SLabel>
        <h2 className="h2">Engineering Projects</h2>
        <p className="sub">
          Production-grade systems designed with scalability and reliability as
          non-negotiable first-class constraints.
        </p>

        <div style={{ display: "grid", gap: 20 }}>
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="card card-a"
              style={{ padding: 26, cursor: "pointer" }}
              onClick={() => setOpen(open === p.id ? null : p.id)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 16,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-m)",
                        fontSize: 10,
                        color: "var(--accent)",
                        textTransform: "uppercase",
                        letterSpacing: ".12em",
                      }}
                    >
                      {p.category}
                    </span>
                    <span
                      style={{
                        width: 3,
                        height: 3,
                        borderRadius: "50%",
                        background: "var(--border2)",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-m)",
                        fontSize: 10,
                        color: "var(--muted)",
                      }}
                    >
                      {p.tech.length} technologies
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      letterSpacing: "-.025em",
                      marginBottom: 5,
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-m)",
                      fontSize: 13,
                      color: "var(--muted)",
                    }}
                  >
                    {p.tagline}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <MutedLink href="https://github.com/singhKishan1/CodeCrafterHTTP/tree/master" style={{ gap: 5 }}>
                    <Github size={14} />
                    GitHub
                  </MutedLink>
                  <MutedLink href="#" style={{ gap: 5 }}>
                    <ExternalLink size={14} />
                    Demo
                  </MutedLink>
                  <ChevronDown
                    size={16}
                    color="var(--muted)"
                    style={{
                      transform: open === p.id ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform .22s",
                    }}
                  />
                </div>
              </div>

              {/* Metrics */}
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  flexWrap: "wrap",
                  marginTop: 18,
                }}
              >
                {p.metrics.map((m) => (
                  <MetricPill key={m.l} {...m} />
                ))}
              </div>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  gap: 6,
                  flexWrap: "wrap",
                  marginTop: 14,
                }}
              >
                {p.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Expanded */}
              {open === p.id && (
                <div
                  style={{
                    marginTop: 26,
                    borderTop: "1px solid var(--border)",
                    paddingTop: 24,
                  }}
                >
                  <div
                    className="proj-detail"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                      gap: 16,
                    }}
                  >
                    {p.details.map(({ icon: Icon, label, body }) => (
                      <div
                        key={label}
                        style={{
                          background: "var(--bg)",
                          border: "1px solid var(--border)",
                          borderRadius: 9,
                          padding: 16,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: 7,
                            alignItems: "center",
                            marginBottom: 10,
                          }}
                        >
                          <Icon size={13} color="var(--accent)" />
                          <span
                            style={{
                              fontFamily: "var(--font-m)",
                              fontSize: 10,
                              color: "var(--accent)",
                              textTransform: "uppercase",
                              letterSpacing: ".12em",
                            }}
                          >
                            {label}
                          </span>
                        </div>
                        <p
                          style={{
                            fontFamily: "var(--font-m)",
                            fontSize: 12.5,
                            color: "var(--muted)",
                            lineHeight: 1.7,
                          }}
                        >
                          {body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
