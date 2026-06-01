import { ChevronRight, Search } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const CMD_ITEMS = [
  { label: "Hero", id: "hero", hint: "Back to top" },
  { label: "Projects", id: "work", hint: "View work" },
  { label: "Philosophy", id: "philosophy", hint: "Engineering principles" },
  { label: "Experience", id: "experience", hint: "Work history" },
  { label: "Skills", id: "skills", hint: "Tech stack" },
  { label: "GitHub / DSA", id: "github", hint: "Stats" },
  { label: "Blog", id: "blog", hint: "Writing" },
  { label: "Contact", id: "contact", hint: "Get in touch" },
];

export function CmdPalette({ open, onClose }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const filtered = CMD_ITEMS.filter((i) =>
    i.label.toLowerCase().includes(q.toLowerCase()),
  );

  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const h = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      }
      if (e.key === "Enter" && filtered[active]) {
        go(filtered[active]);
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, active, filtered]);

  function go(item) {
    const el = document.getElementById(item.id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    onClose();
  }

  if (!open) return null;
  return (
    <div className="cmd-ov" onClick={onClose}>
      <div className="cmd-box" onClick={(e) => e.stopPropagation()}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "0 16px",
          }}
        >
          <Search size={14} color="var(--muted)" />
          <input
            ref={inputRef}
            className="cmd-in"
            placeholder="Jump to section…"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            style={{ paddingLeft: 0, paddingRight: 0 }}
          />
          <span
            style={{
              fontFamily: "var(--font-m)",
              fontSize: 11,
              color: "var(--muted)",
              background: "var(--border2)",
              padding: "2px 6px",
              borderRadius: 4,
            }}
          >
            ESC
          </span>
        </div>
        <div style={{ maxHeight: 300, overflowY: "auto" }}>
          {filtered.length === 0 ? (
            <div
              style={{
                padding: 24,
                textAlign: "center",
                color: "var(--muted)",
                fontSize: 13,
                fontFamily: "var(--font-m)",
              }}
            >
              No results
            </div>
          ) : (
            filtered.map((item, i) => (
              <div
                key={item.id}
                className={`cmd-row ${i === active ? "act" : ""}`}
                onClick={() => go(item)}
                onMouseEnter={() => setActive(i)}
              >
                <ChevronRight
                  size={12}
                  color={i === active ? "var(--accent)" : "var(--muted)"}
                />
                <span style={{ flex: 1, fontWeight: i === active ? 500 : 400 }}>
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-m)",
                    fontSize: 11,
                    color: "var(--muted)",
                  }}
                >
                  {item.hint}
                </span>
              </div>
            ))
          )}
        </div>
        <div
          style={{
            padding: "9px 16px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            gap: 16,
          }}
        >
          {[
            ["↑↓", "nav"],
            ["↵", "go"],
            ["esc", "close"],
          ].map(([k, v]) => (
            <span
              key={k}
              style={{
                display: "flex",
                gap: 5,
                alignItems: "center",
                fontFamily: "var(--font-m)",
                fontSize: 11,
                color: "var(--muted)",
              }}
            >
              <span
                style={{
                  background: "var(--border2)",
                  padding: "1px 5px",
                  borderRadius: 3,
                }}
              >
                {k}
              </span>
              {v}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
