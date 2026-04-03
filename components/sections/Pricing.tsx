"use client";
import { useLang } from "../../lib/context";
import { content } from "../../lib/data";

export default function Pricing() {
  const { lang } = useLang();
  const t = content.pricing[lang];

  return (
    <section id="pricing" className="section-mobile" style={{
      background: "#0c0c0d",
      padding: "110px 6%",
      borderTop: "1px solid rgba(255,255,255,0.07)",
    }}>

      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-end", flexWrap: "wrap", gap: "20px",
        marginBottom: "56px",
      }}>
        <div>
          <span style={{
            display: "block", fontSize: "10px", fontWeight: 700,
            letterSpacing: "0.4em", textTransform: "uppercase",
            color: "#E63946", marginBottom: "16px",
          }}>
            {t.tag}
          </span>
          <h2 style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "clamp(38px, 5vw, 68px)",
            fontWeight: 900, lineHeight: 1,
            textTransform: "uppercase",
          }}>
            {t.title.split("\n").map((line, i) => (
              <span key={i} style={{ display: "block" }}>{line}</span>
            ))}
          </h2>
        </div>
        <p style={{
          fontSize: "15px", fontWeight: 300,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.75, maxWidth: "280px",
        }}>
          {t.sub}
        </p>
      </div>

      {/* Plans grid */}
     <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1px",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.07)",
    }}>
        {t.plans.map((plan, i) => (
          <div key={i} style={{
            background: plan.hot ? "#111112" : "#0c0c0d",
            padding: "40px 32px",
            position: "relative",
            transition: "background 0.2s",
            display: "flex",
            flexDirection: "column",
            outline: plan.hot ? "2px solid #E63946" : "none",
            outlineOffset: "-1px",
          }}>

            {/* Badge popular */}
            {plan.hot && "badge" in plan && (
              <div style={{
                position: "absolute", top: "-1px", left: "50%",
                transform: "translateX(-50%)",
                background: "#E63946", color: "#fff",
                fontSize: "9px", fontWeight: 700,
                letterSpacing: "2px", textTransform: "uppercase",
                padding: "5px 16px", whiteSpace: "nowrap",
              }}>
               {"badge" in plan ? (plan as {badge: string}).badge : ""}
              </div>
            )}

            {/* Tier */}
            <div style={{
              fontSize: "10px", fontWeight: 700,
              color: "#888", letterSpacing: "2px",
              textTransform: "uppercase", marginBottom: "12px",
            }}>
              {plan.tier}
            </div>

            {/* Preço */}
            <div style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontSize: "clamp(28px, 3vw, 38px)",
              fontWeight: 900, letterSpacing: "-1px",
              marginBottom: "4px",
            }}>
              {plan.price}
            </div>

            {/* Unidade */}
            <div style={{
              fontSize: "13px", color: "#888",
              marginBottom: "24px", paddingBottom: "24px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}>
              {plan.unit}
            </div>

            {/* Descrição */}
            <p style={{
              fontSize: "13px", color: "#888",
              lineHeight: 1.55, marginBottom: "24px",
            }}>
              {plan.desc}
            </p>

            {/* Features */}
            <ul style={{
              listStyle: "none", flex: 1,
              display: "flex", flexDirection: "column",
              marginBottom: "28px",
            }}>
              {plan.features.map((f, fi) => (
                <li key={fi} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  fontSize: "13px", color: "rgba(255,255,255,0.55)",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}>
                  <span style={{ color: "#E63946", fontWeight: 900, fontSize: "14px" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Botão */}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                width: "100%", padding: "13px",
                fontFamily: "var(--font-barlow-condensed)",
                fontWeight: 800, fontSize: "15px",
                letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", transition: "all 0.2s",
                borderRadius: "2px",
                background: plan.hot ? "#E63946" : "transparent",
                color: "#fff",
                border: plan.hot ? "none" : "1px solid rgba(255,255,255,0.2)",
              }}
              onMouseEnter={e => {
                if (plan.hot) (e.currentTarget as HTMLButtonElement).style.background = "#c02030";
                else (e.currentTarget as HTMLButtonElement).style.borderColor = "#fff";
              }}
              onMouseLeave={e => {
                if (plan.hot) (e.currentTarget as HTMLButtonElement).style.background = "#E63946";
                else (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
              }}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}