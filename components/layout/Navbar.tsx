"use client";
import { useState, useEffect } from "react";
import { useLang } from "../../lib/context";
import { content } from "../../lib/data";
export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const t = content.nav[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
      <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
           src="/logo.svg"
            alt="YmasTech"
             style={{ height: "64px", width: "auto" }}
          />
      </a>

      {/* Links — escondidos no mobile */}
      <ul style={{ display: "flex", gap: "36px", listStyle: "none" }} className="nav-links-desktop">
        {[
          ["#services",  t.services],
          ["#about",     t.about],
          ["#portfolio", "Portfólio"],
          ["#process",   t.process],
          ["#pricing",   t.pricing],
        ].map(([href, label]) => (
          <li key={href}>
            <a href={href} style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#888")}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", textDecoration: "none", background: "#E63946", padding: "9px 20px", borderRadius: "2px" }}>
            {t.cta}
          </a>
        </li>
      </ul>

      {/* Toggle PT/EN */}
      <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", overflow: "hidden" }}>
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
    </nav>
  );
}