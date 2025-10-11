import React from 'react';
import Image from 'next/image';
import {
  Phone, Mail, MessageSquare, Linkedin, Instagram, Facebook 
} from 'lucide-react';

// --- Componentes de Ícone e Links --- //

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <a href={href} className="text-gray-300 transition-colors hover:text-[#A43293] hover:underline">
      {children}
    </a>
  </li>
);

interface ContactLinkProps {
  href: string;
  Icon: React.ElementType;
  text: string;
}

const ContactLink = ({ href, Icon, text }: ContactLinkProps) => (
  <li className="flex items-center">
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 transition-colors hover:text-[#A43293]">
      <Icon size={18} aria-hidden="true" />
      <span>{text}</span>
    </a>
  </li>
);

interface SocialLinkProps {
  href: string;
  Icon: React.ElementType;
  label: string;
}

const SocialLink = ({ href, Icon, label }: SocialLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-300 transition-colors hover:text-[#A43293]">
    <Icon size={24} />
    <span className="sr-only">{label}</span>
  </a>
);

// --- Componente Principal do Footer --- //

const Footer = () => {
  return (
    <footer className="bg-[#000046] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        {/* Grid principal do rodapé */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1: Logo e Descrição */}
          <div className="md:col-span-2 lg:col-span-1">
            <Image
              src="/logo-skoni-2.png"
              alt="Logo da Skoni"
              width={150}
              height={40}
              className="-ml-2" // Ajuste fino de alinhamento
            />
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              A escolha inteligente para construir o seu futuro.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="text-base font-semibold">Navegação</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink href="#sobre">Sobre</FooterLink>
              <FooterLink href="#simulador">Simule agora</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#contato">Contato</FooterLink>
            </ul>
          </div>

          {/* Coluna 3: Suporte e Contato */}
          <div>
            <h3 className="text-base font-semibold">Suporte</h3>
            <ul className="mt-4 space-y-3">
              <ContactLink href="tel:+5511990143199" Icon={Phone} text="(11) 99014-3199" />
              <ContactLink href="https://wa.me/5511990143199" Icon={MessageSquare} text="WhatsApp" />
              <ContactLink href="mailto:contato@skoni.com.br" Icon={Mail} text="contato@skoni.com.br" />
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h3 className="text-base font-semibold">Redes Sociais</h3>
            <div className="mt-4 flex items-center space-x-5">
              <SocialLink href="#" Icon={Linkedin} label="LinkedIn da Skoni" />
              <SocialLink href="#" Icon={Instagram} label="Instagram da Skoni" />
              <SocialLink href="#" Icon={Facebook} label="Facebook da Skoni" />
            </div>
          </div>
        </div>

        {/* Linha inferior com direitos autorais */}
        <div className="mt-16 border-t border-[#DFD2CF]/30 pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Skoni Consórcios. Todos os direitos reservados.</p>
          <a href="#" className="mt-4 block text-sm text-gray-300 transition-colors hover:text-[#A43293] sm:mt-0">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;