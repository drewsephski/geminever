import Link from "next/link";
import { Post, roasts } from "@/lib/posts";
export default function PostCard({ p, full }: { p: Post & { image?: string }; full?: boolean }) {
  return (
    <article className={`reveal group rounded-3xl border border-line bg-panel/90 p-5 shadow-[0_1px_0_#ffffff08_inset] transition-colors duration-300 sm:p-8 ${full ? "" : "hover:border-blood/60"}`}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
        <span className="rounded-full bg-green-500 px-2 py-0.5 font-bold text-black">Real</span>
        <span>{p.date}</span><span className="text-purple-400">✦ {p.product}</span></div>
      <h2 className="mt-4 font-display text-2xl leading-[1.08] tracking-tight text-balance sm:text-[2rem]">
        {full ? p.title : <Link href={`/p/${p.slug}`} className="transition-colors duration-200 hover:text-blood">{p.title}</Link>}</h2>
      {p.context && <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-neutral-400">{p.context}</p>}
      <div className="mt-7 space-y-5">
        {p.exchanges.map((e, i) => (
          <div key={i} className="space-y-2.5">
            <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-blue-600 px-4 py-2.5 text-[15px] leading-snug text-white shadow-lg shadow-blue-900/30">{e.prompt}</div>
            <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-line bg-ink/70 px-4 py-3.5 text-[15px] leading-relaxed text-neutral-200">
              <div className="mb-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">✦ Gemini</div>{e.response}</div>
          </div>))}
      </div>
      {p.image && <img src={p.image} alt="Screenshot of the Gemini response" className="mt-6 w-full rounded-2xl border border-line" loading="lazy" />}
      <div className="mt-8 rounded-2xl border border-blood/30 bg-blood/[0.06] p-5">
        <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blood">The Roast</div>
        <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed">{roasts(p).map((r, i) => <li key={i} className="flex gap-2.5"><span aria-hidden>🔥</span><span>{r}</span></li>)}</ul>
        {p.verdict && <p className="mt-5 border-t border-blood/20 pt-4 font-display text-xl leading-tight text-balance">{p.verdict}</p>}
      </div>
      {p.source && <a href={p.source} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-neutral-400 transition-colors hover:text-white">Source ↗</a>}
    </article>);
}
