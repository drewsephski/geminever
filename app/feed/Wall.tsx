"use client";
import { useState } from "react";
import Link from "next/link";
import type { FeedItem } from "@/lib/posts";
export default function Wall({ items }: { items: FeedItem[] }) {
  const products = ["All", ...Array.from(new Set(items.map(i => i.product || "Gemini")))];
  const [f, setF] = useState("All");
  const shown = items.filter(i => f === "All" || (i.product || "Gemini") === f);
  return (<div className="mt-8">
    <div className="flex flex-wrap gap-2">{products.map(p => (
      <button key={p} onClick={() => setF(p)} className={`px-3 py-1 rounded-full text-sm border ${f === p ? "bg-red-500 border-red-500 text-black font-bold" : "border-neutral-700 text-neutral-300 hover:border-red-500"}`}>{p}</button>))}</div>
    <p className="text-xs text-neutral-500 mt-3">{shown.length} fuckups and counting.</p>
    <ul className="mt-4 space-y-3">{shown.map(i => (
      <li key={i.slug} id={i.slug} className={`rounded-xl border p-4 ${i.mock ? "border-yellow-700/50 bg-yellow-950/10" : "border-green-700/60 bg-neutral-950"}`}>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {i.mock ? <span className="bg-yellow-400 text-black font-black px-2 py-0.5 rounded">EXAMPLE / satire, not a real Gemini quote</span>
                  : <span className="bg-green-500 text-black font-black px-2 py-0.5 rounded">REAL</span>}
          <span className="text-neutral-500">{i.date}</span><span className="text-purple-400">✦ {i.product}</span></div>
        <div className="font-black text-lg mt-2 leading-snug">{i.href ? <Link href={i.href} className="hover:text-red-400">{i.title}</Link> : i.title}</div>
        {i.verdict && <div className="text-red-300 mt-1">🔥 {i.verdict}</div>}
        {i.href && <Link href={i.href} className="text-sm underline text-neutral-400 mt-2 inline-block">See the receipts</Link>}
      </li>))}</ul>
  </div>);
}
