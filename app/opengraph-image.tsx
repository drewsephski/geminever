import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 }; export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#0a0a0a", color: "#fff" }}>
    <div style={{ fontSize: 140, fontWeight: 900, display: "flex" }}>Gemi<span style={{ color: "#ef4444", textDecoration: "line-through" }}>Never</span></div>
    <div style={{ fontSize: 52, fontWeight: 900, color: "#f87171", marginTop: 20 }}>The goldfish that went to business school.</div><div style={{ fontSize: 32, color: "#a3a3a3", marginTop: 16 }}>Real Gemini fails. Roasted daily.</div></div>, size);
}
