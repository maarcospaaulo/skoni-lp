'use client';

import { useState, useRef, useEffect } from 'react';
import { IMaskInput } from 'react-imask';

// --- Tipos e Constantes ---
type Modality = 'imóvel' | 'carro' | 'caminhão' | 'moto' | 'cirurgia' | 'viagem';

interface SimulationResult {
  monthlyPayment: number;
  minPayment: number;
  maxPayment: number;
  totalPaid: number;
  estimatedAnnualRate: number;
  halfMonthlyPayment: number;
}

const modalityConfig = {
  'imóvel': { min: 50000, max: 1500000, minTerm: 60, maxTerm: 240, rate: 1.1, termOptions: [60, 120, 180, 240] },
  'carro': { min: 10000, max: 200000, minTerm: 12, maxTerm: 100, rate: 1.4, termOptions: [24, 48, 60, 100] },
  'moto': { min: 10000, max: 100000, minTerm: 12, maxTerm: 90, rate: 1.3, termOptions: [24, 36, 60, 90] },
  'caminhão': { min: 100000, max: 450000, minTerm: 36, maxTerm: 120, rate: 1.3, termOptions: [36, 60, 80, 120] },
  'cirurgia': { min: 5000, max: 96000, minTerm: 12, maxTerm: 48, rate: 4.5, termOptions: [12, 24, 36, 48] },
  'viagem': { min: 5000, max: 80000, minTerm: 12, maxTerm: 48, rate: 4.5, termOptions: [12, 24, 36, 48] },
};

// --- Funções Utilitárias ---
const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// --- Componente Principal ---
const Simulator = () => {
  // --- Estados do Formulário ---
  const [modality, setModality] = useState<Modality>('imóvel');
  const [desiredValue, setDesiredValue] = useState(modalityConfig['imóvel'].min * 100);
  const [downPayment, setDownPayment] = useState(0);
  const [termInMonths, setTermInMonths] = useState<number>(modalityConfig['imóvel'].maxTerm);
  const [isLoading, setIsLoading] = useState(false);
  
  const [result, setResult] = useState<SimulationResult | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result) {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result]);






  const handleModalityChange = (newModality: Modality) => {
    setModality(newModality);
    const config = modalityConfig[newModality];
    setDesiredValue(config.min * 100);
    setTermInMonths(config.maxTerm);
    setResult(null); 
  };

  const calculateSimulation = () => {
    const config = modalityConfig[modality];
    const numericDesiredValue = desiredValue / 100;
    const numericDownPayment = downPayment / 100;

    if (!numericDesiredValue || !termInMonths) {
      alert('Por favor, preencha o valor desejado e o prazo.');
      return;
    }

    if (numericDesiredValue < config.min || numericDesiredValue > config.max) {
      alert(`O valor para ${modality} deve estar entre ${formatCurrency(config.min)} e ${formatCurrency(config.max)}.`);
      return;
    }

    const principal = numericDesiredValue - numericDownPayment;
    if (principal <= 0) {
      alert('O valor desejado deve ser maior que o lance.');
      return;
    }

    const annualRate = config.rate;
    const monthlyRate = Math.pow(1 + annualRate / 100, 1 / 12) - 1;
    const pmt = principal * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -termInMonths)));

    setResult({
      monthlyPayment: pmt,
      minPayment: pmt * 0.9,
      maxPayment: pmt * 1.2,
      totalPaid: pmt * termInMonths + numericDownPayment,
      estimatedAnnualRate: annualRate,
      halfMonthlyPayment: pmt / 2,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    // Simulate a small delay for better UX, as calculation is fast
    setTimeout(() => {
      calculateSimulation();
      setIsLoading(false);
    }, 800);
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

  const generateWhatsAppLink = () => {
    const formattedDesiredValue = formatCurrency(desiredValue / 100);
    const formattedDownPayment = formatCurrency(downPayment / 100);
    const message = `Olá, fiz uma simulação no site e ganhei uma consultoria grátis. Simulei um(a) ${modality}, no valor de ${formattedDesiredValue}, com lance de ${formattedDownPayment} e prazo de ${termInMonths} meses.`;
    return `https://wa.me/5511990143199?text=${encodeURIComponent(message)}`;
  };

  const currentConfig = modalityConfig[modality];

  return (
    <section id="simulador" aria-labelledby="simulator-title" className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold leading-7 text-[#A43293]">Grátis, rápido e sem cadastro</p>
          <h2 id="simulator-title" className="text-3xl font-extrabold text-[#000046]">
            Simulação simples e rápida. Sem cadastro, sem compromisso.
          </h2>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Descubra o valor das parcelas em segundos e receba orientação de um especialista para escolher o plano ideal.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-12 space-y-8">
          <fieldset>
            <legend className="block text-sm font-medium text-gray-600 mb-3">Modalidade</legend>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
              {(Object.keys(modalityConfig) as Modality[]).map(m => (
                <button key={m} type="button" onClick={() => handleModalityChange(m)} className={`w-full px-4 py-3 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${modality === m ? 'bg-[#A43293] text-white shadow-lg' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="valorDesejado" className="block text-sm font-medium text-gray-600">Valor Desejado</label>
              <input
                type="text"
                id="valorDesejado"
                value={formatToCurrencyBRL(desiredValue)}
                onChange={(e) => handleCurrencyChange(e, setDesiredValue)}
                onKeyDown={(e) => handleCurrencyKeyDown(e, setDesiredValue)}
                required
                className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#000046] focus:border-transparent"
              />
               <p className="text-xs text-gray-500 mt-1">Mín: {formatCurrency(currentConfig.min)}, Máx: {formatCurrency(currentConfig.max)}</p>
            </div>
            <div>
              <label htmlFor="lance" className="block text-sm font-medium text-gray-600">Lance (Opcional)</label>
              <input
                type="text"
                id="lance"
                value={formatToCurrencyBRL(downPayment)}
                onChange={(e) => handleCurrencyChange(e, setDownPayment)}
                onKeyDown={(e) => handleCurrencyKeyDown(e, setDownPayment)}
                className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#000046] focus:border-transparent"
              />
            </div>
          </div>

          <fieldset>
            <legend className="block text-sm font-medium text-gray-600 mb-3">Prazo</legend>
            <div className="flex flex-wrap gap-3">
              {currentConfig.termOptions.map(p => (
                <button key={p} type="button" onClick={() => setTermInMonths(p)} className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${termInMonths === p ? 'bg-[#000046] text-white shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                  {p} meses
                </button>
              ))}
            </div>
             <p className="text-xs text-gray-500 mt-1">Mín: {currentConfig.minTerm} meses, Máx: {currentConfig.maxTerm} meses</p>
          </fieldset>


          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-[#A43293] px-8 py-3 text-center text-lg font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-lime-500 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? 'Simulando...' : 'Calcular Parcelas'}
            </button>
          </div>
        </form>

        {isLoading && (
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 animate-pulse">Aguarde, estamos preparando sua simulação...</p>
          </div>
        )}

        {result && !isLoading && (
          <div ref={resultsRef} aria-live="polite" className="mt-16 p-8 bg-slate-50 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-center text-[#000046]">Sua Estimativa Personalizada</h3>
            <div className="mt-6 flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-3xl">
                <div className="p-5 bg-gray-200 rounded-lg text-center h-full">
                  <p className="text-sm font-medium text-gray-800">Faixa de Parcela Mensal</p>
                  <p className="font-bold text-xl text-[#000046]">{formatCurrency(result.minPayment)} - {formatCurrency(result.maxPayment)}</p>
                </div>
                <div className="p-5 bg-gray-200 rounded-lg text-center h-full border-2 border-[#A43293]">
                  <p className="text-sm font-medium text-gray-800">Parcela Sugerida</p>
                  <p className="font-bold text-xl text-[#000046]">{formatCurrency(result.monthlyPayment)}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 w-full max-w-md">
                <div className="p-5 bg-gray-200 rounded-lg text-center h-full">
                  <p className="text-sm font-medium text-gray-800">Taxa Anual Estimada</p>
                  <p className="font-bold text-xl text-[#000046]">{result.estimatedAnnualRate}%</p>
                </div>
                <div className="p-5 bg-gray-200 rounded-lg text-center h-full">
                  <p className="text-sm font-medium text-gray-800">Valor Total Aproximado</p>
                  <p className="font-bold text-xl text-[#000046]">{formatCurrency(result.totalPaid)}</p>
                </div>
              </div>
            </div>
            <p className="mt-5 text-xs text-center text-gray-600">* Esta é uma estimativa. Os valores finais podem variar e dependem da análise de crédito e das regras do grupo de consórcio. Consulte o regulamento.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 hover:scale-105 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#C86236] px-8 py-3 text-center text-base font-medium text-white shadow-sm cursor-pointer">
                    Falar com Especialista
                </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Simulator;