import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produkt nenalezen" };
  return {
    title: `${product.name} – ${product.tagline}`,
    description: product.description,
  };
}

const badgeColors: Record<string, string> = {
  BEFORE: "bg-emerald-500",
  DURING: "bg-enervit-red",
  AFTER: "bg-blue-500",
  RECOVERY: "bg-purple-500",
};

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-enervit-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-enervit-gray-500">
            <Link href="/" className="hover:text-enervit-black">Domů</Link>
            <span className="mx-2">/</span>
            <Link href="/produkty" className="hover:text-enervit-black">Produkty</Link>
            <span className="mx-2">/</span>
            <span className="text-enervit-black">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <div className="aspect-square bg-enervit-gray-100 rounded-3xl flex items-center justify-center relative">
              <div className="w-48 h-60 bg-gradient-to-b from-enervit-red/10 to-enervit-red/5 rounded-2xl flex items-center justify-center">
                <span className="text-7xl font-bold text-enervit-red/20">E</span>
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                {product.badge && (
                  <span className={`text-xs font-bold text-white px-3 py-1 rounded-full ${badgeColors[product.badge] || "bg-enervit-gray-700"}`}>{product.badge}</span>
                )}
                {product.isNew && (
                  <span className="text-xs font-bold text-white bg-amber-500 px-3 py-1 rounded-full">NOVINKA 2026</span>
                )}
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="text-xs font-semibold text-enervit-red uppercase tracking-wider">{product.categoryLabel}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-enervit-black mt-2">{product.name}</h1>
              <p className="text-lg text-enervit-gray-500 mt-2">{product.tagline}</p>

              <div className="mt-6 flex items-center gap-4">
                <span className="text-3xl font-bold text-enervit-black">{product.price} Kč</span>
                <button className="flex-1 sm:flex-none bg-enervit-red text-white font-semibold px-8 py-3.5 rounded-full hover:bg-enervit-red-dark transition-colors text-sm">
                  Přidat do košíku
                </button>
              </div>

              <hr className="my-6 border-gray-200" />

              <div className="prose prose-sm max-w-none">
                <h3 className="text-base font-bold text-enervit-black">Popis</h3>
                <p className="text-enervit-gray-700 leading-relaxed">{product.description}</p>

                <h3 className="text-base font-bold text-enervit-black mt-6">Použití</h3>
                <p className="text-enervit-gray-700 leading-relaxed">{product.usage}</p>
              </div>

              {/* Nutrition */}
              <div className="mt-6 bg-enervit-gray-100 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-enervit-black mb-3">Nutriční hodnoty</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {product.nutrition.carbs && (
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-enervit-black">{product.nutrition.carbs}</p>
                      <p className="text-xs text-enervit-gray-500">Sacharidy</p>
                    </div>
                  )}
                  {product.nutrition.protein && (
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-enervit-black">{product.nutrition.protein}</p>
                      <p className="text-xs text-enervit-gray-500">Bílkoviny</p>
                    </div>
                  )}
                  {product.nutrition.sodium && (
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-enervit-black">{product.nutrition.sodium}</p>
                      <p className="text-xs text-enervit-gray-500">Sodík</p>
                    </div>
                  )}
                  {product.nutrition.calories && (
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-enervit-black">{product.nutrition.calories}</p>
                      <p className="text-xs text-enervit-gray-500">Energie</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16 bg-enervit-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-enervit-black mb-6">Doporučujeme k tomuto produktu</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
