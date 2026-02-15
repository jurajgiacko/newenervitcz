import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO: 301 redirects from old enervit.cz URLs to new structure
  // Ensures zero 404 errors after migration
  async redirects() {
    return [
      // === AKTUALITY ===
      // Old: /aktualita/{slug} → New: /aktuality/{slug}
      {
        source: "/aktualita/:slug",
        destination: "/aktuality/:slug",
        permanent: true,
      },
      // Old: /aktualita-vyziva/{slug} → New: /magazin/{slug} (nutrition articles → magazine)
      {
        source: "/aktualita-vyziva/:slug",
        destination: "/magazin/:slug",
        permanent: true,
      },
      // Old pagination: /aktuality/0-4 → /aktuality (with page param)
      {
        source: "/aktuality/0",
        destination: "/aktuality",
        permanent: true,
      },
      {
        source: "/aktuality/1",
        destination: "/aktuality",
        permanent: true,
      },
      {
        source: "/aktuality/2",
        destination: "/aktuality",
        permanent: true,
      },
      {
        source: "/aktuality/3",
        destination: "/aktuality",
        permanent: true,
      },
      {
        source: "/aktuality/4",
        destination: "/aktuality",
        permanent: true,
      },

      // === VÝŽIVOVÁ PORADNA → MAGAZÍN ===
      {
        source: "/vyziva",
        destination: "/magazin/vyziva",
        permanent: true,
      },
      {
        source: "/vyzivova-poradna/jak_jist",
        destination: "/magazin/jak-jist-pred-behem-po-sportu",
        permanent: true,
      },
      {
        source: "/vyzivova-poradna/dulezite_pojmy",
        destination: "/magazin/dulezite-pojmy-fyziologie",
        permanent: true,
      },
      {
        source: "/vyzivova-poradna/kde_brat_energii",
        destination: "/magazin/kde-brat-energii",
        permanent: true,
      },
      {
        source: "/vyzivova-poradna/regenerace",
        destination: "/magazin/regenerace-po-sportu",
        permanent: true,
      },
      {
        source: "/vyzivova-poradna/vite_ze",
        destination: "/magazin/vyziva",
        permanent: true,
      },
      // Old pagination: /vyzivova-poradna/vse/0-4
      {
        source: "/vyzivova-poradna/vse/:page",
        destination: "/magazin/vyziva",
        permanent: true,
      },
      // Catch-all for other vyzivova-poradna URLs
      {
        source: "/vyzivova-poradna/:path*",
        destination: "/magazin/vyziva",
        permanent: true,
      },

      // === ENERVIT TEAM → SPORTOVCI ===
      {
        source: "/enervit-team",
        destination: "/sportovci",
        permanent: true,
      },
      {
        source: "/enervit-team/cesti-sportovci",
        destination: "/sportovci/cesti",
        permanent: true,
      },
      {
        source: "/enervit-team/zahranici-sportovci",
        destination: "/sportovci/mezinarodni",
        permanent: true,
      },
      {
        source: "/enervit-team/podporovane-kluby",
        destination: "/sportovci/kluby-a-tymy",
        permanent: true,
      },
      {
        source: "/enervit-team/svazy-a-reprezentace",
        destination: "/sportovci/kluby-a-tymy",
        permanent: true,
      },
      // Old: /sportovec/{slug} → /sportovci/{slug}
      {
        source: "/sportovec/:slug",
        destination: "/sportovci/:slug",
        permanent: true,
      },

      // === KALENDÁŘ → EVENTY ===
      {
        source: "/kalendar",
        destination: "/eventy",
        permanent: true,
      },

      // === ZKUŠENOSTI, KVÍZ, SEMINÁŘE → KOMUNITA ===
      {
        source: "/vase-zkusenosti",
        destination: "/komunita/zkusenosti",
        permanent: true,
      },
      {
        source: "/kviz",
        destination: "/komunita/kviz",
        permanent: true,
      },
      {
        source: "/seminare-o-vyzive",
        destination: "/komunita/seminare",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
