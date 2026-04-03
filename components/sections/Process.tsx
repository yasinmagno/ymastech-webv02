"use client";
import { useLang } from "../../lib/context";
import { content } from "../../lib/data";

export default function Process() {
  const { lang } = useLang();
  const t = content.process[lang];

  return (
    <section id="process" className="section-mobile" style={{
      background: "#111112",
      padding: "110px 6%",
      borderTop: "1px solid rgba(255,255,255,0.07)",
    }}>

      {/* Header */}
      <div style={{ marginBottom: "64px" }}>
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

      {/* Steps */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1px",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.07)",
      }} className="process-grid">
        {t.steps.map((step, i) => (
          <div key={i}
            style={{
              background: "#111112",
              padding: "40px 28px",
              transition: "background 0.2s",
              cursor: "default",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.background = "#181819";
              const dot = e.currentTarget.querySelector(".step-dot") as HTMLDivElement;
              if (dot) {
                dot.style.borderColor = "#E63946";
                dot.style.background = "rgba(230,57,70,0.1)";
              }
              const num = e.currentTarget.querySelector(".step-num") as HTMLDivElement;
              if (num) num.style.color = "#E63946";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.background = "#111112";
              const dot = e.currentTarget.querySelector(".step-dot") as HTMLDivElement;
              if (dot) {
                dot.style.borderColor = "#555";
                dot.style.background = "transparent";
              }
              const num = e.currentTarget.querySelector(".step-num") as HTMLDivElement;
              if (num) num.style.color = "#555";
            }}
          >
            {/* Label */}
            <div style={{
              fontSize: "10px", fontWeight: 700,
              color: "#E63946", letterSpacing: "2px",
              marginBottom: "22px",
            }}>
              PASSO {step.num}
            </div>

            {/* Círculo */}
            <div className="step-dot" style={{
              width: "52px", height: "52px",
              border: "1px solid #555",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "22px",
              transition: "all 0.3s",
            }}>
              <span className="step-num" style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: "18px", fontWeight: 800,
                color: "#555",
                transition: "color 0.3s",
              }}>
                {step.num}
              </span>
            </div>

            {/* Título */}
            <h3 style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontSize: "18px", fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em", marginBottom: "10px",
            }}>
              {step.title}
            </h3>

            {/* Descrição */}
            <p style={{
              fontSize: "13px", fontWeight: 300,
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.65,
            }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}