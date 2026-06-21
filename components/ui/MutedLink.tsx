export function MutedLink({
  href,
  children,
  style = {},
}: {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "var(--muted)",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: 5,
        fontFamily: "var(--font-m)",
        fontSize: 12,
        transition: "color .15s",
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
    >
      {children}
    </a>
  );
}
