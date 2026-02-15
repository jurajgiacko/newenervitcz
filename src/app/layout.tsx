import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Enervit – Prémiová sportovní výživa | #1 v Itálii od roku 1969",
    template: "%s | Enervit CZ",
  },
  description: "Enervit – vědecky ověřená sportovní výživa pro vytrvalce. Gely, izotoniky, recovery. Systém Before-During-After pro maximální výkon. Oficiální dodavatel Tour de France.",
  keywords: ["sportovní výživa", "enervit", "gely", "izotoniky", "recovery", "cyklistika", "běh", "triatlon"],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://www.enervit.cz",
    siteName: "Enervit CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
