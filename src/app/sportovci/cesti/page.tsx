import type { Metadata } from "next";
import Link from "next/link";
import AthleteCard from "@/components/AthleteCard";
import { getAthletesByType } from "@/data/athletes";

export const metadata: Metadata = { title: "Čeští sportovci – Enervit Team" };

export default function CestiPage() {
  const a = getAthletesByType("czech");
  return (
    <>
      <section className="bg-enervit-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4"><Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span><Link href="/sportovci" className="hover:text-white/70">Sportovci</Link><span className="mx-2">/</span><span className="text-white/70">Čeští</span></nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Čeští sportovci</h1>
          <p className="text-lg text-white/60 mt-2">Čeští šampioni a ambasadoři značky Enervit.</p>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-enervit-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">{a.map((x) => <AthleteCard key={x.slug} athlete={x} size="lg" />)}</div>
        </div>
      </section>
    </>
  );
}
