"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

 return (
  <main className="min-h-screen bg-gray-50">
    <Header />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <CategorySection
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            
          />
        </div>

        {/* Hero + Products */}
        <div className="lg:col-span-3 space-y-8">
          {/* Hero inside main content */}
          <Hero />

          {/* Products */}
          <FeaturedProducts
            products={filteredProducts}
            title={
              selectedCategory === "all"
                ? "All Products"
                : categories.find((c) => c.id === selectedCategory)?.name || ""
            }
          />
        </div>
      </div>
    </div>

    <Footer />
  </main>
);

}
