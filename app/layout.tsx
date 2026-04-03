import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { LangProvider } from "../lib/context";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YmasTech — Built to Perform.",
  description: "Empresa moçambicana de desenvolvimento de software. Criamos sistemas Web, Mobile e Desktop para negócios que querem crescer.",
  keywords: ["desenvolvimento de software", "moçambique", "web", "mobile", "desktop", "SaaS", "Maputo"],
  authors: [{ name: "YmasTech" }],
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    url: "https://ymastech.co.mz",
    siteName: "YmasTech",
    title: "YmasTech — Built to Perform.",
    description: "Tecnologia inteligente para negócios que crescem sem limites. Desenvolvimento Web, Mobile e Desktop em Moçambique.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YmasTech — Built to Perform.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YmasTech — Built to Perform.",
    description: "Tecnologia inteligente para negócios que crescem sem limites.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <LangProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}