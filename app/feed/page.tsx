import { getFeedItems } from "@/lib/posts";
import Wall from "./Wall";
import { getCounts } from "@/lib/reactions";
export const dynamic = "force-dynamic";
export const metadata = { title: "The Wall of Gemini Fuckups | GemiNever",
  description: "Every Gemini faceplant in one place. Real ones are marked REAL. Examples are satire.",
  openGraph: { title: "The Wall of Gemini Fuckups", description: "Every Gemini faceplant in one place. Real ones are marked REAL." } };
export default async function Feed() {
  const items = getFeedItems();
  const counts = await getCounts(items.filter(i => !i.mock).map(i => i.slug));
  return (<div className="mx-auto max-w-3xl pt-14 rise">
    <h2 className="text-4xl font-medium leading-[1] tracking-[-0.04em] sm:text-6xl">The Wall of Gemini <span className="gem-text">Fuckups</span></h2>
    <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-neutral-400">A running body count of Google&apos;s smartest model doing its dumbest work. Posts marked <b className="text-green-400">REAL</b> are actual Gemini responses with receipts. Posts marked <b className="text-yellow-400">EXAMPLE</b> are satire we wrote to show the vibe, not real quotes.</p>
    <a href="/feed.xml" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition duration-200 hover:-translate-y-0.5 hover:bg-neutral-200 active:translate-y-0">📡 Subscribe via RSS (real fails only)</a>
    <Wall items={items} counts={counts} />
  </div>);
}
