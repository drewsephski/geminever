import { ImageResponse } from "next/og";
import { getPost, getPosts } from "@/lib/posts";
export const size = { width: 1200, height: 630 }; export const contentType = "image/png";
export const generateStaticParams = () => getPosts().map(p => ({ slug: p.slug }));
export default async function OG({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "radial-gradient(900px 420px at 50% -10%, #2a2350 0%, #08080a 70%)", color: "#fff", padding: "60px 72px" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: -1.5 }}>
        <span style={{ backgroundImage: "linear-gradient(90deg,#4285f4,#9b72cb,#d96570)", backgroundClip: "text", color: "transparent" }}>Gemi</span>
        <span style={{ textDecoration: "line-through", textDecorationColor: "#ff453a" }}>Never</span></div>
      <div style={{ display: "flex", fontSize: 22, color: "#4ade80", border: "2px solid #4ade8055", borderRadius: 999, padding: "6px 18px" }}>REAL GEMINI RESPONSE</div>
    </div>
    <div style={{ display: "flex", fontSize: p && p.title.length > 70 ? 54 : 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>{p?.title}</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", height: 4, width: 160, borderRadius: 4, backgroundImage: "linear-gradient(90deg,#4285f4,#9b72cb,#d96570)" }} />
      <div style={{ display: "flex", fontSize: 28, color: "#b4b4bc" }}>{p?.verdict || "The goldfish that went to business school."}</div>
    </div></div>, size);
}
