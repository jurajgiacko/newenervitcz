import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Výživový kvíz – Otestujte své znalosti",
  description: "Otestujte své znalosti sportovní výživy. Interaktivní kvíz od Enervit pro běžce, cyklisty a triatlonisty.",
};

export default function KvizPage() {
  return (
    <>
      <section className="bg-enervit-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4"><Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span><span className="text-white/70">Kvíz</span></nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Výživový kvíz</h1>
          <p className="text-lg text-white/60 mt-2">Otestujte své znalosti sportovní výživy!</p>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-enervit-red-light rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-enervit-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-enervit-black">Kvíz bude brzy k dispozici</h2>
          <p className="text-enervit-gray-500 mt-3">Připravujeme pro vás interaktivní kvíz o sportovní výživě. Mezitím si přečtěte náš magazín s odbornými články.</p>
          <Link href="/magazin" className="inline-flex bg-enervit-red text-white font-semibold px-6 py-3 rounded-full hover:bg-enervit-red-dark transition-colors text-sm mt-6">
            Přejít na Magazín
          </Link>
        </div>
      </section>
    </>
  );
}
