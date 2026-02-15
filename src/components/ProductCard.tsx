import Link from "next/link";
import type { Product } from "@/data/products";

const badgeColors: Record<string, string> = {
  BEFORE: "bg-emerald-500",
  DURING: "bg-enervit-red",
  AFTER: "bg-blue-500",
  RECOVERY: "bg-purple-500",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produkty/${product.slug}`} className="product-card group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all">
      {/* Image area */}
      <div className="relative aspect-square bg-enervit-gray-100 overflow-hidden">
        <div className="product-image w-full h-full flex items-center justify-center p-8">
          <div className="w-32 h-40 bg-gradient-to-b from-enervit-red/10 to-enervit-red/5 rounded-xl flex items-center justify-center">
            <span className="text-4xl font-bold text-enervit-red/30">E</span>
          </div>
        </div>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {product.badge && (
            <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full ${badgeColors[product.badge] || "bg-enervit-gray-700"}`}>
              {product.badge}
            </span>
          )}
          {product.isNew && (
            <span className="text-[10px] font-bold text-white bg-amber-500 px-2 py-0.5 rounded-full">NOVINKA</span>
          )}
        </div>
      </div>
      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-enervit-gray-500 mb-1">{product.categoryLabel}</p>
        <h3 className="text-sm font-semibold text-enervit-black group-hover:text-enervit-red transition-colors line-clamp-2 mb-1">{product.name}</h3>
        <p className="text-xs text-enervit-gray-500 line-clamp-2 mb-3">{product.tagline}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-enervit-black">{product.price} Kč</span>
          <span className="text-xs font-semibold text-enervit-red group-hover:underline">Detail →</span>
        </div>
      </div>
    </Link>
  );
}
