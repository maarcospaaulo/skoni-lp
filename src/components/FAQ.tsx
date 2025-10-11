import React from 'react';
import FAQItem from './FAQItem'; // Importando o novo Client Component

// Define a interface para cada item do FAQ para garantir a tipagem estrita
interface FAQData {
  question: string;
  answer: string;
}

// Dados das perguntas e respostas
const faqData: FAQData[] = [
  {
    question: 'O que é consórcio e como funciona na Skoni?',
    answer: 'O consórcio é uma forma de comprar imóvel, carro, moto, cirurgia ou viagem sem pagar juros abusivos. Na Skoni, você entra em um grupo, paga parcelas mensais e pode ser contemplado por sorteio ou lance. É planejamento financeiro inteligente para conquistar seu objetivo.',
  },
  {
    question: 'Preciso dar entrada para participar de um consórcio Skoni?',
    answer: 'Não é necessário. O consórcio é uma modalidade de compra sem juros e sem entrada.',
  },
  {
    question: 'Posso acelerar a minha contemplação?',
    answer: 'Caso queira acelerar sua contemplação, você pode ofertar um lance, escolhendo o valor ideal. Dar um lance também reduz as parcelas mensais, mas não é uma exigência.',
  },
  {
    question: 'Quantas pessoas são contempladas por mês?',
    answer: 'O número de contemplações mensais é um indicador que a Skoni avalia em todos os atendimentos. Nosso foco é escolher o melhor grupo com o maior número possível de contemplações, podendo chegar a mais de 50 contemplados por mês em um único grupo.',
  },
  {
    question: 'O que é alavancagem patrimonial?',
    answer: 'É uma forma de aumentar seu patrimônio ao mesmo em que recebe um retorno financeiro, por exemplo, depois de contemplar um consórcio imobiliário, você compra um apartamento e coloca para alugar, assim o seu inquilino paga o restante do apartamento para você.',
  },
  {
    question: 'O que é alavancagem financeira?',
    answer: 'É quando você recebe um valor bem mais alto do que o valor que você precisou desembolsar, por exemplo, quando você vende uma carta contemplada, pode lucrar até 900% a mais do que pagou naquela carta.',
  },
  {
    question: 'Quais os diferenciais dos consórcios da Skoni?',
    answer: 'Trabalhamos com cotas sem taxa de adesão, sem fundo de reserva, sem seguro prestamista e sem reajustes anuais. Conseguimos buscar opções em todo o mercado brasileiro, inclusive com parcelas super reduzidas para realizar os seus sonhos o quanto antes!',
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

const FAQ = () => {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Coluna da Esquerda: Título e CTA */}
          <div className="flex flex-col justify-center">
            <p className="text-base font-semibold leading-7 text-[#A43293]">FAQ</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#000046] sm:text-5xl leading-tight">
              Perguntas frequentes
            </h2>
            <a
              href="#contact"
              className="mt-8 inline-block w-auto self-start rounded-full bg-[#C8F466] px-8 py-3 text-center text-lg font-semibold text-[#000046] shadow-sm hover:bg-[#C86236] hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-lime-500 transition-colors duration-300"
            >
              Fale Conosco
            </a>
          </div>

          {/* Coluna da Direita: Acordeão */}
          <div className="mt-12 space-y-0 lg:mt-0">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;