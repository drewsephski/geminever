import { getPosts } from "@/lib/posts";
import PostCard from "./PostCard";
import Link from "next/link";
import { getCounts } from "@/lib/reactions";
export const dynamic = "force-dynamic";
export default async function Home() {
  const posts = getPosts();
  const counts = await getCounts(posts.map(p => p.slug));
  return (<>
    <section className="relative pt-16 pb-14 text-center sm:pt-24 sm:pb-20">
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-[#9b72cb] blur-[120px] glow" />
      <img src="/gemini.svg" alt="" aria-hidden className="rise mx-auto h-14 w-14 sparkle-spin opacity-90 sm:h-16 sm:w-16" />
      <p className="rise rise-2 mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Real Gemini responses. Real receipts. Roasted daily.</p>
      <h1 className="rise rise-3 mx-auto mt-6 max-w-4xl text-[2.75rem] font-medium leading-[0.98] tracking-[-0.045em] text-balance sm:text-7xl md:text-[5.5rem]">
        The goldfish that went to <span className="gem-text">business school.</span></h1>
      <div className="rise rise-4 mt-9 flex flex-wrap items-center justify-center gap-3">
        <Link href="/feed" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200">See the Wall of Fuckups</Link>
        <a href="/feed.xml" className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-neutral-200 transition hover:border-white/35">Subscribe via RSS</a>
      </div>
    </section>
    <div className="mx-auto max-w-3xl space-y-8">{posts.map(p => <PostCard key={p.slug} p={p} counts={counts[p.slug]} />)}</div>
  </>);
}
