"use client";
import { useLang } from "../../lib/context";
import { content } from "../../lib/data";

const icons = [
  // 01 — Web
  <svg key="web" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "48px", height: "48px", color: "#fff", opacity: 0.8 }}>
    <rect x="6" y="8" width="36" height="28" rx="2"/>
    <path d="M16 36v4M32 36v4M12 40h24"/>
    <path d="M14 18l6 6-6 6M26 30h8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // 02 — Mobile
  <svg key="mobile" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "48px", height: "48px", color: "#fff", opacity: 0.8 }}>
    <rect x="10" y="6" width="16" height="28" rx="2"/>
    <rect x="22" y="14" width="16" height="28" rx="2"/>
    <path d="M18 38h16" strokeLinecap="round"/>
  </svg>,
  // 03 — Software
  <svg key="software" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "48px", height: "48px", color: "#fff", opacity: 0.8 }}>
    <circle cx="24" cy="24" r="8"/>
    <path d="M24 6v6M24 36v6M6 24h6M36 24h6"/>
    <path d="M11 11l4 4M33 33l4 4M11 37l4-4M33 15l4-4" strokeLinecap="round"/>
  </svg>,
  // 04 — UI/UX
  <svg key="uiux" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "48px", height: "48px", color: "#fff", opacity: 0.8 }}>
    <path d="M8 16l8-8 8 8 8-8 8 8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="6" y="24" width="36" height="18" rx="2"/>
    <path d="M14 34h6M26 34h8" strokeLinecap="round"/>
  </svg>,
  // 05 — APIs
  <svg key="api" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "48px", height: "48px", color: "#fff", opacity: 0.8 }}>
    <rect x="8" y="8" width="14" height="14" rx="1"/>
    <rect x="26" y="8" width="14" height="14" rx="1"/>
    <rect x="8" y="26" width="14" height="14" rx="1"/>
    <rect x="26" y="26" width="14" height="14" rx="1"/>
  </svg>,
  // 06 — Cloud
  <svg key="cloud" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "48px", height: "48px", color: "#fff", opacity: 0.8 }}>
    <path d="M24 6L6 16v16l18 10 18-10V16L24 6z"/>
    <path d="M6 16l18 10M24 26v16M42 16L24 26" strokeLinecap="round"/>
  </svg>,
];

export default function Services() {
  const { lang } = useLang();
  const t = content.services[lang];

  return (
    <section id="services" style={{ background: "#0c0c0d", padding: "110px 6%" }}>

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
          lineHeight: 1.75, maxWidth: "300px",
        }}>
          {t.sub}
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1px",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}>
        {t.items.map((svc, i) => (
          <div
            key={i}
            style={{
              background: "#0c0c0d", padding: "44px 36px",
              position: "relative", overflow: "hidden",
              cursor: "pointer", transition: "background 0.25s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.background = "#111112";
              const line = e.currentTarget.querySelector(".hline") as HTMLDivElement;
              if (line) line.style.transform = "scaleX(1)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.background = "#0c0c0d";
              const line = e.currentTarget.querySelector(".hline") as HTMLDivElement;
              if (line) line.style.transform = "scaleX(0)";
            }}
          >
            {/* Linha vermelha hover */}
            <div className="hline" style={{
              position: "absolute", top: 0, left: 0,
              width: "100%", height: "2px",
              background: "#E63946",
              transform: "scaleX(0)", transformOrigin: "left",
              transition: "transform 0.35s ease",
            }} />

            {/* Número */}
            <div style={{
              fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.2em", color: "#E63946",
              opacity: 0.6, marginBottom: "22px",
            }}>
              {svc.num}
            </div>

            {/* Icon SVG */}
            <div style={{ marginBottom: "20px" }}>
              {icons[i]}
            </div>

            {/* Título */}
            <h3 style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontSize: "24px", fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              marginBottom: "12px", lineHeight: 1.1,
            }}>
              {svc.title}
            </h3>

            {/* Descrição */}
            <p style={{
              fontSize: "13px", fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.7, marginBottom: "24px",
            }}>
              {svc.desc}
            </p>
            
            {/* Link */}
            <a href="#contact" style={{
              fontSize: "10px", fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#E63946", textDecoration: "none",
            }}>
              {svc.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}