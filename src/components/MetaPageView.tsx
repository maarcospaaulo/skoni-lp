'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function MetaPageView() {
  const pathname = usePathname();

  useEffect(() => {
    // Verifica se o fbq já existe antes de tentar usar
    if (typeof window !== 'undefined' && window.fbq) {
      // Dispara o PageView padrão, passando explicitamente a localização atual
      // para garantir que o Facebook receba a URL da rota correta.
      window.fbq('track', 'PageView', {
        page_location: window.location.href,
        page_path: pathname
      });
    }
  }, [pathname]);

  return null;
}