"use client";

import { useState } from "react";
import CategoryButtons from "@/components/CategoryButtons";
import CategoryCards from "@/components/CategoryCards";
import Footer from "@/components/footer";
import FoodCards from "@/components/FoodCards";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("recommended");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

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
        
        <div className="mt-10">
          <FoodCards />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
