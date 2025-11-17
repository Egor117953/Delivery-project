"use client";

import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: "Сандерс-Бургер",
    price: "1200 ₸",
    image: "/sandersBurger.jpg",
  },
  {
    id: 2,
    name: "Баскет Крылья",
    price: "900 ₸",
    image: "/wings.jpg",
  },
  {
    id: 3,
    name: "Картофель фри",
    price: "500 ₸",
    image: "/fries.png",
  },
  {
    id: 4,
    name: "Напиток Pepsi",
    price: "300 ₸",
    image: "/pepsi.webp",
  },
];

export default function FastfoodPage() {
  return (
    <div className="min-h-screen bg-gray-900/30 flex flex-col pt-6">
      {/* Шапка */}
      <div className="flex items-center gap-4 bg-white rounded-3xl p-4 shadow-lg mb-6 w-fit mt-4 mx-auto sm:mx-6">
        <div className="relative w-16 h-16">
          <Image
            src="/kfcLogo.webp"
            alt="KFC Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600">KFC</h1>
      </div>

      <p className="text-gray-300 text-lg text-center mb-6">
        Популярное
      </p>

      {/* Меню */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all p-4 flex flex-col items-center"
          >
            <div className="relative w-full h-36 sm:h-40 md:h-44 mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain rounded-2xl"
              />
            </div>
            <h2 className="text-lg font-semibold mb-1 text-center">{item.name}</h2>
            <p className="text-red-600 font-bold mb-3">{item.price}</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
              Выбрать
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
