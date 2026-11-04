import fs from "fs";
import path from "path";
export type Exchange = { prompt: string; response: string };
export type Post = { slug: string; date: string; title: string; product?: string; context?: string;
  exchanges: Exchange[]; roast: string[] | string; verdict?: string; source?: string; submittedBy?: string };
const dir = path.join(process.cwd(), "content/posts");
export function getPosts(): Post[] {
  return fs.readdirSync(dir).filter(f => f.endsWith(".json"))
    .map(f => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as Post)
    .sort((a, b) => b.date.localeCompare(a.date) || b.slug.localeCompare(a.slug));
}
export const getPost = (s: string) => getPosts().find(p => p.slug === s);
export const roasts = (p: Post) => Array.isArray(p.roast) ? p.roast : [p.roast];
export const SITE = process.env.SITE_URL || "https://geminever.vercel.app";
