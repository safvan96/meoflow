"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

const SHIPPING_THRESHOLD = 50000;
const SHIPPING_COST = 499.99;

export default function SepetPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    exchangeRate,
  } = useCart();
  const { t } = useLanguage();

  const [showCheckout, setShowCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
  });

  const shipping = totalPrice >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const grandTotal = totalPrice + shipping;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10"
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
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            {t("checkout.orderReceived")}
          </h1>
          <p className="text-gray-500 mb-2">
            {t("checkout.orderSuccess")}
          </p>
          <p className="text-sm text-gray-400 mb-8">
            {t("checkout.orderEmailNote")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kargo-takip"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
            >
              {t("nav.cargoTracking")}
            </Link>
            <Link
              href="/urunler"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
            >
              {t("cart.continueShopping")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="hero-gradient text-white py-14 md:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              {t("cart.yourCart")}
            </h1>
          </div>
        </section>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {t("cart.emptyCart")}
          </h2>
          <p className="text-gray-500 mb-6">
            {t("cart.emptyCartDescription")}
          </p>
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
          >
            {t("cart.browseProducts")}
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="hero-gradient text-white py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            {t("cart.yourCart")}
          </h1>
          <p className="text-primary-100">
            {items.length} {t("cart.items")} | {t("cart.total")}:{" "}
            {grandTotal.toLocaleString("tr-TR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            TL
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Exchange Rate Info */}
            <div className="bg-primary-50 rounded-xl border border-primary-100 p-4 flex items-start gap-3">
              <svg
                className="w-5 h-5 text-primary-500 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              <div className="text-sm text-primary-700">
                <span className="font-semibold">{t("common.exchangeRate")}:</span> 1 USD ={" "}
                {exchangeRate.toFixed(2)} TL | {t("cart.exchangeRateNote")}
              </div>
            </div>

            {/* Items List */}
            {items.map((item) => {
              const priceInTL = item.product.basePrice * exchangeRate;
              const lineTotalTL = priceInTL * item.quantity;

              return (
                <div
                  key={item.product.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6"
                >
                  <div className="flex gap-4">
                    {/* Image Placeholder */}
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center shrink-0">
                      <svg
                        className="w-8 h-8 text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                        />
                      </svg>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            href={`/urunler/${item.product.slug}`}
                            className="font-semibold text-gray-900 hover:text-primary-600 transition-colors line-clamp-1"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {item.product.category}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors shrink-0"
                          aria-label="Urunu kaldir"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-end justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1
                              )
                            }
                            className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors text-lg font-medium"
                          >
                            -
                          </button>
                          <span className="w-10 text-center text-sm font-semibold text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                            className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors text-lg font-medium"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="text-xs text-gray-400">
                            {priceInTL.toLocaleString("tr-TR", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}{" "}
                            TL {t("cart.perItem")}
                          </div>
                          <div className="text-lg font-bold text-primary-700">
                            {lineTotalTL.toLocaleString("tr-TR", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}{" "}
                            TL
                          </div>
                          <div className="text-xs text-gray-400">
                            (${(item.product.basePrice * item.quantity).toFixed(2)} USD)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Clear Cart */}
            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-1 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                {t("cart.clearCart")}
              </button>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-6">
            {/* Summary Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">
                {t("cart.orderSummary")}
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>{t("cart.subtotal")}</span>
                  <span className="font-medium text-gray-900">
                    {totalPrice.toLocaleString("tr-TR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    TL
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>{t("cart.shipping")}</span>
                  {shipping === 0 ? (
                    <span className="font-medium text-green-600">{t("cart.freeShipping")}</span>
                  ) : (
                    <span className="font-medium text-gray-900">
                      {shipping.toLocaleString("tr-TR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      TL
                    </span>
                  )}
                </div>

                {shipping > 0 && (
                  <div className="bg-primary-50 rounded-lg p-3 text-xs text-primary-700">
                    {(SHIPPING_THRESHOLD - totalPrice).toLocaleString("tr-TR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    {t("cart.moreForFreeShipping")}
                  </div>
                )}

                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="font-semibold text-gray-900">{t("cart.total")}</span>
                  <div className="text-right">
                    <span className="text-xl font-bold text-primary-700">
                      {grandTotal.toLocaleString("tr-TR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      TL
                    </span>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {t("cart.vatExcluded")}
                    </div>
                  </div>
                </div>
              </div>

              {!showCheckout ? (
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full mt-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  {t("checkout.completeOrder")}
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
                </button>
              ) : null}

              <Link
                href="/urunler"
                className="w-full mt-3 py-2.5 text-sm text-primary-600 font-medium rounded-xl hover:bg-primary-50 transition-colors flex items-center justify-center gap-1"
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
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                {t("cart.continueShopping")}
              </Link>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        {showCheckout && (
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {t("checkout.deliveryInfo")}
              </h2>
              <form onSubmit={handleOrder} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {t("checkout.fullName")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Adiniz Soyadiniz"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="checkout-email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {t("checkout.email")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="checkout-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ornek@firma.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="checkout-phone"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    {t("checkout.phone")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="checkout-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 (5xx) xxx xx xx"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    {t("checkout.address")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Acik adresiniz"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {t("checkout.city")} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all"
                    >
                      <option value="">{t("checkout.selectCity")}</option>
                      <option value="istanbul">Istanbul</option>
                      <option value="ankara">Ankara</option>
                      <option value="izmir">Izmir</option>
                      <option value="bursa">Bursa</option>
                      <option value="antalya">Antalya</option>
                      <option value="kocaeli">Kocaeli</option>
                      <option value="konya">Konya</option>
                      <option value="adana">Adana</option>
                      <option value="gaziantep">Gaziantep</option>
                      <option value="mersin">Mersin</option>
                      <option value="diger">{t("checkout.other")}</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="district"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {t("checkout.district")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="district"
                      name="district"
                      required
                      value={formData.district}
                      onChange={handleChange}
                      placeholder="Ilce"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Order Summary Mini */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">{t("cart.productTotal")}</span>
                    <span className="font-medium">
                      {totalPrice.toLocaleString("tr-TR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      TL
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">{t("cart.shipping")}</span>
                    <span className="font-medium">
                      {shipping === 0
                        ? t("cart.freeShipping")
                        : `${shipping.toLocaleString("tr-TR", {
                            minimumFractionDigits: 2,
                          })} TL`}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between">
                    <span className="font-bold text-gray-900">
                      {t("cart.grandTotal")}
                    </span>
                    <span className="font-bold text-primary-700 text-lg">
                      {grandTotal.toLocaleString("tr-TR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      TL
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 text-lg"
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
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  {t("checkout.completeOrder")}
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
