'use client';

import { useState, useRef, useEffect } from 'react';
import Modal from '@/components/Modal';
import ContactForm from '@/components/ContactForm';

// --- Tipos e Constantes ---
type Modality = 'imóvel' | 'veículo' | 'caminhão' | 'moto' | 'cirurgia' | 'viagem';

interface SimulationResult {
  monthlyPayment: number;
  minPayment: number;
  maxPayment: number;
  totalPaid: number;
  estimatedAnnualRate: number;
}

const prazoOptions = [12, 24, 36, 60, 120];
const ESTIMATED_ANNUAL_RATE_PERCENT = 1.5;

// --- Funções Utilitárias ---
const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// --- Componente Principal ---
const Simulator = () => {
  // --- Estados do Formulário (valores em centavos) ---
  const [modality, setModality] = useState<Modality>('imóvel');
  const [desiredValue, setDesiredValue] = useState(10000000); // R$ 100.000,00 em centavos
  const [downPayment, setDownPayment] = useState(0);
  const [termInMonths, setTermInMonths] = useState<number>(60);
  
  const [result, setResult] = useState<SimulationResult | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // --- Estados do Modal ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (result) {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result]);

  const calculateSimulation = () => {
    const numericDesiredValue = desiredValue / 100;
    const numericDownPayment = downPayment / 100;

    if (!numericDesiredValue || !termInMonths) {
      alert('Por favor, preencha o valor desejado e o prazo.');
      return;
    }

    const principal = numericDesiredValue - numericDownPayment;
    if (principal <= 0) {
      alert('O valor desejado deve ser maior que o lance.');
      return;
    }

    const monthlyRate = Math.pow(1 + ESTIMATED_ANNUAL_RATE_PERCENT / 100, 1 / 12) - 1;
    const pmt = principal * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -termInMonths)));

    setResult({
      monthlyPayment: pmt,
      minPayment: pmt * 0.9,
      maxPayment: pmt * 1.2,
      totalPaid: pmt * termInMonths + numericDownPayment,
      estimatedAnnualRate: ESTIMATED_ANNUAL_RATE_PERCENT,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateSimulation();
  };

  // --- Handlers para o Input de Moeda Customizado ---
  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (value: number) => void) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    setter(Number(rawValue) || 0);
  };

  const handleCurrencyKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, setter: (value: number) => void) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault();
      setter(0);
    }
  };

  const formatToCurrencyBRL = (valueInCents: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valueInCents / 100);
  };

  return (
    <section id="simulador" aria-labelledby="simulator-title" className="bg-[#DFD2CF] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="simulator-title" className="text-3xl font-extrabold text-center text-[#000046]">
          Simulador de Consórcio
        </h2>
        
        <form onSubmit={handleSubmit} className="mt-12 space-y-8">
          <fieldset>
            <legend className="block text-sm font-medium text-black mb-3">Modalidade</legend>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
              {(['imóvel', 'veículo', 'caminhão', 'moto', 'cirurgia', 'viagem'] as Modality[]).map(m => (
                <button key={m} type="button" onClick={() => setModality(m)} className={`w-full px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${modality === m ? 'bg-[#A43293] text-white shadow-lg' : 'bg-white text-black hover:bg-gray-50'}`}>
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="valorDesejado" className="block text-sm font-medium text-black">Valor Desejado</label>
              <input
                type="text"
                id="valorDesejado"
                value={formatToCurrencyBRL(desiredValue)}
                onChange={(e) => handleCurrencyChange(e, setDesiredValue)}
                onKeyDown={(e) => handleCurrencyKeyDown(e, setDesiredValue)}
                required
                className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-[#A43293] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="lance" className="block text-sm font-medium text-black">Lance (Opcional)</label>
              <input
                type="text"
                id="lance"
                value={formatToCurrencyBRL(downPayment)}
                onChange={(e) => handleCurrencyChange(e, setDownPayment)}
                onKeyDown={(e) => handleCurrencyKeyDown(e, setDownPayment)}
                className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-[#A43293] focus:border-transparent"
              />
            </div>
          </div>

          <fieldset>
            <legend className="block text-sm font-medium text-black mb-3">Prazo</legend>
            <div className="flex flex-wrap gap-3">
              {prazoOptions.map(p => (
                <button key={p} type="button" onClick={() => setTermInMonths(p)} className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${termInMonths === p ? 'bg-[#A43293] text-white shadow-md' : 'bg-white text-black hover:bg-gray-50'}`}>
                  {p} meses
                </button>
              ))}
            </div>
          </fieldset>

          <div className="text-center pt-6">
            <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center px-16 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-[#000046] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000046] transition-transform transform hover:scale-105">
              Calcular Estimativa
            </button>
          </div>
        </form>

        {result && (
          <div ref={resultsRef} aria-live="polite" className="mt-16 p-8 bg-white rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-center text-[#000046]">Sua Estimativa Personalizada</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-5 bg-[#DFD2CF]/40 rounded-lg text-center">
                <p className="text-sm font-medium text-black">Faixa de Parcela Mensal</p>
                <p className="font-bold text-xl text-[#000046]">{formatCurrency(result.minPayment)} - {formatCurrency(result.maxPayment)}</p>
              </div>
              <div className="p-5 bg-[#A43293]/10 rounded-lg text-center">
                <p className="text-sm font-medium text-black">Parcela Sugerida</p>
                <p className="font-bold text-2xl text-[#A43293]">{formatCurrency(result.monthlyPayment)}</p>
              </div>
              <div className="p-5 bg-[#DFD2CF]/40 rounded-lg text-center">
                <p className="text-sm font-medium text-black">Taxa Anual Estimada</p>
                <p className="font-bold text-xl text-[#000046]">{result.estimatedAnnualRate}%</p>
              </div>
              <div className="p-5 bg-[#DFD2CF]/40 rounded-lg text-center">
                <p className="text-sm font-medium text-black">Valor Total Aproximado</p>
                <p className="font-bold text-xl text-[#000046]">{formatCurrency(result.totalPaid)}</p>
              </div>
            </div>
            <p className="mt-5 text-xs text-center text-gray-600">* Esta é uma estimativa. Os valores finais podem variar e dependem da análise de crédito e das regras do grupo de consórcio. Consulte o regulamento.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="https://wa.me/5511990143199?text=Olá, fiz uma simulação no site e gostaria de falar com um especialista." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#25D366] hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                    Falar com Especialista
                </a>
                <button onClick={openModal} className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#A43293] hover:bg-[#8e2b7f] transition-all duration-300 transform hover:scale-105">
                    Quero ser Contatado
                </button>
            </div>
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Receba uma proposta">
        <ContactForm 
          estimatedValue={desiredValue / 100}
          initialModality={modality}
        />
      </Modal>
    </section>
  );
};

export default Simulator;