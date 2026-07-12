import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0f1a 0%, #111a2e 50%, #1c2944 100%)",
          color: "#f4f6fb",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#3b9eff",
            marginBottom: 16,
            fontFamily: "monospace",
          }}
        >
          hansel.dev
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, marginBottom: 12, lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 32, color: "#c5d0e8", marginBottom: 32 }}>
          {siteConfig.title}
        </div>
        <div style={{ fontSize: 22, color: "#9aafd4", maxWidth: 900, lineHeight: 1.4 }}>
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 48,
            fontSize: 18,
            color: "#6a87b8",
          }}
        >
          <span>{siteConfig.location}</span>
          <span>·</span>
          <span>Open to opportunities</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
