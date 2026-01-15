'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    fbq?: (command: string, ...args: unknown[]) => void;
  }
}

export default function AlavancagemTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Google Analytics
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_location: window.location.href,
        page_title: 'Alavancagem Patrimonial',
      });
    }

    // Facebook Pixel (isso é o que importa)
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    // Evento customizado (opcional, mas bom)
    if (window.fbq) {
      window.fbq('trackCustom', 'ViewAlavancagemPatrimonial');
    }

  }, [pathname]);

  return null;
}