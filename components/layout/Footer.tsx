export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "24px 28px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-m)",
          fontSize: 11,
          color: "var(--muted)",
        }}
      >
        © 2025 Kishan Singh · Spring Boot + Next.js · Built with precision
      </span>
      <div style={{ display: "flex", gap: 20 }}>
        {[
          ["Work", "#work"],
          ["Blog", "#blog"],
          ["GitHub", "https://github.com/singhKishan1"],
          ["Contact", "kishan995694@gmail.com"],
        ].map(([l, h]) => (
          <a
            key={l}
            href={h}
            target="_blank"
            rel="noopener noreferrer"
            className="nlink"
            style={{ fontSize: 11 }}
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
