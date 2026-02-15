import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, categoryInfo, type ProductCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Produkty – Sportovní výživa Enervit",
  description: "Kompletní nabídka sportovní výživy Enervit. Gely, izotoniky, tyčinky, recovery a doplňky v systému Before-During-After.",
};

const categories: { key: ProductCategory; href: string }[] = [
  { key: "before", href: "/produkty/pred-sportem" },
  { key: "during", href: "/produkty/behem-sportu" },
  { key: "after", href: "/produkty/po-sportu" },
  { key: "supplements", href: "/produkty/doplnky" },
];

const categoryColors: Record<ProductCategory, string> = {
  before: "from-emerald-50 to-emerald-50/30 border-emerald-100 hover:border-emerald-200",
  during: "from-red-50 to-red-50/30 border-red-100 hover:border-red-200",
  after: "from-blue-50 to-blue-50/30 border-blue-100 hover:border-blue-200",
  supplements: "from-amber-50 to-amber-50/30 border-amber-100 hover:border-amber-200",
};

const categoryTextColors: Record<ProductCategory, string> = {
  before: "text-emerald-600",
  during: "text-enervit-red",
  after: "text-blue-600",
  supplements: "text-amber-600",
};

export default function ProduktyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-enervit-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4">
            <Link href="/" className="hover:text-white/70">Domů</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">Produkty</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Sportovní výživa</h1>
          <p className="text-lg text-white/60 mt-3 max-w-2xl">Kompletní systém Before–During–After pro maximální výkon. Vědecky ověřeno, používáno profesionály na Tour de France.</p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map(({ key, href }) => {
              const info = categoryInfo[key];
              return (
                <Link key={key} href={href} className={`group bg-gradient-to-br ${categoryColors[key]} rounded-2xl p-6 border transition-all hover:shadow-md`}>
                  <span className="text-2xl mb-3 block">{info.icon}</span>
                  <h3 className={`text-lg font-bold text-enervit-black group-hover:${categoryTextColors[key]} transition-colors`}>{info.title}</h3>
                  <p className="text-sm text-enervit-gray-500 mt-1">{info.subtitle}</p>
                  <span className={`mt-3 text-sm font-semibold ${categoryTextColors[key]} flex items-center gap-1`}>
                    Zobrazit <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-12 sm:py-16 bg-enervit-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-enervit-black mb-8">Všechny produkty</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
