import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import AthleteCard from "@/components/AthleteCard";
import ArticleCard from "@/components/ArticleCard";
import { products } from "@/data/products";
import { getFeaturedAthletes, athletes } from "@/data/athletes";
import { getFeaturedArticles, news, events } from "@/data/articles";

export default function Home() {
  const featuredAthletes = getFeaturedAthletes();
  const featuredArticles = getFeaturedArticles();
  const topProducts = products.filter((p) => ["carbo-gel-orange", "carbo-gel-lemon-sodium", "isotonic-drink", "recovery-drink", "electrolyte-rtd", "magic-cherry", "competition-bar", "carbogel-neutral"].includes(p.slug));
  const upcomingEvents = events.filter((e) => e.upcoming).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-enervit-black overflow-hidden">
        {/* Real hero background image */}
        <img
          src="/images/hero/sport-d.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-enervit-black via-enervit-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-enervit-black/60 via-transparent to-enervit-black/30" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-enervit-red rounded-full animate-pulse" />
              #1 sportovní výživa v Itálii od roku 1969
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Fueled by<br />
              <span className="text-enervit-red">ENERVIT</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 mt-4 max-w-lg leading-relaxed">
              Prémiová sportovní výživa s italskou tradicí. Vědecky ověřený systém Before&ndash;During&ndash;After pro váš nejlepší výkon.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/produkty" className="inline-flex items-center gap-2 bg-enervit-red text-white font-semibold px-7 py-3.5 rounded-full hover:bg-enervit-red-dark transition-colors text-sm">
                Prozkoumat produkty
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/o-enervitu" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/20 transition-colors text-sm border border-white/20">
                Náš příběh
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE - DURING - AFTER */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-enervit-black">Systém výživy pro sportovce</h2>
            <p className="text-enervit-gray-500 mt-3 max-w-2xl mx-auto">Každý moment ve sportu vyžaduje specifickou výživu. Objevte náš systém Before–During–After používaný profesionály včetně týmů Tour de France.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Before */}
            <Link href="/produkty/pred-sportem" className="group relative bg-gradient-to-br from-emerald-50 to-emerald-50/30 rounded-3xl p-8 hover:shadow-lg transition-all border border-emerald-100 hover:border-emerald-200">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-enervit-black mb-2 group-hover:text-emerald-600 transition-colors">Před sportem</h3>
              <p className="text-sm text-enervit-gray-500 leading-relaxed">Připravte tělo na výkon. Naplňte zásoby glykogenu a zajistěte optimální hydrataci před tréninkem i závodem.</p>
              <div className="mt-5 text-sm font-semibold text-emerald-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                Produkty Before <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>
            {/* During */}
            <Link href="/produkty/behem-sportu" className="group relative bg-gradient-to-br from-red-50 to-red-50/30 rounded-3xl p-8 hover:shadow-lg transition-all border border-red-100 hover:border-red-200">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-enervit-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-enervit-black mb-2 group-hover:text-enervit-red transition-colors">Během sportu</h3>
              <p className="text-sm text-enervit-gray-500 leading-relaxed">Doplňte energii a elektrolyty. Technologie C2:1PRO umožňuje vstřebat až 90g sacharidů za hodinu.</p>
              <div className="mt-5 text-sm font-semibold text-enervit-red flex items-center gap-1 group-hover:gap-2 transition-all">
                Produkty During <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>
            {/* After */}
            <Link href="/produkty/po-sportu" className="group relative bg-gradient-to-br from-blue-50 to-blue-50/30 rounded-3xl p-8 hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-enervit-black mb-2 group-hover:text-blue-600 transition-colors">Po sportu</h3>
              <p className="text-sm text-enervit-gray-500 leading-relaxed">Regenerujte a posilte svaly. V anabolickém okně (30 min po výkonu) maximalizujte vstřebání živin.</p>
              <div className="mt-5 text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                Produkty After <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS / NOVINKY 2026 */}
      <section className="py-16 sm:py-20 bg-enervit-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold text-enervit-red uppercase tracking-wider">Novinky 2026</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-enervit-black mt-1">Co je nového</h2>
            </div>
            <Link href="/produkty" className="hidden sm:inline-flex text-sm font-semibold text-enervit-red hover:underline items-center gap-1">
              Všechny produkty <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.filter((p) => p.isNew).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* TOP PICKS / BESTSELLERY */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold text-enervit-gray-500 uppercase tracking-wider">Bestsellery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-enervit-black mt-1">Nejoblíbenější produkty</h2>
            </div>
            <Link href="/produkty" className="hidden sm:inline-flex text-sm font-semibold text-enervit-red hover:underline items-center gap-1">
              Všechny produkty <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {topProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* THEY CHOOSE ENERVIT */}
      <section className="py-16 sm:py-20 bg-enervit-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold text-enervit-red uppercase tracking-wider">Enervit Team</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Spoléhají na Enervit</h2>
            </div>
            <Link href="/sportovci" className="hidden sm:inline-flex text-sm font-semibold text-enervit-red hover:underline items-center gap-1">
              Všichni sportovci <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {featuredAthletes.map((athlete) => (
              <AthleteCard key={athlete.slug} athlete={athlete} />
            ))}
          </div>
        </div>
      </section>

      {/* MAGAZÍN */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold text-enervit-gray-500 uppercase tracking-wider">Equipe Enervit</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-enervit-black mt-1">Magazín</h2>
            </div>
            <Link href="/magazin" className="hidden sm:inline-flex text-sm font-semibold text-enervit-red hover:underline items-center gap-1">
              Celý magazín <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-10 sm:py-14 bg-enervit-gray-100 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-enervit-red">#1</div>
              <p className="text-xs sm:text-sm text-enervit-gray-500 mt-1">v Itálii</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-enervit-black">1969</div>
              <p className="text-xs sm:text-sm text-enervit-gray-500 mt-1">Rok založení</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-enervit-black">500+</div>
              <p className="text-xs sm:text-sm text-enervit-gray-500 mt-1">Sportovců</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-enervit-black">C2:1</div>
              <p className="text-xs sm:text-sm text-enervit-gray-500 mt-1">PRO technologie</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold text-enervit-black">TdF</div>
              <p className="text-xs sm:text-sm text-enervit-gray-500 mt-1">Tour de France partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTY */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold text-enervit-gray-500 uppercase tracking-wider">Kde nás potkáte</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-enervit-black mt-1">Blížící se eventy</h2>
            </div>
            <Link href="/eventy" className="hidden sm:inline-flex text-sm font-semibold text-enervit-red hover:underline items-center gap-1">
              Všechny eventy <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Link key={event.slug} href={`/eventy/${event.slug}`} className="group bg-enervit-gray-100 rounded-2xl p-6 hover:bg-enervit-red-light hover:border-enervit-red/20 border border-transparent transition-all">
                <div className="flex items-center gap-2 text-xs font-semibold text-enervit-red mb-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {event.date}
                </div>
                <h3 className="text-lg font-bold text-enervit-black group-hover:text-enervit-red transition-colors">{event.name}</h3>
                <p className="text-sm text-enervit-gray-500 mt-1">{event.location} · {event.type}</p>
                <p className="text-sm text-enervit-gray-500 mt-2 line-clamp-2">{event.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
