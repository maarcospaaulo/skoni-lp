
import Link from 'next/link';
import Image from 'next/image';

/**
 * Componente Hero para a página inicial.
 * Apresenta a proposta de valor, um CTA principal e uma imagem ilustrativa.
 */
const Hero = () => {
  return (
    <section
      aria-labelledby="hero-headline"
      className="relative bg-white pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Conteúdo de Texto */}
          <div className="text-center lg:text-left">
            <h1
              id="hero-headline"
              className="text-4xl font-extrabold tracking-tight text-[#000046] sm:text-5xl"
            >
              Quer Fazer Consórcio? Simule Online e Receba Consultoria Gratuita.
            </h1>
            <p className="mt-4 text-lg text-black sm:text-xl">
              Casa, carro, moto, viagem ou até cirurgia. Planos flexíveis que cabem no seu bolso, com orientação de um especialista sem custo.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
              <Link
                href="#simulador"
                className="inline-block rounded-full bg-[#C8F466] px-8 py-3 text-center text-lg font-semibold text-[#000046] shadow-sm hover:bg-[#C86236] hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-lime-500 transition-colors duration-300"
              >
                Simule Agora
              </Link>
              <p className="text-sm text-black">
                ✔ 100% online & rápido | ✔ Sem juros | ✔ Consultoria gratuita
              </p>
            </div>
          </div>

          {/* Imagem */}
          <div className="mt-5 mb-5 lg:mt-0 lg:mb-0">
            <Image
              src="/banner.png"
              alt="Ilustração de um sonho sendo realizado através do consórcio"
              width={600}
              height={400}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 600px"
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
