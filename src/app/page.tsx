import Image from 'next/image';
import { CircleCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Educação Financeira e Alavancagem Patrimonial - Comunidade Skoni",
  description:
    "Aprenda a analisar o mercado e construir sua renda passiva através de estratégias reais de alavancagem patrimonial. Entre para nosso grupo VIP e aprenda com especialistas.",
  metadataBase: new URL("https://www.skoni.com.br"),
  openGraph: {
    title: "Educação Financeira e Alavancagem Patrimonial - Comunidade Skoni",
    description:
      "Aprenda a analisar o mercado e construir sua renda passiva através de estratégias reais de alavancagem patrimonial. Entre para nosso grupo VIP e aprenda com especialistas.",
    url: "https://www.skoni.com.br",
    siteName: "Skoni",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Alavancagem Patrimonial",
      },
    ],
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

const Home = () => {

  return (
    <div className="bg-gray-900 text-white font-montserrat">
      {/* Seção 1: Hero */}
      <section className="full-width bg-gray-900 pt-4 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:block relative min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">
              <Image 
                src="/hero.jpeg" 
                alt="Educação e Estratégia Financeira" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit: "cover"}} 
                className="rounded-lg"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-gray-900 to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-900 to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-900 to-transparent"></div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Domine a Estratégia de <span className="block bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-gray-900">Renda Passiva</span> com Análises Reais
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Saia das promessas vazias. Entre para um grupo focado em educação financeira, acompanhamento próximo e alavancagem patrimonial inteligente.
              </p>
              <div className="mt-12 text-center relative">
                <div className="rotating-border-button-wrapper inline-block">
                  <a 
                    href="https://chat.whatsapp.com/J7ZPELbtsNlCH5x3IY7AvQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-gray-900 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 font-bold py-4 px-8 text-lg rounded-lg z-10 inline-block"
                  >
                    Entrar no Grupo VIP de Aprendizado
                  </a>
                </div>
              </div>
              
              <p className="text-sm mt-4 text-center">Vagas limitadas para garantir a qualidade do suporte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: O que você vai encontrar no grupo */}
      <section className="full-width bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Como funciona nossa comunidade:</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div className="flex items-start">
            <CircleCheck className="min-h-7 min-w-7 mr-4 text-amber-400" />
              <div>
                <h3 className="font-semibold text-xl text-amber-400">Educação e Estratégia</h3>
                <p className="text-gray-300">Não enviamos apenas &quot;dicas&quot;. Explicamos a tese por trás de cada movimento de alavancagem para você aprender a decidir sozinho.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CircleCheck className="min-h-7 min-w-7 mr-4 text-amber-400" />
              <div>
                <h3 className="font-semibold text-xl text-amber-400">Análises de Mercado na Prática</h3>
                <p className="text-gray-300">Veja o &quot;como fazer&quot; em tempo real. Analisamos oportunidades semanais de forma técnica e transparente.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CircleCheck className="min-h-7 min-w-7 mr-4 text-amber-400" />
              <div>
                <h3 className="font-semibold text-xl text-amber-400">Tira-Dúvidas Direto no Grupo</h3>
                <p className="text-gray-300">Suas perguntas são respondidas por quem vive o mercado. Esclareça suas dúvidas sobre ativos e estratégias de forma personalizada.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CircleCheck className="min-h-7 min-w-7 mr-4 text-amber-400" />
              <div>
                <h3 className="font-semibold text-xl text-amber-400">Networking Qualificado</h3>
                <p className="text-gray-300">Troque experiências com outros investidores que buscam o mesmo objetivo: independência financeira com segurança.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção: Sobre Lorrana Pires */}
      <section className="full-width bg-gray-900 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                <Image 
                  src="/hero.jpeg" // Usando a mesma imagem por enquanto, o ideal seria uma foto de perfil
                  alt="Lorrana Pires"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-400">Quem te guiará nessa jornada?</h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Olá, eu sou <strong>Lorrana Pires</strong>. Minha relação com o mercado financeiro não começou ontem; sou uma entusiasta e investidora por vocação desde a adolescência, movida por um interesse genuíno em como o dinheiro pode trabalhar por nós.
                </p>
                <p>
                  Com mais de <strong>5 anos de experiência no mercado financeiro</strong>, sou <strong>Engenheira Civil pela UFMG</strong> e uni minha paixão pelos investimentos à minha expertise técnica como <strong>especialista em Inteligência de Negócios (BI) e Gestão de Projetos</strong>.
                </p>
                <p>
                  A Skoni nasceu do meu desejo de simplificar o que parece complexo. No nosso grupo, eu trago essa visão analítica e estratégica para que você possa entender o mercado de forma clara, sem promessas milagrosas, mas com foco em resultados reais e consistentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Chamada Final (Call to Action) */}
      <section className="full-width bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Aprenda a construir sua liberdade financeira.
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            As vagas são limitadas para que eu consiga garantir a qualidade do acompanhamento e responder às dúvidas de cada membro pessoalmente.
          </p>
          <a 
            href="https://chat.whatsapp.com/J7ZPELbtsNlCH5x3IY7AvQ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-gray-900 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 font-bold py-4 px-10 rounded-lg text-xl inline-block transition-transform hover:scale-105"
          >
            Quero minha vaga na comunidade Skoni
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;