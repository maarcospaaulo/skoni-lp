
import Carousel from './Carousel';

const consortiumTypes = [
  {
    title: 'Imóvel',
    description: 'Conquiste sua casa própria com planos flexíveis e sem juros.',
    imageSrc: '/consorcio-imovel.png',
    link: '#simulador',
  },
  {
    title: 'Veículo',
    description: 'Troque de carro ou compre o seu primeiro com parcelas que cabem no bolso.',
    imageSrc: '/consorcio-carro.png',
    link: '#simulador',
  },
  {
    title: 'Moto',
    description: 'Mais liberdade no seu dia a dia com um consórcio de motocicletas.',
    imageSrc: '/consorcio-moto.png',
    link: '#simulador',
  },
  {
    title: 'Caminhão',
    description: 'Invista no seu negócio com um consórcio para caminhões e frotas.',
    imageSrc: '/consorcio-caminhao.png',
    link: '#simulador',
  },
  {
    title: 'Cirurgia',
    description: 'Cuide da sua saúde e bem-estar com planejamento e segurança financeira.',
    imageSrc: '/consorcio-cirurgia.png',
    link: '#simulador',
  },
  {
    title: 'Viagem',
    description: 'Realize a viagem dos seus sonhos sem apertar o orçamento.',
    imageSrc: '/consorcio-viagem.png',
    link: '#simulador',
  },
];

const TiposConsorcioSection = () => {
  return (
    <section id="tipos-consorcio" className="bg-gray-50 py-16 sm:py-24">
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
