export type AthleteType = "international" | "czech" | "club";

export interface Athlete {
  slug: string;
  name: string;
  type: AthleteType;
  sport: string;
  title: string;
  bio: string;
  image: string;
  quote?: string;
  achievements: string[];
  products: string[];
  featured?: boolean;
}

export const athletes: Athlete[] = [
  // INTERNATIONAL
  {
    slug: "tadej-pogacar",
    name: "Tadej Pogačar",
    type: "international",
    sport: "Cyklistika",
    title: "Čtyřnásobný vítěz Tour de France a vítěz Gira d'Italia",
    bio: "Slovinský cyklistický fenomén, který dominuje světové cyklistice. Jezdec týmu UAE Team Emirates, který spoléhá na výživu Enervit při nejtěžších etapách Grand Tours.",
    image: "/images/athletes/pogacar.jpg",
    quote: "Nutrition is the fourth discipline in cycling. With Enervit, I know I have the best fuel.",
    achievements: ["4x vítěz Tour de France", "Vítěz Giro d'Italia", "Mistr světa", "Vítěz Monument klasik"],
    products: ["carbo-gel-lemon-sodium", "isotonic-drink", "recovery-drink"],
    featured: true,
  },
  {
    slug: "jannik-sinner",
    name: "Jannik Sinner",
    type: "international",
    sport: "Tenis",
    title: "Vítěz Australian Open, US Open a Wimbledonu",
    bio: "Italský tenista, světová jednička ATP. V roce 2025 vyhrál tři Grand Slamy a Turnaj mistrů s bilancí 58 výher a 6 porážek – více než 90% úspěšnost.",
    image: "/images/athletes/sinner.jpg",
    achievements: ["Vítěz Australian Open", "Vítěz US Open", "Vítěz Wimbledonu", "Vítěz ATP Finals"],
    products: ["electrolyte-rtd", "carbo-gel-orange", "recovery-drink"],
    featured: true,
  },
  {
    slug: "isaac-del-toro",
    name: "Isaac Del Toro",
    type: "international",
    sport: "Cyklistika",
    title: "Vycházející hvězda UAE Team Emirates",
    bio: "Mladý mexický cyklistický talent v barvách UAE Team Emirates. Označovaný jako 'nový Pogačar'. Enervit ho živí na cestě za prvním Grand Tour vítězstvím.",
    image: "/images/athletes/del-toro.jpg",
    achievements: ["Člen UAE Team Emirates", "Vítěz etap na stage races"],
    products: ["carbo-gel-orange", "competition-bar", "recovery-drink"],
    featured: true,
  },
  {
    slug: "nadia-battocletti",
    name: "Nadia Battocletti",
    type: "international",
    sport: "Atletika",
    title: "Italská běžecká hvězda",
    bio: "Jedna z nejtalentovanějších evropských středně- a dlouhotratových běžkyň. Reprezentuje novou generaci atletiky poháněnou vědou a kvalitní výživou.",
    image: "/images/athletes/battocletti.jpg",
    achievements: ["Medailistka z ME", "Italská rekordmanka"],
    products: ["carbo-gel-lemon-sodium", "pre-sport-jelly", "recovery-drink"],
  },
  {
    slug: "alvar-myhlback",
    name: "Alvar Myhlback",
    type: "international",
    sport: "Běh na lyžích",
    title: "Bronzový medailista z Vasaloppetu",
    bio: "Švédský běžec na lyžích, který dosáhl vynikajících výsledků v nejprestižnějších dálkových závodech na světě.",
    image: "/images/athletes/myhlback.jpg",
    achievements: ["Bronzový medailista Vasaloppet", "Top závodník Visma Ski Classics"],
    products: ["isotonic-drink", "carbo-gel-orange", "recovery-drink"],
  },
  // CZECH
  {
    slug: "barbora-krejcikova",
    name: "Barbora Krejčíková",
    type: "czech",
    sport: "Tenis",
    title: "Vítězka Wimbledonu, French Open a Australian Open ve čtyřhře",
    bio: "Česká tenisová hvězda s kompletní sbírkou grandslamových titulů. Na kurtu spoléhá na výživový systém Enervit pro maximální výkon v klíčových momentech.",
    image: "/images/athletes/krejcikova.jpg",
    achievements: ["Vítězka Wimbledonu", "Vítězka French Open", "Vítězka AO ve čtyřhře"],
    products: ["electrolyte-rtd", "carbo-gel-orange", "recovery-drink"],
    featured: true,
  },
  {
    slug: "vit-prindis",
    name: "Vít Přindiš",
    type: "czech",
    sport: "Vodní slalom",
    title: "Mistr světa a Evropy na divoké vodě",
    bio: "Česká legenda vodního slalomu. Mistr světa i Evropy, který při svých závodech spoléhá na precizní výživový plán s produkty Enervit.",
    image: "/images/athletes/prindis.jpg",
    quote: "S Enervitem vím přesně, co si kdy vzít. Je to systém, kterému důvěřuji.",
    achievements: ["Mistr světa", "Mistr Evropy", "Olympijský medailista"],
    products: ["carbo-gel-lemon-sodium", "isotonic-drink", "recovery-drink"],
    featured: true,
  },
  {
    slug: "radek-jaros",
    name: "Radek Jaroš",
    type: "czech",
    sport: "Horolezectví",
    title: "Profesionální horolezec, držitel Koruny Himálaje",
    bio: "Legenda českého horolezectví. Jako jeden z mála lidí na světě zdolal všech 14 osmitisícovek. V extrémních podmínkách spoléhá na Enervit už více než 10 let.",
    image: "/images/athletes/jaros.jpg",
    quote: "Enervit mi při sportu hodně pomáhá a navíc skvěle chutná.",
    achievements: ["Koruna Himálaje (14x 8000m)", "Profesionální horolezec"],
    products: ["carbo-gel-orange", "hot-bar-chocolate", "isotonic-drink"],
  },
  {
    slug: "helena-karaskova",
    name: "Helena Karásková",
    type: "czech",
    sport: "Triatlon",
    title: "Mistryně světa v zimním i terénním triatlonu (Xterra)",
    bio: "Nejen mistryně světa, ale hlavně sportovkyně, která na Enervit spoléhá přes 7 let a přesně ví, co si kdy vzít.",
    image: "/images/athletes/karaskova.jpg",
    quote: "Na Enervit spoléhám při sportu už 7 let. Vím, co si kdy vzít a že opravdu pomáhá.",
    achievements: ["Mistryně světa v zimním triatlonu", "Mistryně světa Xterra"],
    products: ["carbo-gel-lemon-sodium", "isotonic-drink", "recovery-drink", "magic-cherry"],
  },
  {
    slug: "daniel-havel",
    name: "Daniel Havel",
    type: "czech",
    sport: "Rychlostní kanoistika",
    title: "Mistr světa a dvojnásobný olympijský medailista",
    bio: "Jeden z nejúspěšnějších českých kanoistů v historii. Dva olympijské medaile a titul mistra světa.",
    image: "/images/athletes/havel.jpg",
    achievements: ["Mistr světa", "2x olympijský medailista"],
    products: ["isotonic-drink", "recovery-drink", "creatine"],
  },
  {
    slug: "vit-pavlista",
    name: "Vít Pavlišta",
    type: "czech",
    sport: "Běh",
    title: "Několikanásobný mistr ČR v maratonu a půlmaratonu",
    bio: "Nejlepší český maratónec současnosti. Pravidelný reprezentant na velkých mezinárodních maratonech.",
    image: "/images/athletes/pavlista.jpg",
    achievements: ["Několikanásobný mistr ČR v maratonu", "Několikanásobný mistr ČR v půlmaratonu"],
    products: ["carbo-gel-lemon-sodium", "carboloader", "recovery-drink"],
  },
  {
    slug: "stanislav-rezac",
    name: "Stanislav Řezáč",
    type: "czech",
    sport: "Běh na lyžích",
    title: "Nejlepší český dálkový běžec na lyžích",
    bio: "Legenda českého běhu na lyžích. Pravidelný účastník Jizerské 50 a dalších prestižních dálkových závodů.",
    image: "/images/athletes/rezac.jpg",
    achievements: ["Nejlepší český dálkový běžec na lyžích", "Vícenásobný vítěz Jizerské 50"],
    products: ["isotonic-drink", "carbo-gel-orange", "pre-sport-energy-bar"],
  },
  {
    slug: "laura-samson",
    name: "Laura Samson",
    type: "czech",
    sport: "Tenis",
    title: "Juniorská vítězka Wimbledonu a finalistka French Open",
    bio: "Mladá česká tenisová naděje, která už v juniorském věku dosáhla na grandslamový titul.",
    image: "/images/athletes/samson.jpg",
    achievements: ["Juniorská vítězka Wimbledonu", "Finalistka French Open juniorek"],
    products: ["electrolyte-rtd", "recovery-bar"],
  },
  // CLUBS
  {
    slug: "uae-team-emirates",
    name: "UAE Team Emirates",
    type: "club",
    sport: "Cyklistika",
    title: "Profesionální prvodivizní cyklistická stáj",
    bio: "Jeden z nejúspěšnějších cyklistických týmů na světě. Domov Tadeje Pogačara a Isaaca Del Tora. Enervit je oficiálním dodavatelem výživy.",
    image: "/images/athletes/uae.jpg",
    achievements: ["Mnohonásobný vítěz Tour de France", "Top World Tour tým"],
    products: ["carbo-gel-lemon-sodium", "isotonic-drink", "recovery-drink"],
  },
  {
    slug: "hc-sparta-praha",
    name: "HC Sparta Praha",
    type: "club",
    sport: "Hokej",
    title: "Extraligový hokejový tým",
    bio: "Jeden z nejslavnějších hokejových klubů v České republice. Enervit dodává výživu pro náročné zápasové i tréninkové období.",
    image: "/images/athletes/sparta.jpg",
    achievements: ["Mnohonásobný mistr české extraligy"],
    products: ["isotonic-drink", "recovery-drink"],
  },
  {
    slug: "att-investments",
    name: "ATT Investments Cycling Team",
    type: "club",
    sport: "Cyklistika",
    title: "Kontinentální cyklistický tým",
    bio: "Přední český profesionální cyklistický tým s 3letou partnerskou smlouvou s Enervitem. Společně budujeme zázemí pro rozvoj českého cyklistického talentu.",
    image: "/images/athletes/att.jpg",
    achievements: ["Kontinentální cyklistický tým", "3letý partner Enervit"],
    products: ["carbo-gel-orange", "competition-bar", "isotonic-drink"],
  },
  {
    slug: "fc-viktoria-plzen",
    name: "FC Viktoria Plzeň",
    type: "club",
    sport: "Fotbal",
    title: "Fotbalový klub",
    bio: "Jeden z nejúspěšnějších českých fotbalových klubů s pravidelnými účastmi v evropských pohárech.",
    image: "/images/athletes/plzen.jpg",
    achievements: ["Mnohonásobný mistr české ligy", "Účastník Ligy mistrů"],
    products: ["isotonic-drink", "recovery-drink"],
  },
  {
    slug: "cesky-paralympijsky-vybor",
    name: "Český paralympijský výbor",
    type: "club",
    sport: "Paralympijský sport",
    title: "Hlavní nutriční partner",
    bio: "Enervit je hrdým hlavním nutričním partnerem Českého paralympijského výboru na základě 3leté smlouvy. Podporujeme paralympijské sportovce na jejich cestě za medailemi.",
    image: "/images/athletes/paralympic.jpg",
    achievements: ["3letá partnerská smlouva", "Hlavní nutriční partner"],
    products: ["isotonic-drink", "recovery-drink", "carbo-gel-orange"],
  },
];

export function getAthletesByType(type: AthleteType): Athlete[] {
  return athletes.filter((a) => a.type === type);
}

export function getAthleteBySlug(slug: string): Athlete | undefined {
  return athletes.find((a) => a.slug === slug);
}

export function getFeaturedAthletes(): Athlete[] {
  return athletes.filter((a) => a.featured);
}
