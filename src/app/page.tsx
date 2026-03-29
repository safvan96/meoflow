"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blogs";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";

const featuredProducts = products.filter((p) => p.featured);
const latestPosts = blogPosts.slice(0, 3);

export default function HomePage() {
  const { t } = useLanguage();

  const stats = [
    { value: "15+", label: t("stats.yearsExperience") },
    { value: "200+", label: t("stats.industrialProducts") },
    { value: "3.000+", label: t("stats.happyCustomers") },
    { value: "40+", label: t("stats.exportCountries") },
  ];
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-300/10 rounded-full blur-2xl" />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 bg-accent-400 rounded-full badge-pulse" />
              <span className="text-sm font-medium text-white/90">
                {t("home.heroBadge")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              {t("home.heroTitle1")}
              <br />
              <span className="text-accent-400">{t("home.heroTitle2")}</span>
              <br />
              {t("home.heroTitle3")}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-primary-100/90 max-w-2xl leading-relaxed">
              {t("home.heroDescription")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/urunler"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 active:scale-[0.98]"
              >
                {t("hero.cta1")}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/25 hover:bg-white/20 transition-all active:scale-[0.98]"
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                {t("hero.cta2")}
              </Link>
            </div>

            {/* Quick trust markers */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
                {t("home.trustCertified")}
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H6.375m11.25 0h3.375a1.125 1.125 0 0 0 1.125-1.125v-2.874m0 0a2.25 2.25 0 0 0-1.883-2.22l-3.238-.54a1.5 1.5 0 0 1-1.254-1.478V6.75A2.25 2.25 0 0 0 13.5 4.5h-3A2.25 2.25 0 0 0 8.25 6.75v1.378a1.5 1.5 0 0 1-1.254 1.478l-3.238.54A2.25 2.25 0 0 0 1.875 12v2.25"
                  />
                </svg>
                {t("home.trustFreeShipping")}
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"
                  />
                </svg>
                {t("home.trustTechnical")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CATEGORY SHOWCASE SECTION ========== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
              {t("home.categoryBadge")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {t("home.categoriesTitle")}
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              {t("home.categoriesSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/urunler/kategori/${category.slug}`}
                className="group relative bg-gradient-to-br from-primary-50/80 to-white rounded-2xl border border-gray-100 p-6 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {category.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:text-primary-700 transition-colors">
                  {t("home.viewProducts")}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                {/* Hover accent line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED PRODUCTS SECTION ========== */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
                {t("home.featuredBadge")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                {t("home.featuredTitle")}
              </h2>
              <p className="mt-3 text-gray-500 text-lg max-w-xl">
                {t("home.featuredSubtitle")}
              </p>
            </div>
            <Link
              href="/urunler"
              className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition-colors shrink-0"
            >
              {t("product.allProducts")}
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS / TRUST SECTION ========== */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient opacity-95" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t("home.statsTitle")}
            </h2>
            <p className="mt-4 text-primary-100/80 text-lg max-w-xl mx-auto">
              {t("home.statsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 px-6 py-8"
              >
                <p className="text-4xl sm:text-5xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm sm:text-base text-primary-100/80 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Trust badges row */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/60">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
              <span className="text-sm font-medium">{t("home.trustISO")}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="text-sm font-medium">{t("home.trust247")}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H6.375m11.25 0h3.375a1.125 1.125 0 0 0 1.125-1.125v-2.874m0 0a2.25 2.25 0 0 0-1.883-2.22l-3.238-.54a1.5 1.5 0 0 1-1.254-1.478V6.75A2.25 2.25 0 0 0 13.5 4.5h-3A2.25 2.25 0 0 0 8.25 6.75v1.378a1.5 1.5 0 0 1-1.254 1.478l-3.238.54A2.25 2.25 0 0 0 1.875 12v2.25"
                />
              </svg>
              <span className="text-sm font-medium">{t("home.trustShipping")}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.194-.14 1.743"
                />
              </svg>
              <span className="text-sm font-medium">{t("home.trustWarranty")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BLOG PREVIEW SECTION ========== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
                {t("home.blogBadge")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                {t("home.blogTitle")}
              </h2>
              <p className="mt-3 text-gray-500 text-lg max-w-xl">
                {t("home.blogSubtitle")}
              </p>
            </div>
            <Link
              href="/blog"
              className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition-colors shrink-0"
            >
              {t("home.allPosts")}
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:shadow-primary-100/40 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-primary-300 group-hover:text-primary-400 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={0.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>

                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{post.readTime} {t("blog.readTime")}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-primary-50 text-primary-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-3xl px-8 py-16 sm:px-16 sm:py-20 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-accent-400/15 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary-400/20 rounded-full blur-2xl" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {t("home.ctaTitle")}
              </h2>
              <p className="mt-5 text-primary-100/80 text-lg max-w-xl mx-auto leading-relaxed">
                {t("home.ctaSubtitle")}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all shadow-lg shadow-black/15 active:scale-[0.98]"
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
                  {t("home.ctaButton")}
                </Link>
                <a
                  href="tel:+908501234567"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/25 hover:bg-white/20 transition-all active:scale-[0.98]"
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  0850 123 45 67
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
