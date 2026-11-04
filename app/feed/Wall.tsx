"use client";
import { useState } from "react";
import Link from "next/link";
import type { FeedItem } from "@/lib/posts";
export default function Wall({ items }: { items: FeedItem[] }) {
  const products = ["All", ...Array.from(new Set(items.map(i => i.product || "Gemini")))];
  const [f, setF] = useState("All");
  const shown = items.filter(i => f === "All" || (i.product || "Gemini") === f);
  return (<div className="mt-10">
    <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">{products.map(p => (
      <button key={p} onClick={() => setF(p)} aria-pressed={f === p}
        className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-all duration-200 ${f === p ? "border-blood bg-blood font-bold text-black scale-[1.03]" : "border-line text-neutral-300 hover:border-blood/70 hover:text-white"}`}>{p}</button>))}</div>
    <p className="mt-4 font-mono text-xs uppercase tracking-widest text-neutral-500">{shown.length} fuckups and counting.</p>
    <ul className="mt-5 space-y-3">{shown.map(i => (
      <li key={i.slug} id={i.slug} className={`reveal rounded-2xl border p-5 transition-colors duration-200 ${i.mock ? "border-yellow-700/40 bg-yellow-950/10 hover:border-yellow-500/60" : "border-green-700/50 bg-panel hover:border-green-500/80"}`}>
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
          {i.mock ? <span className="rounded-md bg-yellow-400 px-2 py-0.5 font-black normal-case tracking-normal text-black">EXAMPLE / satire, not a real Gemini quote</span>
                  : <span className="rounded-md bg-green-500 px-2 py-0.5 font-black text-black">REAL</span>}
          <span className="text-neutral-500">{i.date}</span><span className="text-purple-400">✦ {i.product}</span></div>
        <div className="mt-3 text-lg font-bold leading-snug text-balance">{i.href ? <Link href={i.href} className="transition-colors hover:text-blood">{i.title}</Link> : i.title}</div>
        {i.verdict && <div className="mt-2 text-[15px] text-red-300">🔥 {i.verdict}</div>}
        {i.href && <Link href={i.href} className="mt-3 inline-block font-mono text-xs uppercase tracking-widest text-neutral-400 transition-colors hover:text-white">See the receipts →</Link>}
      </li>))}</ul>
  </div>);
}
