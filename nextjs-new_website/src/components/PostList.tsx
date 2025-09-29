import Link from "next/link";
import { SanityDocument } from "next-sanity";

interface PostListProps {
  posts: SanityDocument[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <section className="rounded-lg shadow-md p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#4A628A]">
        Posts
      </h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id} className="group">
            <Link
              href={`/${post.slug.current}`}
              className="block p-4 hover:bg-[#DFF2EB] rounded-lg transition-colors duration-200"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-[#4A628A] group-hover:text-[#7AB2D3]">
                {post.title}
              </h2>
              <p className="text-[#4A628A]/80 mt-1">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
