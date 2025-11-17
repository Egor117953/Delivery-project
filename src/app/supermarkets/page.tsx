"use client";

import Image from "next/image";

const menuItems = [
  { id: 1, name: "Молоко", price: "400 ₸", image: "/milk.jpg" },
  { id: 2, name: "Хлеб", price: "250 ₸", image: "/bread.jpg" },
  { id: 3, name: "Яблоки", price: "600 ₸", image: "/apples.jpg" },
  { id: 4, name: "Сыр", price: "1200 ₸", image: "/cheese.jpg" },
  { id: 5, name: "Яйца", price: "800 ₸", image: "/eggs.jpg" },
  { id: 6, name: "Помидоры", price: "700 ₸", image: "/tomatoe.jpg" },
  { id: 7, name: "Кофе", price: "1500 ₸", image: "/coffee.jpg" },
  { id: 8, name: "Сок Апельсиновый", price: "500 ₸", image: "/orangeJuice.webp" },
];

export default function SupermarketsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pt-6">
      {/* Короткая шапка */}
      <div className="flex items-center gap-3 bg-white rounded-3xl p-3 shadow-md mb-6 mx-4 w-fit">
        <div className="relative w-14 h-14">
          <Image
            src="/magnumLogo.jpg"
            alt="Magnum Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-rose-600">Magnum</h1>
      </div>

      {/* Подзаголовок */}
      <p className="text-gray-800 text-lg text-center mb-6 px-4 sm:px-6">
        Популярные продукты
      </p>

      {/* Меню */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 mb-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transform transition-all p-4 flex flex-col items-center"
          >
            {/* Контейнер с рамкой и увеличенной высотой */}
            <div className="relative w-full h-60 sm:h-64 md:h-72 mb-4 rounded-2xl border-2 border-gray-300 overflow-hidden shadow-inner p-2">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <h2 className="text-lg font-semibold mb-1 text-center text-gray-900">{item.name}</h2>
            <p className="text-gray-600 font-semibold mb-3">{item.price}</p>
            <button className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition">
              Выбрать
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
