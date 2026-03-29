"use client";

import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, exchangeRate } = useCart();
  const { t } = useLanguage();
  const price = product.basePrice * exchangeRate;

  return (
    <div className="product-card group bg-white rounded-2xl border border-gray-100 overflow-hidden">
      {/* Image */}
      <Link href={`/urunler/${product.slug}`} className="block relative">
        <div className="aspect-[4/3] bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center overflow-hidden">
          <svg className="w-20 h-20 text-primary-300 group-hover:text-primary-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg>
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary-600 text-white text-xs font-semibold rounded-lg shadow-md">
            {product.badge}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link href={`/urunler/kategori/${product.categorySlug}`}>
          <span className="text-xs font-medium text-primary-500 hover:text-primary-700 transition-colors">
            {product.category}
          </span>
        </Link>
        <Link href={`/urunler/${product.slug}`}>
          <h3 className="mt-1 text-sm font-semibold text-gray-800 line-clamp-2 hover:text-primary-700 transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Price & Cart */}
        <div className="mt-3 flex items-end justify-between">
          <div>
            <p className="text-lg font-bold text-primary-700">
              {price.toLocaleString("tr-TR", { maximumFractionDigits: 0 })} TL
            </p>
            <p className="text-xs text-gray-400">${product.basePrice} USD</p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-1.5 px-3 py-2 bg-primary-600 text-white text-xs font-medium rounded-lg hover:bg-primary-700 active:scale-95 transition-all shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            {t("cart.addToCart")}
          </button>
        </div>
      </div>
    </div>
  );
}
