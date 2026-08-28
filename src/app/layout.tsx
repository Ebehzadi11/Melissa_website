import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import SmoothScroll from "@/components/SmoothScroll";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { brand } from "@/content/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://melissaoliveira.com"),
  title: "Melissa Oliveira | Commercial Model & UGC Creator",
  description:
    "Melissa Oliveira — commercial model and UGC creator based in São Paulo, Brazil. Campaigns, authentic content for brands and international projects.",
  keywords: [
    "Melissa Oliveira",
    "commercial model",
    "UGC creator",
    "São Paulo",
    "modelo comercial",
    "conteúdo autêntico",
  ],
  openGraph: {
    title: "Melissa Oliveira | Commercial Model & UGC Creator",
    description:
      "Authenticity that connects brands and people. Commercial portfolio, UGC and model card of Melissa Oliveira — São Paulo, Brazil.",
    type: "website",
    images: ["/media/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melissa Oliveira | Commercial Model & UGC Creator",
    description:
      "Authenticity that connects brands and people. Portfolio, UGC and model card.",
    images: ["/media/hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: brand.name,
  jobTitle: ["Commercial Model", "UGC Creator"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: [brand.instagram, brand.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <SmoothScroll />
          <Nav />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
