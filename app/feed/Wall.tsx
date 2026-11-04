"use client";
import { useState } from "react";
import Link from "next/link";
import type { FeedItem } from "@/lib/posts";
import Reactions from "../Reactions";
const PRESETS = [
  { id: "all", label: "All", hint: "Every faceplant" },
  { id: "goldfish", label: "🐟 Goldfish Memory", hint: "Forgets context" },
  { id: "count", label: "🧮 Can't Count", hint: "Math and counting" },
  { id: "copypaste", label: "🔁 Copy Paste Energy", hint: "Recycled answers" },
  { id: "linkedin", label: "👔 LinkedIn Mode", hint: "Corporate slop" },
  { id: "refuses", label: "🙅 Refuses Everything", hint: "Says no to harmless stuff" },
  { id: "wrong", label: "🤯 Confidently Wrong", hint: "Wrong, loudly" },
  { id: "sponsored", label: "📺 Sponsored By Nobody", hint: "Random citations" },
];
export default function Wall({ items, counts = {} }: { items: FeedItem[]; counts?: Record<string, Record<string, number>> }) {
  const [f, setF] = useState("all");
  const [real, setReal] = useState(false);
  const pool = items.filter(i => !real || !i.mock);
  const pills = PRESETS.filter(p => p.id === "all" || items.some(i => i.tags?.includes(p.id)));
  const shown = pool.filter(i => f === "all" || i.tags?.includes(f));
  return (<div className="mt-10">
    <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">{pills.map(p => (
      <button key={p.id} onClick={() => setF(p.id)} aria-pressed={f === p.id} title={p.hint}
        className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-all duration-200 ${f === p.id ? "border-white bg-white font-medium text-black" : "border-white/10 bg-white/[0.02] text-neutral-300 hover:border-white/30 hover:text-white"}`}>{p.label}</button>))}
      <button onClick={() => setReal(!real)} aria-pressed={real}
        className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-all duration-200 ${real ? "border-green-400 bg-green-400 font-medium text-black" : "border-green-400/30 text-green-400 hover:border-green-400/70"}`}>🧾 Receipts Only</button></div>
    <p className="mt-4 font-mono text-xs uppercase tracking-widest text-neutral-500">{shown.length} fuckups and counting.</p>
    <ul className="mt-5 space-y-3">{shown.map(i => (
      <li key={i.slug} id={i.slug} className={`reveal gem-border lift rounded-2xl border border-white/[0.07] bg-panel/80 p-5 backdrop-blur ${i.mock ? "border-dashed" : ""}`}>
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
          {i.mock ? <span className="rounded-full bg-yellow-400/10 px-2 py-0.5 font-semibold normal-case tracking-normal text-yellow-300 ring-1 ring-yellow-400/40">EXAMPLE / satire, not a real Gemini quote</span>
                  : <span className="rounded-full bg-green-400/10 px-2 py-0.5 font-semibold text-green-400 ring-1 ring-green-400/30">REAL</span>}
          <span className="text-neutral-500">{i.date}</span><span className="text-neutral-400">{i.product}</span></div>
        <div className="mt-3 text-lg font-medium leading-snug tracking-[-0.02em] text-balance">{i.href ? <Link href={i.href} className="transition-colors hover:text-white/80">{i.title}</Link> : i.title}</div>
        {i.verdict && <div className="mt-2 text-[15px] text-red-300">🔥 {i.verdict}</div>}
        {i.href && !i.mock && <Reactions slug={i.slug} initial={counts[i.slug] || {}} />}
        {i.href && <Link href={i.href} className="mt-3 inline-block font-mono text-xs uppercase tracking-widest text-neutral-400 transition-colors hover:text-white">See the receipts →</Link>}
      </li>))}</ul>
  </div>);
}
