import { getFeedItems } from "@/lib/posts";
import Wall from "./Wall";
export const metadata = { title: "The Wall of Gemini Fuckups | GemiNever",
  description: "Every Gemini faceplant in one place. Real ones are marked REAL. Examples are satire.",
  openGraph: { title: "The Wall of Gemini Fuckups", description: "Every Gemini faceplant in one place. Real ones are marked REAL." } };
export default function Feed() {
  return (<div className="rise">
    <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">The Wall of Gemini <span className="text-blood">Fuckups</span></h2>
    <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-neutral-400">A running body count of Google&apos;s smartest model doing its dumbest work. Posts marked <b className="text-green-400">REAL</b> are actual Gemini responses with receipts. Posts marked <b className="text-yellow-400">EXAMPLE</b> are satire we wrote to show the vibe, not real quotes.</p>
    <a href="/feed.xml" className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-bold text-black shadow-lg shadow-orange-900/30 transition duration-200 hover:-translate-y-0.5 hover:bg-orange-400 active:translate-y-0">📡 Subscribe via RSS (real fails only)</a>
    <Wall items={getFeedItems()} />
  </div>);
}
