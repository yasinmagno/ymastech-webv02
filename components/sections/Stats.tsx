"use client";
import { useRef, useState, useEffect } from "react";
import { useLang } from "../../lib/context";
import { content } from "../../lib/data";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          setCount(Math.floor(current));
          if (current >= target) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={{
      fontFamily: "var(--font-barlow-condensed)",
      fontSize: "clamp(44px, 5vw, 60px)",
      fontWeight: 900, color: "#E63946", lineHeight: 1,
    }}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const { lang } = useLang();
  const stats = content.stats[lang];

  return (
    <div id="stats" style={{
      background: "#111112",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      padding: "40px 6%",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
    }}>
      {stats.map((stat, i) => (
        <div key={i} style={{
          textAlign: "center", padding: "0 20px",
          borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
        }}>
          <Counter target={stat.value} suffix={stat.suffix} />
          <p style={{
            fontSize: "10px", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#888", marginTop: "6px",
          }}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}