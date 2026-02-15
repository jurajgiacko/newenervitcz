import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { articles, articleCategoryLabels } from "@/data/articles";

export const metadata: Metadata = {
  title: "Magazín – Výživové tipy a rady pro sportovce",
  description: "Equipe Enervit Magazín. Odborné články o sportovní výživě, tréninkové tipy, rozhovory se sportovci a recenze produktů.",
};

export default function MagazinPage() {
  return (
    <>
      <section className="bg-enervit-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4"><Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span><span className="text-white/70">Magazín</span></nav>
          <span className="text-xs font-semibold text-enervit-red uppercase tracking-wider">Equipe Enervit</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">Magazín</h1>
          <p className="text-lg text-white/60 mt-3 max-w-2xl">Odborné články od nutričních specialistů Enervitu. Vědecky podložené tipy pro váš nejlepší výkon.</p>
          <div className="flex flex-wrap gap-2 mt-6">
            <Link href="/magazin/vyziva" className="text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">Výživa</Link>
            <span className="text-sm font-medium text-white/40 bg-white/5 px-4 py-2 rounded-full">Tréninky (brzy)</span>
            <span className="text-sm font-medium text-white/40 bg-white/5 px-4 py-2 rounded-full">Rozhovory (brzy)</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
