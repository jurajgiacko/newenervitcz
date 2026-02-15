import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, categoryInfo } from "@/data/products";

export const metadata: Metadata = {
  title: "Během sportu – Gely, izotoniky a energie na trati",
  description: "Produkty Enervit pro doplnění energie během sportu. C2:1PRO gely, izotonické nápoje, energetické tyčinky a nový Electrolyte RTD.",
};

export default function BehemSportuPage() {
  const info = categoryInfo.during;
  const prods = getProductsByCategory("during");

  return (
    <>
      <section className="bg-gradient-to-br from-red-600 to-red-800 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4">
            <Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span>
            <Link href="/produkty" className="hover:text-white/70">Produkty</Link><span className="mx-2">/</span>
            <span className="text-white/70">{info.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{info.icon}</span>
            <span className="text-xs font-bold text-white/60 uppercase tracking-widest">DURING</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{info.title}</h1>
          <p className="text-lg text-white/70 mt-3 max-w-2xl">{info.description}</p>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-enervit-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {prods.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
