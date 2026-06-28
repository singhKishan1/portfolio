"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { SLabel } from "@/components/ui/SLabel";
import { Terminal, GitBranch, Activity, Code2, Star } from "lucide-react";

import { Github } from "@/components/ui/icons/Github";

export function GitHubDSA() {
  const [githubStats, setGithubStats] = useState<any>(null);
  const [leetcodeStats, setLeetcodeStats] = useState<any>(null);

  const [ref, on] = useReveal();

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const response = await fetch("api/github?username=singhKishan1");
        if (!response.ok) {
          throw new Error("GitHub API failed");
        }

        const data = await response.json();
        console.log("github stats:", data);
        setGithubStats(data.user);
      } catch (err) {
        console.error(err);
      }
    }

    fetchGitHubStats();
  }, []);

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

  if (!leetcodeStats || !githubStats) {
    return <div>Loading...</div>;
  }

  // leetcode stats
  const submissionStats = leetcodeStats.submitStats.acSubmissionNum;
  const leetcodeTotalSubmission = submissionStats.find(
    (x: any) => x.difficulty === "All",
  )?.count;

  const leetcodeEasy = submissionStats.find(
    (x: any) => x.difficulty === "Easy",
  )?.count;

  const leetcodeMedium = submissionStats.find(
    (x: any) => x.difficulty === "Medium",
  )?.count;

  const leetcodeHard = submissionStats.find(
    (x: any) => x.difficulty === "Hard",
  )?.count;
  const leetcodeCurrentStreak = leetcodeStats.userCalendar.streak;

  const dsa = [
    {
      label: "Total Solved",
      val: leetcodeTotalSubmission,
      color: "var(--accent)",
    },
    { label: "Easy", val: leetcodeEasy, color: "#50fa7b" },
    { label: "Medium", val: leetcodeMedium, color: "#ffb86c" },
    { label: "Hard", val: leetcodeHard, color: "#ff5555" },
  ];




  // github stats
  const githubPublicRepos = githubStats.publicRepositories.totalCount;
  const githubCommitsYTD =githubStats.contributionsCollection.totalCommitContributions;
  const githubPullRequests = githubStats.pullRequests.totalCount;
  // Extract stargazer counts from nested structure
  const stargazerCounts = githubStats.repositories.nodes.map(x => x.stargazerCount);
  // Calculate total stars
  const totalStars = stargazerCounts.reduce((sum, count) => sum + count, 0);

  // const githubStars = githubStats.repositories.totalCount;

  const gh = [
    { label: "Public Repos", val: githubPublicRepos, Icon: GitBranch },
    { label: "Commits (YTD)", val: githubCommitsYTD, Icon: Activity },
    { label: "Pull Requests", val: githubPullRequests, Icon: Code2 },
    { label: "GitHub Stars", val: totalStars, Icon: Star },
  ];

  // component render
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
                {leetcodeCurrentStreak} days 🔥
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
