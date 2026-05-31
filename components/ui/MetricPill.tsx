import { Metric } from "@/types";

export function MetricPill({ l, v }: Metric) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <span style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--muted)" }}>
        {l}
      </span>
      <span className="mpill">{v}</span>
    </div>
  );
}