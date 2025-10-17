'use client';
import { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';

interface Metric {
  value: number;
  label: string;
  suffix: string;
}

const metrics: Metric[] = [
  { value: 710, label: 'Clientes prontos para conquistar seu consórcio.', suffix: '' },
  { value: 15, label: 'Milhões em cartas de crédito entregues.', suffix: 'MI' },
  { value: 350, label: 'Clientes que já conquistaram casa, carro ou serviço.', suffix: '' },
  { value: 200, label: 'Contemplações realizadas logo no primeiro ano.', suffix: '' },
];

const MetricCard = ({ metric }: { metric: Metric }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = metric.value;
      const duration = 1200;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        setCount(end);
        return;
      }

      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }
  }, [isInView, metric.value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 bg-transparent rounded-2xl border border-[#C8F466]/30 text-center"
      aria-label={`${metric.value}${metric.suffix} ${metric.label}`}
    >
      <div className="flex items-center justify-center text-5xl font-bold text-[#C8F466] mt-2">
        <Plus size={32} className="mr-2" />
        {count}
        {metric.suffix}
      </div>
      <div className="text-base text-white mt-2">{metric.label}</div>
    </div>
  );
};

const Metrics = () => {
  return (
    <section id="metrics" className="bg-[#000046] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold leading-7 text-[#C8F466]">Nossos Números</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Resultados Comprovados em Consórcios e Cartas Contempladas
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Mais de R$7 milhões em cartas contempladas e centenas de clientes que realizaram o sonho do carro, casa ou negócio próprio com nosso apoio.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block w-auto self-center rounded-full bg-[#C8F466] px-8 py-3 text-center text-lg font-semibold text-[#000046] shadow-sm hover:bg-[#C86236] hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-lime-500 transition-colors duration-300"
            >
              Quero ser o próximo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
