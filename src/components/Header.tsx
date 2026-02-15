"use client";
import Link from "next/link";
import { useState } from "react";
import { categoryInfo } from "@/data/products";

const productCategories = [
  { href: "/produkty/pred-sportem", label: "Před sportem", desc: "Pre Sport, Carbo Loading", icon: "🟢" },
  { href: "/produkty/behem-sportu", label: "Během sportu", desc: "Gely, Izotoniky, Tyčinky", icon: "🔴" },
  { href: "/produkty/po-sportu", label: "Po sportu", desc: "Recovery Drink, Proteiny", icon: "🔵" },
  { href: "/produkty/doplnky", label: "Doplňky", desc: "Vitamíny, Magic Cherry", icon: "🟡" },
];

const newProducts = [
  { href: "/produkty/electrolyte-rtd", label: "Electrolyte RTD", badge: "NOVINKA" },
  { href: "/produkty/hot-bar-chocolate", label: "Hot Bar", badge: "NOVINKA" },
  { href: "/produkty/carbogel-neutral", label: "Carbogel Neutral", badge: "NOVINKA" },
  { href: "/produkty/salty-caramel-bar", label: "Salty Caramel Bar", badge: "NOVINKA" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img src="/images/logos/enervit-color.svg" alt="Enervit" style={{ height: 36, width: 'auto' }} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Produkty with mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <Link
                href="/produkty"
                className="px-4 py-2 text-sm font-medium text-enervit-gray-700 hover:text-enervit-red transition-colors flex items-center gap-1"
              >
                Produkty
                <svg className={`w-4 h-4 transition-transform ${megaMenuOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>
              {/* Mega Menu */}
              {megaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-white border border-gray-100 rounded-2xl shadow-xl p-6 mt-1">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-semibold text-enervit-gray-500 uppercase tracking-wider mb-3">Podle momentu</p>
                      <div className="space-y-1">
                        {productCategories.map((cat) => (
                          <Link
                            key={cat.href}
                            href={cat.href}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-enervit-gray-100 transition-colors group"
                            onClick={() => setMegaMenuOpen(false)}
                          >
                            <span className="text-xl">{cat.icon}</span>
                            <div>
                              <p className="text-sm font-semibold text-enervit-black group-hover:text-enervit-red transition-colors">{cat.label}</p>
                              <p className="text-xs text-enervit-gray-500">{cat.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-enervit-gray-500 uppercase tracking-wider mb-3">Novinky 2026</p>
                      <div className="space-y-1">
                        {newProducts.map((p) => (
                          <Link
                            key={p.href}
                            href={p.href}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-enervit-red-light transition-colors group"
                            onClick={() => setMegaMenuOpen(false)}
                          >
                            <span className="text-xs font-bold text-white bg-enervit-red px-2 py-0.5 rounded-full">{p.badge}</span>
                            <span className="text-sm font-medium text-enervit-black group-hover:text-enervit-red transition-colors">{p.label}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link
                          href="/produkty"
                          className="text-sm font-semibold text-enervit-red hover:underline flex items-center gap-1"
                          onClick={() => setMegaMenuOpen(false)}
                        >
                          Všechny produkty
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/sportovci" className="px-4 py-2 text-sm font-medium text-enervit-gray-700 hover:text-enervit-red transition-colors">Sportovci</Link>
            <Link href="/magazin" className="px-4 py-2 text-sm font-medium text-enervit-gray-700 hover:text-enervit-red transition-colors">Magazín</Link>
            <Link href="/eventy" className="px-4 py-2 text-sm font-medium text-enervit-gray-700 hover:text-enervit-red transition-colors">Eventy</Link>
            <Link href="/o-enervitu" className="px-4 py-2 text-sm font-medium text-enervit-gray-700 hover:text-enervit-red transition-colors">O Enervitu</Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link href="/produkty" className="hidden sm:inline-flex items-center gap-2 bg-enervit-red text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-enervit-red-dark transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
              E-shop
            </Link>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-enervit-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <p className="text-xs font-semibold text-enervit-gray-500 uppercase tracking-wider px-3 mb-2">Produkty</p>
            {productCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-enervit-gray-100" onClick={() => setMobileOpen(false)}>
                <span>{cat.icon}</span>
                <span className="text-sm font-medium">{cat.label}</span>
              </Link>
            ))}
            <hr className="my-3 border-gray-100" />
            <Link href="/sportovci" className="block px-3 py-2.5 text-sm font-medium text-enervit-gray-700 rounded-xl hover:bg-enervit-gray-100" onClick={() => setMobileOpen(false)}>Sportovci</Link>
            <Link href="/magazin" className="block px-3 py-2.5 text-sm font-medium text-enervit-gray-700 rounded-xl hover:bg-enervit-gray-100" onClick={() => setMobileOpen(false)}>Magazín</Link>
            <Link href="/eventy" className="block px-3 py-2.5 text-sm font-medium text-enervit-gray-700 rounded-xl hover:bg-enervit-gray-100" onClick={() => setMobileOpen(false)}>Eventy</Link>
            <Link href="/o-enervitu" className="block px-3 py-2.5 text-sm font-medium text-enervit-gray-700 rounded-xl hover:bg-enervit-gray-100" onClick={() => setMobileOpen(false)}>O Enervitu</Link>
            <Link href="/kontakt" className="block px-3 py-2.5 text-sm font-medium text-enervit-gray-700 rounded-xl hover:bg-enervit-gray-100" onClick={() => setMobileOpen(false)}>Kontakt</Link>
            <hr className="my-3 border-gray-100" />
            <Link href="/produkty" className="flex items-center justify-center gap-2 bg-enervit-red text-white text-sm font-semibold px-5 py-3 rounded-full" onClick={() => setMobileOpen(false)}>
              E-shop
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
