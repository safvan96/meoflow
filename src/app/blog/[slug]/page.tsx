import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Makale Bulunamadi" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

/* ---- Content parser ---- */
function parseContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-primary-100"
        >
          {line.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
      i++;
      continue;
    }

    // Table: collect all consecutive | lines
    if (line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      // filter out separator line (|---|---|...)
      const dataRows = tableLines.filter(
        (r) => !r.replace(/[\s|:-]/g, "").length === false && !/^\|[\s-:|]+\|$/.test(r)
      );
      const headerRow = dataRows[0];
      const bodyRows = dataRows.slice(1);

      if (headerRow) {
        const headers = headerRow
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean);
        elements.push(
          <div key={key++} className="overflow-x-auto my-6 rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-50">
                  {headers.map((h, idx) => (
                    <th
                      key={idx}
                      className="px-4 py-3 text-left font-semibold text-primary-800 border-b border-primary-100"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, rIdx) => {
                  const cells = row
                    .split("|")
                    .map((c) => c.trim())
                    .filter(Boolean);
                  return (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      {cells.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className="px-4 py-2.5 text-gray-700 border-b border-gray-100"
                        >
                          {inlineFormat(cell)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Ordered list (1. 2. 3. etc)
    if (/^\d+\.\s/.test(line.trim())) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={key++} className="my-4 space-y-2 list-decimal list-inside text-gray-700">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed pl-1">
              {inlineFormat(item)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Unordered list (- item)
    if (line.trim().startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().replace(/^-\s/, ""));
        i++;
      }
      elements.push(
        <ul key={key++} className="my-4 space-y-2 text-gray-700">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 leading-relaxed">
              <svg
                className="w-5 h-5 text-primary-500 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <span>{inlineFormat(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Paragraph
    elements.push(
      <p key={key++} className="text-gray-700 leading-relaxed my-3">
        {inlineFormat(line)}
      </p>
    );
    i++;
  }

  return elements;
}

/* Format inline **bold** text */
function inlineFormat(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Meoflow",
      url: "https://meoflow.com",
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-gray-50">
        {/* Hero */}
        <header className="hero-gradient text-white py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-primary-200 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Ana Sayfa
              </Link>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <span className="text-white/70 truncate">{post.title}</span>
            </nav>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
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
                <span>{post.author}</span>
              </div>
              <span className="w-1 h-1 bg-primary-300 rounded-full" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="w-1 h-1 bg-primary-300 rounded-full" />
              <span>{post.readTime} dk okuma</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            {parseContent(post.content)}
          </div>

          {/* Author Card */}
          <div className="mt-10 bg-primary-50 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-5 border border-primary-100">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center shrink-0">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-primary-900 text-lg">{post.author}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Meoflow teknik ekibi, endustriyel olcum ve kontrol alaninda
                uzman muhendislerden olusmaktadir. Dogru urun secimi ve teknik
                destek konularinda yardimci olmak icin buradayiz.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Ilgili Yazilar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {rp.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-xs text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{rp.excerpt}</p>
                    <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
                      <time dateTime={rp.date}>
                        {new Date(rp.date).toLocaleDateString("tr-TR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </time>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>{rp.readTime} dk</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
