import Link from "next/link";
import { Post, roasts } from "@/lib/posts";
export default function PostCard({ p, full }: { p: Post; full?: boolean }) {
  return (
    <article className="border border-neutral-800 rounded-2xl p-6 bg-neutral-950">
      <div className="text-xs uppercase tracking-widest text-neutral-500">{p.date} · {p.product}</div>
      <h2 className="text-2xl font-black mt-2 leading-tight">
        {full ? p.title : <Link href={`/p/${p.slug}`} className="hover:text-red-400">{p.title}</Link>}</h2>
      {p.context && <p className="text-neutral-400 mt-2 text-sm">{p.context}</p>}
      <div className="mt-5 space-y-4">
        {p.exchanges.map((e, i) => (
          <div key={i} className="space-y-2">
            <div className="ml-auto max-w-[85%] w-fit bg-blue-600 text-white rounded-2xl px-4 py-2 text-sm">{e.prompt}</div>
            <div className="max-w-[90%] bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-3 text-sm">
              <div className="text-[10px] font-bold text-purple-400 mb-1">✦ GEMINI</div>{e.response}</div>
          </div>))}
      </div>
      <div className="mt-6 border-l-4 border-red-500 pl-4">
        <div className="text-xs font-bold text-red-400 uppercase tracking-widest">The Roast</div>
        <ul className="mt-2 space-y-2">{roasts(p).map((r, i) => <li key={i}>🔥 {r}</li>)}</ul>
        {p.verdict && <p className="mt-3 font-black text-lg">{p.verdict}</p>}
      </div>
      {p.source && <a href={p.source} target="_blank" className="inline-block mt-4 text-sm text-neutral-400 underline">Source</a>}
    </article>);
}
