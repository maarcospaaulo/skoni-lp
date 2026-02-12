'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CircleCheck, ChevronDown, MessageCircle, ShieldCheck, GraduationCap, BarChart3, Users } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-200">{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} text-amber-500`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-gray-900 text-white font-montserrat antialiased">
      {/* Header Fixo */}
      <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 h-20 flex justify-center md:justify-end items-center">
          <a 
            href="https://chat.whatsapp.com/J7ZPELbtsNlCH5x3IY7AvQ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-gray-900 font-bold py-2.5 px-6 rounded-full text-sm transition-transform hover:scale-105 shadow-lg shadow-amber-500/20"
          >
            Entrar na Comunidade
          </a>
        </div>
      </header>

      {/* Seção 1: Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-amber-900/20 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck size={14} /> Comunidade Exclusiva
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold mb-6 leading-tight">
                Domine a Estratégia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Renda Passiva</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl">
                Aprenda a analisar o mercado e construir patrimônio com quem utiliza Inteligência de Dados e Gestão de Projetos para maximizar resultados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://chat.whatsapp.com/J7ZPELbtsNlCH5x3IY7AvQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-gray-900 font-bold py-4 px-10 text-lg rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                >
                  Quero aprender no Grupo VIP
                </a>
              </div>
              <p className="text-sm mt-6 text-gray-500 flex items-center justify-center lg:justify-start gap-2">
                <Users size={16} className="text-amber-500" /> Vagas limitadas para suporte individualizado
              </p>
            </div>

            <div className="order-1 lg:order-2 relative min-h-[400px] lg:min-h-[550px]">
              <Image 
                src="/hero.jpeg" 
                alt="Lorrana Pires - Skoni" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{objectFit: "cover"}} 
                className="rounded-lg"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-gray-900 to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-900 to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-900 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: O Diferencial (Cards) */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que acontece dentro da Comunidade?</h2>
            <p className="text-gray-400">Transformamos dados complexos em decisões simples para o seu bolso.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BarChart3 className="text-amber-500" />,
                title: "Análise Técnica",
                desc: "Entenda o 'porquê' de cada investimento através de dados reais."
              },
              {
                icon: <MessageCircle className="text-amber-400" />,
                title: "Acesso Direto",
                desc: "Tira-dúvidas semanal diretamente com a Lorrana no grupo."
              },
              {
                icon: <GraduationCap className="text-amber-500" />,
                title: "Educação Ativa",
                desc: "Aulas e materiais exclusivos sobre alavancagem patrimonial."
              },
              {
                icon: <ShieldCheck className="text-amber-400" />,
                title: "Transparência",
                desc: "Sem promessas mágicas. Foco total em estratégia e gestão."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-amber-500/50 transition-colors group">
                <div className="mb-4 p-3 rounded-lg bg-gray-800 inline-block group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 3: Sobre Lorrana Pires */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-500"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-500"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/hero.jpeg" 
                    alt="Lorrana Pires"
                    width={600}
                    height={700}
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-xl">
                    <div className="flex items-center gap-4 text-amber-500">
                      <GraduationCap size={32} />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Especialista em</p>
                        <p className="font-bold">Investimentos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Quem te guiará nessa jornada?</h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Olá, eu sou <span className="text-white font-semibold">Lorrana Pires</span>. Minha relação com o mercado financeiro começou cedo, movida pela curiosidade técnica de como grandes patrimônios são construídos e protegidos.
                </p>
                <p>
                  Com <span className="text-amber-500 font-bold">+5 anos de experiência</span>, utilizo o rigor analítico da minha formação em <span className="text-white">Engenharia pela UFMG</span> e minha expertise em <span className="text-white">Business Intelligence</span> para filtrar o ruído do mercado e focar no que realmente traz retorno.
                </p>
                <p>
                  A Skoni não é apenas um grupo de sinais. É o lugar onde eu compartilho a minha visão estratégica de gestão de projetos aplicada às finanças pessoais, para que você tenha clareza e segurança em cada passo.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">+5</p>
                  <p className="text-xs text-gray-500 uppercase tracking-tighter">Anos de Mercado</p>
                </div>
                <div className="w-px h-10 bg-gray-800"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">BI</p>
                  <p className="text-xs text-gray-500 uppercase tracking-tighter">Foco em Dados</p>
                </div>
                <div className="w-px h-10 bg-gray-800"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">UFMG</p>
                  <p className="text-xs text-gray-500 uppercase tracking-tighter">Base Técnica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: FAQ (Quebra de Objeções) */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas Frequentes</h2>
            <p className="text-gray-400">Tudo o que você precisa saber antes de entrar.</p>
          </div>
          
          <div className="bg-gray-800/30 rounded-3xl p-8 border border-gray-800">
            <FAQItem 
              question="Preciso de muito dinheiro para começar?" 
              answer="Não. O foco do grupo é justamente ensinar estratégias de alavancagem e construção de patrimônio. O mais importante é o seu compromisso com o aprendizado."
            />
            <FAQItem 
              question="O grupo é apenas para quem já investe?" 
              answer="De forma alguma. Explicamos as teses de forma didática, ideal tanto para quem está começando do zero quanto para quem já tem experiência e busca uma visão mais técnica."
            />
            <FAQItem 
              question="Quanto tempo preciso dedicar por dia?" 
              answer="As análises e dicas são enviadas de forma objetiva para que você possa consumir em poucos minutos. Você dita o seu ritmo de aprendizado."
            />
            <FAQItem 
              question="Existe algum custo para entrar no grupo?" 
              answer="No momento, o acesso à nossa comunidade no WhatsApp é gratuito, mas as vagas são limitadas para garantir que eu consiga acompanhar a qualidade das interações."
            />
          </div>
        </div>
      </section>

      {/* Seção 5: Chamada Final (CTA) */}
      <section className="py-16 relative overflow-hidden bg-gray-800/50">
        <div className="absolute inset-0 bg-amber-600/5 pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Pronto para transformar sua visão sobre o mercado?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Junte-se a Lorrana Pires e a dezenas de outros investidores focados em resultados reais.
          </p>
          <a 
            href="https://chat.whatsapp.com/J7ZPELbtsNlCH5x3IY7AvQ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium bg-white text-gray-900 hover:bg-amber-500 hover:text-white transition-all font-bold py-5 px-12 rounded-2xl text-xl inline-block shadow-2xl"
          >
            Quero entrar agora (Grátis)
          </a>
          <p className="mt-8 text-gray-500 flex items-center justify-center gap-2">
            <CircleCheck className="text-amber-500" /> Acesso imediato ao grupo
          </p>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="py-10 border-t border-gray-800 text-center text-gray-600 text-sm">
        <div className="container mx-auto px-4">
          <p>© 2026 Skoni. Todos os direitos reservados.</p>
          <p className="mt-2">Educação financeira baseada em dados e estratégia.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;