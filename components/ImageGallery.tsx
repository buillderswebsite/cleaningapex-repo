"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  showCategories?: boolean;
}

export default function ImageGallery({
  images,
  columns = 3,
  showCategories = true,
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(images.map((img) => img.category).filter(Boolean))];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const columnClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <>
      {/* Category Filter */}
      {showCategories && categories.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as string)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className={`grid ${columnClasses[columns]} gap-4`}>
        {filteredImages.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <ZoomIn size={24} className="text-white" />
                </div>
              </div>
            </div>

            {/* Caption */}
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[selectedIndex].src}
              alt={filteredImages[selectedIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Caption */}
          {filteredImages[selectedIndex].caption && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-white text-sm">{filteredImages[selectedIndex].caption}</p>
            </div>
          )}

          {/* Counter */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <p className="text-white text-sm">
              {selectedIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
