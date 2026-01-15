import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
//import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Quer Fazer Consórcio? Simule Online | Skoni",
  description:
    "Simule consórcio online sem cadastro e veja as parcelas na hora. Receba consultoria gratuita de um especialista para escolher a melhor opção.",
  keywords: [
    "consórcio",
    "simulador de consórcio",
    "consórcio online",
    "consórcio imóvel",
    "consórcio carro",
    "consórcio moto",
    "consórcio caminhão",
    "simulador Skoni",
    "fazer consorcio",
    "consorcio online"
  ],
  metadataBase: new URL("https://www.skoni.com.br"),
  openGraph: {
    title: "Quer Fazer Consórcio? Simule Online | Skoni",
    description:
      "Simule seu consórcio de casa, carro, moto, caminhão ou serviços em segundos com a Skoni.",
    url: "https://www.skoni.com.br",
    siteName: "Skoni",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Simulador de Consórcio Skoni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skoni | Simulador de Consórcio Online e 100% Gratuito",
    description:
      "Simule consórcio online sem cadastro e veja as parcelas na hora. Receba consultoria gratuita de um especialista para escolher a melhor opção.",
    images: ["/banner.png"],
  },
  alternates: {
    canonical: "https://www.skoni.com.br",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "O que é consórcio e como funciona na Skoni?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "O consórcio é uma forma de comprar imóvel, carro, moto, cirurgia ou viagem sem pagar juros abusivos. Na Skoni, você entra em um grupo, paga parcelas mensais e pode ser contemplado por sorteio ou lance. É planejamento financeiro inteligente para conquistar seu objetivo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Preciso dar entrada para participar de um consórcio Skoni?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não é necessário. O consórcio é uma modalidade de compra sem juros e sem entrada.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Posso acelerar a minha contemplação?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Caso queira acelerar sua contemplação, você pode ofertar um lance, escolhendo o valor ideal. Dar um lance também reduz as parcelas mensais, mas não é uma exigência.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quantas pessoas são contempladas por mês?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "O número de contemplações mensais é um indicador que a Skoni avalia em todos os atendimentos. Nosso foco é escolher o melhor grupo com o maior número possível de contemplações, podendo chegar a mais de 50 contemplados por mês em um único grupo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "O que é alavancagem patrimonial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "É uma forma de aumentar seu patrimônio ao mesmo em que recebe um retorno financeiro, por exemplo, depois de contemplar um consórcio imobiliário, você compra um apartamento e coloca para alugar, assim o seu inquilino paga o restante do apartamento para você.",
                  },
                },
                {
                  "@type": "Question",
                  name: "O que é alavancagem financeira?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "É quando você recebe um valor bem mais alto do que o valor que você precisou desembolsar, por exemplo, quando você vende uma carta contemplada, pode lucrar até 900% a mais do que pagou naquela carta.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quais os diferenciais dos consórcios da Skoni?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Trabalhamos com cotas sem taxa de adesão, sem fundo de reserva, sem seguro prestamista e sem reajustes anuais. Conseguimos buscar opções em todo o mercado brasileiro, inclusive com parcelas super reduzidas para realizar os seus sonhos o quanto antes!",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quais são as modalidades de consórcio disponíveis?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A Skoni oferece consórcios para imóveis, veículos, motos, cirurgias estéticas e viagens. Tudo em um só lugar, com taxas competitivas e flexibilidade de prazo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Como funciona a contemplação no consórcio Skoni?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A contemplação acontece quando você é sorteado ou oferece um lance vencedor. Nesse momento, você recebe a carta de crédito para usar na compra do bem ou serviço que deseja.",
                  },
                },
                {
                  "@type": "Question",
                  name: "É possível antecipar parcelas ou quitar o consórcio antes do prazo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim! Você pode antecipar parcelas, reduzir saldo devedor ou até quitar antes do prazo. Essa flexibilidade ajuda a economizar e conquistar seu bem mais rápido.",
                  },
                },
              ],
            }),
          }}
        />
        {children}
        {/* <WhatsAppButton /> */}
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