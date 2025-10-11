
'use client';

import { useRef, useCallback, useState, useEffect } from 'react';
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
  const [canScroll, setCanScroll] = useState({ left: false, right: true });

  const checkScrollability = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScroll({
        left: scrollLeft > 5,
        right: scrollLeft + clientWidth < scrollWidth - 5,
      });
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollability(); // Initial check
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);

      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, [checkScrollability, items]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const card = current.children[0] as HTMLElement;
      if (card) {
        const scrollAmount = card.offsetWidth + 24; // card width + space-x-6 (1.5rem = 24px)
        current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  }, []);

  const buttonClasses = "bg-[#C8F466] hover:bg-[#b2d95a] rounded-full p-3 shadow-md transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="relative w-full">
      {/* Desktop: Left Arrow */}
      <button
        onClick={() => scroll('left')}
        disabled={!canScroll.left}
        className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex ${buttonClasses}`}
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
          <div key={index} className="snap-start last:snap-end shrink-0 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <FlipCard {...item} />
          </div>
        ))}
      </div>

      {/* Desktop: Right Arrow */}
      <button
        onClick={() => scroll('right')}
        disabled={!canScroll.right}
        className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex ${buttonClasses}`}
        aria-label="Próximo"
      >
        <ChevronRight className="h-6 w-6 text-[#000046]" />
      </button>

      {/* Mobile: Navigation Arrows */}
      <div className="mt-8 flex justify-center items-center space-x-4 md:hidden">
        <button
          onClick={() => scroll('left')}
          disabled={!canScroll.left}
          className={buttonClasses}
          aria-label="Anterior"
        >
          <ChevronLeft className="h-6 w-6 text-[#000046]" />
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScroll.right}
          className={buttonClasses}
          aria-label="Próximo"
        >
          <ChevronRight className="h-6 w-6 text-[#000046]" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
