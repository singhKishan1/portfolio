import { useReveal } from "@/hooks/useReveal";
import { SLabel } from "@/components/ui/SLabel";
import { PHILOSOPHY_ITEMS } from "@/data/philosophy";

export function Philosophy() {
  const [ref, on] = useReveal();
  return (
    <section
      id="philosophy"
      ref={ref}
      className={`reveal ${on ? "on" : ""}`}
      style={{
        background: "var(--bg1)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="wrap">
        <SLabel>// 02 — PRINCIPLES</SLabel>
        <h2 className="h2">Engineering Philosophy</h2>
        <p className="sub">
          The convictions that shape how I design, build, and operate systems in
          production.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 14,
          }}
        >
          {PHILOSOPHY_ITEMS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="card"
              style={{
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--acc-bdr)";
                e.currentTarget.style.background = "var(--bg2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--bg1)";
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--acc-dim)",
                  border: "1px solid var(--acc-bdr)",
                }}
              >
                <Icon size={16} color="var(--accent)" />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
                  {title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-m)",
                    fontSize: 12.5,
                    color: "var(--muted)",
                    lineHeight: 1.75,
                  }}
                >
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
