import Link from "next/link";
import { Post, roasts } from "@/lib/posts";
const ICONS = [
  <path key="u" d="M7 10v11M15 5.9 14 10h5.8a2 2 0 0 1 2 2.3l-1.4 7A2 2 0 0 1 18.5 21H7V10l4.3-7.4A1.9 1.9 0 0 1 15 4.6z" />,
  <path key="d" d="M17 14V3M9 18.1 10 14H4.2a2 2 0 0 1-2-2.3l1.4-7A2 2 0 0 1 5.5 3H17v11l-4.3 7.4A1.9 1.9 0 0 1 9 19.4z" />,
  <><path key="r1" d="M21 12a9 9 0 1 1-2.6-6.4" /><path key="r2" d="M21 3v6h-6" /></>,
  <><rect key="c1" x="8" y="8" width="12" height="12" rx="2.5" /><path key="c2" d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>,
  <><circle key="m1" cx="6" cy="12" r=".6" fill="currentColor" /><circle key="m2" cx="12" cy="12" r=".6" fill="currentColor" /><circle key="m3" cx="18" cy="12" r=".6" fill="currentColor" /></>,
];
export default function PostCard({ p, full }: { p: Post & { image?: string }; full?: boolean }) {
  return (
    <article className={`reveal gem-border rounded-[28px] border border-white/[0.07] bg-panel/80 p-5 shadow-[inset_0_1px_0_#ffffff0a] backdrop-blur sm:p-8 ${full ? "" : "lift"}`}>
      <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
        <span className="rounded-full bg-green-400/10 px-2 py-0.5 font-semibold text-green-400 ring-1 ring-green-400/30">Real</span>
        <span>{p.date}</span><span className="text-neutral-700">/</span><span className="text-neutral-400">{p.product}</span></div>
      <h2 className="mt-4 text-[1.65rem] font-medium leading-[1.1] tracking-[-0.03em] text-balance sm:text-[2.1rem]">
        {full ? p.title : <Link href={`/p/${p.slug}`} className="transition-colors duration-200 hover:text-white/80">{p.title}</Link>}</h2>
      {p.context && <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-neutral-400">{p.context}</p>}
      <div className="mt-7 space-y-10 rounded-2xl bg-[#131314] px-4 py-7 sm:px-8 sm:py-9" style={{ fontFamily: "var(--font-gsans), system-ui" }}>
        {p.exchanges.map((e, i) => (
          <div key={i} className="space-y-8">
            <div className="ml-auto w-fit max-w-[85%] whitespace-pre-line rounded-[24px] rounded-tr-[6px] bg-[#1e1f20] px-5 py-3 text-[16px] leading-[1.6] tracking-normal text-[#e3e3e3] sm:max-w-[70%]">{e.prompt}</div>
            <div className="flex gap-3 sm:gap-4">
              <img src="/gemini.svg" alt="Gemini" className="mt-1 h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
              <div className="min-w-0">
                <div className="whitespace-pre-line text-[16px] leading-[1.75] tracking-normal text-[#e3e3e3]">{e.response}</div>
                <div className="mt-3 flex items-center gap-1 text-[#c4c7c5]" aria-hidden>
                  {ICONS.map((d, k) => <span key={k} className="grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-white/[0.08]"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{d}</svg></span>)}
                </div>
              </div>
            </div>
          </div>))}
      </div>
      <div className="mt-6 rounded-2xl border border-blood/20 bg-gradient-to-b from-blood/[0.08] to-transparent p-5 sm:p-6">
        <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-blood">The Roast</div>
        <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed text-neutral-200">{roasts(p).map((r, i) => <li key={i} className="flex gap-2.5"><span aria-hidden>🔥</span><span>{r}{p.roastHints?.[String(i)] && <a href={p.roastHints[String(i)].href} target="_blank" rel="noopener noreferrer" className="ml-2 inline-block -rotate-2 rounded-full border border-dashed border-sky-400/50 px-2 py-0.5 align-middle font-mono text-[11px] text-sky-300 transition hover:rotate-0 hover:bg-sky-400/10">{p.roastHints[String(i)].text} ↗</a>}</span></li>)}</ul>
        {p.verdict && <p className="mt-5 border-t border-white/[0.06] pt-4 text-xl font-medium leading-snug tracking-[-0.02em] text-white text-balance">{p.verdict}</p>}
      </div>
      {p.source && <a href={p.source} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-neutral-500 transition-colors hover:text-white">Source ↗</a>}
    </article>);
}
