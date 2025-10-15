
import Carousel from './Carousel';

const consortiumTypes = [
  {
    title: 'Consórcio de Imóveis',
    description: 'Planeje a compra da sua <b>casa própria</b>, apartamento ou terreno com o <b>consórcio de imóveis</b>. Uma forma de <b>investir em imóveis</b> de maneira segura, com <b>parcelas acessíveis</b> e <b>crédito sem juros</b>. Ideal para quem deseja conquistar a casa própria ou ampliar seu patrimônio.',
    imageSrc: '/consorcio-imovel.png',
    link: 'https://wa.me/5511990143199?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20cons%C3%B3rcio%20de%20Im%C3%B3vel.',
  },
  {
    title: 'Consórcio de Carros',
    description: 'Adquira seu <b>carro novo</b> ou seminovo com o <b>consórcio de veículos</b> sem pagar juros altos. Escolha a marca e modelo desejado, aproveite <b>planos flexíveis</b> e <b>poder de compra à vista</b>. Uma forma inteligente de conquistar o <b>automóvel dos seus sonhos</b>.',
    imageSrc: '/consorcio-carro.png',
    link: 'https://wa.me/5511990143199?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20cons%C3%B3rcio%20de%20Carro.',
  },
  {
    title: 'Consórcio de Motos',
    description: 'Garanta sua liberdade sobre duas rodas com o <b>consórcio de motos</b>. Ideal para motocicletas 0km ou seminovas, oferece <b>parcelas reduzidas</b> e <b>flexibilidade de escolha</b>. Uma solução econômica e segura para adquirir sua <b>moto dos sonhos</b>.',
    imageSrc: '/consorcio-moto.png',
    link: 'https://wa.me/5511990143199?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20cons%C3%B3rcio%20de%20Moto.',
  },
  {
    title: 'Consórcio de Caminhões',
    description: 'Impulsione o crescimento do seu negócio com o <b>consórcio de caminhões</b> e veículos pesados. Renove sua frota, adquira seu primeiro caminhão e aumente sua logística com <b>crédito facilitado</b> e <b>sem juros</b>. A solução ideal para empresas que buscam expansão segura.',
    imageSrc: '/consorcio-caminhao.png',
    link: 'https://wa.me/5511990143199?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20cons%C3%B3rcio%20de%20Caminh%C3%A3o.',
  },
  {
    title: 'Consórcio de Cirurgia',
    description: 'Cuide da sua saúde e bem-estar com o <b>consórcio de serviços de saúde</b>. Planeje procedimentos estéticos, cirurgias plásticas ou outros <b>cuidados pessoais</b> com segurança financeira. Uma forma de <b>investir em você</b> sem comprometer seu orçamento.',
    imageSrc: '/consorcio-cirurgia.png',
    link: 'https://wa.me/5511990143199?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20cons%C3%B3rcio%20para%20Cirurgia.',
  },
  {
    title: 'Consórcio de Viagem',
    description: 'Realize a <b>viagem dos seus sonhos</b> com o <b>consórcio de serviços</b>. Planeje férias, intercâmbio ou aventuras especiais sem se preocupar com juros do cartão. <b>Viajar com planejamento financeiro</b> torna a experiência mais tranquila e prazerosa.',
    imageSrc: '/consorcio-viagem.png',
    link: 'https://wa.me/5511990143199?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20cons%C3%B3rcio%20para%20Viagem.',
  },
];

const TiposConsorcioSection = () => {
  return (
    <section id="tipos-consorcio" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <p className="text-base font-semibold leading-7 text-[#A43293]">
            Escolha o seu
          </p>
          <h2 className="text-3xl font-extrabold text-[#000046] sm:text-4xl">
            Tipos de consórcios: imóveis, veículos, serviços e viagens para planejar seu futuro.
          </h2>
        </div>
        <div className="mt-12">
          <Carousel items={consortiumTypes} />
        </div>
      </div>
    </section>
  );
};

export default TiposConsorcioSection;
