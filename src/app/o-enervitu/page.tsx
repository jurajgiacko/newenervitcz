import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O Enervitu – Příběh prémiové sportovní výživy od roku 1969",
  description: "Enervit – italská sportovní výživa od roku 1969. #1 v Itálii, oficiální dodavatel Tour de France. Vědecky ověřené produkty pro profesionální i amatérské sportovce.",
};

export default function OEnervituPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-enervit-black overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-enervit-red rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-6"><Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span><span className="text-white/70">O Enervitu</span></nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Od roku 1969.<br />
            <span className="text-enervit-red">#1 v Itálii.</span>
          </h1>
          <p className="text-xl text-white/60 mt-6 max-w-2xl leading-relaxed">
            Enervit je italská prémiová sportovní výživa s více než 55letou tradicí. Vědecký výzkum, profesionální zázemí a vášeň pro sport – to je náš příběh.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-enervit-red uppercase tracking-wider">Náš příběh</span>
              <h2 className="text-3xl font-bold text-enervit-black mt-2">Z laboratoře na Tour de France</h2>
              <p className="text-enervit-gray-700 mt-4 leading-relaxed">
                Vše začalo v roce 1969 v Miláně, kde skupina vědců a sportovních nadšenců založila společnost zaměřenou na funkční výživu. Od prvních sportovních nápojů po dnešní technologii C2:1PRO – Enervit vždy stál na vědeckých základech.
              </p>
              <p className="text-enervit-gray-700 mt-4 leading-relaxed">
                Dnes je Enervit číslo 1 v Itálii a jedním z top 5 v Evropě v segmentu sportovní výživy. Naše produkty používají vítězové Tour de France, Australian Open i olympijských her.
              </p>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-enervit-gray-100 to-enervit-gray-100/50 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-bold text-enervit-red/20">1969</span>
                <p className="text-sm text-enervit-gray-500 mt-2">Milano, Italia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-enervit-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-enervit-black">Naše hodnoty</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-enervit-red-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-enervit-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-enervit-black">Science-backed</h3>
              <p className="text-sm text-enervit-gray-500 mt-2">Každý produkt je výsledkem vědeckého výzkumu a klinických studií.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-enervit-red-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-enervit-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-enervit-black">Pro-trusted</h3>
              <p className="text-sm text-enervit-gray-500 mt-2">Používáno profesionálními sportovci a Pro Tour týmy po celém světě.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-enervit-red-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-enervit-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-enervit-black">Italian Quality</h3>
              <p className="text-sm text-enervit-gray-500 mt-2">Vyrobeno v Itálii z nejkvalitnějších surovin. Tradice od roku 1969.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-enervit-red-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-enervit-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="text-lg font-bold text-enervit-black">Complete System</h3>
              <p className="text-sm text-enervit-gray-500 mt-2">Before–During–After: kompletní systém výživy pro každou fázi sportovního výkonu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CZ Distributor */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-enervit-black">Enervit v České republice</h2>
          <p className="text-enervit-gray-700 mt-4 max-w-2xl mx-auto leading-relaxed">
            Oficiálním distributorem Enervitu pro Českou republiku a Slovensko je společnost VITAR Sport, s.r.o. Od roku 2024 budujeme Enervit jako prémiovou značku pro české a slovenské sportovce – od profesionálů po amatéry.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/o-enervitu/before-during-after" className="bg-enervit-red text-white font-semibold px-6 py-3 rounded-full hover:bg-enervit-red-dark transition-colors text-sm">Systém Before-During-After</Link>
            <Link href="/o-enervitu/pro-obchodni-partnery" className="bg-enervit-gray-100 text-enervit-black font-semibold px-6 py-3 rounded-full hover:bg-enervit-gray-300 transition-colors text-sm">Pro obchodní partnery</Link>
            <Link href="/kontakt" className="bg-enervit-gray-100 text-enervit-black font-semibold px-6 py-3 rounded-full hover:bg-enervit-gray-300 transition-colors text-sm">Kontakt</Link>
          </div>
        </div>
      </section>
    </>
  );
}
