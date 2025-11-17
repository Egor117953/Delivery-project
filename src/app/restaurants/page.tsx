"use client";

import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: "Салат Цезарь",
    price: "1500 ₸",
    image: "/caesar.webp",
  },
  {
    id: 2,
    name: "Паста Карбонара",
    price: "1800 ₸",
    image: "/carbonaraPasta.jpg",
  },
  {
    id: 3,
    name: "Стейк Рибай",
    price: "3500 ₸",
    image: "/steak.jpg",
  },
  {
    id: 4,
    name: "Тирамису",
    price: "900 ₸",
    image: "/tiramisu.jpg",
  },
];

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col pt-6">
      {/* Короткая шапка */}
      <div className="flex items-center gap-3 bg-gray-700 rounded-3xl p-3 shadow-md mb-6 mx-4 w-fit">
        <div className="relative w-14 h-14">
          <Image
            src="/restaurantLogo.png"
            alt="Vilka Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Vilka</h1>
      </div>

      {/* Подзаголовок */}
      <p className="text-gray-300 text-lg text-center mb-6 px-4 sm:px-6">
        Популярные блюда
      </p>

      {/* Меню */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 mb-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-700 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transform transition-all p-4 flex flex-col items-center"
          >
            {/* Контейнер с рамкой */}
            <div className="relative w-full h-52 sm:h-56 md:h-60 mb-4 rounded-2xl border-2 border-gray-500 overflow-hidden shadow-inner">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold mb-1 text-center text-white">{item.name}</h2>
            <p className="text-gray-300 font-semibold mb-3">{item.price}</p>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-200 transition">
              Выбрать
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
