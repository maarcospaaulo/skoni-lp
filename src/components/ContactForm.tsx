'use client';

import React, { useState, useEffect, useRef } from 'react';

// Tipos para os dados do formulário, erros e status da submissão
type FormData = {
  name: string;
  phone: string;
  email: string;
  modality: string;
  estimatedValue: number; // Valor em centavos
};

type FormErrors = Partial<Record<keyof Omit<FormData, 'estimatedValue'>, string>>;
type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormProps {
  estimatedValue: number; // Valor em Reais (ex: 100000.00)
  initialModality: string;
}

const ContactForm = ({ estimatedValue, initialModality }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    modality: initialModality || 'imovel',
    estimatedValue: estimatedValue * 100, // Armazenar em centavos
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      modality: initialModality || 'imovel',
      estimatedValue: estimatedValue * 100,
    }));
  }, [estimatedValue, initialModality]);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório.';
    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Formato de e-mail inválido.';
    }
    if (!formData.phone) {
      newErrors.phone = 'Telefone é obrigatório.';
    } else if (!/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Telefone deve ter 10 ou 11 dígitos.';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    try {
      const submissionData = {
        ...formData,
        estimatedValue: formData.estimatedValue / 100, // Converter de volta para Reais
      };

      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) throw new Error('Falha no envio');
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- Handlers para o Input de Moeda Customizado ---
  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    setFormData(prev => ({ ...prev, estimatedValue: Number(rawValue) || 0 }));
  };

  const handleCurrencyKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault();
      setFormData(prev => ({ ...prev, estimatedValue: 0 }));
    }
  };

  const formatToCurrencyBRL = (valueInCents: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valueInCents / 100);
  };

  const inputStyle = "w-full rounded-md border-transparent bg-[#A43293]/10 p-3 text-[#000046] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A43293] focus:bg-white";

  if (status === 'success') {
    return (
      <div className="text-center text-[#000046]">
        <h3 className="text-xl font-bold">Obrigado!</h3>
        <p className="mt-2">Seus dados foram enviados com sucesso. Em breve, um de nossos especialistas entrará em contato.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === 'error' && (
        <p className="rounded-md bg-red-100 p-3 text-center text-sm text-red-700">
          Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.
        </p>
      )}
      
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-[#000046]">Nome completo</label>
        <input ref={nameInputRef} type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome completo" required className={inputStyle} />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#000046]">E-mail</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required className={inputStyle} />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#000046]">Telefone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(11) 99999-9999" required className={inputStyle} />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="modality" className="mb-1 block text-sm font-medium text-[#000046]">Modalidade</label>
          <select id="modality" name="modality" value={formData.modality} onChange={handleChange} className={inputStyle}>
            <option value="imóvel">Imóvel</option>
            <option value="veículo">Veículo</option>
            <option value="caminhão">Caminhão</option>
            <option value="moto">Moto</option>
            <option value="cirurgia">Cirurgia</option>
            <option value="viagem">Viagem</option>
          </select>
        </div>
        <div>
          <label htmlFor="estimatedValue" className="mb-1 block text-sm font-medium text-[#000046]">Valor Estimado</label>
          <input
            type="text"
            id="estimatedValue"
            value={formatToCurrencyBRL(formData.estimatedValue)}
            onChange={handleCurrencyChange}
            onKeyDown={handleCurrencyKeyDown}
            className={inputStyle}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-lg bg-[#A43293] px-8 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-[#C86236] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C86236] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {status === 'submitting' ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};

export default ContactForm;