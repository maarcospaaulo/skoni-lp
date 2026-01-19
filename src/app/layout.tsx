import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "Skoni | Renda Passiva com Alavancagem Patrimonial",
  description:
    "Aprenda a gerar renda passiva através de alavancagem patrimonial e transforme sua vida financeira.",
  keywords: [
    "renda passiva",
    "alavancagem patrimonial",
    "investimento",
    "consórcio",
    "skoni"
  ],
  metadataBase: new URL("https://www.skoni.com.br"),
  openGraph: {
    title: "Skoni | Renda Passiva com Alavancagem Patrimonial",
    description:
      "Aprenda a gerar renda passiva através de alavancagem patrimonial e transforme sua vida financeira.",
    url: "https://www.skoni.com.br",
    siteName: "Skoni",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Skoni Alavancagem Patrimonial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skoni | Renda Passiva com Alavancagem Patrimonial",
    description:
      "Aprenda a gerar renda passiva através de alavancagem patrimonial e transforme sua vida financeira.",
    images: ["/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "aEIJ0EtWt7UaqA0y9jhq8jbrh5FNuIvOFrfwuGtwXiw",
  },
  icons: {
    icon: "/favicon.png",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.skoni.com.br/#organization",
              name: "Skoni",
              url: "https://www.skoni.com.br",
              logo: "/logo-skoni.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Barão de Cotegipe",
                addressLocality: "Ribeirão Preto",
                addressRegion: "SP",
                postalCode: "14050-420",
                addressCountry: "BR",
              },
            }),
          }}
        />
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KV1XGX8P0P"
        />
        {/* Google Analytics */}
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KV1XGX8P0P');
          `}
        </Script>
      </body>
    </html>
  );
}
