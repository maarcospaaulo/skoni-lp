import React from 'react';

// Componente de Ícone genérico para placeholders
const IconPlaceholder = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div role="img" aria-label={title} className="flex h-12 w-12 items-center justify-center rounded-lg bg-transparent">
    {children}
  </div>
);

// Dados dos benefícios
const benefits = [
  {
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#C8F466]"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
    ),
    title: 'Planejamento Flexível',
    description: 'Escolha valores de crédito e prazos de pagamento que se encaixam perfeitamente no seu orçamento.',
  },
  {
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#C8F466]"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
    ),
    title: 'Taxas Competitivas',
    description: 'Nossa taxa de administração é significativamente menor que os juros de financiamentos tradicionais.',
  },
  {
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#C8F466]"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
    ),
    title: 'Diversas Finalidades',
    description: 'Use seu crédito para imóveis, veículos, motos, cirurgias plásticas, viagens e muito mais.',
  },
  {
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#C8F466]"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    ),
    title: 'Transparência Total',
    description: 'Simule seu consórcio de forma clara, sem taxas escondidas ou surpresas no contrato.',
  },
];

const Benefits = () => {
  const sectionTitleId = 'benefits-title';

  return (
    <section id="beneficios" aria-labelledby={sectionTitleId} className="bg-[#000046] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold leading-7 text-[#C8F466]">Benefícios</p>
          <h2 id={sectionTitleId} className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Por que escolher a Skoni?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Simplificamos o caminho para suas conquistas com um consórcio inteligente, flexível e transparente.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                tabIndex={0}
                className="flex flex-col p-6 bg-transparent rounded-2xl border border-[#C8F466]/30 transition-all duration-300 hover:border-[#C8F466] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C8F466]/50"
              >
                <div className="flex items-center gap-4">
                  <IconPlaceholder title={benefit.title}>
                    <benefit.Icon />
                  </IconPlaceholder>
                  <h3 className="text-lg font-semibold leading-6 text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-6 text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;