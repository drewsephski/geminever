import { ImageResponse } from "next/og";
import { getPost, getPosts } from "@/lib/posts";
export const size = { width: 1200, height: 630 }; export const contentType = "image/png";
export const generateStaticParams = () => getPosts().map(p => ({ slug: p.slug }));
export default async function OG({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a0a", color: "#fff", padding: 64 }}>
    <div style={{ fontSize: 48, fontWeight: 900, display: "flex" }}>Gemi<span style={{ color: "#ef4444", textDecoration: "line-through" }}>Never</span></div>
    <div style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.1 }}>{p?.title}</div>
    <div style={{ fontSize: 28, color: "#a3a3a3" }}>{p?.verdict || "Real Gemini fails, roasted daily."}</div></div>, size);
}
