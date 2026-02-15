import type { Metadata } from "next";
import Link from "next/link";
import AthleteCard from "@/components/AthleteCard";
import { getAthletesByType } from "@/data/athletes";

export const metadata: Metadata = {
  title: "Sportovci – Enervit Team",
  description: "Profesionální i amatérští sportovci, kteří spoléhají na Enervit. Pogačar, Sinner, Krejčíková, Přindiš a další. Mezinárodní i čeští ambasadoři.",
};

export default function SportovciPage() {
  const international = getAthletesByType("international");
  const czech = getAthletesByType("czech");
  const clubs = getAthletesByType("club");

  return (
    <>
      <section className="bg-enervit-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4">
            <Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span>
            <span className="text-white/70">Sportovci</span>
          </nav>
          <span className="text-xs font-semibold text-enervit-red uppercase tracking-wider">Enervit Team</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">Spoléhají na Enervit</h1>
          <p className="text-lg text-white/60 mt-3 max-w-2xl">Výkon a vášeň. Podívejte se, kteří sportovci a týmy si vybrali Enervit jako svou výživovou základnu.</p>
          <div className="flex gap-3 mt-6">
            <Link href="/sportovci/mezinarodni" className="text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">Mezinárodní</Link>
            <Link href="/sportovci/cesti" className="text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">Čeští</Link>
            <Link href="/sportovci/kluby-a-tymy" className="text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">Kluby a týmy</Link>
          </div>
        </div>
      </section>

      {/* International */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold text-enervit-black">Mezinárodní sportovci</h2>
            <Link href="/sportovci/mezinarodni" className="text-sm font-semibold text-enervit-red hover:underline">Zobrazit vše →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {international.map((a) => <AthleteCard key={a.slug} athlete={a} />)}
          </div>
        </div>
      </section>

      {/* Czech */}
      <section className="py-12 sm:py-16 bg-enervit-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold text-enervit-black">Čeští sportovci</h2>
            <Link href="/sportovci/cesti" className="text-sm font-semibold text-enervit-red hover:underline">Zobrazit vše →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {czech.map((a) => <AthleteCard key={a.slug} athlete={a} />)}
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold text-enervit-black">Kluby a týmy</h2>
            <Link href="/sportovci/kluby-a-tymy" className="text-sm font-semibold text-enervit-red hover:underline">Zobrazit vše →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clubs.map((a) => <AthleteCard key={a.slug} athlete={a} />)}
          </div>
        </div>
      </section>
    </>
  );
}
