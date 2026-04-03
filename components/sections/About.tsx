"use client";
import { useLang } from "../../lib/context";
import { content } from "../../lib/data";

export default function About() {
  const { lang } = useLang();
  const t = content.about[lang];

  return (
    <section id="about" className="about-section" style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      background: "#111112",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
    }}>

     {/* Visual esquerdo — Citação */}
<div className="about-visual" style={{
  position: "relative",
  minHeight: "520px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "60px",
  borderRight: "1px solid rgba(255,255,255,0.07)",
  overflow: "hidden",
}}>
  {/* Grid de fundo */}
  <div style={{
    position: "absolute", inset: 0, pointerEvents: "none",
    backgroundImage: `
      linear-gradient(rgba(230,57,70,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(230,57,70,.03) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  }} />
  {/* Citação */}
<div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
  <div style={{
    fontFamily: "var(--font-barlow-condensed)",
    fontSize: "120px", fontWeight: 900,
    color: "#E63946", opacity: 0.15,
    lineHeight: 0.8, marginBottom: "16px",
  }}>
    “
  </div>

  <p style={{
    fontFamily: "var(--font-barlow-condensed)",
    fontSize: "clamp(22px, 2.5vw, 32px)",
    fontWeight: 700, lineHeight: 1.3,
    color: "#fff", textTransform: "uppercase",
    letterSpacing: "0.02em",
  }}>
    {lang === "pt" ? (
      <>
        Não construímos software.
        <br />
        <span style={{ color: "#E63946", fontStyle: "italic", fontWeight: 300 }}>
          Construímos o futuro
        </span>
        <br />
        dos nossos clientes.
      </>
    ) : (
      <>
        We don&apos;t build software.
        <br />
        <span style={{ color: "#E63946", fontStyle: "italic", fontWeight: 300 }}>
          We build the future
        </span>
        <br />
        of our clients.
      </>
    )}
  </p>

  <div style={{
    width: "48px", height: "2px",
    background: "#E63946",
    margin: "24px auto 0",
  }} />

  <p style={{
    fontSize: "11px", fontWeight: 700,
    letterSpacing: "0.3em", textTransform: "uppercase",
    color: "rgba(255,255,255,0.3)", marginTop: "16px",
  }}>
    YmasTech
  </p>
</div>
    </div>

      {/* Conteúdo direito */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 6%",
      }}>
        <span style={{
          display: "block", fontSize: "10px", fontWeight: 700,
          letterSpacing: "0.4em", textTransform: "uppercase",
          color: "#E63946", marginBottom: "16px",
        }}>
          {t.tag}
        </span>

        <h2 style={{
          fontFamily: "var(--font-barlow-condensed)",
          fontSize: "clamp(38px, 4vw, 62px)",
          fontWeight: 900, lineHeight: 1,
          textTransform: "uppercase", marginBottom: "20px",
        }}>
          {t.title.split("\n").map((line, i) => (
            <span key={i} style={{ display: "block" }}>{line}</span>
          ))}
        </h2>

        <p style={{
          fontSize: "15px", fontWeight: 300,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.75, marginBottom: "36px",
        }}>
          {t.sub}
        </p>

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
          {t.items.map((item, i) => (
            <li key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "14px",
              fontSize: "13px", fontWeight: 300,
              color: "rgba(255,255,255,0.55)", lineHeight: 1.65,
            }}>
              <span style={{
                width: "14px", height: "1px",
                background: "#E63946",
                marginTop: "10px", flexShrink: 0,
              }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}