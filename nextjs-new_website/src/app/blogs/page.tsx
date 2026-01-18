import Link from "next/link";

export default function BlogsPage() {
  const posts = [];

  const getPostUrl = (dateStr: string, slug: string) => {
    const date = new Date(dateStr);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `/${month}/${day}/${slug}`;
  };

  return (
    <div className="min-h-screen w-full bg-white px-6 py-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid gap-x-12 gap-y-20 w-full grid-cols-1 [@media(min-width:500px)]:grid-cols-2 [@media(min-width:815px)]:grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="w-full flex flex-col group">
              {/* Clicking this Link triggers a GET request to the formatted URL */}
              <Link href={getPostUrl(post.date, post.slug)}>
                <div className="cursor-pointer">
                  <div className="text-[11px] font-bold tracking-[0.2em] text-black mb-5 uppercase">
                    {post.author} • {post.date}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light leading-snug text-black mb-6 uppercase tracking-wide">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 font-light leading-relaxed text-lg mb-8 line-clamp-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-black font-medium text-lg">
                    <span className="border-b border-transparent group-hover:border-black transition-all">
                      Read More
                    </span>
                    <span className="ml-3 transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
