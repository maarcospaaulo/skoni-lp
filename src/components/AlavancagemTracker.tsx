'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    fbq?: (command: string, ...args: unknown[]) => void;
  }
}

export default function AlavancagemTracker() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Google Analytics PageView
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: 'Alavancagem Patrimonial',
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }

      // Facebook Pixel PageView
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
      
      // Opcional: Evento customizado para identificar a página especificamente no FB
      if (window.fbq) {
        window.fbq('trackCustom', 'ViewAlavancagemPatrimonial', {
          content_name: 'Alavancagem Patrimonial',
          current_url: window.location.href,
          path: window.location.pathname
        });
      }
    }
  }, []);

  return null;
}
