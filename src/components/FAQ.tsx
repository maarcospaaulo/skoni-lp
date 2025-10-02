'use client';

import React, { useState } from 'react';

// Define a interface para cada item do FAQ para garantir a tipagem estrita
interface FAQItem {
  question: string;
  answer: string;
}

// Dados das perguntas e respostas
const faqData: FAQItem[] = [
  {
    question: 'O que é consórcio e como funciona na Skoni?',
    answer: 'O consórcio é uma forma de comprar imóvel, carro, moto, cirurgia ou viagem sem pagar juros abusivos. Na Skoni, você entra em um grupo, paga parcelas mensais e pode ser contemplado por sorteio ou lance. É planejamento financeiro inteligente para conquistar seu objetivo.',
  },
  {
    question: 'Preciso dar entrada para participar de um consórcio Skoni?',
    answer: 'Não é obrigatório. Você pode simular seu consórcio com ou sem entrada, escolhendo o valor ideal. Dar uma entrada reduz as parcelas mensais, mas não é uma exigência.',
  },
  {
    question: 'Quais são as modalidades de consórcio disponíveis?',
    answer: 'A Skoni oferece consórcios para imóveis, veículos, motos, cirurgias estéticas e viagens. Tudo em um só lugar, com taxas competitivas e flexibilidade de prazo.',
  },
  {
    question: 'Como funciona a contemplação no consórcio Skoni?',
    answer: 'A contemplação acontece quando você é sorteado ou oferece um lance vencedor. Nesse momento, você recebe a carta de crédito para usar na compra do bem ou serviço que deseja.',
  },
  {
    question: 'É possível antecipar parcelas ou quitar o consórcio antes do prazo?',
    answer: 'Sim! Você pode antecipar parcelas, reduzir saldo devedor ou até quitar antes do prazo. Essa flexibilidade ajuda a economizar e conquistar seu bem mais rápido.',
  },
];

// Componente do ícone de expandir/recolher
const AccordionIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-6 h-6 text-[#A43293] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const FAQ = () => {
  // Estado para controlar qual item do acordeão está aberto
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#000046] sm:text-4xl">
          Perguntas Frequentes
        </h2>
        <div className="mt-12 space-y-6">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={index} className="bg-slate-50/70 rounded-xl border border-slate-200 shadow-sm">
                <h3>
                  <button
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    id={questionId}
                    className="flex w-full items-center justify-between p-6 text-left text-lg font-medium text-[#000046] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C86236] focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50 rounded-xl"
                  >
                    <span>{item.question}</span>
                    <AccordionIcon isOpen={isOpen} />
                  </button>
                </h3>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="min-h-0">
                    <p className="text-base text-[#000046] px-6 pb-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
