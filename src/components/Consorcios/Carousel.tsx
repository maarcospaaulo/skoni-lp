
'use client';

import { useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FlipCard from './FlipCard';

interface CarouselItem {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel = ({ items }: CarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.offsetWidth * 0.8; // Scroll by 80% of the container width

      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all duration-300 hidden md:flex items-center justify-center"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-6 w-6 text-[#000046]" />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 -mb-6 scrollbar-hide"
      >
        {items.map((item, index) => (
          <div key={index} className="snap-center shrink-0 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <FlipCard {...item} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all duration-300 hidden md:flex items-center justify-center"
        aria-label="Próximo"
      >
        <ChevronRight className="h-6 w-6 text-[#000046]" />
      </button>
    </div>
  );
};

export default Carousel;
