import { bump, EMOJIS, getCounts } from "@/lib/reactions";
import { getPost } from "@/lib/posts";
export const dynamic = "force-dynamic";
export async function GET(req: Request) {
  const slug = new URL(req.url).searchParams.get("slug") || "";
  return Response.json((await getCounts([slug]))[slug] || {});
}
export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  if (!getPost(b.slug) || !EMOJIS.some(x => x.e === b.emoji) || (b.delta !== 1 && b.delta !== -1))
    return Response.json({ error: "bad request" }, { status: 400 });
  return Response.json({ count: await bump(b.slug, b.emoji, b.delta) });
}
