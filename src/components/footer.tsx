"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#111111] text-white w-full mt-12">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
                {/* Логотип и приложения */}
                <div className="flex flex-col gap-4">
                    <div className="w-32 h-10 relative">
                        <Image
                            src="/WoltLogo.webp"
                            alt="Wolt Logo"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="w-[140px] h-[40px] bg-gray-700 flex items-center justify-center rounded cursor-pointer">
                            App Store
                        </div>
                        <div className="w-[140px] h-[40px] bg-gray-700 flex items-center justify-center rounded cursor-pointer">
                            Google Play
                        </div>
                    </div>
                </div>

                {/* Партнёрство */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-gray-400">Партнёрство с Wolt</h3>
                    <a href="#" className="text-gray-400 hover:text-white transition">Курьерам</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Для продавцов</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Для партнёров</a>
                </div>

                {/* Компания */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-gray-400">Компания</h3>
                    <a href="#" className="text-gray-400 hover:text-white transition">О нас</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Что для нас важно</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Вакансии</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Устойчивое развитие</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Безопасность</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Инвесторам</a>
                </div>

                {/* Продукты */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-gray-400">Продукты</h3>
                    <a href="#" className="text-gray-400 hover:text-white transition">Wolt Drive</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Wolt Market</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Wolt+</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Wolt Ads</a>
                </div>

                {/* Полезные ссылки */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-gray-400">Полезные ссылки</h3>
                    <a href="#" className="text-gray-400 hover:text-white transition">Поддержка</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Медиа</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Контакты</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Высказаться</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Промокоды</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Разработчики</a>
                </div>

                {/* Соцсети */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-gray-400">Следите за нами</h3>
                    <a href="#" className="text-gray-400 hover:text-white transition">Блог</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Блог инженеров</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">X</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Wolt Life</a>
                </div>
            </div>

            {/* Нижняя часть */}
            <div className="border-t border-gray-700 mt-8 py-4 px-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
                <div className="flex flex-wrap gap-4">
                    <span>Казахстан</span>
                    <span>Русский</span>
                    <span>Тема</span>
                    <span>Файлы cookie</span>
                </div>
                <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
                    <span>Заявление о доступности</span>
                    <span>Условия использования</span>
                    <span>Заявление о конфиденциальности</span>
                    <span>© Wolt 2025</span>
                </div>
            </div>
        </footer>
    );
}
