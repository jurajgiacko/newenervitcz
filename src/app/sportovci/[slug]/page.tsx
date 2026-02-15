import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { athletes, getAthleteBySlug } from "@/data/athletes";
import { getProductBySlug } from "@/data/products";

export function generateStaticParams() {
  return athletes.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const athlete = getAthleteBySlug(slug);
  if (!athlete) return { title: "Sportovec nenalezen" };
  return {
    title: `${athlete.name} – ${athlete.title}`,
    description: athlete.bio,
  };
}

export default async function AthleteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const athlete = getAthleteBySlug(slug);
  if (!athlete) notFound();

  const usedProducts = athlete.products
    .map((s) => getProductBySlug(s))
    .filter(Boolean);

  return (
    <>
      <div className="bg-enervit-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-enervit-gray-500">
            <Link href="/" className="hover:text-enervit-black">Domů</Link>
            <span className="mx-2">/</span>
            <Link href="/sportovci" className="hover:text-enervit-black">Sportovci</Link>
            <span className="mx-2">/</span>
            <span className="text-enervit-black">{athlete.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-gradient-to-br from-enervit-gray-900 to-enervit-black rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl font-bold text-white/5">{athlete.name.charAt(0)}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="text-xs font-semibold text-enervit-red uppercase tracking-wider">{athlete.sport}</span>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1">{athlete.name}</h1>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <span className="text-xs font-semibold text-enervit-red uppercase tracking-wider">{athlete.sport}</span>
              <h2 className="text-xl font-bold text-enervit-black mt-1">{athlete.title}</h2>
              <p className="text-enervit-gray-700 mt-4 leading-relaxed">{athlete.bio}</p>

              {athlete.quote && (
                <blockquote className="mt-6 pl-5 border-l-4 border-enervit-red">
                  <p className="text-lg italic text-enervit-gray-700">&ldquo;{athlete.quote}&rdquo;</p>
                </blockquote>
              )}

              <div className="mt-8">
                <h3 className="text-base font-bold text-enervit-black mb-3">Úspěchy</h3>
                <div className="flex flex-wrap gap-2">
                  {athlete.achievements.map((a, i) => (
                    <span key={i} className="text-sm bg-enervit-gray-100 text-enervit-gray-700 px-3 py-1.5 rounded-full">{a}</span>
                  ))}
                </div>
              </div>

              {usedProducts.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-base font-bold text-enervit-black mb-4">Produkty, které používá</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {usedProducts.map((p) => p && <ProductCard key={p.slug} product={p} />)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
