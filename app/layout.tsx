import "./globals.css";
import Link from "next/link";
import { SITE } from "@/lib/posts";
export const metadata = { metadataBase: new URL(SITE), title: "GemiNever: real Gemini fails, roasted daily",
  description: "The goldfish that went to business school. A daily feed of real, sourced Gemini fails.",
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { title: "GemiNever", description: "The goldfish that went to business school. Real Gemini fails, roasted daily." }, twitter: { card: "summary_large_image" } };
export default function L({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="min-h-screen font-sans">
    <header className="max-w-2xl mx-auto px-4 pt-10 pb-6">
      <Link href="/" className="text-5xl font-black tracking-tight">Gemi<span className="text-red-500 line-through decoration-4">Never</span></Link>
      <p className="text-3xl md:text-4xl font-black text-red-400 mt-4 leading-tight">The goldfish that went to business school.</p>
      <p className="text-neutral-400 mt-3">Real Gemini responses. Real receipts. Roasted daily. <a href="/feed" className="underline font-bold text-red-400">The Wall of Fuckups</a> · <a href="/feed.xml" className="underline">RSS</a></p>
    </header>
    <main className="max-w-2xl mx-auto px-4 pb-20">{children}</main>
    <footer className="text-center text-xs text-neutral-600 pb-10">Every response here is real and sourced. Nothing invented. Gemini does that part. Theo, we see you.</footer>
  </body></html>);
}
