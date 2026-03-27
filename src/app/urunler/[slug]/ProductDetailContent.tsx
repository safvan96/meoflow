"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

interface ProductDetailContentProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailContent({
  product,
  relatedProducts,
}: ProductDetailContentProps) {
  const { addToCart, exchangeRate } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "specs">(
    "description"
  );

  const price = product.basePrice * exchangeRate;
  const totalPrice = price * quantity;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500 overflow-x-auto">
            <Link
              href="/"
              className="hover:text-primary-600 transition-colors whitespace-nowrap"
            >
              Ana Sayfa
            </Link>
            <svg
              className="w-4 h-4 shrink-0"
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
              className="hover:text-primary-600 transition-colors whitespace-nowrap"
            >
              Ürünler
            </Link>
            <svg
              className="w-4 h-4 shrink-0"
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
              href={`/urunler/kategori/${product.categorySlug}`}
              className="hover:text-primary-600 transition-colors whitespace-nowrap"
            >
              {product.category}
            </Link>
            <svg
              className="w-4 h-4 shrink-0"
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
            <span className="text-gray-800 font-medium truncate">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-50 via-primary-100 to-accent-500/10 rounded-2xl border border-primary-100 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <svg
                  className="w-32 h-32 md:w-40 md:h-40 text-primary-300 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={0.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
                <p className="mt-3 text-sm text-primary-400 font-medium">
                  {product.name}
                </p>
              </div>
            </div>

            {/* Badge */}
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary-600 text-white text-sm font-semibold rounded-lg shadow-lg">
                {product.badge}
              </span>
            )}

            {/* Stock status */}
            <div className="absolute top-4 right-4">
              {product.inStock ? (
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-medium rounded-lg">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Stokta
                </span>
              ) : (
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 border border-red-200 text-red-700 text-xs font-medium rounded-lg">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Stokta Yok
                </span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Category link */}
            <Link
              href={`/urunler/kategori/${product.categorySlug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full hover:bg-primary-100 transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6Z"
                />
              </svg>
              {product.category}
            </Link>

            {/* Name */}
            <h1 className="mt-4 text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* Short description */}
            <p className="mt-3 text-gray-600 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Price */}
            <div className="mt-6 p-5 bg-gradient-to-r from-primary-50 to-primary-50/50 rounded-xl border border-primary-100">
              <div className="flex items-end gap-3">
                <span className="text-3xl font-extrabold text-primary-700">
                  {price.toLocaleString("tr-TR", { maximumFractionDigits: 0 })}{" "}
                  TL
                </span>
                <span className="text-sm text-gray-400 mb-1">
                  (${product.basePrice} USD)
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Fiyatlar KDV haric, döviz kuru günlük güncellenir. Kur:{" "}
                {exchangeRate.toFixed(2)} TL/USD
              </p>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors"
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
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <span className="px-5 py-3 text-center font-semibold text-gray-800 min-w-[3rem] bg-gray-50">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors"
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 active:scale-[0.98] transition-all shadow-lg shadow-primary-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Sepete Ekle
                {quantity > 1 && (
                  <span className="text-primary-200">
                    ({totalPrice.toLocaleString("tr-TR", { maximumFractionDigits: 0 })} TL)
                  </span>
                )}
              </button>
            </div>

            {/* Quick specs highlights */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {Object.entries(product.specs)
                .slice(0, 4)
                .map(([key, value]) => (
                  <div
                    key={key}
                    className="p-3 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <p className="text-xs text-gray-500">{key}</p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">
                      {value}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Tabs: Description & Specs */}
        <div className="mt-12 md:mt-16">
          <div className="flex gap-1 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "description"
                  ? "text-primary-700 border-primary-600"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              Ürün Açıklaması
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "specs"
                  ? "text-primary-700 border-primary-600"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              Teknik Özellikler
            </button>
          </div>

          <div className="py-8">
            {activeTab === "description" ? (
              <div className="max-w-3xl">
                {product.description.split("\n\n").map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-gray-600 leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <div className="max-w-2xl">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider pb-3 border-b border-gray-200">
                        Özellik
                      </th>
                      <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider pb-3 border-b border-gray-200">
                        Değer
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(product.specs).map(
                      ([key, value], idx) => (
                        <tr
                          key={key}
                          className={
                            idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                          }
                        >
                          <td className="py-3 px-4 text-sm font-medium text-gray-700">
                            {key}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">
                            {value}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Benzer Ürünler
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {product.category} kategorisindeki diğer ürünler
                </p>
              </div>
              <Link
                href={`/urunler/kategori/${product.categorySlug}`}
                className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                Tümünü Gör
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
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {relatedProducts.slice(0, 4).map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
