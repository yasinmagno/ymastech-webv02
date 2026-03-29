"use client";
import { useLang } from "../../lib/context";
import { content } from "../../lib/data";

export default function Portfolio() {
  const { lang } = useLang();
  const t = content.portfolio[lang];

  return (
    <section id="portfolio" style={{ background: "#0c0c0d", padding: "110px 6%" }}>

      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-end", flexWrap: "wrap", gap: "20px",
        marginBottom: "48px",
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
            {t.title}
          </h2>
        </div>
        <a href="#contact"
          style={{
            padding: "14px 36px", background: "#E63946", color: "#fff",
            fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", borderRadius: "2px", textDecoration: "none",
            border: "2px solid #E63946", transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "#E63946";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#E63946";
            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
          }}
        >
          {t.viewAll}
        </a>
      </div>

      {/* Grid 3 colunas iguais */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
      }}>
        {t.items.map((proj, i) => (
          <div key={i}
            style={{
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              borderRadius: "8px",
              height: "320px",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            onMouseEnter={e => {
              const bg = e.currentTarget.querySelector(".proj-bg") as HTMLDivElement;
              if (bg) bg.style.transform = "scale(1.06)";
              const info = e.currentTarget.querySelector(".proj-info") as HTMLDivElement;
              if (info) info.style.opacity = "1";
            }}
            onMouseLeave={e => {
              const bg = e.currentTarget.querySelector(".proj-bg") as HTMLDivElement;
              if (bg) bg.style.transform = "scale(1)";
              const info = e.currentTarget.querySelector(".proj-info") as HTMLDivElement;
              if (info) info.style.opacity = "1";
            }}
          >
            {/* Imagem de fundo */}
            <div className="proj-bg" style={{
                position: "absolute", inset: 0,
                backgroundImage: `url(${proj.image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "transform 0.6s ease",
                backgroundColor: "#111112",
            }} />

            {/* Overlay gradiente */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
            }} />

            {/* Info no fundo */}
            <div className="proj-info" style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "24px",
            }}>
              <span style={{
                display: "block", fontSize: "9px", fontWeight: 700,
                letterSpacing: "0.3em", textTransform: "uppercase",
                color: "#E63946", marginBottom: "6px",
              }}>
                {proj.tag}
              </span>
              <div style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: "24px", fontWeight: 800,
                textTransform: "uppercase", color: "#fff",
              }}>
                {proj.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}