import "./globals.css";
import Link from "next/link";
import { Archivo_Black, Inter, JetBrains_Mono } from "next/font/google";
import { SITE } from "@/lib/posts";
const display = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata = { metadataBase: new URL(SITE), title: "GemiNever: real Gemini fails, roasted daily",
  description: "The goldfish that went to business school. A daily feed of real, sourced Gemini fails.",
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { title: "GemiNever", description: "The goldfish that went to business school. Real Gemini fails, roasted daily." }, twitter: { card: "summary_large_image" } };
const nav = "rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-200";
export default function L({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}><body className="min-h-screen font-sans">
    <header className="sticky top-0 z-30 border-b border-line/80 bg-ink/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="font-display text-xl tracking-tight">Gemi<span className="strike text-blood">Never</span></Link>
        <nav className="flex items-center gap-1">
          <Link href="/feed" className={`${nav} text-blood hover:bg-blood hover:text-black`}>The Wall<span className="hidden sm:inline"> of Fuckups</span></Link>
          <a href="/feed.xml" className={`${nav} text-neutral-400 hover:bg-white/10 hover:text-white`}>RSS</a>
        </nav>
      </div>
    </header>
    <section className="mx-auto max-w-3xl px-5 pt-14 pb-10 sm:pt-20 rise">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">Real Gemini responses. Real receipts. Roasted daily.</p>
      <h1 className="mt-4 font-display text-[2.6rem] leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl">
        The goldfish that went to <span className="text-blood">business school.</span></h1>
    </section>
    <main className="mx-auto max-w-3xl px-5 pb-24">{children}</main>
    <footer className="border-t border-line/80 py-10 text-center font-mono text-xs text-neutral-500">Every response here is real and sourced. Nothing invented. Gemini does that part. Theo, we see you.</footer>
  </body></html>);
}
