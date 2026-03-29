"use client";

import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function CartDrawer() {
  const { t } = useLanguage();
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    exchangeRate,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const shippingCost = totalPrice > 50000 ? 0 : 499.99;
  const grandTotal = totalPrice + shippingCost;

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl cart-slide-in flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-primary-800">
            {t("cart.myCart")} ({totalItems} {t("cart.items")})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Exchange Rate Banner */}
        <div className="px-5 py-2 bg-primary-50 text-xs text-primary-700 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          {t("cart.exchangeRateInfo")}: 1 USD = {exchangeRate.toFixed(2)} TL
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <svg className="w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <p className="text-sm font-medium">{t("cart.empty")}</p>
              <p className="text-xs mt-1">{t("cart.emptyDescription")}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const itemPrice = item.product.basePrice * exchangeRate;
                return (
                  <div
                    key={item.product.id}
                    className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <div className="w-16 h-16 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                      <svg className="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-800 truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        ${item.product.basePrice} x {exchangeRate.toFixed(2)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary-300 transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary-300 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-primary-700">
                            {(itemPrice * item.quantity).toLocaleString("tr-TR", { maximumFractionDigits: 0 })} TL
                          </span>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-1 rounded hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 space-y-3">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{t("cart.subtotal")}</span>
              <span>{totalPrice.toLocaleString("tr-TR", { maximumFractionDigits: 0 })} TL</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{t("cart.shipping")}</span>
              <span className={shippingCost === 0 ? "text-green-600 font-medium" : ""}>
                {shippingCost === 0 ? t("cart.freeShipping") : `${shippingCost.toLocaleString("tr-TR")} TL`}
              </span>
            </div>
            {shippingCost > 0 && (
              <p className="text-xs text-primary-600">
                {t("cart.freeShippingNote")}
              </p>
            )}
            <div className="flex justify-between text-base font-bold text-primary-800 pt-2 border-t border-gray-100">
              <span>{t("cart.total")}</span>
              <span>{grandTotal.toLocaleString("tr-TR", { maximumFractionDigits: 0 })} TL</span>
            </div>
            <Link
              href="/sepet"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg shadow-primary-200"
            >
              {t("cart.goToCart")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
