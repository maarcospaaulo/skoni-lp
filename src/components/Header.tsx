"use client";

import { useState } from 'react';
import Link from 'next/link';

import Image from 'next/image';

// Array para os itens do menu para evitar repetição de código (DRY)
const menuItems = [
  { title: "Como funciona", href: "#como-funciona" },
  { title: "Simulador", href: "#simulador" },
  { title: "Benefícios", href: "#beneficios" },
  { title: "FAQ", href: "#faq" },
  { title: "Contato", href: "#contato" },
];

/**
 * Header principal da aplicação Skoni.
 * 
 * Este é um Client Component ("use client") porque precisa usar o hook `useState`
 * para gerenciar o estado do menu mobile (aberto/fechado).
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Marca */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Página inicial da Skoni">
              <Image
                src="/logo-skoni.png"
                alt="Logo da Skoni"
                width={150}
                height={40}
                priority
                fetchPriority="high" 
              />
            </Link>
          </div>

          {/* Menu Desktop - visível em telas médias e maiores */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-black hover:text-[#A43293] focus:text-[#A43293] focus:outline-none transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Botão CTA Desktop */}
          <div className="hidden md:block">
            <Link
              href="#simulador"
              className="bg-[#A43293] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-[#8e2b7f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A43293]"
            >
              Simule Agora
            </Link>
          </div>

          {/* Botão Hamburger - visível apenas em telas pequenas */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#000046] hover:text-white hover:bg-[#A43293] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              // Controla a acessibilidade, informando se o menu está expandido ou não
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <span className="sr-only">Abrir menu principal</span>
              {/* Ícone de Hamburger ou X, dependendo do estado do menu */}
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile - aparece/desaparece com base no estado `isMenuOpen` */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
                  className="text-black hover:text-white hover:bg-[#A43293] block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.title}
                </Link>
              ))}
              {/* Botão CTA Mobile */}
              <div className="mt-4">
                <Link
                  href="#simulador"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-[#A43293] text-white px-4 py-2 rounded-full text-base font-medium transition-colors duration-300 hover:bg-[#8e2b7f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Simule Agora
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
