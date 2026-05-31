export function MutedLink({
  href,
  children,
  style = {}
}: {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <a href={href} style={{ color: "var(--muted)", textDecoration: "none", ...style }}>
      {children}
    </a>
  );
}