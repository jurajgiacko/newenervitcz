import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Before-During-After – Systém sportovní výživy Enervit",
  description: "Systém Before-During-After od Enervit. Jak správně jíst a pít před, během a po sportu pro maximální výkon a regeneraci.",
};

export default function BDAPage() {
  return (
    <>
      <section className="bg-enervit-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4"><Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span><Link href="/o-enervitu" className="hover:text-white/70">O Enervitu</Link><span className="mx-2">/</span><span className="text-white/70">Before-During-After</span></nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Before – During – After</h1>
          <p className="text-lg text-white/60 mt-3 max-w-2xl">Každý moment ve sportu vyžaduje specifickou výživu. Naučte se náš systém, kterému důvěřují profesionálové.</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Before */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-3xl font-bold text-emerald-600">B</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-enervit-black">Before – Před sportem</h2>
              <p className="text-enervit-gray-700 mt-3 leading-relaxed">
                <strong>Kdy:</strong> 1-3 hodiny před výkonem<br />
                <strong>Proč:</strong> Naplnit zásoby glykogenu, zajistit hydrataci, připravit organismus<br />
                <strong>Co:</strong> Snadno stravitelné sacharidy, malé množství bílkovin, dostatek tekutin
              </p>
              <Link href="/produkty/pred-sportem" className="inline-flex text-sm font-semibold text-emerald-600 mt-3 hover:underline">Produkty Before →</Link>
            </div>
          </div>

          {/* During */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-3xl font-bold text-enervit-red">D</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-enervit-black">During – Během sportu</h2>
              <p className="text-enervit-gray-700 mt-3 leading-relaxed">
                <strong>Kdy:</strong> Průběžně každých 20-45 minut při výkonu nad 60 minut<br />
                <strong>Proč:</strong> Doplňovat energii, elektrolyty a tekutiny. Předejít vyčerpání glykogenu<br />
                <strong>Co:</strong> 30-90g sacharidů/hodinu (C2:1PRO technologie), sodík, izotonické nápoje
              </p>
              <Link href="/produkty/behem-sportu" className="inline-flex text-sm font-semibold text-enervit-red mt-3 hover:underline">Produkty During →</Link>
            </div>
          </div>

          {/* After */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-3xl font-bold text-blue-600">A</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-enervit-black">After – Po sportu</h2>
              <p className="text-enervit-gray-700 mt-3 leading-relaxed">
                <strong>Kdy:</strong> Do 30 minut po výkonu (anabolické okno)<br />
                <strong>Proč:</strong> Obnovit glykogenové zásoby, opravit svalová vlákna, podpořit adaptaci<br />
                <strong>Co:</strong> Kombinace sacharidů a bílkovin v poměru 3:1, elektrolyty, antioxidanty
              </p>
              <Link href="/produkty/po-sportu" className="inline-flex text-sm font-semibold text-blue-600 mt-3 hover:underline">Produkty After →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
