"use client";

import { useRef } from "react";
import Image from "next/image";

type SliderProps = {
  images: string[];
};

export default function ImageSlider({ images }: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      // Прокрутка ровно на ширину одной видимой карточки
      const cardWidth = containerRef.current.clientWidth / (window.innerWidth < 768 ? 1 : 2) + 8; // 8 — gap
      containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.clientWidth / (window.innerWidth < 768 ? 1 : 2) + 8;
      containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-8 relative w-full">
      {/* Сама полоса с картинками */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[100%] sm:w-[48%] h-56 sm:h-64 relative rounded-lg overflow-hidden"
            style={{ scrollSnapAlign: "start" }}
          >
            <Image
              src={img}
              alt={`slide-${index}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Кнопки прокрутки */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
      >
        {"<"}
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
      >
        {">"}
      </button>
    </div>
  );
}
