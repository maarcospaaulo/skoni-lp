import React from 'react';
import { Calculator, BarChart3, SlidersHorizontal, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: Calculator,
    title: 'Passo 1: Simule Online',
    description: 'Insira o valor do crédito que você precisa e veja as parcelas em segundos.',
  },
  {
    icon: BarChart3,
    title: 'Passo 2: Analise as Opções',
    description: 'Compare prazos e valores de parcelas para encontrar o plano que cabe no seu bolso.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Passo 3: Personalize o Plano',
    description: 'Ajuste entrada ou prazo e descubra o plano ideal para sua realidade financeira.',
  },
  {
    icon: MessageSquare,
    title: 'Passo 4: Consultoria Grátis',
    description: 'Gostou da simulação? Fale com nosso especialista e receba orientação gratuita para contratar o consórcio.',
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="bg-[#000046] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold leading-7 text-[#C8F466]">Como Funciona</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simule Seu Consórcio Online em 4 Passos
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Nosso processo é rápido, transparente e pensado para você. Simule seu consórcio e receba consultoria gratuita de especialistas para escolher o plano ideal.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-transparent border-2 border-[#C8F466]">
                  <step.icon className="h-8 w-8 text-[#C8F466]" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-7 text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;