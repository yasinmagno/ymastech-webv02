"use client";
import { useState } from "react";
import { useLang } from "../../lib/context";
import { content } from "../../lib/data";

export default function Contact() {
  const { lang } = useLang();
  const t = content.contact[lang];
  const f = t.form;

  const [formData, setFormData] = useState({
    name: "", email: "", company: "", projectType: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", projectType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "#181819",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#fff",
    padding: "14px 16px",
    fontFamily: "inherit",
    fontSize: "14px",
    fontWeight: 300,
    borderRadius: "2px",
    outline: "none",
  };

  const labelStyle = {
    fontSize: "9px", fontWeight: 700,
    letterSpacing: "0.2em", textTransform: "uppercase" as const,
    color: "#888", marginBottom: "8px", display: "block",
  };

  const icons: Record<string, React.ReactNode> = {
    email: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "15px", height: "15px", color: "#E63946" }}>
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round"/>
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "15px", height: "15px", color: "#E63946" }}>
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round"/>
      </svg>
    ),
    location: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "15px", height: "15px", color: "#E63946" }}>
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round"/>
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round"/>
      </svg>
    ),
  };

  return (
    <section id="contact" className="contact-section" style={{
      background: "#111112",
      padding: "110px 6%",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
      alignItems: "start",
    }}>

      {/* Info */}
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
          textTransform: "uppercase", marginBottom: "20px",
        }}>
          {t.title}
        </h2>
        <p style={{
          fontSize: "15px", fontWeight: 300,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.75, marginBottom: "48px",
          maxWidth: "400px",
        }}>
          {t.sub}
        </p>

        {/* Detalhes */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {t.details.map((detail, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
              <div style={{
                width: "38px", height: "38px",
                background: "rgba(230,57,70,0.1)",
                border: "1px solid rgba(230,57,70,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {icons[detail.icon]}
              </div>
              <div>
                <span style={{ ...labelStyle, marginBottom: "4px" }}>{detail.label}</span>
                <span style={{ fontSize: "14px", fontWeight: 300, color: "#e8e8e8" }}>
                  {detail.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

        {/* Mensagem de sucesso */}
        {status === "success" && (
          <div style={{
            padding: "16px", background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.3)",
            color: "#4ade80", fontSize: "14px", borderRadius: "2px",
          }}>
            {lang === "pt"
              ? "✓ Mensagem enviada! Respondemos em menos de 24h."
              : "✓ Message sent! We reply within 24 hours."}
          </div>
        )}

        {/* Mensagem de erro */}
        {status === "error" && (
          <div style={{
            padding: "16px", background: "rgba(230,57,70,0.1)",
            border: "1px solid rgba(230,57,70,0.3)",
            color: "#f87", fontSize: "14px", borderRadius: "2px",
          }}>
            {lang === "pt"
              ? "Erro ao enviar. Tenta novamente ou contacta-nos pelo WhatsApp."
              : "Send error. Try again or contact us via WhatsApp."}
          </div>
        )}

        {/* Nome + Email */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="contact-form-row">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name" style={labelStyle}>{f.name}</label>
            <input id="name" name="name" type="text" value={formData.name} onChange={handleChange}
              placeholder="João Silva" required autoComplete="name" style={inputStyle} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email" style={labelStyle}>{f.email}</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange}
              placeholder="joao@empresa.co.mz" required autoComplete="email" style={inputStyle} />
          </div>
        </div>

        {/* Empresa */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="company" style={labelStyle}>{f.company}</label>
          <input id="company" name="company" type="text" value={formData.company} onChange={handleChange}
            placeholder="Nome da empresa" autoComplete="organization" style={inputStyle} />
        </div>

        {/* Tipo de projecto */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="projectType" style={labelStyle}>{f.projectType}</label>
          <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange}
            style={{ ...inputStyle, appearance: "none" as const }}>
            {f.types.map((type, i) => (
              <option key={i} value={i === 0 ? "" : type} style={{ background: "#181819" }}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Mensagem */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="message" style={labelStyle}>{f.message}</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange}
            placeholder="Descreve o teu projeto..." required rows={5}
            style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }} />
        </div>

        {/* Botão */}
        <button type="submit" disabled={status === "loading"}
          style={{
            width: "100%", padding: "18px",
            background: status === "loading" ? "#c02030" : "#E63946",
            color: "#fff",
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "16px", fontWeight: 800,
            letterSpacing: "0.2em", textTransform: "uppercase",
            border: "none", cursor: status === "loading" ? "not-allowed" : "pointer",
            transition: "background 0.2s",
            opacity: status === "loading" ? 0.7 : 1,
          }}>
          {status === "loading"
            ? (lang === "pt" ? "A enviar..." : "Sending...")
            : f.submit}
        </button>
      </form>
    </section>
  );
}
