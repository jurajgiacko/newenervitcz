import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/data/articles";

export const metadata: Metadata = {
  title: "Aktuality – Novinky ze světa Enervit",
  description: "Aktuální novinky, akce a informace ze světa sportovní výživy Enervit CZ/SK.",
};

export default function AktualityPage() {
  return (
    <>
      <section className="bg-enervit-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4"><Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span><span className="text-white/70">Aktuality</span></nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Aktuality</h1>
          <p className="text-lg text-white/60 mt-2">Novinky, akce a informace ze světa Enervit.</p>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {news.map((item) => (
            <article key={item.slug} className="flex flex-col sm:flex-row gap-6 p-6 bg-enervit-gray-100 rounded-2xl hover:bg-enervit-red-light transition-colors group">
              <div className="w-full sm:w-48 h-32 bg-enervit-gray-300/30 rounded-xl shrink-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-enervit-red/10">N</span>
              </div>
              <div>
                <time className="text-xs font-semibold text-enervit-gray-500">{item.date}</time>
                <h2 className="text-lg font-bold text-enervit-black group-hover:text-enervit-red transition-colors mt-1">{item.title}</h2>
                <p className="text-sm text-enervit-gray-700 mt-2">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
