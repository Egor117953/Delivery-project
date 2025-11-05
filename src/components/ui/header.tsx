import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-black shadow-md sticky top-0 z-60 border-b border-white/20">
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

                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077b6]/20 hover:bg-[#0077b6]/50 transition text-white font-medium">
                    <Image
                        src="/locationButtonIcon.png"
                        alt="Location Icon"
                        width={18}
                        height={18}
                        className="opacity-90"
                    />
                    <span>Алматы</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-4 h-4 transform opacity-90"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
            </div>

            <div className="flex w-[260px] mx-10 hidden md:flex relative ml-[110px] ">
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

            <div className="hidden md:flex items-center space-x-4 mr-[150px]">
                <button className="px-5 py-2 text-white rounded-full hover:bg-gray-500/30 transition">
                    Войти
                </button>
                <button className="px-5 py-3 bg-[#0077b6]/20 text-[#00b8ff]/90 font-normal rounded-[10px] hover:bg-[#0077b6]/50 transition">
                    Зарегистрироваться
                </button>
            </div>
        </header>
    );
}
