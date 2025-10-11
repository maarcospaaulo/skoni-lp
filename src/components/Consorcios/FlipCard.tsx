
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      className="group w-full h-96 perspective-1000"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Card Front */}
        <div className="absolute w-full h-full backface-hidden overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
          <Image
            src={imageSrc}
            alt={`Consórcio de ${title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Card Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-2xl p-6 flex flex-col justify-between items-center text-center">
          <div>
            <h3 className="text-2xl font-bold text-[#000046]">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>
          <Link href={link} passHref>
            <span
              onClick={(e) => e.stopPropagation()} // Evita que o card desvire ao clicar no botão
              className="inline-block mt-4 px-6 py-3 bg-[#A43293] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Quero o meu
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
