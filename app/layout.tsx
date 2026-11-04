import "./globals.css";
import Link from "next/link";
import { Google_Sans, JetBrains_Mono } from "next/font/google";
import { SITE } from "@/lib/posts";
const gsans = Google_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-gsans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata = { metadataBase: new URL(SITE), title: "GemiNever: real Gemini fails, roasted daily",
  description: "The goldfish that went to business school. A daily feed of real, sourced Gemini fails.",
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { title: "GemiNever", description: "The goldfish that went to business school. Real Gemini fails, roasted daily." }, twitter: { card: "summary_large_image" } };
const nav = "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200";
export function Wordmark({ size = "text-[1.3rem]" }: { size?: string }) {
  return (<span className={`group inline-flex items-center gap-2 font-medium tracking-[-0.03em] ${size}`}>
    <span className="relative inline-block h-[1.15em] w-[1.15em] -rotate-12 transition-transform duration-500 group-hover:rotate-[200deg]" aria-hidden>
      <img src="/gemini.svg" alt="" className="h-full w-full" />
      <span className="absolute -left-[10%] -right-[10%] top-1/2 h-[0.12em] -translate-y-1/2 rotate-45 rounded-full bg-blood shadow-[0_0_0_2px_#08080a]" />
    </span>
    <span><span className="gem-text">Gemi</span><span className="strike text-white">Never</span></span>
  </span>);
}
export default function L({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${gsans.variable} ${mono.variable}`}><body className="min-h-screen font-sans">
    <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-ink/60 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-5">
        <Link href="/" aria-label="GemiNever home"><Wordmark /></Link>
        <nav className="flex items-center gap-1">
          <Link href="/feed" className={`${nav} text-neutral-300 hover:bg-white/[0.06] hover:text-white`}>The Wall<span className="hidden sm:inline"> of Fuckups</span></Link>
          <a href="/feed.xml" className={`${nav} border border-white/10 text-neutral-300 hover:border-white/25 hover:text-white`}>RSS</a>
        </nav>
      </div>
    </header>
    <main className="mx-auto max-w-5xl px-5 pb-28">{children}</main>
    <footer className="border-t border-white/[0.06] py-12 text-center font-mono text-[11px] leading-6 text-neutral-500">
      Every response here is real and sourced. Nothing invented. Gemini does that part. Theo, we see you.<br />
      <span className="text-neutral-600">Gemini logo via <a href="https://svgl.app" target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-4 hover:text-white">svgl.app</a>. Not affiliated with Google, obviously.</span>
    </footer>
  </body></html>);
}
