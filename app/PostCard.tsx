import Link from "next/link";
import { Post, roasts } from "@/lib/posts";
export default function PostCard({ p, full }: { p: Post & { image?: string }; full?: boolean }) {
  return (
    <article className={`reveal gem-border rounded-[28px] border border-white/[0.07] bg-panel/80 p-5 shadow-[inset_0_1px_0_#ffffff0a] backdrop-blur sm:p-8 ${full ? "" : "lift"}`}>
      <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
        <span className="rounded-full bg-green-400/10 px-2 py-0.5 font-semibold text-green-400 ring-1 ring-green-400/30">Real</span>
        <span>{p.date}</span><span className="text-neutral-700">/</span><span className="text-neutral-400">{p.product}</span></div>
      <h2 className="mt-4 text-[1.65rem] font-medium leading-[1.1] tracking-[-0.03em] text-balance sm:text-[2.1rem]">
        {full ? p.title : <Link href={`/p/${p.slug}`} className="transition-colors duration-200 hover:text-white/80">{p.title}</Link>}</h2>
      {p.context && <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-neutral-400">{p.context}</p>}
      <div className="mt-7 space-y-6 rounded-2xl border border-white/[0.06] bg-[#131314] p-4 sm:p-6">
        {p.exchanges.map((e, i) => (
          <div key={i} className="space-y-4">
            <div className="ml-auto w-fit max-w-[85%] rounded-3xl rounded-tr-lg bg-[#282a2c] px-4 py-2.5 text-[15px] leading-snug text-[#e3e3e3]">{e.prompt}</div>
            <div className="flex gap-3">
              <img src="/gemini.svg" alt="Gemini" className="mt-0.5 h-6 w-6 shrink-0" />
              <div className="min-w-0 text-[15px] leading-[1.7] text-[#d7d7db]">{e.response}</div>
            </div>
          </div>))}
      </div>
      {p.image && <img src={p.image} alt="Screenshot of the Gemini response" className="mt-6 w-full rounded-2xl border border-white/[0.07]" loading="lazy" />}
      <div className="mt-6 rounded-2xl border border-blood/20 bg-gradient-to-b from-blood/[0.08] to-transparent p-5 sm:p-6">
        <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-blood">The Roast</div>
        <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed text-neutral-200">{roasts(p).map((r, i) => <li key={i} className="flex gap-2.5"><span aria-hidden>🔥</span><span>{r}{p.roastHints?.[String(i)] && <a href={p.roastHints[String(i)].href} target="_blank" rel="noopener noreferrer" className="ml-2 inline-block -rotate-2 rounded-full border border-dashed border-sky-400/50 px-2 py-0.5 align-middle font-mono text-[11px] text-sky-300 transition hover:rotate-0 hover:bg-sky-400/10">{p.roastHints[String(i)].text} ↗</a>}</span></li>)}</ul>
        {p.verdict && <p className="mt-5 border-t border-white/[0.06] pt-4 text-xl font-medium leading-snug tracking-[-0.02em] text-white text-balance">{p.verdict}</p>}
      </div>
      {p.source && <a href={p.source} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-neutral-500 transition-colors hover:text-white">Source ↗</a>}
    </article>);
}
