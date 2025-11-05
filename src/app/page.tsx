import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      <div className="flex justify-center space-x-6 mt-6">
        <button className="flex items-center gap-2 px-2 py-2 rounded-full bg-[#1a1a1a] text-black hover:bg-[#2a2a2a] font-medium transition">
          <Image src="/restaurantIcon.png" alt="Рестораны" width={20} height={20} />
          Рестораны
        </button>
        <button className="flex items-center gap-2 px-2 py-2 rounded-full bg-[#00b8ff]/80 text-black hover:bg-[#2a2a2a] font-medium transition">
          <Image src="/compass-icon.png" alt="Рестораны" width={20} height={20} />
          Рекомендуеться
        </button>
        <button className="px-6 py-2 rounded-full bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] font-medium transition">
          Магазины
        </button>
      </div>
    </main>
  );
}
