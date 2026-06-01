import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail
} from "lucide-react";

import { Github } from "@/components/ui/icons/Github";
import { Linkedin } from "@/components/ui/icons/Linkedin";
import { SLabel } from "@/components/ui/SLabel";
import { useReveal } from "@/hooks/useReveal";

export function Contact() {
  const [ref, on] = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  }

  const contactLinks = [
    {
      Icon: Mail,
      label: "Email",
      val: "kishan@email.dev",
      href: "mailto:kishan@email.dev",
    },
    { Icon: Github, label: "GitHub", val: "github.com/kishan", href: "#" },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      val: "linkedin.com/in/kishan",
      href: "#",
    },
  ];

  return (
    <section id="contact" ref={ref} className={`reveal ${on ? "on" : ""}`}>
      <div className="wrap">
        <SLabel>// 07 — CONTACT</SLabel>
        <h2 className="h2">Let's Build Something</h2>
        <p className="sub">
          Open to senior backend roles, consulting engagements, and interesting
          technical collaborations. Typically respond within 24h.
        </p>

        <div
          className="two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Form */}
          <form
            onSubmit={submit}
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            {[
              { name: "name", placeholder: "Your name", type: "text" },
              { name: "email", placeholder: "Email address", type: "email" },
            ].map(({ name, placeholder, type }) => (
              <input
                key={name}
                type={type}
                placeholder={placeholder}
                className="finput"
                required
                value={form[name]}
                onChange={(e) =>
                  setForm((p) => ({ ...p, [name]: e.target.value }))
                }
              />
            ))}
            <textarea
              className="finput"
              placeholder="What are you building? Tell me about the system."
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm((p) => ({ ...p, message: e.target.value }))
              }
              required
            />
            <button
              type="submit"
              className="btn-p"
              style={{ alignSelf: "flex-start" }}
            >
              {sent ? (
                <>
                  <CheckCircle2 size={14} />
                  Message sent!
                </>
              ) : (
                <>
                  <Mail size={14} />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Info side */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {contactLinks.map(({ Icon, label, val, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  textDecoration: "none",
                  padding: "15px 18px",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  transition: "all .15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--acc-bdr)";
                  e.currentTarget.style.background = "var(--acc-dim)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "var(--bg1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={15} color="var(--accent)" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-m)",
                      fontSize: 10,
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                      marginBottom: 3,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-m)",
                      fontSize: 13,
                      color: "var(--text)",
                    }}
                  >
                    {val}
                  </div>
                </div>
                <ArrowUpRight
                  size={13}
                  color="var(--muted)"
                  style={{ marginLeft: "auto" }}
                />
              </a>
            ))}

            <div
              style={{
                padding: "15px 18px",
                border: "1px solid var(--border)",
                borderRadius: 10,
                background: "var(--bg1)",
                marginTop: 4,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-m)",
                  fontSize: 10,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                  marginBottom: 8,
                }}
              >
                Availability
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    animation: "pulse 2s infinite",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-m)",
                    fontSize: 13,
                    color: "var(--text)",
                  }}
                >
                  Available from July 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
