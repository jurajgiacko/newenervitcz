import Link from "next/link";
import type { Athlete } from "@/data/athletes";

export default function AthleteCard({ athlete, size = "md" }: { athlete: Athlete; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-48",
    md: "h-64",
    lg: "h-80",
  };

  return (
    <Link href={`/sportovci/${athlete.slug}`} className="group block relative rounded-2xl overflow-hidden">
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-enervit-gray-900 to-enervit-black relative`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white/10">{athlete.name.charAt(0)}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="text-[10px] font-semibold text-enervit-red uppercase tracking-wider">{athlete.sport}</span>
          <h3 className="text-base font-bold text-white group-hover:text-enervit-red transition-colors mt-0.5">{athlete.name}</h3>
          <p className="text-xs text-white/70 line-clamp-1 mt-0.5">{athlete.title}</p>
        </div>
      </div>
    </Link>
  );
}
