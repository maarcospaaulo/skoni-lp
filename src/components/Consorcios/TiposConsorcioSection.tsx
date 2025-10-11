
import Carousel from './Carousel';

const consortiumTypes = [
  {
    title: 'Imóvel',
    description: 'Planeje a compra da sua <b>casa própria</b>, apartamento ou terreno com o consórcio de imóveis. Uma modalidade de <b>crédito sem juros</b> e com parcelas que cabem no seu orçamento. Ideal para quem busca <b>investir em imóveis</b> de forma segura e econômica.',
    imageSrc: '/consorcio-imovel.png',
    link: 'https://wa.me/5511990143199?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20cons%C3%B3rcio%20de%20Im%C3%B3vel.',
  },
  {
    title: 'Veículo',
    description: 'Compre seu <b>carro novo</b> ou seminovo sem pagar juros abusivos. O consórcio de veículos permite que você escolha o modelo e a marca que desejar, oferecendo <b>planos flexíveis</b> e poder de compra à vista. Acelere a conquista do seu <b>automóvel dos sonhos</b>.',
    imageSrc: '/consorcio-carro.png',
    link: 'https://wa.me/5511990143199?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20cons%C3%B3rcio%20de%20Ve%C3%ADculo.',
  },
  {
    title: 'Moto',
    description: 'Sinta a liberdade sobre duas rodas. O <b>consórcio de motos</b> é a maneira mais inteligente de adquirir sua motocicleta, seja para o dia a dia ou para lazer. Conte com <b>parcelas reduzidas</b> e a flexibilidade para escolher sua <b>moto 0km</b> ou seminova.',
    imageSrc: '/consorcio-moto.png',
    link: 'https://wa.me/5511990143199?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20cons%C3%B3rcio%20de%20Moto.',
  },
  {
    title: 'Caminhão',
    description: 'Invista no crescimento do seu negócio com o <b>consórcio de caminhões</b> e veículos pesados. Renove sua frota, adquira seu primeiro caminhão e aumente sua capacidade logística com <b>crédito facilitado</b> e sem juros. A força que seu <b>negócio precisa</b> para decolar.',
    imageSrc: '/consorcio-caminhao.png',
    link: 'https://wa.me/5511990143199?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20cons%C3%B3rcio%20de%20Caminh%C3%A3o.',
  },
  {
    title: 'Cirurgia',
    description: 'Cuide da sua saúde e bem-estar com o <b>consórcio de serviços</b>. Realize procedimentos estéticos, cirurgias plásticas ou outros <b>cuidados pessoais</b> com planejamento e segurança financeira. Uma forma de <b>investir em você</b> sem comprometer seu orçamento.',
    imageSrc: '/consorcio-cirurgia.png',
    link: 'https://wa.me/5511990143199?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20cons%C3%B3rcio%20para%20Cirurgia.',
  },
  {
    title: 'Viagem',
    description: 'Realize a <b>viagem dos seus sonhos</b> com o consórcio de serviços. Planeje suas férias, intercâmbio ou aquela aventura especial sem se preocupar com os juros do cartão de crédito. <b>Viajar com planejamento</b> financeiro fica muito mais prazeroso.',
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
            Tipos de consórcios
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
