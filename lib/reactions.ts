import { neon } from "@neondatabase/serverless";
export { EMOJIS } from "./emojis";
const sql = () => neon(process.env.DATABASE_URL!);
export async function getCounts(slugs: string[]): Promise<Record<string, Record<string, number>>> {
  const out: Record<string, Record<string, number>> = {};
  if (!process.env.DATABASE_URL || !slugs.length) return out;
  try {
    const rows = await sql()`SELECT slug, emoji, count FROM reactions WHERE slug = ANY(${slugs})` as { slug: string; emoji: string; count: number }[];
    for (const r of rows) (out[r.slug] ||= {})[r.emoji] = r.count;
  } catch { /* counts are optional */ }
  return out;
}
export async function bump(slug: string, emoji: string, delta: 1 | -1) {
  const rows = await sql()`INSERT INTO reactions (slug, emoji, count) VALUES (${slug}, ${emoji}, ${Math.max(delta, 0)})
    ON CONFLICT (slug, emoji) DO UPDATE SET count = GREATEST(reactions.count + ${delta}, 0) RETURNING count` as { count: number }[];
  return rows[0]?.count ?? 0;
}
