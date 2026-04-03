import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0c0d",
          position: "relative",
        }}
      >
        {/* Grid pattern background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(230,57,70,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(230,57,70,.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Red glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(230,57,70,.12) 0%, transparent 65%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#1c0c0e",
              border: "1px solid rgba(230,57,70,.4)",
              color: "#f87",
              padding: "8px 20px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: "32px",
            }}
          >
            DESENVOLVIMENTO DE SOFTWARE · MOÇAMBIQUE
          </div>

          {/* Brand name */}
          <div
            style={{
              fontSize: "100px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-4px",
              lineHeight: 1,
              marginBottom: "16px",
            }}
          >
            YMASTECH
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "36px",
              fontWeight: 300,
              color: "#E63946",
              fontStyle: "italic",
              marginBottom: "32px",
            }}
          >
            Built to Perform.
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "20px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
              maxWidth: "700px",
              lineHeight: 1.6,
            }}
          >
            Tecnologia inteligente para negócios que crescem sem limites.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#E63946",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
