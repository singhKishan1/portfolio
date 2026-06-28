"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { SLabel } from "@/components/ui/SLabel";
import { Terminal, GitBranch, Activity, Code2, Star } from "lucide-react";

import { Github } from "@/components/ui/icons/Github";

export function GitHubDSA() {
  const [leetcodeStats, setLeetcodeStats] = useState<any>(null);

  const [ref, on] = useReveal();

  useEffect(() => {
    async function fetchLeetcodeStats() {
      try {
        const response = await fetch("/api/leetcode?username=singh_kishan");

        if (!response.ok) {
          throw new Error("API failed");
        }

        const data = await response.json();

        console.log(data);

        setLeetcodeStats(data.matchedUser);
      } catch (err) {
        console.error(err);
      }
    }

    fetchLeetcodeStats();
  }, []);

  useEffect(() => {
    console.log("leetcodeStats:", leetcodeStats);
  }, [leetcodeStats]);

  if (!leetcodeStats) {
    return <div>Loading...</div>;
  }

  const submissionStats = leetcodeStats.submitStats.acSubmissionNum;
  const total = submissionStats.find((x: any) => x.difficulty === "All")?.count;

  const easy = submissionStats.find((x: any) => x.difficulty === "Easy")?.count;

  const medium = submissionStats.find(
    (x: any) => x.difficulty === "Medium",
  )?.count;

  const hard = submissionStats.find((x: any) => x.difficulty === "Hard")?.count;
  const currentStreak = leetcodeStats.userCalendar.streak;

  const gh = [
    { label: "Public Repos", val: "24", Icon: GitBranch },
    { label: "Commits (YTD)", val: "847", Icon: Activity },
    { label: "Pull Requests", val: "63", Icon: Code2 },
    { label: "GitHub Stars", val: "127", Icon: Star },
  ];
  const dsa = [
    { label: "Total Solved", val: total, color: "var(--accent)" },
    { label: "Easy", val: easy, color: "#50fa7b" },
    { label: "Medium", val: medium, color: "#ffb86c" },
    { label: "Hard", val: hard, color: "#ff5555" },
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
                {currentStreak} days 🔥
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
