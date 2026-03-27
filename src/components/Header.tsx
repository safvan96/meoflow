"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import CartDrawer from "./CartDrawer";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const { totalItems, isCartOpen, setIsCartOpen } = useCart();
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="url(#logoGrad)"/>
                <path d="M6 24C6 14 14 8 20 8" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M20 8C26 8 28 14 28 24" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="17" y1="24" x2="11" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="17" cy="24" r="2" fill="#60a5fa"/>
                <defs><linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#1e3a8a"/><stop offset="1" stopColor="#1d4ed8"/></linearGradient></defs>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold bg-gradient-to-r from-primary-800 to-primary-500 bg-clip-text text-transparent">
                  meoflow
                </span>
                <span className="text-[9px] font-medium text-gray-400 tracking-[0.2em] uppercase">
                  industrial measurement
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <NavLink href="/">{t("nav.home")}</NavLink>
              <NavLink href="/urunler">{t("nav.products")}</NavLink>
              <NavLink href="/blog">{t("nav.blog")}</NavLink>
              <NavLink href="/hakkimizda">{t("nav.about")}</NavLink>
              <NavLink href="/iletisim">{t("nav.contact")}</NavLink>
              <NavLink href="/kargo-takip">{t("nav.cargoTracking")}</NavLink>
            </nav>

            {/* Language Selector + Cart + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageSelector />

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-lg hover:bg-primary-50 transition-colors"
                aria-label={t("cart.myCart")}
              >
                <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center badge-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-primary-50"
                aria-label="Menu"
              >
                <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileOpen && (
            <nav className="md:hidden pb-4 border-t border-primary-100 pt-3 flex flex-col gap-1">
              <MobileLink href="/" onClick={() => setMobileOpen(false)}>{t("nav.home")}</MobileLink>
              <MobileLink href="/urunler" onClick={() => setMobileOpen(false)}>{t("nav.products")}</MobileLink>
              <MobileLink href="/blog" onClick={() => setMobileOpen(false)}>{t("nav.blog")}</MobileLink>
              <MobileLink href="/hakkimizda" onClick={() => setMobileOpen(false)}>{t("nav.about")}</MobileLink>
              <MobileLink href="/iletisim" onClick={() => setMobileOpen(false)}>{t("nav.contact")}</MobileLink>
              <MobileLink href="/kargo-takip" onClick={() => setMobileOpen(false)}>{t("nav.cargoTracking")}</MobileLink>
            </nav>
          )}
        </div>
      </header>

      {isCartOpen && <CartDrawer />}
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors"
    >
      {children}
    </Link>
  );
}
