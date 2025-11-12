"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [country, setCountry] = useState<string>("Казахстан");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // === Закрытие по клавише ESC ===
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const countries: Record<string, string[]> = {
    Казахстан: ["Алматы", "Астана", "Шымкент", "Караганда"],
    Эстония: ["Таллин", "Тарту", "Нарва"],
    Финляндия: ["Хельсинки", "Турку", "Тампере"],
    Польша: ["Варшава", "Краков", "Гданьск"],
  };

  const handleSave = () => {
    closeMenu();
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-black shadow-md sticky top-0 z-50 border-b border-white/20 relative">
      {/* Логотип и выбор города */}
      <div className="flex items-center space-x-3">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/WoltLogo.webp"
            alt="FoodDelivery Logo"
            width={70}
            height={70}
            className="rounded-lg ml-[150px]"
          />
        </Link>

        <button
          onClick={toggleMenu}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077b6]/30 ml-[10px] cursor-pointer hover:bg-[#0077b6]/50 transition text-white font-medium"
        >
          <Image
            src="/locationButtonIcon.png"
            alt="Location Icon"
            width={18}
            height={18}
            className="opacity-90"
          />
          <span>{city || "Алматы"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className={`w-4 h-4 transform transition ${isMenuOpen ? "rotate-0" : "rotate-180"} opacity-90`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Поиск */}
      <div className="flex w-[260px] mx-10 hidden md:flex relative ml-[110px]">
        <Image
          src="/searchIcon.png"
          alt="Search Icon"
          width={20}
          height={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100 cursor-pointer transition"
        />
        <input
          type="text"
          placeholder="Поиск в Wolt..."
          className="w-full pl-10 py-1 pt-2 rounded-full bg-gray-500/30 font-semibold leading-[1.6rem] focus:outline-none placeholder-gray-300/80 hover:bg-gray-400/30 transition text-white"
        />
      </div>

      {/* Кнопки входа/регистрации */}
      <div className="hidden md:flex items-center space-x-4 mr-[150px]">
        <button className="px-5 py-2 text-white rounded-full cursor-pointer hover:bg-gray-500/30 transition">
          Войти
        </button>
        <button className="px-5 py-3 bg-[#0077b6]/30 text-[#00b8ff]/90 font-normal rounded-[10px] cursor-pointer hover:bg-[#0077b6]/50 transition">
          Зарегистрироваться
        </button>
      </div>

      {/* Меню выбора локации */}
      {isMenuOpen && (
        <div className="fixed inset-0 flex items-start justify-center z-50 bg-black/40 backdrop-blur-sm">
          <div className="relative mt-24 bg-[#2a2a2a] text-white rounded-2xl shadow-xl border border-white/10 p-6 w-[650px]">

            {/* Крестик закрытия */}
            <button
              onClick={closeMenu}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition text-xl"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold mb-4 text-center">
              Добавить новый адрес
            </h3>

            {/* Страна */}
            <div className="mb-4">
              <label className="block text-sm mb-1 text-gray-400">Страна</label>
              <select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setCity("");
                }}
                className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-lg py-3 px-3 focus:outline-none focus:border-[#0077b6] transition"
              >
                <option disabled value="">
                  Выберите страну
                </option>
                {Object.keys(countries).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Город */}
            <div className="mb-4">
              <label className="block text-sm mb-1 text-gray-400">Город</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled={!country}
                className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-lg py-3 px-3 focus:outline-none focus:border-[#0077b6] transition disabled:opacity-50"
              >
                <option disabled value="">
                  Выберите город
                </option>
                {country &&
                  countries[country].map((cityName) => (
                    <option key={cityName} value={cityName}>
                      {cityName}
                    </option>
                  ))}
              </select>
            </div>

            {/* Адрес */}
            {city && (
              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Название улицы и номер ({city}, {country})
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Например: Абая 15, кв. 10"
                  className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-lg py-2 px-3 placeholder-gray-500 focus:outline-none focus:border-[#0077b6] transition"
                />
                <button
                  onClick={handleSave}
                  className="w-full mt-4 py-3 bg-[#0077b6]/50 hover:bg-[#0077b6]/70 rounded-lg font-medium text-white transition"
                >
                  Продолжить
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
