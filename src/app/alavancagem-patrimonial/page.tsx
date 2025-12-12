import { CircleCheck } from 'lucide-react';

const AlavancagemPatrimonialPage = () => {


  return (
    <div className="bg-gray-900 text-white font-montserrat">
      {/* Seção 1: Hero */}
      <section className="full-width bg-gray-900 pt-2 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:block relative">
              <img src="/hero.jpeg" alt="Hero Image" className="w-full h-auto rounded-lg" />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-gray-900 to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-900 to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-900 to-transparent"></div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Aprenda a Gerar Renda Passiva e Transforme sua Vida Financeira
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Junte-se à nossa comunidade exclusiva no WhatsApp e tenha acesso a estratégias, dicas diárias e suporte de especialistas.
              </p>
              <div className="mt-12 text-center">
                <button className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-gray-900 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 font-bold py-4 px-8 text-lg rounded-lg">
                Entrar no Grupo VIP Agora
                </button>
              </div>
              
              <p className="text-sm mt-4 text-center">Vagas limitadas!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: O que você vai encontrar no grupo */}
      <section className="full-width bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">O que você vai encontrar no grupo:</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex items-start">
            <CircleCheck className="h-10 w-10 mr-4 text-amber-400" />
              <div>
                <h3 className="font-semibold text-xl">Estratégias de investimento comprovadas</h3>
                <p className="text-gray-300">Acesse métodos validados para construir e escalar sua renda passiva.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CircleCheck className="h-10 w-10 mr-4 text-amber-400" />
              <div>
                <h3 className="font-semibold text-xl">Análises de mercado semanais</h3>
                <p className="text-gray-300">Receba insights sobre as melhores oportunidades de investimento da semana.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CircleCheck className="h-10 w-10 mr-4 text-amber-400" />
              <div>
                <h3 className="font-semibold text-xl">Sessões de tira-dúvidas ao vivo</h3>
                <p className="text-gray-300">Participe de sessões exclusivas com especialistas para esclarecer suas dúvidas.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CircleCheck className="h-10 w-10 mr-4 text-amber-400" />
              <div>
                <h3 className="font-semibold text-xl">Networking com outros investidores</h3>
                <p className="text-gray-300">Conecte-se com pessoas que compartilham os mesmos objetivos financeiros que você.</p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-gray-900 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 font-bold py-3 px-8 rounded-lg">
              Entrar na comunidade
            </button>
          </div>
        </div>
      </section>

      {/* Seção 5: Chamada Final (Call to Action) */}
      <section className="full-width bg-gray-900 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Sua jornada para a renda passiva começa aqui. Vagas limitadas!
          </h2>
          <button className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-gray-900 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 font-bold py-4 px-10 rounded-lg text-xl">
            Garantir minha vaga no grupo
          </button>
        </div>
      </section>
    </div>
  );
};

export default AlavancagemPatrimonialPage;