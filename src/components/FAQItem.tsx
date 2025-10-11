'use client';

import { useState } from 'react';

// Componente do ícone de expandir/recolher
const AccordionIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-6 h-6 text-gray-500 transition-transform duration-300 transform ${isOpen ? 'rotate-45' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-6-6h12" />
  </svg>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // IDs únicos para acessibilidade
  const questionId = `faq-question-${question.replace(/\s+/g, '-')}`;
  const answerId = `faq-answer-${question.replace(/\s+/g, '-')}`;

  return (
    <div className="border-b border-gray-200 py-6">
      <h3>
        <button
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={answerId}
          id={questionId}
          className="flex w-full items-center justify-between text-left text-lg font-medium text-[#000046] focus:outline-none"
        >
          <span className="flex-1 pr-4">{question}</span>
          <AccordionIcon isOpen={isOpen} />
        </button>
      </h3>
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="min-h-0">
          <p className="text-base text-gray-600 pt-4 pr-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
