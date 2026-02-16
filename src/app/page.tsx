import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import AthleteCard from "@/components/AthleteCard";
import ArticleCard from "@/components/ArticleCard";
import { products } from "@/data/products";
import { getFeaturedAthletes } from "@/data/athletes";
import { getFeaturedArticles, events } from "@/data/articles";

export default function Home() {
  const featuredAthletes = getFeaturedAthletes();
  const featuredArticles = getFeaturedArticles();
  const topProducts = products.filter((p) =>
    ["carbo-gel-orange", "carbo-gel-lemon-sodium", "isotonic-drink", "recovery-drink", "magic-cherry", "competition-bar", "carbogel-neutral", "liquid-gel"].includes(p.slug)
  );
  const upcomingEvents = events.filter((e) => e.upcoming).slice(0, 3);

  return (
    <>
      {/* ═══════════════════════════════════════════════ */}
      {/* HERO - Pogačar celebration */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="relative bg-enervit-black overflow-hidden min-h-[85vh] flex items-center">
        <img
          src="/images/lifestyle/pogacar-cycling.jpg"
          alt="Tadej Pogačar celebrates at Tour de France"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-enervit-black via-enervit-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-enervit-black/80 via-transparent to-enervit-black/20" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-enervit-red rounded-full animate-pulse" />
              #1 sportovní výživa v Itálii od roku 1969
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight">
              Fueled by<br />
              <span className="text-enervit-red">Science.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-lg leading-relaxed">
              Prémiová sportovní výživa s italskou tradicí. Vědecky ověřený systém Before&ndash;During&ndash;After pro váš nejlepší výkon.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/produkty" className="inline-flex items-center gap-2 bg-enervit-red text-white font-semibold px-8 py-4 rounded-full hover:bg-enervit-red-dark transition-colors text-sm">
                Prozkoumat produkty
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/o-enervitu" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-colors text-sm border border-white/20">
                Náš příběh
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* BEFORE - DURING - AFTER with lifestyle photos */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-enervit-black">Systém výživy pro sportovce</h2>
            <p className="text-enervit-gray-500 mt-3 max-w-2xl mx-auto">Každý moment ve sportu vyžaduje specifickou výživu. Objevte systém Before–During–After používaný profesionály včetně týmů Tour de France.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Before - gym prep */}
            <Link href="/produkty/pred-sportem" className="group relative rounded-3xl overflow-hidden h-80 md:h-96">
              <img src="/images/lifestyle/Enervit_PurePro_GPH_3.jpg" alt="Pre-workout příprava v gymu" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  BEFORE
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Před sportem</h3>
                <p className="text-sm text-white/70 leading-relaxed">Připravte tělo na výkon. Naplňte zásoby glykogenu a zajistěte optimální hydrataci.</p>
                <div className="mt-4 text-sm font-semibold text-emerald-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Prozkoumat <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
            {/* During - cycling action */}
            <Link href="/produkty/behem-sportu" className="group relative rounded-3xl overflow-hidden h-80 md:h-96">
              <img src="/images/lifestyle/pogacar-tour-banner.jpg" alt="Tadej Pogačar na Tour de France" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 bg-enervit-red text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  DURING
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Během sportu</h3>
                <p className="text-sm text-white/70 leading-relaxed">Doplňte energii na trati. Technologie C2:1PRO pro vstřebání až 90g sacharidů/h.</p>
                <div className="mt-4 text-sm font-semibold text-enervit-red flex items-center gap-1 group-hover:gap-2 transition-all">
                  Prozkoumat <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
            {/* After - Sinner winning */}
            <Link href="/produkty/po-sportu" className="group relative rounded-3xl overflow-hidden h-80 md:h-96">
              <img src="/images/lifestyle/sinner-usopen.jpg" alt="Jannik Sinner slaví vítězství na US Open" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  AFTER
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Po sportu</h3>
                <p className="text-sm text-white/70 leading-relaxed">Regenerujte a posilte svaly. V anabolickém okně maximalizujte vstřebání živin.</p>
                <div className="mt-4 text-sm font-semibold text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Prozkoumat <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* NOVINKY 2026 */}
      {/* ═══════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════ */}
      {/* LIFESTYLE BANNER - Gym atmosphere with video */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="relative bg-enervit-black overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left - Video / Magic Cherry promo */}
          <div className="relative overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/lifestyle/magic-cherry-video-cover.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/magic-cherry-teaser.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-enervit-black/50 lg:to-enervit-black" />
          </div>
          {/* Right - Content */}
          <div className="relative z-10 flex items-center p-8 sm:p-12 lg:p-16">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-enervit-red uppercase tracking-wider mb-4">
                <span className="w-8 h-px bg-enervit-red" />
                Bestseller 2025/2026
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Magic<br />Cherry
              </h2>
              <p className="text-white/70 mt-4 max-w-md leading-relaxed">
                Koncentrát z višní Montmorency bohatý na antioxidanty. Pomáhá redukovat zánět a zlepšuje kvalitu spánku. Nejrychleji vyprodaný produkt Enervit v CZ/SK historii.
              </p>
              <Link href="/produkty/magic-cherry" className="inline-flex items-center gap-2 bg-enervit-red text-white font-semibold px-7 py-3.5 rounded-full hover:bg-enervit-red-dark transition-colors text-sm mt-6">
                Zjistit více
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* BESTSELLERY */}
      {/* ═══════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════ */}
      {/* PURE PRO LIFESTYLE STRIP */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 h-48 sm:h-64">
          <div className="relative overflow-hidden">
            <img src="/images/lifestyle/Enervit_PurePro_GPH_80.jpg" alt="Pure Pro Plant Protein" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="relative overflow-hidden">
            <img src="/images/lifestyle/Enervit_PurePro_GPH_48.jpg" alt="Pure Pro Electrolytes v gymu" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="relative overflow-hidden hidden sm:block">
            <img src="/images/lifestyle/Enervit_PurePro_GPH_5.jpg" alt="Pure Pro Isolate na závažích" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="relative overflow-hidden hidden sm:block">
            <img src="/images/lifestyle/Enervit_PurePro_GPH_9.jpg" alt="Pure Pro Clear Whey" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-enervit-black/20 pointer-events-none" />
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SPORTOVCI */}
      {/* ═══════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════ */}
      {/* SCIENCE + LIFESTYLE SPLIT */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - content */}
          <div className="flex items-center p-8 sm:p-12 lg:p-16 lg:pr-20">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-enervit-red uppercase tracking-wider mb-4">
                <span className="w-8 h-px bg-enervit-red" />
                Věda za výkonem
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-enervit-black leading-tight">
                C2:1PRO<br />Technologie
              </h2>
              <p className="text-enervit-gray-500 mt-4 leading-relaxed">
                Maltodextrin a fruktóza v poměru 2:1 umožňuje vstřebávání až 90g sacharidů za hodinu – o 50 % více než běžné gely. Vyvinuto s UAE Team Emirates a testováno na Tour de France.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-3 bg-enervit-gray-100 rounded-xl">
                  <div className="text-2xl font-bold text-enervit-red">90g</div>
                  <div className="text-[10px] text-enervit-gray-500 mt-1">sacharidů/h</div>
                </div>
                <div className="text-center p-3 bg-enervit-gray-100 rounded-xl">
                  <div className="text-2xl font-bold text-enervit-black">2:1</div>
                  <div className="text-[10px] text-enervit-gray-500 mt-1">poměr</div>
                </div>
                <div className="text-center p-3 bg-enervit-gray-100 rounded-xl">
                  <div className="text-2xl font-bold text-enervit-black">+50%</div>
                  <div className="text-[10px] text-enervit-gray-500 mt-1">absorpce</div>
                </div>
              </div>
              <Link href="/produkty" className="inline-flex items-center gap-2 text-sm font-semibold text-enervit-red hover:underline mt-6">
                Celá řada C2:1PRO <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
          {/* Right - lifestyle image */}
          <div className="relative h-80 lg:h-auto min-h-[400px]">
            <img
              src="/images/lifestyle/Enervit_PurePro_GPH_6.jpg"
              alt="Enervit produkty v prostředí fitness gymu"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20 lg:to-white" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* MAGAZÍN */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-enervit-gray-100">
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

      {/* ═══════════════════════════════════════════════ */}
      {/* TRUST BAR */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="py-10 sm:py-14 bg-white border-y border-gray-200">
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

      {/* ═══════════════════════════════════════════════ */}
      {/* EVENTY */}
      {/* ═══════════════════════════════════════════════ */}
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
