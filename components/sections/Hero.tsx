import { ArrowUpRight} from "lucide-react";
import { useEffect, useState } from "react";
import { MutedLink } from "@/components/ui/MutedLink";
import {Github} from "@/components/ui/icons/Github";
import {Linkedin} from "@/components/ui/icons/Linkedin";
import {Twitter} from "@/components/ui/icons/Twitter";

export function Hero() {
  const [typed, setTyped] = useState("");
  const full =
    "Senior Java backend engineer. I design distributed systems that scale reliably under production load.";
  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const t = setInterval(() => {
        if (i <= full.length) {
          setTyped(full.slice(0, i++));
        } else clearInterval(t);
      }, 28);
      return () => clearInterval(t);
    }, 900);
    return () => clearTimeout(delay);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="grid-bg"
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "42%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(6,255,165,0.035) 0%, transparent 62%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        className="wrap"
        style={{ position: "relative", zIndex: 1, paddingTop: 130 }}
      >
        <div
          className="hero-grid-cols"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* ── Left ── */}
          <div>
            <div
              className="fade-up"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 28,
                background: "var(--bg1)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: "5px 12px",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  animation: "pulse 2s infinite",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-m)",
                  fontSize: 11,
                  color: "var(--muted)",
                }}
              >
                Open to senior backend roles · Remote-first
              </span>
            </div>

            <h1
              className="fade-up d1"
              style={{
                fontFamily: "var(--font-d)",
                fontSize: "clamp(40px,5.5vw,64px)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-.035em",
                marginBottom: 24,
              }}
            >
              Kishan
              <br />
              <span className="acc">Singh</span>
              <br />
              <span
                style={{
                  color: "var(--subtle)",
                  fontSize: "clamp(32px,4vw,50px)",
                }}
              >
                Backend Eng.
              </span>
            </h1>

            <p
              className="fade-up d2"
              style={{
                fontFamily: "var(--font-m)",
                fontSize: 13,
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: 36,
                maxWidth: 400,
              }}
            >
              {typed}
              <span className="cur" />
            </p>

            <div
              className="fade-up d3"
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginBottom: 36,
              }}
            >
              <a href="#work" className="btn-p">
                View Projects <ArrowUpRight size={14} />
              </a>
              <a href="#contact" className="btn-g">
                Hire Me
              </a>
            </div>

            <div
              className="fade-up d4"
              style={{ display: "flex", gap: 18, alignItems: "center" }}
            >
              <MutedLink href="#">
                <Github size={16} />
              </MutedLink>
              <MutedLink href="#">
                <Linkedin size={16} />
              </MutedLink>
              <MutedLink href="#">
                <Twitter size={16} />
              </MutedLink>
              <div
                style={{ width: 1, height: 14, background: "var(--border2)" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-m)",
                  fontSize: 11,
                  color: "var(--muted)",
                }}
              >
                Nucleus Software · Noida, IN
              </span>
            </div>
          </div>

          {/* ── Right: Terminal ── */}
          <div
            className="hero-term fade-up d2"
            style={{ animation: "float 7s ease-in-out infinite" }}
          >
            <div className="term">
              <div className="term-bar">
                <div className="tdot" style={{ background: "#ff5f57" }} />
                <div className="tdot" style={{ background: "#febc2e" }} />
                <div className="tdot" style={{ background: "#28c840" }} />
                <span
                  style={{
                    marginLeft: 8,
                    fontFamily: "var(--font-m)",
                    fontSize: 11,
                    color: "var(--muted)",
                  }}
                >
                  PaymentController.java
                </span>
              </div>
              <div className="tc">
                <div>
                  <span className="c1">
                    // Rate-limited, auth-guarded payment endpoint
                  </span>
                </div>
                <div>
                  <span className="c2">@RestController</span>
                </div>
                <div>
                  <span className="c2">@RequestMapping</span>(
                  <span className="c3">"/api/v1/payments"</span>)
                </div>
                <div>
                  <span className="c2">@RateLimiter</span>(name ={" "}
                  <span className="c3">"payment-api"</span>, fallbackMethod ={" "}
                  <span className="c3">"fallback"</span>)
                </div>
                <div>
                  <span className="c2">public class</span>{" "}
                  <span className="c4">PaymentController</span> {"{"}
                </div>
                <br />
                <div>
                  &nbsp;&nbsp;<span className="c2">@PostMapping</span>(
                  <span className="c3">"/initiate"</span>)
                </div>
                <div>
                  &nbsp;&nbsp;<span className="c2">@PreAuthorize</span>(
                  <span className="c3">"hasRole('USER')"</span>)
                </div>
                <div>
                  &nbsp;&nbsp;<span className="c2">public</span>{" "}
                  <span className="c4">ResponseEntity</span>&lt;
                  <span className="c4">PaymentResponse</span>&gt;
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="c5">initiatePayment</span>(
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="c2">@Valid @RequestBody</span>{" "}
                  <span className="c4">PaymentRequest</span>{" "}
                  <span className="c6">req</span>,
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="c2">@AuthenticationPrincipal</span>{" "}
                  <span className="c4">UserDetails</span>{" "}
                  <span className="c6">user</span>) {"{"}
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="c1">// idempotency → kafka → db write</span>
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="c2">return</span> paymentService.
                  <span className="c5">process</span>(
                  <span className="c6">req</span>,{" "}
                  <span className="c6">user</span>);
                </div>
                <div>&nbsp;&nbsp;{"}"}</div>
                <div>
                  {"}"}
                  <span className="cur" />
                </div>
              </div>
            </div>

            <div className="sx" style={{ marginTop: 14 }}>
              {[
                "Spring Boot 3.x",
                "PostgreSQL 15",
                "Redis 7",
                "Kafka 3.6",
                "Docker",
                "AWS EKS",
              ].map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
