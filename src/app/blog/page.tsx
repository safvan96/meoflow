import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog | Endüstriyel Ölçüm Teknik Makaleleri",
  description:
    "Elektromanyetik debimetre, seviye ölçüm, basınç transmitteri ve sıcaklık sensörleri hakkında teknik makaleler, rehberler ve endüstriyel otomasyon bilgileri.",
  openGraph: {
    title: "Meoflow Blog | Endüstriyel Ölçüm Teknik Makaleleri",
    description:
      "Debimetre, seviye sensörü, basınç ve sıcaklık ölçüm teknolojileri hakkında kapsamlı teknik içerikler.",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Teknik Blog
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto">
            Endüstriyel ölçüm ve kontrol teknolojileri hakkında güncel
            makaleler, rehberler ve teknik bilgiler.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                <svg
                  className="w-16 h-16 text-white/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    {post.readTime} dk okuma
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-primary-600 bg-primary-50 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-primary-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-400">{post.author}</span>
                  </div>
                  <time className="text-xs text-gray-400" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 border-t border-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
            Teknik Destek mi Lazim?
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Uzman mühendislik ekibimiz, dogru ürün seçiminde size yardimci
            olacaktir. Hemen iletisime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            Bize Ulasin
          </Link>
        </div>
      </section>
    </div>
  );
}
