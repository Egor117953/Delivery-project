"use client";

import { useState } from "react";
import CategoryButtons from "@/components/CategoryButtons";
import CategoryCards from "@/components/CategoryCards";
import Footer from "@/components/footer";
import ImageSlider from "@/components/ImageSlider";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("recommended");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Массив картинок для слайдера
  const sliderImages = [
    "/sliderBK.jpg",
    "/slider2.jpg",
    "/slider3.jpg",
    "/slider4.jpg",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Основной контент */}
      <main className="flex-grow pt-7 px-6">
        <CategoryButtons onCategoryChange={handleCategoryChange} />
        <CategoryCards />

        {/* Слайдер под карточками */}
        <ImageSlider images={sliderImages} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
