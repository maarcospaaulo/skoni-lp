'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MenuItem {
  title: string;
  href: string;
  target?: string;
  rel?: string;
}

const menuItems: MenuItem[] = [
  { title: 'Como funciona', href: '#como-funciona' },
  { title: 'Simulador', href: '#simulador' },
  { title: 'Benefícios', href: '#beneficios' },
  { title: 'FAQ', href: '#faq' },
  {
    title: 'Contato',
    href: 'https://wa.me/5511990143199',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
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

          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="px-3 py-2 text-sm font-medium text-black transition-colors duration-200 hover:text-[#A43293] focus:text-[#A43293] focus:outline-none"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="#simulador"
              className="rounded-full bg-[#A43293] px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#8e2b7f] focus:outline-none focus:ring-2 focus:ring-[#A43293] focus:ring-offset-2"
            >
              Simule Agora
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#000046] hover:bg-[#A43293] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-[#A43293] hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
              <div className="mt-4">
                <Link
                  href="#simulador"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full rounded-full bg-[#A43293] px-4 py-2 text-center text-base font-medium text-white transition-colors duration-300 hover:bg-[#8e2b7f] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
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

