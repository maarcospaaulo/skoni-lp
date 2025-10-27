
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface FlipCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const FlipCard = ({ imageSrc, title, description, link }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="group w-full h-[26rem] perspective-1000 cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Card Front */}
        <div className="absolute w-full h-full backface-hidden overflow-hidden rounded-xl shadow-lg transition-shadow duration-300">
          <Image
            src={imageSrc}
            alt={`Consórcio de ${title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white text-2xl font-bold">
              {title}
            </h3>
            <div className="flex items-center text-[#C8F466] cursor-pointer mt-1">
              <p className="text-sm font-semibold">Saiba mais</p>
              <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>

        {/* Card Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg p-6 flex flex-col text-center">
          <div className="flex-grow overflow-y-auto scrollbar-hide">
            <h3 className="text-2xl font-bold text-[#000046]">{title}</h3>
            <div
              className="mt-4 text-sm text-gray-700 text-left space-y-3"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div className="flex-shrink-0 pt-4">
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Evita que o card desvire ao clicar no botão
              className="inline-block mt-4 px-6 py-3 bg-[#A43293] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Quero o meu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
