"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const categories = [
    {
      name: "KFC",
      image: "/kfcLogo.webp",
      type: "logo",
      bg: "white",
      link: "/fastfood",
    },
    {
      name: "Vilka",
      image: "/restaurantLogo.png",
      type: "photo",
      bg: "dark",
      link: "/restaurants",
    },
    {
      name: "Magnum",
      image: "/magnumLogo.jpg",
      type: "logo",
      bg: "white",
      link: "/supermarkets",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 py-6">
      {categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() => router.push(cat.link)}
          className="cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 bg-[#1a1a1a]"
        >
          {/* Image Wrapper */}
          <div
            className={`relative w-full h-48 flex items-center justify-center
              ${cat.bg === "white" ? "bg-white" : "bg-gradient-to-b from-[#111] via-[#222] to-[#111]"}`}
          >
            {cat.type === "logo" ? (
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-contain p-6"
              />
            ) : (
              <Image
                src={cat.image}
                alt={cat.name}
                width={150}
                height={90}
                className="object-contain rounded-md"
              />
            )}
          </div>

          {/* Title */}
          <div className="px-3 py-4 bg-[#1a1a1a]">
            <h2 className="text-lg font-semibold text-white">{cat.name}</h2>
            <p className="text-gray-400 text-sm mt-1">
              Быстрая доставка • Лучшие заведения
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
