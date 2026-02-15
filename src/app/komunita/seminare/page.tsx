import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Semináře o výživě – Enervit vzdělávání",
  description: "Semináře a webináře o sportovní výživě od Enervit. Pro sportovce, trenéry i obchodní partnery. Online i osobní formát.",
};

export default function SeminarePage() {
  return (
    <>
      <section className="bg-enervit-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4"><Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span><span className="text-white/70">Semináře</span></nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Semináře o výživě</h1>
          <p className="text-lg text-white/60 mt-2">Vzdělávejte se s odborníky Enervit. Pro sportovce, trenéry i prodejce.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-enervit-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-enervit-black">Pro sportovce</h3>
              <p className="text-sm text-enervit-gray-700 mt-2">Naučte se, jak správně využívat sportovní výživu pro maximální výkon. Before-During-After systém v praxi.</p>
              <p className="text-xs text-enervit-gray-500 mt-4">Formát: webinář (EN) s titulky / osobní seminář</p>
            </div>
            <div className="bg-enervit-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-enervit-black">Pro partnery</h3>
              <p className="text-sm text-enervit-gray-700 mt-2">Produktové školení pro prodejce a trenéry. Jak poradit zákazníkům a správně prezentovat výhody Enervit.</p>
              <p className="text-xs text-enervit-gray-500 mt-4">Na míru pro váš tým – kontaktujte nás</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/kontakt" className="inline-flex bg-enervit-red text-white font-semibold px-6 py-3 rounded-full hover:bg-enervit-red-dark transition-colors text-sm">
              Mám zájem o seminář
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
