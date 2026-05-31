import { ArrowUpRight, Clock } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { BLOG_DATA } from "@/data/blog";
import { MutedLink } from "@/components/ui/MutedLink";
import { SLabel } from "@/components/ui/SLabel";

export function Projects(){
    const [ref, on] = useReveal();
  return (
    <section id="blog" ref={ref} className={`reveal ${on ? "on" : ""}`}
      style={{ background:"var(--bg1)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
      <div className="wrap">
        <SLabel>// 06 — WRITING</SLabel>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48 }}>
          <h2 className="h2">Technical Blog</h2>
          <MutedLink href="#" style={{ gap:4 }}>All posts <ArrowUpRight size={12} /></MutedLink>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))", gap:14 }}>
          {BLOG_DATA.map(post => (
            <a key={post.title} href="#" style={{ textDecoration:"none" }}>
              <div className="card" style={{ padding:24, height:"100%", display:"flex", flexDirection:"column", gap:14 }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--acc-bdr)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}>
                <div style={{ display:"flex", gap:6 }}>
                  {post.tags.map(t => <span key={t} className="tag tag-a">{t}</span>)}
                </div>
                <h4 style={{ fontSize:15, fontWeight:600, lineHeight:1.45, color:"var(--text)", flex:1 }}>{post.title}</h4>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ fontFamily:"var(--font-m)", fontSize:11, color:"var(--muted)" }}>{post.date}</span>
                  <div style={{ display:"flex", gap:4, alignItems:"center" }}>
                    <Clock size={11} color="var(--muted)" />
                    <span style={{ fontFamily:"var(--font-m)", fontSize:11, color:"var(--muted)" }}>{post.read} read</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}