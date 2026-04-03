"use client";
import { useLang } from "../../lib/context";
import { content } from "../../lib/data";

export default function Footer() {
  const { lang } = useLang();
  const t = content.footer[lang];

  return (
    <footer style={{
      background: "#111112",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "60px 6% 32px",
    }}>
      <div className="footer-grid" style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr",
        gap: "60px",
        marginBottom: "56px",
      }}>
        {/* Brand */}
        <div>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "16px" }}>
            <img src="/logo.svg" alt="YmasTech" style={{ height: "68px", width: "auto" }} />
          </a>
          <p style={{ fontSize: "13px", fontWeight: 300, color: "#888", lineHeight: 1.7, marginBottom: "24px", maxWidth: "260px" }}>
            {t.tagline}
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            {["in","tw","fb","ig"].map(s => (
              <a key={s} href="#" style={{
                width: "34px", height: "34px", background: "#181819",
                border: "1px solid rgba(255,255,255,0.09)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#888", textDecoration: "none", fontSize: "12px", fontWeight: 700,
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E63946"; (e.currentTarget as HTMLAnchorElement).style.color = "#E63946"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.09)"; (e.currentTarget as HTMLAnchorElement).style.color = "#888"; }}
              >{s}</a>
            ))}
          </div>
        </div>

        {/* Serviços */}
        <div>
          <h4 style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#fff", marginBottom: "20px" }}>
            {lang === "pt" ? "Serviços" : "Services"}
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              lang === "pt" ? "Desenvolvimento Web" : "Web Development",
              lang === "pt" ? "Apps Mobile" : "Mobile Apps",
              lang === "pt" ? "Sistemas Desktop" : "Desktop Systems",
              "SaaS Platforms",
              "Cloud & DevOps",
            ].map((item, i) => (
              <li key={i}>
                <a href="#services" style={{ fontSize: "13px", fontWeight: 300, color: "#888", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#888")}
                >{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#fff", marginBottom: "20px" }}>
            {lang === "pt" ? "Empresa" : "Company"}
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: lang === "pt" ? "Sobre Nós" : "About Us", href: "#about" },
              { label: lang === "pt" ? "Portfólio" : "Portfolio", href: "#portfolio" },
              { label: lang === "pt" ? "Processo" : "Process", href: "#process" },
              { label: lang === "pt" ? "Preços" : "Pricing", href: "#pricing" },
              { label: lang === "pt" ? "Contacto" : "Contact", href: "#contact" },
            ].map((item, i) => (
              <li key={i}>
                <a href={item.href} style={{ fontSize: "13px", fontWeight: 300, color: "#888", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#888")}
                >{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#fff", marginBottom: "20px" }}>
            {lang === "pt" ? "Contacto" : "Contact"}
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: "ymastechmz@gmail.com", href: "mailto:ymastechmz@gmail.com" },
              { label: "+258 85 715 8718", href: "https://wa.me/258857158718" },
              { label: "Maputo, Moçambique 🇲🇿", href: "#" },
            ].map((item, i) => (
              <li key={i}>
                <a href={item.href} style={{ fontSize: "13px", fontWeight: 300, color: "#888", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#888")}
                >{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        paddingTop: "28px",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "12px",
      }}>
        <p style={{ fontSize: "11px", color: "#555" }}>
          © 2026 <span style={{ color: "#E63946" }}>YMASTECH</span>. {t.copy}
        </p>
        <p style={{ fontSize: "11px", color: "#555" }}>{t.madeIn}</p>
      </div>
    </footer>
  );
}