import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory } from "@/data/articles";

export const metadata: Metadata = {
  title: "Výživa – Magazín Enervit",
  description: "Výživové tipy a rady pro sportovce. Jak jíst před, během a po sportu. Průvodce sportovní výživou od expertů Enervit.",
};

export default function VyzivaPage() {
  const a = getArticlesByCategory("vyziva");
  return (
    <>
      <section className="bg-enervit-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4"><Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span><Link href="/magazin" className="hover:text-white/70">Magazín</Link><span className="mx-2">/</span><span className="text-white/70">Výživa</span></nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Výživa pro sportovce</h1>
          <p className="text-lg text-white/60 mt-2">Odborné články o sportovní výživě od Equipe Enervit.</p>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">{a.map((x) => <ArticleCard key={x.slug} article={x} />)}</div>
        </div>
      </section>
    </>
  );
}
