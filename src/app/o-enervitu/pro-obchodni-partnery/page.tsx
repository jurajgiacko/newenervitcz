import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pro obchodní partnery – Enervit B2B",
  description: "Informace pro obchodní partnery Enervit CZ/SK. Kontakty na obchodní manažery, podmínky spolupráce a B2B objednávky.",
};

export default function B2BPage() {
  return (
    <>
      <section className="bg-enervit-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4"><Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span><Link href="/o-enervitu" className="hover:text-white/70">O Enervitu</Link><span className="mx-2">/</span><span className="text-white/70">Pro obchodní partnery</span></nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Pro obchodní partnery</h1>
          <p className="text-lg text-white/60 mt-3">Spolupracujte s námi. Enervit nabízí atraktivní podmínky pro sport shopy, fitness centra, lékárny a e-shopy.</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-enervit-black mb-6">Obchodní tým</h2>
              <div className="space-y-6">
                <div className="bg-enervit-gray-100 rounded-2xl p-6">
                  <h3 className="font-bold text-enervit-black">Karolína Calda</h3>
                  <p className="text-sm text-enervit-gray-500 mt-1">Obchodní manažerka – sever a západ ČR, Praha</p>
                  <p className="text-sm text-enervit-red mt-2">+420 724 963 739</p>
                </div>
                <div className="bg-enervit-gray-100 rounded-2xl p-6">
                  <h3 className="font-bold text-enervit-black">Jiří Goiš</h3>
                  <p className="text-sm text-enervit-gray-500 mt-1">Obchodní manažer – jih a východ ČR</p>
                  <p className="text-sm text-enervit-red mt-2">+420 601 690 754</p>
                </div>
                <div className="bg-enervit-gray-100 rounded-2xl p-6">
                  <h3 className="font-bold text-enervit-black">Štěpán Fryšara</h3>
                  <p className="text-sm text-enervit-gray-500 mt-1">Obchodní manažer – Slovensko</p>
                  <p className="text-sm text-enervit-red mt-2">+420 606 048 557</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-enervit-black mb-6">Proč Enervit?</h2>
              <div className="space-y-4">
                <div className="flex gap-3"><span className="text-enervit-red font-bold">1.</span><p className="text-enervit-gray-700"><strong>#1 v Itálii</strong> – nejprodávanější sportovní výživa v Itálii, top 5 v Evropě</p></div>
                <div className="flex gap-3"><span className="text-enervit-red font-bold">2.</span><p className="text-enervit-gray-700"><strong>Pro Tour zázemí</strong> – oficiální dodavatel Tour de France a UEFA Team Emirates</p></div>
                <div className="flex gap-3"><span className="text-enervit-red font-bold">3.</span><p className="text-enervit-gray-700"><strong>Marže 35-55%</strong> – atraktivní obchodní podmínky podle kategorie</p></div>
                <div className="flex gap-3"><span className="text-enervit-red font-bold">4.</span><p className="text-enervit-gray-700"><strong>Marketingová podpora</strong> – POS materiály, semináře, eventový servis</p></div>
                <div className="flex gap-3"><span className="text-enervit-red font-bold">5.</span><p className="text-enervit-gray-700"><strong>3leté partnerství</strong> – s Jizerskou 50, Road Classics, Paralympijským výborem</p></div>
              </div>
              <Link href="/kontakt" className="inline-flex bg-enervit-red text-white font-semibold px-6 py-3 rounded-full hover:bg-enervit-red-dark transition-colors text-sm mt-8">
                Kontaktujte nás
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
