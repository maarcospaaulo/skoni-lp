
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
              Realize seus sonhos sem juros. Simule seu consórcio em segundos.
            </h1>
            <p className="mt-4 text-lg text-black sm:text-xl">
              Casa, carro, viagem ou até cirurgia. Planos flexíveis que cabem no seu bolso.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
              <Link
                href="#simulador"
                className="group inline-flex items-center justify-center rounded-md px-8 py-3 text-lg font-semibold text-white bg-[#A43293] transition-all duration-300 hover:bg-gradient-to-r from-[#A43293] to-[#000046] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A43293]"
              >
                Simule Agora
                <span className="ml-2 animate-[back-and-forth_1s_ease-in-out_infinite]">→</span>
              </Link>
              <p className="text-sm text-black">
                ✔ 100% online & rápido | ✔ Sem juros | ✔ Confiável
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
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
