import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Článek nenalezen" };
  return { title: article.title, description: article.excerpt };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <div className="bg-enervit-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-enervit-gray-500">
            <Link href="/" className="hover:text-enervit-black">Domů</Link><span className="mx-2">/</span>
            <Link href="/magazin" className="hover:text-enervit-black">Magazín</Link><span className="mx-2">/</span>
            <span className="text-enervit-black">{article.title}</span>
          </nav>
        </div>
      </div>

      <article className="py-10 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-xs font-semibold text-enervit-red bg-enervit-red-light px-3 py-1 rounded-full">{article.categoryLabel}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-enervit-black leading-tight">{article.title}</h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-enervit-gray-500">
            <span className="font-medium text-enervit-black">{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} čtení</span>
          </div>
          <div className="aspect-[16/9] bg-enervit-gray-100 rounded-2xl mt-8 flex items-center justify-center">
            <span className="text-6xl font-bold text-enervit-red/10">M</span>
          </div>

          <div className="mt-10 prose prose-lg max-w-none prose-headings:text-enervit-black prose-p:text-enervit-gray-700 prose-a:text-enervit-red">
            {article.content.split("\n\n").map((p, i) => {
              if (p.startsWith("## ")) return <h2 key={i} className="text-xl font-bold text-enervit-black mt-8 mb-3">{p.replace("## ", "")}</h2>;
              if (p.startsWith("**")) return <p key={i} className="text-enervit-gray-700 leading-relaxed font-medium">{p.replace(/\*\*/g, "")}</p>;
              return <p key={i} className="text-enervit-gray-700 leading-relaxed mb-4">{p}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs bg-enervit-gray-100 text-enervit-gray-500 px-3 py-1 rounded-full">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
