import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/data/articles";

export const metadata: Metadata = {
  title: "Eventy – Sportovní akce s Enervitem",
  description: "Kalendář sportovních akcí s Enervitem. Prague Marathon, Road Classics, Jizerská 50, Tour de France a další. Kde nás potkáte v roce 2026.",
};

export default function EventyPage() {
  const upcoming = events.filter((e) => e.upcoming);
  const past = events.filter((e) => !e.upcoming);

  return (
    <>
      <section className="bg-enervit-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4"><Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span><span className="text-white/70">Eventy</span></nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Eventy 2026</h1>
          <p className="text-lg text-white/60 mt-3 max-w-2xl">Potkejte Enervit na sportovních akcích po celé republice. Ochutnávky, poradenství a speciální nabídky na našem červeném stánku.</p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-enervit-black mb-6">Blížící se akce</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((event) => (
              <div key={event.slug} className="bg-enervit-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-xs font-semibold text-enervit-red mb-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {event.date}
                </div>
                <h3 className="text-lg font-bold text-enervit-black">{event.name}</h3>
                <p className="text-sm text-enervit-gray-500 mt-1">{event.location} · {event.type}</p>
                <p className="text-sm text-enervit-gray-700 mt-3">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      {past.length > 0 && (
        <section className="py-12 sm:py-16 bg-enervit-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-enervit-black mb-6">Proběhlé akce</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {past.map((event) => (
                <div key={event.slug} className="bg-white rounded-2xl p-6 opacity-75">
                  <div className="text-xs font-semibold text-enervit-gray-500 mb-2">{event.date}</div>
                  <h3 className="text-lg font-bold text-enervit-black">{event.name}</h3>
                  <p className="text-sm text-enervit-gray-500 mt-1">{event.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
