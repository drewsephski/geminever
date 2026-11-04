import { notFound } from "next/navigation";
import { getPost, getPosts, roasts } from "@/lib/posts";
import PostCard from "../../PostCard";
type P = { params: Promise<{ slug: string }> };
export const generateStaticParams = () => getPosts().map(p => ({ slug: p.slug }));
export async function generateMetadata({ params }: P) {
  const p = getPost((await params).slug); if (!p) return {};
  const d = roasts(p)[0];
  return { title: `${p.title} | GemiNever`, description: d,
    openGraph: { title: p.title, description: d, type: "article", url: `/p/${p.slug}` },
    twitter: { card: "summary_large_image", title: p.title, description: d } };
}
export default async function Page({ params }: P) {
  const p = getPost((await params).slug); if (!p) notFound();
  return <div className="mx-auto max-w-3xl pt-12"><PostCard p={p} full /></div>;
}
