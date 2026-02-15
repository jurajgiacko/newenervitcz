export type ArticleCategory = "vyziva" | "treninky" | "rozhovory" | "recenze" | "eventy";

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  categoryLabel: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const articleCategoryLabels: Record<ArticleCategory, string> = {
  vyziva: "Výživa",
  treninky: "Tréninky",
  rozhovory: "Rozhovory",
  recenze: "Recenze",
  eventy: "Eventy",
};

export const articles: Article[] = [
  {
    slug: "jak-jist-pred-behem-po-sportu",
    title: "Jak jíst před, během a po sportu",
    category: "vyziva",
    categoryLabel: "Výživa",
    excerpt: "Kompletní průvodce výživou pro sportovce – co jíst a pít v jednotlivých fázích výkonu pro maximální výkon a regeneraci.",
    content: `Správné načasování výživy je klíčem k optimálnímu sportovnímu výkonu. V tomto článku vám přiblížíme osvědčený systém Before-During-After, který používají profesionální sportovci po celém světě.

## Před sportem (2-3 hodiny)
Zaměřte se na snadno stravitelné sacharidy s nízkým obsahem vlákniny. Ideální je kombinace sacharidů a malého množství bílkovin. Vyhněte se tučným jídlům a potravinám bohatým na vlákninu.

**Doporučené produkty:** Pre Sport Energy Bar, Pre Sport Jelly, Carbo Loader

## Během sportu
Při výkonech delších než 60 minut je nutné průběžně doplňovat energii. Cílem je příjem 30-90g sacharidů za hodinu v závislosti na intenzitě a délce výkonu.

**Doporučené produkty:** C2:1PRO Carbo Gel, Isotonic Drink, C2:1PRO Carbo Bar

## Po sportu (do 30 minut)
Takzvané "anabolické okno" je období po výkonu, kdy je tělo nejvíce receptivní pro vstřebávání živin. Kombinace sacharidů a bílkovin v poměru 3:1 je ideální.

**Doporučené produkty:** R1 Sport Recovery Drink, Protein Bar Recovery`,
    author: "Equipe Enervit",
    date: "2026-01-15",
    readTime: "8 min",
    image: "/images/articles/pred-behem-po.jpg",
    tags: ["výživa", "before-during-after", "průvodce"],
    featured: true,
  },
  {
    slug: "dulezite-pojmy-fyziologie",
    title: "Důležité pojmy a fyziologie pro sportovce",
    category: "vyziva",
    categoryLabel: "Výživa",
    excerpt: "Porozumějte svému tělu – glykogen, laktát, VO2max a další pojmy, které by měl znát každý vytrvalec.",
    content: `Abyste mohli optimalizovat svou sportovní výživu, je užitečné rozumět základním fyziologickým procesům.

## Glykogen
Ve formě glykogenu je v těle uložena sacharidová zásoba energie. Svalový glykogen je primárním zdrojem energie při intenzivním cvičení.

## Laktátový práh
Intenzita, při které začne laktát v krvi stoupat nad bazální hodnoty. Trénink na tomto prahu zlepšuje vytrvalostní výkon.

## VO2max
Maximální spotřeba kyslíku – ukazatel aerobní zdatnosti. Čím vyšší, tím lepší potenciál pro vytrvalostní výkon.`,
    author: "Equipe Enervit",
    date: "2026-01-10",
    readTime: "6 min",
    image: "/images/articles/fyziologie.jpg",
    tags: ["fyziologie", "vzdělávání", "glykogen"],
  },
  {
    slug: "kde-brat-energii",
    title: "Kde brát energii pro vytrvalostní sport?",
    category: "vyziva",
    categoryLabel: "Výživa",
    excerpt: "Tuky nebo sacharidy? Gely nebo tyčinky? Průvodce zdroji energie pro různé intenzity a délky výkonu.",
    content: `Lidské tělo má k dispozici dva hlavní zdroje energie pro sportovní výkon: sacharidy a tuky. Pochopení jejich využití je klíčem k optimální sportovní výživě.

## Sacharidy – rychlá energie
Při vyšší intenzitě (nad 70% VO2max) tělo preferuje sacharidy. Zásoby glykogenu vydrží na přibližně 90 minut intenzivního výkonu.

## Tuky – vytrvalostní energie
Při nižší intenzitě tělo více využívá tuky. Zásoby tuků jsou prakticky nevyčerpatelné, ale metabolismus tuků je pomalejší.

## C2:1PRO technologie
Enervit C2:1PRO využívá poměr maltodextrin:fruktóza 2:1, což umožňuje vstřebat až 90g sacharidů za hodinu – o 50% více než při příjmu samotné glukózy.`,
    author: "Simone Bisello",
    date: "2026-01-05",
    readTime: "7 min",
    image: "/images/articles/energie.jpg",
    tags: ["energie", "sacharidy", "C2:1PRO"],
    featured: true,
  },
  {
    slug: "regenerace-po-sportu",
    title: "Regenerace – proč je důležitější, než si myslíte",
    category: "vyziva",
    categoryLabel: "Výživa",
    excerpt: "Regenerace není pasivní odpočinek. Je to aktivní proces, který rozhoduje o vašem dalším výkonu. Naučte se ho maximalizovat.",
    content: `Mnozí sportovci věnují hodiny tréninkům, ale regeneraci podceňují. Přitom právě kvalita regenerace určuje, zda se z tréninku dokážete zlepšit.

## Anabolické okno
Prvních 30-60 minut po výkonu je klíčových. Tělo je v tomto období nejvíce receptivní pro vstřebávání živin.

## Spánek
7-9 hodin kvalitního spánku je základ regenerace. Magic Cherry s přírodním melatoninem pomáhá zlepšit kvalitu spánku.

## Výživa pro regeneraci
Kombinace proteinů (20-30g) a sacharidů (40-60g) v prvních 30 minutách po výkonu maximalizuje obnovu glykogenových zásob a syntézu svalových bílkovin.`,
    author: "Equipe Enervit",
    date: "2025-12-20",
    readTime: "5 min",
    image: "/images/articles/regenerace.jpg",
    tags: ["regenerace", "spánek", "proteiny"],
  },
  {
    slug: "hydratace-a-elektrolyty",
    title: "Hydratace a elektrolyty – proč nestačí jen voda",
    category: "vyziva",
    categoryLabel: "Výživa",
    excerpt: "Už ztráta 1% tělesné vody snižuje výkon. Proč je izotonický nápoj lepší než čistá voda a jak správně doplňovat elektrolyty.",
    content: `Tělo je minimálně ze 60% tvořeno tekutinou. Při sportu dochází k výrazným ztrátám tekutin a minerálů potem. Správná hydratace je kritická pro výkon i zdraví.

## Proč ne jen voda?
Čistá voda neobsahuje minerály, které potem ztrácíte – především sodík, draslík a hořčík. Navíc hypotonický nápoj se vstřebává pomaleji než izotonický.

## Izotonické nápoje
Osmolalita blízká krevní plazmě zajišťuje nejrychlejší možné vstřebání tekutin a minerálů.

## Nový Electrolyte RTD
Revoluční elektrolytový nápoj v plechovce – bez kofeinu, bez cukru, s přírodní příchutí. Sodík 200mg, hořčík 150mg, draslík 40mg. Jemná karbonatace pomáhá otevřít žaludek.`,
    author: "Simone Bisello",
    date: "2025-12-15",
    readTime: "6 min",
    image: "/images/articles/hydratace.jpg",
    tags: ["hydratace", "elektrolyty", "sodík"],
    featured: true,
  },
  {
    slug: "5-vyzivovy-tip-jizerska-50-krece",
    title: "5. výživový tip pro Jizerskou 50: Vyzrajte na křeče",
    category: "vyziva",
    categoryLabel: "Výživa",
    excerpt: "Křeče nechce v závodě zažít nikdo. Jaké jsou osvědčené recepty z praxe i z pohledu fyziologie?",
    content: `Křeče jsou noční můrou každého závodníka. V posledním díle seriálu pro Jizerskou 50 se podíváme na to, jak jim předejít.

## Příčiny křečí
Hlavní příčinou je ztráta sodíku potem, dehydratace a svalová únava. Kombinace všech tří faktorů zvyšuje riziko exponenciálně.

## Prevence
- Dostatečný příjem sodíku: min. 200mg na hodinu výkonu
- Průběžná hydratace: 500-750ml za hodinu
- Správný trénink: nepřeceňujte svou aktuální formu

## Produkty Enervit proti křečím
C2:1PRO Carbo Gel Lemon Sodium obsahuje 200mg sodíku v každém gelu. V kombinaci s Isotonic Drinkem získáte kompletní elektrolytovou ochranu.`,
    author: "Equipe Enervit",
    date: "2026-01-26",
    readTime: "5 min",
    image: "/images/articles/krece.jpg",
    tags: ["jizerská 50", "křeče", "sodík", "lyžování"],
  },
  {
    slug: "co-je-glykogen",
    title: "Co je glykogen a k čemu slouží?",
    category: "vyziva",
    categoryLabel: "Výživa",
    excerpt: "Ve formě glykogenu je v těle uložena sacharidová zásoba energie. Jak ji maximalizovat a šetřit?",
    content: `Glykogen je forma uložené glukózy v játrech a svalech. Pro vytrvalostní sportovce je jeho množství a efektivní využívání klíčové.

## Jaterní glykogen
Slouží k udržení hladiny krevního cukru. Kapacita: přibližně 100g.

## Svalový glykogen
Primární zdroj energie pro pracující svaly. Kapacita: 300-500g v závislosti na trénovaností.

## Carbo-loading
Technika maximalizace glykogenových zásob před závodem. 2-3 dny zvýšeného příjmu sacharidů s Carbo Loaderem.`,
    author: "Equipe Enervit",
    date: "2025-11-27",
    readTime: "5 min",
    image: "/images/articles/glykogen.jpg",
    tags: ["glykogen", "fyziologie", "energie"],
  },
  {
    slug: "bilkoviny-pro-vytrvalce",
    title: "Proč jsou bílkoviny důležité i pro vytrvalostní sportovce?",
    category: "vyziva",
    categoryLabel: "Výživa",
    excerpt: "Vytrvalci potřebují téměř stejné množství bílkovin jako siloví sportovci. Proč a kolik?",
    content: `Mnoho vytrvalců podceňuje příjem bílkovin, přitom je potřebují téměř stejně jako siloví sportovci – pro ochranu svalové hmoty a regeneraci.

## Doporučený příjem
Vytrvalostní sportovci: 1.2-1.6g bílkovin na kg tělesné hmoty denně.

## Timing
Nejdůležitější je příjem po tréninku (20-30g kvalitních bílkovin) a rovnoměrné rozložení během dne.`,
    author: "Equipe Enervit",
    date: "2025-12-11",
    readTime: "5 min",
    image: "/images/articles/bilkoviny.jpg",
    tags: ["bílkoviny", "proteiny", "regenerace"],
  },
];

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export const news: NewsItem[] = [
  {
    slug: "jizerska-50-enervit-2026",
    title: "Ve čtvrtek startuje Jizerská 50 a Enervit tam bude pro vás!",
    excerpt: "Závodní program letošního ročníku Jizerské 50 vypukne ve čtvrtek 29. ledna. Enervit je připravený vám pomoci na registracích i v Bedřichově.",
    date: "2026-01-25",
    image: "/images/news/jizerska50.jpg",
  },
  {
    slug: "pripravte-se-na-jizerskou-50",
    title: "Připravte se na Jizerskou 50 včas, pomůžeme vám třeba balíčky na míru",
    excerpt: "Necelé tři týdny do Jizerské 50. Využijte náš speciální seriál o výživě nebo si objednejte balíčky sestavené pro jednotlivé závody.",
    date: "2026-01-12",
    image: "/images/news/jizerska50-prep.jpg",
  },
  {
    slug: "top-produkty-enervit-2025",
    title: "Známe TOP produkty ENERVIT roku 2025",
    excerpt: "Zajímá vás, jakých doplňků ENERVIT se loni prodalo nejvíc? Mrkněte do našich e-shopových statistik!",
    date: "2026-01-07",
    image: "/images/news/top-produkty.jpg",
  },
  {
    slug: "tenisova-sezona-sinnera",
    title: "Tenisová sezóna Jannika Sinnera: S Enervitem za triumfem",
    excerpt: "Rok 2025 – Jannik Sinner vyhrál Australian Open, Wimbledon a Turnaj mistrů s bilancí 58:6. A spoléhal na Enervit.",
    date: "2025-12-08",
    image: "/images/news/sinner-sezona.jpg",
  },
  {
    slug: "electrolyte-rtd-launch",
    title: "NOVINKA: Electrolyte RTD – hydratace v plechovce",
    excerpt: "Představujeme revoluční elektrolytový nápoj. Bez kofeinu, bez cukru, s přírodní příchutí. Trend z USA konečně v Česku.",
    date: "2026-03-15",
    image: "/images/news/electrolyte-rtd-launch.jpg",
  },
];

export interface EventItem {
  slug: string;
  name: string;
  date: string;
  location: string;
  type: string;
  description: string;
  image: string;
  upcoming: boolean;
}

export const events: EventItem[] = [
  {
    slug: "prague-half-marathon-expo-2026",
    name: "Prague Half Marathon Expo",
    date: "26.–28. března 2026",
    location: "Praha",
    type: "Expo stánek",
    description: "Navštivte náš stánek na Prague Half Marathon Expo! Ochutnávky produktů, odborné poradenství a speciální nabídky pro závodníky.",
    image: "/images/events/phm-expo.jpg",
    upcoming: true,
  },
  {
    slug: "bratislava-maraton-2026",
    name: "Bratislava Maratón",
    date: "12. dubna 2026",
    location: "Bratislava, SK",
    type: "Eventový partner",
    description: "Enervit na slovenském flagship běžeckém eventu. SK komunita, trail running angle.",
    image: "/images/events/bratislava.jpg",
    upcoming: true,
  },
  {
    slug: "prague-marathon-2026",
    name: "Prague Marathon Expo",
    date: "1.–3. května 2026",
    location: "Výstaviště Praha 7",
    type: "Expo stánek",
    description: "Největší běžecká akce v Česku. Enervit na Prague Marathon Expo – sampling, poradenství, speciální race packs.",
    image: "/images/events/prague-marathon.jpg",
    upcoming: true,
  },
  {
    slug: "road-classics-palava-2026",
    name: "Road Classics #1 – Pálava",
    date: "16. května 2026",
    location: "Pálava, Jižní Morava",
    type: "Hlavní nutriční partner",
    description: "První závod Road Classics 2026. Enervit jako hlavní nutriční partner zajišťuje kompletní výživu na trati – isotoniky, gely, tyčinky a občerstvení.",
    image: "/images/events/palava.jpg",
    upcoming: true,
  },
  {
    slug: "tour-de-france-2026",
    name: "Tour de France 2026",
    date: "Červen–Červenec 2026",
    location: "Francie",
    type: "Oficiální dodavatel",
    description: "Enervit jako oficiální dodavatel výživy na Tour de France. Sledujte behind-the-scenes content a výživové strategie pro nejnáročnější cyklistický závod na světě.",
    image: "/images/events/tdf.jpg",
    upcoming: true,
  },
  {
    slug: "road-classics-vysocina-2026",
    name: "Road Classics #2 – Vysočina",
    date: "18. července 2026",
    location: "Vysočina",
    type: "Hlavní nutriční partner",
    description: "Druhý závod Road Classics v srdci Vysočiny. Enervit opět jako hlavní nutriční partner.",
    image: "/images/events/vysocina.jpg",
    upcoming: true,
  },
  {
    slug: "jizerska-50-2026",
    name: "Jizerská 50",
    date: "29. ledna – 1. února 2026",
    location: "Bedřichov, Jizerské hory",
    type: "Hlavní nutriční partner (10+ let)",
    description: "Legendární závod v běhu na lyžích. Enervit je hlavním nutričním partnerem už přes 10 let. Stánky na registracích i na stadionu v Bedřichově.",
    image: "/images/events/jizerska50-event.jpg",
    upcoming: false,
  },
];

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}
