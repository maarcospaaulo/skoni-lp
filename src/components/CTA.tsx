'use client';

import { useState } from 'react';
import { IMaskInput } from 'react-imask';

const CTA = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isWhatsappValid, setIsWhatsappValid] = useState(false);
  const [errors, setErrors] = useState({ name: '', whatsapp: '' });
  const [isLoading, setIsLoading] = useState(false);

  const validateName = (name: string) => {
    if (!name) return 'Nome é obrigatório.';
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(name)) return 'Nome inválido.';
    return '';
  };

  const validateWhatsapp = (unmaskedValue: string) => {
    if (unmaskedValue.length === 0) return 'WhatsApp é obrigatório.';
    if (unmaskedValue.length < 10) return 'WhatsApp inválido.';
    return '';
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    const error = validateName(newName);
    setErrors(errors => ({...errors, name: error}));
    setIsNameValid(!error);
  };

  const handleWhatsappChange = (value: string, mask: { unmaskedValue: string }) => {
    setWhatsapp(value);
    const unmaskedValue = mask.unmaskedValue;
    const error = validateWhatsapp(unmaskedValue);
    setErrors(errors => ({...errors, whatsapp: error}));
    setIsWhatsappValid(!error);
  };

  const generateWhatsAppLink = () => {
    const message = `Olá, Meu nome é ${name}, e gostaria de mais informações.`;
    return `https://wa.me/5511990143199?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const leadData = { name, phone: whatsapp, source: 'CTA' };

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });
    } catch (error) {
      console.error('Error submitting lead:', error);
    }

    window.location.href = generateWhatsAppLink();
    setIsLoading(false);
  };

  return (
    <section id="cta" className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold leading-7 text-[#A43293]">Atendimento Personalizado</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000046]">
            Fale com um especialista
          </h2>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Preencha os campos abaixo para um de nossos especialistas entrar em contato com você.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="name-cta" className="block text-sm font-medium text-gray-600">Nome</label>
                <input
                type="text"
                id="name-cta"
                value={name}
                onChange={handleNameChange}
                required
                className={`mt-2 block w-full px-4 py-3 bg-white border ${errors.name ? 'border-orange-500' : 'border-gray-300'} rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#000046] focus:border-transparent`}
                />
                {errors.name && <p className="text-xs text-orange-500 mt-1">{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="whatsapp-cta" className="block text-sm font-medium text-gray-600">WhatsApp</label>
                <IMaskInput
                  mask="(00) 00000-0000"
                  value={whatsapp}
                  onAccept={handleWhatsappChange}
                  placeholder="(00) 00000-0000"
                  id="whatsapp-cta"
                  required
                  className={`mt-2 block w-full px-4 py-3 bg-white border ${errors.whatsapp ? 'border-orange-500' : 'border-gray-300'} rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#000046] focus:border-transparent`}
                />
                {errors.whatsapp && <p className="text-xs text-orange-500 mt-1">{errors.whatsapp}</p>}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={!isNameValid || !isWhatsappValid || isLoading}
              className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-[#A43293] px-8 py-3 text-center text-lg font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-lime-500 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? 'Redirecionando...' : 'Falar com Especialista'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTA;
