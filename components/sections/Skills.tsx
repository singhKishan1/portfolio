import { useReveal } from "@/hooks/useReveal";
import { SLabel } from "@/components/ui/SLabel";
import { SKILLS_DATA } from "@/data/skills";

export function Skills() {
  const [ref, on] = useReveal();
  return (
    <section
      id="skills"
      ref={ref}
      className={`reveal ${on ? "on" : ""}`}
      style={{
        background: "var(--bg1)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="wrap">
        <SLabel>// 04 — STACK</SLabel>
        <h2 className="h2">Tools & Technologies</h2>
        <p className="sub">
          Everything I reach for when building production systems.
        </p>

        <div style={{ display: "grid", gap: 28 }}>
          {Object.entries(SKILLS_DATA).map(([cat, items]) => (
            <div key={cat}>
              <div
                style={{
                  fontFamily: "var(--font-m)",
                  fontSize: 10,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: ".15em",
                  marginBottom: 12,
                }}
              >
                {cat}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {items.map((s) => (
                  <span key={s} className="stag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
