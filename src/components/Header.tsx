"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const { totalItems, isCartOpen, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 0-2.4.6-3 1.5C8.4 3.6 7.2 3 6 3 3.8 3 2 4.8 2 7c0 4 5 8 10 13 5-5 10-9 10-13 0-2.2-1.8-4-4-4-1.2 0-2.4.6-3 1.5-.6-.9-1.8-1.5-3-1.5z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                Meoflow
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <NavLink href="/">Ana Sayfa</NavLink>
              <NavLink href="/urunler">Ürünler</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/hakkimizda">Hakkımızda</NavLink>
              <NavLink href="/iletisim">İletişim</NavLink>
              <NavLink href="/kargo-takip">Kargo Takip</NavLink>
            </nav>

            {/* Cart + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-lg hover:bg-primary-50 transition-colors"
                aria-label="Sepet"
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
              <MobileLink href="/" onClick={() => setMobileOpen(false)}>Ana Sayfa</MobileLink>
              <MobileLink href="/urunler" onClick={() => setMobileOpen(false)}>Ürünler</MobileLink>
              <MobileLink href="/blog" onClick={() => setMobileOpen(false)}>Blog</MobileLink>
              <MobileLink href="/hakkimizda" onClick={() => setMobileOpen(false)}>Hakkımızda</MobileLink>
              <MobileLink href="/iletisim" onClick={() => setMobileOpen(false)}>İletişim</MobileLink>
              <MobileLink href="/kargo-takip" onClick={() => setMobileOpen(false)}>Kargo Takip</MobileLink>
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
