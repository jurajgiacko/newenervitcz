import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt – Enervit CZ/SK",
  description: "Kontaktujte nás. VITAR Sport, s.r.o. – oficiální distributor Enervit pro Českou republiku a Slovensko.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-enervit-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4"><Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span><span className="text-white/70">Kontakt</span></nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Kontakt</h1>
          <p className="text-lg text-white/60 mt-2">Rádi vám poradíme. Ozvěte se nám.</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-enervit-black mb-6">VITAR Sport, s.r.o.</h2>
              <p className="text-enervit-gray-700">Oficiální distributor Enervit pro CZ/SK</p>

              <div className="mt-8 space-y-4">
                <div className="bg-enervit-gray-100 rounded-xl p-5">
                  <h3 className="text-sm font-bold text-enervit-black">Sídlo</h3>
                  <p className="text-sm text-enervit-gray-700 mt-1">třída Tomáše Bati 385, 763 02 Zlín</p>
                </div>
                <div className="bg-enervit-gray-100 rounded-xl p-5">
                  <h3 className="text-sm font-bold text-enervit-black">Kancelář</h3>
                  <p className="text-sm text-enervit-gray-700 mt-1">Hodkovická 135, 463 12 Liberec</p>
                </div>
                <div className="bg-enervit-gray-100 rounded-xl p-5">
                  <h3 className="text-sm font-bold text-enervit-black">E-shop objednávky</h3>
                  <p className="text-sm text-enervit-gray-700 mt-1">Tel: +420 549 121 835 (všední dny, 7-15)</p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/o-enervitu/pro-obchodni-partnery" className="text-sm font-semibold text-enervit-red hover:underline">
                  Hledáte kontakty na obchodní tým? →
                </Link>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-enervit-black mb-6">Napište nám</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-enervit-gray-700 mb-1">Jméno</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-enervit-red/30 focus:border-enervit-red" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-enervit-gray-700 mb-1">E-mail</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-enervit-red/30 focus:border-enervit-red" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-enervit-gray-700 mb-1">Předmět</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-enervit-red/30 focus:border-enervit-red">
                    <option>Obecný dotaz</option>
                    <option>Objednávka / E-shop</option>
                    <option>Obchodní spolupráce</option>
                    <option>Semináře</option>
                    <option>Jiné</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-enervit-gray-700 mb-1">Zpráva</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-enervit-red/30 focus:border-enervit-red" />
                </div>
                <button type="submit" className="bg-enervit-red text-white font-semibold px-8 py-3.5 rounded-full hover:bg-enervit-red-dark transition-colors text-sm w-full sm:w-auto">
                  Odeslat zprávu
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
