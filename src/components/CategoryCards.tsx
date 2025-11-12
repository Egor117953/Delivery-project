"use client";

import { useState } from "react";
import Image from "next/image";

type Category = {
  name: string;
  icon: string;
  color: string;
};

export default function CategoryGrid() {
  const [showMore, setShowMore] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  const categories: Category[] = [
    { name: "Рестораны", icon: "/restaurantsCardIcon.png", color: "bg-[#3d2b1f]" },
    { name: "Продукты", icon: "/fruitCardIcon.png", color: "bg-[#234d20]" },
    { name: "Wolt Market", icon: "/woltMarketCardIcon.png", color: "bg-[#003049]" },
    { name: "Аптека", icon: "/pharmacyCardIcon.png", color: "bg-[#5c1a1b]" },
    { name: "Алкоголь", icon: "/alcoholCardIcon.png", color: "bg-[#3d1a1a]" },
    { name: "Для питомцев", icon: "/petsCardIcon.png", color: "bg-[#4b2e05]" },
    { name: "Красота и Здоровье", icon: "/beautyHealthCardIcon.png", color: "bg-[#3b224c]" },
    { name: "Электроника", icon: "/electronicsCardIcon.png", color: "bg-[#231942]" },
    { name: "Детям, Игрушки & Игры", icon: "/toysCardIcon.png", color: "bg-[#4a2c2a]" },
    { name: "Всё для дома", icon: "/forHomeCardIcon.png", color: "bg-[#2f3e46]" },
    { name: "Цветы", icon: "/flowersCardIcon.png", color: "bg-[#234d20]" },
    { name: "Другие магазины", icon: "/otherShopsCardIcon.png", color: "bg-[#5c1a1b]" },
  ];

  const mainCategories = categories.slice(0, 10);
  const hiddenCategories = categories.slice(10);

  const renderCard = (cat: Category, index: number) => (
    <div key={cat.name} className="flex flex-col items-center">
      <div
        className={`${cat.color} flex items-center justify-center w-[131px] h-[90px] rounded-xl cursor-pointer transition-transform duration-300 
        ${hovered === index ? 'translate-y-[-10px]' : ''}`}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        style={{ animation: hovered === null ? 'bounceHover 1s ease' : undefined }}
      >
        <Image src={cat.icon} alt={cat.name} width={50} height={50} />
      </div>
      <span className="text-white text-sm font-medium text-center mt-2">
        {cat.name === "Детям, Игрушки & Игры" ? (
          <>
            Детям,<br />Игрушки & Игры
          </>
        ) : (
          cat.name
        )}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center mt-6 mb-8 w-full">
      {/* Основной ряд */}
      <div className="flex gap-2">
        {mainCategories.map((cat, index) => renderCard(cat, index))}

        {/* Кнопка "ещё" */}
        {hiddenCategories.length > 0 && (
          <div
            onClick={() => setShowMore(!showMore)}
            className="flex items-center justify-center w-[140px] h-[90px] rounded-xl bg-[#0077b6]/30 cursor-pointer hover:scale-105 transition"
          >
            <span
              className={`text-[#00b8ff]/90 text-3xl transform transition-transform duration-300 ${showMore ? "-rotate-90" : "rotate-90"
                }`}
            >
              &gt;
            </span>
          </div>
        )}
      </div>

      {/* Скрытый ряд */}
      <div
        className={`overflow-hidden transition-all duration-500 w-full`}
        style={{ maxHeight: showMore ? "200px" : "0" }}
      >
        <div className="flex gap-2 mt-4 ml-[165px]">
          {hiddenCategories.map((cat, index) => renderCard(cat, index + 10))}
        </div>
      </div>
    </div>
  );
}
