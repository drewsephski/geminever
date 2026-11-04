import { getPosts, roasts, SITE } from "@/lib/posts";
export const dynamic = "force-static";
const x = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export function GET() {
  const items = getPosts().map(p => `<item><title>${x(p.title)}</title><link>${SITE}/p/${p.slug}</link><guid>${SITE}/p/${p.slug}</guid><pubDate>${new Date(p.date + "T12:00:00Z").toUTCString()}</pubDate><description>${x(roasts(p).join(" "))}</description></item>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>GemiNever</title><link>${SITE}</link><description>Real Gemini fails, roasted daily.</description>${items}</channel></rss>`, { headers: { "Content-Type": "application/rss+xml" } });
}
