"use client";
import { useState, useEffect } from "react";
import { useLang } from "../../lib/context";
import { content } from "../../lib/data";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content.nav[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["#services",  t.services],
    ["#about",     t.about],
    ["#portfolio", "Portfólio"],
    ["#process",   t.process],
    ["#pricing",   t.pricing],
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: "68px", padding: "0 6%",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        background: scrolled ? "rgba(12,12,13,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.4s",
      }}>

        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <img src="/logo.svg" alt="YmasTech" style={{ height: "58px", width: "auto" }} />
        </a>

        {/* Links desktop — escondidos no mobile */}
        <ul style={{
          display: "flex", gap: "36px", listStyle: "none",
        }}
          className="desktop-nav"
        >
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} style={{
                fontSize: "12px", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#888", textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#888")}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" style={{
              fontSize: "12px", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#fff", textDecoration: "none",
              background: "#E63946", padding: "9px 20px", borderRadius: "2px",
            }}>
              {t.cta}
            </a>
          </li>
        </ul>

        {/* Direita: toggle lang + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {/* Toggle PT/EN */}
          <div style={{
            display: "flex", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "2px", overflow: "hidden",
          }}>
            {(["pt", "en"] as const).map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                padding: "6px 12px", fontSize: "11px", fontWeight: 700,
                background: lang === l ? "#E63946" : "transparent",
                color: lang === l ? "#fff" : "#888",
                border: "none", cursor: "pointer", fontFamily: "inherit",
              }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Hamburger — só no mobile */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              flexDirection: "column", gap: "5px",
              background: "transparent", border: "none",
              cursor: "pointer", padding: "4px",
            }}
          >
            <span style={{ width: "24px", height: "2px", background: menuOpen ? "#E63946" : "#fff", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ width: "24px", height: "2px", background: "#fff", display: "block", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: "24px", height: "2px", background: menuOpen ? "#E63946" : "#fff", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className="mobile-menu"
        style={{
          position: "fixed", top: "68px", left: 0, right: 0, zIndex: 199,
          background: "rgba(12,12,13,0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: menuOpen ? "24px 6%" : "0 6%",
          maxHeight: menuOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "all 0.4s ease",
          display: "flex", flexDirection: "column", gap: "8px",
        }}
      >
        {links.map(([href, label]) => (
          <a key={href} href={href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "14px", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#888", textDecoration: "none",
              padding: "12px 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#888")}
          >
            {label}
          </a>
        ))}
        <a href="#contact"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: "8px", padding: "14px",
            background: "#E63946", color: "#fff",
            fontSize: "13px", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            textDecoration: "none", textAlign: "center",
            borderRadius: "2px",
          }}
        >
          {t.cta}
        </a>
      </div>

      {/* CSS para mostrar/esconder elementos */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}