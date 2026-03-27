"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";

export default function UrunlerPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== "all") {
      result = result.filter((p) => p.categorySlug === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const activeCategoryData = categories.find((c) => c.slug === activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
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
            <span className="text-white font-medium">Ürünler</span>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Tüm Ürünler
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
            Endüstriyel ölçüm ve kontrol ekipmanlarında geniş ürün yelpazemizi
            keşfedin. Debimetre, seviye göstergesi, basınç transmitteri ve daha
            fazlası.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-lg">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                placeholder="Ürün ara... (ör: debimetre, PT100, basınç)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/15 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-24">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Kategoriler
              </h2>
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                {/* All */}
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === "all"
                      ? "bg-primary-600 text-white shadow-md shadow-primary-200"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-700"
                  }`}
                >
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
                      d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z"
                    />
                  </svg>
                  Tümü
                  <span
                    className={`ml-auto text-xs px-1.5 py-0.5 rounded-full ${
                      activeCategory === "all"
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {products.length}
                  </span>
                </button>

                {categories.map((cat) => {
                  const count = products.filter(
                    (p) => p.categorySlug === cat.slug
                  ).length;
                  return (
                    <button
                      key={cat.slug}
                      onClick={() => setActiveCategory(cat.slug)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                        activeCategory === cat.slug
                          ? "bg-primary-600 text-white shadow-md shadow-primary-200"
                          : "bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-700"
                      }`}
                    >
                      <span className="text-base">{cat.icon}</span>
                      <span className="truncate">{cat.name}</span>
                      <span
                        className={`ml-auto text-xs px-1.5 py-0.5 rounded-full ${
                          activeCategory === cat.slug
                            ? "bg-white/20 text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Results header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {activeCategory === "all"
                    ? "Tüm Ürünler"
                    : activeCategoryData?.name || "Ürünler"}
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  {filteredProducts.length} ürün listeleniyor
                </p>
              </div>
            </div>

            {/* Active category description */}
            {activeCategory !== "all" && activeCategoryData && (
              <div className="mb-6 p-4 bg-primary-50 border border-primary-100 rounded-xl">
                <p className="text-sm text-primary-800 leading-relaxed">
                  {activeCategoryData.description}
                </p>
              </div>
            )}

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg
                  className="w-16 h-16 text-gray-300 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-gray-600">
                  Ürün bulunamadı
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Arama kriterlerinizi değiştirerek tekrar deneyin.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Filtreleri Temizle
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Endüstriyel Ölçüm ve Kontrol Ekipmanları
            </h2>
            <div className="prose prose-sm text-gray-600 leading-relaxed space-y-4">
              <p>
                Meoflow olarak, endüstriyel ölçüm ve kontrol alanında geniş bir
                ürün yelpazesi sunuyoruz. Elektromanyetik debimetrelerden basınç
                transmitterlerine, sıcaklık sensörlerinden seviye göstergelerine
                kadar tüm endüstriyel proses ihtiyaçlarınız için yüksek
                kaliteli ve güvenilir çözümler sağlıyoruz.
              </p>
              <p>
                Ürün portföyümüz; su arıtma tesisleri, gıda ve içecek
                endüstrisi, kimya ve petrokimya sektörü, enerji santralleri,
                ilaç endüstrisi ve genel endüstriyel otomasyon uygulamaları
                olmak üzere pek çok farklı sektörün ihtiyaçlarını
                karşılayacak şekilde tasarlanmıştır. Her bir ürünümüz,
                uluslararası kalite standartlarına uygun olarak üretilmekte
                ve kapsamlı teknik destek ile birlikte sunulmaktadır.
              </p>
              <p>
                Debimetre ürün grubumuzda; standart, gıdaya uygun, minyatür,
                taşmalı (insertion) ve Ex-Proof (ATEX sertifikalı)
                elektromanyetik debimetreler yer almaktadır. Faraday
                elektromanyetik indüksiyon prensibine dayalı çalışan bu
                cihazlar, iletken sıvıların debisini hareketli parça
                olmaksızın yüksek hassasiyetle ölçer. Manyetik bypass seviye
                göstergeleri, tank ve depolama sistemlerinde güvenilir seviye
                izleme imkanı sunarken; basınç transmitterleri, sıcaklık
                sensörleri ve proses kontrol cihazları ile komple otomasyon
                çözümleri oluşturabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
