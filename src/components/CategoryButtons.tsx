"use client";

import { useState } from "react";
import Image from "next/image";

export default function CategoryButtons({
  onCategoryChange,
}: {
  onCategoryChange: (category: string) => void;
}) {
  const [active, setActive] = useState("recommended");

  const buttons = [
    { id: "restaurants", label: "Рестораны", icon: "/restaurantsIcon.png" },
    { id: "recommended", label: "Рекомендации", icon: "/compassIcon.png" },
    { id: "stores", label: "Магазины", icon: "/storeIcon.png" },
  ];

  const handleClick = (id: string) => {
    setActive(id);
    onCategoryChange(id);
  };

  return (
    <div className="flex justify-center mt-6 mb-8">
      <div className="flex flex-wrap justify-center gap-4">
        {buttons.map((btn) => {
          const isActive = active === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => handleClick(btn.id)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition cursor-pointer 
                ${
                  isActive
                    ? "bg-[#00b8ff] text-black"
                    : "bg-[#1a1a1a] hover:bg-[#2a2a2a] text-gray-200"
                }`}
            >
              <Image
                src={btn.icon}
                alt={btn.label}
                width={20}
                height={20}
                className={`transition ${
                  isActive ? "brightness-0" : "brightness-0 invert"
                }`}
              />
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
