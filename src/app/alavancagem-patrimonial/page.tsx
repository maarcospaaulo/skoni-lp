'use client';

import { useRef, useCallback, useEffect, useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AlavancagemPatrimonialPage = () => {
  const testimonials = useMemo(
    () => [
      {
        name: 'João Silva',
        text: 'Este grupo mudou minha vida! Aprendi a investir com confiança e já vejo os resultados.',
      },
      {
        name: 'Maria Oliveira',
        text: 'As mentorias em grupo são incríveis e o conteúdo é muito prático. Recomendo para todos que querem crescer financeiramente.',
      },
      {
        name: 'Carlos Souza',
        text: 'Finalmente entendi como fazer o dinheiro trabalhar para mim. O grupo é direto ao ponto e muito eficaz.',
      },
      {
        name: 'Ana Costa',
        text: 'Um investimento que vale cada centavo. As estratégias ensinadas na comunidade são poderosas e fáceis de aplicar.',
      },
    ],
    [],
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth,
      );
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollability(); // Initial check
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);

      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, [checkScrollability, testimonials]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth / 1; // Scrolls one card at a time for mobile
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {/* Seção 1: Hero */}
      <section className="full-width bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:block relative">
              <img src="/hero.jpeg" alt="Hero Image" className="w-full h-auto rounded-lg" />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-gray-900 to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-900 to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-900 to-transparent"></div>
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Comunidade Renda Passiva
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Junte-se ao nosso grupo exclusivo no WhatsApp e aprenda as
                estratégias para gerar renda passiva de forma inteligente e
                consistente.
              </p>
              <button className="bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 text-gray-900 hover:from-yellow-400 hover:via-yellow-600 hover:to-yellow-800 font-bold py-4 px-8 text-lg rounded-lg">
                Quero entrar no grupo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: O curso foi feito para você que… */}
      <section className="full-width bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Este grupo é para você que…
                <span className="text-yellow-300">…</span>
              </h2>
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-3xl font-bold text-yellow-300 mr-4">01</div>
                  <div>
                    <h3 className="font-semibold text-xl">Busca liberdade financeira:</h3>
                    <p className="text-gray-300">Quer aprender a criar fontes de renda que não dependem do seu tempo.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl font-bold text-yellow-300 mr-4">02</div>
                  <div>
                    <h3 className="font-semibold text-xl">Quer fazer o dinheiro trabalhar para você:</h3>
                    <p className="text-gray-300">Deseja dominar estratégias de renda passiva e ver seu capital crescer.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl font-bold text-yellow-300 mr-4">03</div>
                  <div>
                    <h3 className="font-semibold text-xl">Procura um caminho claro:</h3>
                    <p className="text-gray-300">Cansado de informações confusas e busca um método comprovado.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl font-bold text-yellow-500 mr-4">04</div>
                  <div>
                    <h3 className="font-semibold text-xl">Almeja um futuro tranquilo:</h3>
                    <p className="text-gray-300">Sonha com a liberdade de viver de renda e realizar seus maiores objetivos.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl font-bold text-yellow-500 mr-4">05</div>
                  <div>
                    <h3 className="font-semibold text-xl">Está pronto para a ação:</h3>
                    <p className="text-gray-300">Quer fazer parte de uma comunidade e aplicar um plano de ação vencedor.</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg">
                  Entrar na comunidade
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6: Depoimentos */}
      <section className="full-width bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            O que dizem os membros do nosso grupo
            <span className="text-yellow-400">.</span>
          </h2>
          <div className="relative">
            <div className="flex justify-center mb-4 md:hidden">
              {' '}
              {/* Mobile arrows */}
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 p-2 rounded-full disabled:opacity-50"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 p-2 rounded-full ml-2 disabled:opacity-50"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-6"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="snap-center shrink-0 w-11/12 md:w-1/3 bg-gray-800 p-8 rounded-lg"
                >
                  <p className="text-gray-300 mb-4">{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Chamada Final (Call to Action) */}
      <section className="full-width bg-gray-800 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Sua jornada para a renda passiva começa aqui. Vagas limitadas!
          </h2>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-10 rounded-lg text-xl">
            Garantir minha vaga no grupo
          </button>
        </div>
      </section>
    </div>
  );
};

export default AlavancagemPatrimonialPage;