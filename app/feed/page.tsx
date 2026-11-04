import { getFeedItems } from "@/lib/posts";
import Wall from "./Wall";
export const metadata = { title: "The Wall of Gemini Fuckups | GemiNever",
  description: "Every Gemini faceplant in one place. Real ones are marked REAL. Examples are satire.",
  openGraph: { title: "The Wall of Gemini Fuckups", description: "Every Gemini faceplant in one place. Real ones are marked REAL." } };
export default function Feed() {
  return (<div>
    <h1 className="text-4xl md:text-5xl font-black leading-tight">The Wall of Gemini <span className="text-red-500">Fuckups</span></h1>
    <p className="text-neutral-400 mt-3">A running body count of Google&apos;s smartest model doing its dumbest work. Posts marked <b className="text-green-400">REAL</b> are actual Gemini responses with receipts. Posts marked <b className="text-yellow-400">EXAMPLE</b> are satire we wrote to show the vibe, not real quotes.</p>
    <a href="/feed.xml" className="inline-flex items-center gap-2 mt-5 bg-orange-500 hover:bg-orange-400 text-black font-black px-5 py-3 rounded-xl">📡 Subscribe via RSS (real fails only)</a>
    <Wall items={getFeedItems()} />
  </div>);
}
