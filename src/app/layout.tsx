import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skoni | Simulador de Consórcio Online e 100% Gratuito",
  description:
    "Simule seu consórcio de casa, carro, moto, caminhão ou serviços. Na Skoni você descobre o valor das parcelas em segundos e recebe as melhores opções para seu perfil.",
  keywords: [
    "consórcio",
    "simulador de consórcio",
    "consórcio online",
    "consórcio imóvel",
    "consórcio carro",
    "consórcio moto",
    "consórcio caminhão",
    "simulador Skoni",
  ],
  openGraph: {
    title: "Skoni | Simulador de Consórcio Online e 100% Gratuito",
    description:
      "Simule seu consórcio de casa, carro, moto, caminhão ou serviços em segundos com a Skoni.",
    url: "https://seudominio.com",
    siteName: "Skoni",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://www.skoni.com.br/",
        width: 640,
        height: 75,
        alt: "Simulador de Consórcio Skoni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skoni | Simulador de Consórcio Online e 100% Gratuito",
    description:
      "Faça a simulação do seu consórcio em segundos com a Skoni e veja o valor das parcelas agora.",
    images: ["https://www.skoni.com.br/"],
  },
  alternates: {
    canonical: "https://www.skoni.com.br",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}