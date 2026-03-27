export default function Marquee() {
  const items = [
    "Web Development", "Mobile Apps", "Desktop Systems",
    "SaaS Platform Development", "API Integration", "Support & DevOps", "Built to Perform",
  ];
  const all = [...items, ...items];

  return (
    <div style={{
      background: "#E63946", overflow: "hidden",
      padding: "13px 0", borderBottom: "1px solid #c02030",
    }}>
      <div style={{ display: "flex", animation: "marquee 20s linear infinite", whiteSpace: "nowrap" }}>
        {all.map((item, i) => (
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
  );
}