import Link from "next/link";
import type { Article } from "@/data/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/magazin/${article.slug}`} className="group block">
      <div className="aspect-[16/10] bg-gradient-to-br from-enervit-gray-100 to-enervit-gray-100/50 rounded-2xl overflow-hidden mb-3 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-enervit-red/10">M</span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-semibold text-enervit-red bg-enervit-red-light px-2 py-0.5 rounded-full">{article.categoryLabel}</span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 text-xs text-enervit-gray-500 mb-1.5">
          <span>{article.author}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="text-base font-semibold text-enervit-black group-hover:text-enervit-red transition-colors line-clamp-2 mb-1">{article.title}</h3>
        <p className="text-sm text-enervit-gray-500 line-clamp-2">{article.excerpt}</p>
      </div>
    </Link>
  );
}
