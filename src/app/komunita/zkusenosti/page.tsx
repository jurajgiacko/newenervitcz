import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vaše zkušenosti – Enervit komunita",
  description: "Co říkají sportovci o Enervitu. Reálné zkušenosti a recenze od profesionálů i amatérů.",
};

const testimonials = [
  { name: "Helena Karásková", title: "Mistryně světa v triatlonu", text: "Na Enervit spoléhám při sportu už 7 let. Vím, co si kdy vzít a že opravdu pomáhá." },
  { name: "Radek Jaroš", title: "Držitel Koruny Himálaje", text: "Enervit mi při sportu hodně pomáhá a navíc skvěle chutná." },
  { name: "Hana Zaňková", title: "Maminka 15leté plavkyně", text: "Jsem přesvědčená, že Vaše práce a Vaše výrobky jsou opravdu prospěšné a mají smysl!" },
  { name: "Ivan Šmaus", title: "Endorfin Factory", text: "Moc díky za Vaší součinnost při prvním semináři v naší prodejně. Myslím, že jste nasadili vysokou laťku." },
  { name: "4EVER Cyklo Bulis team", title: "Cyklistický tým", text: "Skvěle zpracovaný web! Rady, tipy, rozhovory… Za nás palec nahoru!" },
];

export default function ZkusenostiPage() {
  return (
    <>
      <section className="bg-enervit-black py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-4"><Link href="/" className="hover:text-white/70">Domů</Link><span className="mx-2">/</span><span className="text-white/70">Vaše zkušenosti</span></nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Vaše zkušenosti</h1>
          <p className="text-lg text-white/60 mt-2">Co říkají sportovci o Enervitu. Reálné zkušenosti a recenze.</p>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-enervit-gray-100 rounded-2xl p-8">
              <blockquote className="text-lg text-enervit-gray-700 italic">&ldquo;{t.text}&rdquo;</blockquote>
              <div className="mt-4">
                <p className="font-bold text-enervit-black">{t.name}</p>
                <p className="text-sm text-enervit-gray-500">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
