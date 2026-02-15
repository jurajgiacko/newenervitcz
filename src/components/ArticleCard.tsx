import Link from "next/link";
import type { Article } from "@/data/articles";

const categoryGradients: Record<string, string> = {
  "Výživa": "from-emerald-50 to-emerald-100/50",
  "Trénink": "from-orange-50 to-orange-100/50",
  "Věda": "from-blue-50 to-blue-100/50",
  "Rozhovor": "from-purple-50 to-purple-100/50",
  "Recenze": "from-amber-50 to-amber-100/50",
  "Závody": "from-red-50 to-red-100/50",
};

const categoryEmojis: Record<string, string> = {
  "Výživa": "🥗",
  "Trénink": "💪",
  "Věda": "🔬",
  "Rozhovor": "🎙️",
  "Recenze": "⭐",
  "Závody": "🏁",
};

export default function ArticleCard({ article }: { article: Article }) {
  const gradient = categoryGradients[article.categoryLabel] || "from-enervit-gray-100 to-enervit-gray-100/50";
  const emoji = categoryEmojis[article.categoryLabel] || "📰";

  return (
    <Link href={`/magazin/${article.slug}`} className="group block">
      <div className={`aspect-[16/10] bg-gradient-to-br ${gradient} rounded-2xl overflow-hidden mb-3 relative`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">{emoji}</span>
          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Magazín</span>
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
