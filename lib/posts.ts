import fs from "fs";
import path from "path";
export type Exchange = { prompt: string; response: string };
export type Post = { slug: string; date: string; title: string; product?: string; context?: string;
  exchanges: Exchange[]; roast: string[] | string; verdict?: string; source?: string; submittedBy?: string; tags?: string[]; roastHints?: Record<string, { text: string; href: string }> };
const dir = path.join(process.cwd(), "content/posts");
export function getPosts(): Post[] {
  return fs.readdirSync(dir).filter(f => f.endsWith(".json"))
    .map(f => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as Post)
    .sort((a, b) => b.date.localeCompare(a.date) || b.slug.localeCompare(a.slug));
}
export const getPost = (s: string) => getPosts().find(p => p.slug === s);
export const roasts = (p: Post) => Array.isArray(p.roast) ? p.roast : [p.roast];
export const SITE = process.env.SITE_URL || "https://geminever.vercel.app";
export type FeedItem = { slug: string; date: string; product?: string; title: string; verdict?: string; mock?: boolean; href?: string; tags?: string[] };
export function getFeedItems(): FeedItem[] {
  const real: FeedItem[] = getPosts().map(p => ({ slug: p.slug, date: p.date, product: p.product, title: p.title, verdict: p.verdict, tags: p.tags, href: `/p/${p.slug}` }));
  const mock: FeedItem[] = JSON.parse(fs.readFileSync(path.join(process.cwd(), "content/mock-feed.json"), "utf8"))
    .map((m: FeedItem) => ({ ...m, mock: true }));
  return [...real, ...mock].sort((a, b) => b.date.localeCompare(a.date));
}
