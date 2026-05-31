import { useReveal } from "@/hooks/useReveal";
import { SLabel } from "@/components/ui/SLabel";
import {
  Github,
  Terminal,
  GitBranch,
  Activity,
  Code2,
  Star,
} from "lucide-react";

export function GitHubDSA() {
  const [ref, on] = useReveal();
  const gh = [
    { label: "Public Repos", val: "24", Icon: GitBranch },
    { label: "Commits (YTD)", val: "847", Icon: Activity },
    { label: "Pull Requests", val: "63", Icon: Code2 },
    { label: "GitHub Stars", val: "127", Icon: Star },
  ];
  const dsa = [
    { label: "Total Solved", val: "147", color: "var(--accent)" },
    { label: "Easy", val: "52", color: "#50fa7b" },
    { label: "Medium", val: "78", color: "#ffb86c" },
    { label: "Hard", val: "17", color: "#ff5555" },
  ];

  return (
    <section id="github" ref={ref} className={`reveal ${on ? "on" : ""}`}>
      <div className="wrap">
        <SLabel>// 05 — STATS</SLabel>
        <h2 className="h2">GitHub & DSA</h2>
        <p className="sub">
          Open source contribution and algorithmic problem solving.
        </p>

        <div
          className="two-col"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}
        >
          {/* GitHub */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-m)",
                fontSize: 10,
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: ".15em",
                marginBottom: 14,
                display: "flex",
                gap: 7,
                alignItems: "center",
              }}
            >
              <Github size={11} /> GitHub
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              {gh.map(({ label, val, Icon }) => (
                <div key={label} className="sc">
                  <div
                    style={{
                      display: "flex",
                      gap: 7,
                      alignItems: "center",
                      marginBottom: 8,
                    }}
                  >
                    <Icon size={12} color="var(--muted)" />
                    <span
                      style={{
                        fontFamily: "var(--font-m)",
                        fontSize: 10,
                        color: "var(--muted)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-d)",
                      fontSize: 26,
                      fontWeight: 800,
                    }}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* LeetCode */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-m)",
                fontSize: 10,
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: ".15em",
                marginBottom: 14,
                display: "flex",
                gap: 7,
                alignItems: "center",
              }}
            >
              <Terminal size={11} /> LeetCode
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginBottom: 10,
              }}
            >
              {dsa.map(({ label, val, color }) => (
                <div key={label} className="sc">
                  <span
                    style={{
                      fontFamily: "var(--font-m)",
                      fontSize: 10,
                      color: "var(--muted)",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-d)",
                      fontSize: 26,
                      fontWeight: 800,
                      color,
                    }}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                padding: "11px 16px",
                background: "var(--bg1)",
                borderRadius: 8,
                border: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-m)",
                  fontSize: 11,
                  color: "var(--muted)",
                }}
              >
                Current streak
              </span>
              <span
                style={{
                  fontFamily: "var(--font-d)",
                  fontWeight: 800,
                  color: "var(--accent)",
                  fontSize: 14,
                }}
              >
                23 days 🔥
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
