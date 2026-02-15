import Link from "next/link";
import type { Athlete } from "@/data/athletes";

const sportGradients: Record<string, string> = {
  "Cyklistika": "from-yellow-900/50 to-gray-900",
  "Tenis": "from-green-900/50 to-gray-900",
  "Triatlon": "from-blue-900/50 to-gray-900",
  "Horolezectví": "from-stone-800/50 to-gray-900",
  "Vodní slalom": "from-cyan-900/50 to-gray-900",
  "Běh": "from-orange-900/50 to-gray-900",
  "Běh na lyžích": "from-sky-900/50 to-gray-900",
  "Hokej": "from-blue-950/50 to-gray-900",
  "Fotbal": "from-emerald-900/50 to-gray-900",
  "Rychlostní kanoistika": "from-teal-900/50 to-gray-900",
  "Paralympijský sport": "from-purple-900/50 to-gray-900",
};

const sportEmojis: Record<string, string> = {
  "Cyklistika": "🚴",
  "Tenis": "🎾",
  "Triatlon": "🏊",
  "Horolezectví": "🧗",
  "Vodní slalom": "🛶",
  "Běh": "🏃",
  "Běh na lyžích": "⛷️",
  "Hokej": "🏒",
  "Fotbal": "⚽",
  "Rychlostní kanoistika": "🛶",
  "Paralympijský sport": "♿",
};

export default function AthleteCard({ athlete, size = "md" }: { athlete: Athlete; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-48",
    md: "h-64",
    lg: "h-80",
  };

  const gradient = sportGradients[athlete.sport] || "from-gray-800/50 to-gray-900";
  const emoji = sportEmojis[athlete.sport] || "🏅";

  const hasImage = athlete.image && !athlete.image.includes("placeholder");

  return (
    <Link href={`/sportovci/${athlete.slug}`} className="group block relative rounded-2xl overflow-hidden">
      <div className={`${sizeClasses[size]} relative`}>
        {hasImage ? (
          <img
            src={athlete.image}
            alt={athlete.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <span className="text-4xl">{emoji}</span>
              <span className="text-5xl font-black text-white/10 uppercase">{athlete.name.charAt(0)}</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="text-[10px] font-semibold text-enervit-red uppercase tracking-wider">{athlete.sport}</span>
          <h3 className="text-base font-bold text-white group-hover:text-enervit-red transition-colors mt-0.5">{athlete.name}</h3>
          <p className="text-xs text-white/70 line-clamp-1 mt-0.5">{athlete.title}</p>
        </div>
      </div>
    </Link>
  );
}
