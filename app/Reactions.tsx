"use client";
import { useEffect, useState } from "react";
import { EMOJIS } from "@/lib/emojis";
export default function Reactions({ slug, initial }: { slug: string; initial: Record<string, number> }) {
  const [counts, setCounts] = useState(initial);
  const [mine, setMine] = useState<Record<string, boolean>>({});
  const key = `gn-react:${slug}`;
  useEffect(() => { try { setMine(JSON.parse(localStorage.getItem(key) || "{}")); } catch {} }, [key]);
  async function toggle(e: string) {
    const on = !mine[e]; const delta = on ? 1 : -1;
    const nextMine = { ...mine, [e]: on }; setMine(nextMine);
    setCounts(c => ({ ...c, [e]: Math.max((c[e] || 0) + delta, 0) }));
    try { localStorage.setItem(key, JSON.stringify(nextMine)); } catch {}
    try {
      const r = await fetch("/api/react", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ slug, emoji: e, delta }) });
      if (!r.ok) throw 0; const { count } = await r.json(); setCounts(c => ({ ...c, [e]: count }));
    } catch {
      setMine(m => ({ ...m, [e]: !on })); setCounts(c => ({ ...c, [e]: Math.max((c[e] || 0) - delta, 0) }));
      try { localStorage.setItem(key, JSON.stringify({ ...nextMine, [e]: !on })); } catch {}
    }
  }
  return (<div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="React to this post">
    {EMOJIS.map(({ e, label }) => (
      <button key={e} onClick={() => toggle(e)} aria-pressed={!!mine[e]} title={label}
        className={`group inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-all duration-200 active:scale-90 ${mine[e] ? "border-[#9b72cb]/70 bg-[#9b72cb]/15 text-white" : "border-white/10 bg-white/[0.03] text-neutral-400 hover:border-white/25 hover:text-white"}`}>
        <span className="text-base transition-transform duration-200 group-hover:scale-125">{e}</span>
        <span className="min-w-[1ch] font-mono text-xs tabular-nums">{counts[e] || 0}</span>
      </button>))}
  </div>);
}
