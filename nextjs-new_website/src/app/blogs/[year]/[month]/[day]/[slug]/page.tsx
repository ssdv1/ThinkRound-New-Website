import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ year: string; month: string; day: string; slug: string }>;
}) {
  const { year, month, day, slug } = await params;

  const query = `*[_type == "blogs" && 
    slug.current == $slug && 
    string(dateTime(publishedAt).year) == $year &&
    string(dateTime(publishedAt).month) == $month &&
    string(dateTime(publishedAt).day) == $day
  ][0] {
    title,
    publishedAt,
    author-> {
      name,
      image
    },
    body // Fetching the full Portable Text array
  }`;

  const blog = await client.fetch(query, { slug, year, month, day });

  // 3. Simple error handling
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold">Post not found</h1>
      </div>
    );
  }

  return (
    <article className="min-h-screen py-12 px-4 max-w-3xl mx-auto">
      <header className="mb-8 border-b pb-8">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          {blog.title}
        </h1>
        <p className="text-gray-500 italic">
          By {blog.author?.name} • {new Date(blog.publishedAt).toDateString()}
        </p>
      </header>

      {/* Render the Sanity Body content */}
      <section className="prose prose-blue lg:prose-xl">
        <PortableText value={blog.body} />
      </section>
    </article>
  );
}
