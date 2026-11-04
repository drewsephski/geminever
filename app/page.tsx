import { getPosts } from "@/lib/posts";
import PostCard from "./PostCard";
export default function Home() {
  return <div className="space-y-10">{getPosts().map(p => <PostCard key={p.slug} p={p} />)}</div>;
}
