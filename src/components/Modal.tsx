'use client';

import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalTitleId = 'modal-title';

  // Efeito para fechar o modal com a tecla Esc
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Não renderiza nada se o modal não estiver aberto
  if (!isOpen) {
    return null;
  }

  return (
    // O container do modal com role de diálogo para acessibilidade
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={modalTitleId}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Overlay semitransparente */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" onClick={onClose} />

      {/* Conteúdo do Modal */}
      <div
        ref={modalRef}
        className="relative m-4 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl sm:p-8 md:m-0"
      >
        <div className="flex items-center justify-between">
          <h2 id={modalTitleId} className="text-2xl font-bold text-[#000046]">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="rounded-full p-1 text-[#000046] transition-colors hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C86236]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
