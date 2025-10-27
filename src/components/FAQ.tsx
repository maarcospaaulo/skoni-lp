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
    answer: 'O <b>consórcio Skoni</b> é uma forma segura e planejada de adquirir <b>imóveis, veículos, motos, cirurgias estéticas ou viagens</b> sem pagar juros abusivos. Você participa de um grupo, paga <b>parcelas mensais sem entrada</b> e pode ser contemplado por sorteio ou lance, recebendo a <b>carta de crédito</b> para adquirir o bem ou serviço desejado. É a maneira mais inteligente de conquistar seus objetivos com planejamento financeiro.',
  },
  {
    question: 'Preciso dar entrada para participar de um consórcio Skoni?',
    answer: 'Não é necessário dar entrada. No <b>consórcio Skoni</b>, você paga <b>parcelas mensais reduzidas</b> e sem juros, garantindo aquisição planejada de bens ou serviços de forma acessível e segura.',
  },
  {
    question: 'Posso acelerar a minha contemplação?',
    answer: 'Sim! Você pode oferecer um lance no <b>consórcio Skoni</b> para acelerar a contemplação. Dar um lance aumenta suas chances de receber a <b>carta de crédito</b> mais rápido e pode reduzir o número de parcelas, sem ser uma obrigação.',
  },
  {
    question: 'Quantas pessoas são contempladas por mês?',
    answer: 'A Skoni organiza grupos para contemplação mensal, priorizando o maior número possível de participantes. É comum mais de 50 pessoas serem contempladas em um único grupo, garantindo transparência e planejamento financeiro seguro para todos.',
  },
  {
    question: 'O que é alavancagem patrimonial?',
    answer: 'Alavancagem patrimonial é a estratégia de aumentar seu patrimônio usando a <b>carta de crédito</b> do consórcio. Por exemplo, ao contemplar um <b>consórcio imobiliário Skoni</b>, você pode comprar um apartamento e alugá-lo, permitindo que o inquilino pague o restante do bem, criando renda passiva e aumentando seu patrimônio.',
  },
  {
    question: 'O que é alavancagem financeira?',
    answer: 'Alavancagem financeira ocorre quando você obtém retorno superior ao valor investido. Por exemplo, ao vender uma <b>carta de crédito contemplada</b>, você pode lucrar até 900% sobre o valor pago, transformando o consórcio Skoni em uma oportunidade de crescimento financeiro.',
  },
  {
    question: 'Quais os diferenciais dos consórcios da Skoni?',
    answer: 'Os <b>consórcios Skoni</b> não possuem taxa de adesão, fundo de reserva ou seguro prestamista, e são sem reajustes anuais. Buscamos as melhores opções no mercado brasileiro, com <b>parcelas reduzidas</b> para realizar seus sonhos mais rapidamente e com total segurança.',
  },
  {
    question: 'Quais são as modalidades de consórcio disponíveis?',
    answer: 'A Skoni oferece consórcios para <b>imóveis, veículos, motos, cirurgias estéticas e viagens</b>. Todas as modalidades possuem <b>parcelas flexíveis, sem juros e prazos ajustáveis</b>, permitindo planejamento financeiro eficiente e conquista de objetivos de forma segura.',
  },
  {
    question: 'Como funciona a contemplação no consórcio Skoni?',
    answer: 'A <b>contemplação no consórcio Skoni</b> acontece quando você é sorteado ou oferece um lance vencedor. Ao ser contemplado, você recebe a <b>carta de crédito</b> para adquirir o bem ou serviço desejado, com total flexibilidade de uso e segurança financeira.',
  },
  {
    question: 'É possível antecipar parcelas ou quitar o consórcio antes do prazo?',
    answer: 'Sim! No <b>consórcio Skoni</b> você pode antecipar parcelas, reduzir saldo devedor ou quitar o consórcio antes do prazo. Essa flexibilidade permite economizar e conquistar seu bem ou serviço de forma mais rápida e planejada.',
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
              Perguntas Frequentes sobre Consórcio Skoni
            </h2>
            <a
              href="https://wa.me/5511990143199" target="_blank" rel="noopener noreferrer"
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