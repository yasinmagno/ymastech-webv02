"use client";
import { useEffect, useRef } from "react";
import { useLang } from "../../lib/context";
import { content } from "../../lib/data";

export default function Hero() {
  const { lang } = useLang();
  const t = content.hero[lang];
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < 28; i++) {
      const p = document.createElement("div");
      p.style.cssText = `
        position:absolute; width:2px; height:2px;
        background:#E63946; border-radius:50%; opacity:0;
        left:${Math.random() * 100}%; bottom:${Math.random() * 50}%;
        animation: float ${3 + Math.random() * 6}s ${Math.random() * 6}s ease-in-out infinite;
      `;
      container.appendChild(p);
    }
  }, []);

  const marqueeItems = [
    "Web Development","Mobile Apps","Desktop Systems",
    "SaaS Platform Development","API Integration","Support & DevOps","Built to Perform",
  ];

  return (
    <section style={{
      minHeight: "100vh",
      paddingTop: "68px",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* Área principal */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        padding: "60px 6%",
      }}>

        {/* Grid animado */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(230,57,70,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(230,57,70,.03) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          animation: "gridShift 22s linear infinite",
        }} />

        {/* Brilho */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px", height: "800px",
          background: "radial-gradient(circle, rgba(230,57,70,.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        {/* Partículas */}
        <div ref={particlesRef} style={{
          position: "absolute", inset: 0,
          overflow: "hidden", pointerEvents: "none",
        }} />

        {/* Conteúdo */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: "900px" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#1c0c0e", border: "1px solid rgba(230,57,70,.3)",
            color: "#f87", padding: "6px 16px", borderRadius: "20px",
            fontSize: "11px", fontWeight: 700, letterSpacing: "1px",
            marginBottom: "32px",
          }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#E63946", display: "block",
              animation: "pulse 1.5s ease-in-out infinite",
            }} />
            {t.badge}
          </div>

          {/* Eyebrow */}
          <p style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
            fontSize: "10px", fontWeight: 700, letterSpacing: "0.35em",
            textTransform: "uppercase", color: "#E63946", marginBottom: "28px",
          }}>
            <span style={{ width: "20px", height: "1px", background: "#E63946" }} />
            {t.eyebrow}
            <span style={{ width: "20px", height: "1px", background: "#E63946" }} />
          </p>

          {/* Título */}
          <h1 style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "clamp(56px, 8vw, 110px)",
            fontWeight: 900, lineHeight: 0.95,
            textTransform: "uppercase", marginBottom: "32px",
            letterSpacing: "-0.01em",
          }}>
            {t.line1}
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 300, color: "white" }}>
              {t.line2.split(" ").slice(0, -1).join(" ")}{" "}
              <span style={{ color: "#E63946" }}>{t.line2.split(" ").slice(-1)[0]}</span>
            </em>
            <br />
            <span style={{ color: "#E63946" }}>{t.line3}</span>
          </h1>

          {/* Subtítulo */}
          <p style={{
            fontSize: "17px", fontWeight: 300, lineHeight: 1.75,
            color: "rgba(255,255,255,0.72)",
            maxWidth: "560px", margin: "0 auto 48px",
          }}>
            {t.sub}
          </p>

          {/* Botões */}
          <div className="hero-buttons" style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" style={{
              padding: "16px 40px", background: "#E63946", color: "#fff",
              fontSize: "13px", fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", borderRadius: "2px", textDecoration: "none",
            }}>
              {t.cta1}
            </a>
            <a href="#services" style={{
              padding: "15px 40px", background: "transparent", color: "#fff",
              fontSize: "13px", fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", borderRadius: "2px", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.45)",
            }}>
              {t.cta2}
            </a>
          </div>
        </div>
      </div>
      {/* Marquee no TOPO com fundo vermelho */}
      <div style={{
        background: "#E63946",
        overflow: "hidden",
        padding: "13px 0",
        borderBottom: "1px solid #c02030",
        flexShrink: 0,
      }}>
        <div style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marquee 20s linear infinite",
        }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              fontSize: "11px", fontWeight: 700,
              letterSpacing: "2px", textTransform: "uppercase",
              color: "rgba(255,255,255,0.9)", padding: "0 36px",
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}