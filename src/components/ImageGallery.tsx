"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({
  images,
  productName,
}: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const imageLabels = [
    "Front View",
    "Back View",
    "Side View",
    "Detail View",
    "Close-up",
    "Lifestyle",
  ];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative group">
        <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden cursor-pointer">
          <img
            src={images[selectedImageIndex]}
            alt={`${productName} - ${imageLabels[selectedImageIndex]}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onClick={openModal}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.nextElementSibling?.classList.remove("hidden");
            }}
          />
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center hidden">
            <span className="text-8xl">
              {productName.includes("Men")
                ? "👔"
                : productName.includes("Women")
                ? "👗"
                : "💄"}
            </span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={previousImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-sm">
          {selectedImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-6 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === selectedImageIndex
                ? "border-blue-500 ring-2 ring-blue-200"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <img
              src={image}
              alt={`${productName} - ${imageLabels[index]}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-lg">
                {productName.includes("Men")
                  ? "👔"
                  : productName.includes("Women")
                  ? "👗"
                  : "💄"}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Image Labels */}
      <div className="text-center">
        <p className="text-sm text-gray-600 font-medium">
          {imageLabels[selectedImageIndex]}
        </p>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="relative">
              <img
                src={images[selectedImageIndex]}
                alt={`${productName} - ${imageLabels[selectedImageIndex]}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.nextElementSibling?.classList.remove("hidden");
                }}
              />
              <div className="max-w-full max-h-[80vh] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-lg">
                <span className="text-8xl">
                  {productName.includes("Men")
                    ? "👔"
                    : productName.includes("Women")
                    ? "👗"
                    : "💄"}
                </span>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Image Info */}
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">
                {imageLabels[selectedImageIndex]}
              </p>
              <p className="text-white/70 text-sm">
                {selectedImageIndex + 1} of {images.length}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === selectedImageIndex
                      ? "border-blue-400 ring-2 ring-blue-300"
                      : "border-white/30 hover:border-white/50"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${productName} - ${imageLabels[index]}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center hidden">
                    <span className="text-sm">
                      {productName.includes("Men")
                        ? "👔"
                        : productName.includes("Women")
                        ? "👗"
                        : "💄"}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
