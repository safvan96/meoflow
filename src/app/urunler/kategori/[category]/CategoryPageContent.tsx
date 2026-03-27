"use client";

import Link from "next/link";
import { Product, Category } from "@/types";
import ProductCard from "@/components/ProductCard";

interface CategoryPageContentProps {
  category: Category;
  products: Product[];
  allCategories: Category[];
}

export default function CategoryPageContent({
  category,
  products,
  allCategories,
}: CategoryPageContentProps) {
  return (
    <>
      {/* Hero Header */}
      <section className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-18">
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
            <Link
              href="/urunler"
              className="hover:text-white transition-colors"
            >
              Ürünler
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
            <span className="text-white font-medium">{category.name}</span>
          </nav>

          <div className="flex items-start gap-4">
            <span className="text-4xl md:text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                {category.name}
              </h1>
              <p className="mt-3 text-lg text-primary-100 max-w-2xl leading-relaxed">
                {category.description}
              </p>
              <p className="mt-3 text-sm text-primary-200">
                {products.length} ürün listeleniyor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product) => (
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
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-600">
              Bu kategoride henüz ürün bulunmuyor
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Yakında yeni ürünler eklenecektir.
            </p>
            <Link
              href="/urunler"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Tüm Ürünlere Dön
            </Link>
          </div>
        )}
      </section>

      {/* Other Categories */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Diğer Kategoriler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allCategories
              .filter((c) => c.slug !== category.slug)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/urunler/kategori/${cat.slug}`}
                  className="group flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all"
                >
                  <span className="text-3xl">{cat.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-800 group-hover:text-primary-700 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-primary-500 shrink-0 mt-0.5 transition-colors"
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
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* SEO Description */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {category.name} Hakkında
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {category.description} Meoflow olarak, {category.name.toLowerCase()}{" "}
              kategorisinde sunduğumuz ürünler uluslararası kalite
              standartlarına uygun olarak üretilmektedir. Su arıtma tesisleri,
              gıda endüstrisi, kimya ve petrokimya sektörü, enerji santralleri
              ve genel endüstriyel otomasyon uygulamalarında güvenle
              kullanılabilecek bu ürünler, teknik destek ve satış sonrası
              hizmet garantisiyle birlikte sunulmaktadır. Projelerinize uygun
              ürün seçimi konusunda teknik ekibimizden destek alabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
