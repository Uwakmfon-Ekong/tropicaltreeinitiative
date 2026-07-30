"use client";
import { useState } from "react";

// add as many images as you want here — the grid scales automatically
const galleryImages = [
  "/trcc1.jpg",
  "/trcc2.jpg",
  "/trcc3.jpg",
  "/trcc 4.jpg",
  "/trcc 5.jpg",
  "/trcc 6.jpg",
  "/trcc7.jpg",
  "/tree5.jpeg",
];

const PAGE_SIZE = 12;

export default function GalleryGrid() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="bg-green-fog py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-green-light block mb-2">
            Photo Gallery
          </span>
          <h2 className="font-serif text-4xl font-semibold text-green-dark mb-4">
            TRCC In Action
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A look into our mangrove restoration efforts, community training sessions, and conservation work across the Niger Delta.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.slice(0, visible).map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(img)}
              className="relative rounded-2xl overflow-hidden border border-green-light/15 h-44 sm:h-52 group cursor-pointer"
            >
              <img
                src={img}
                alt={`TRCC gallery photo ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>

        {visible < galleryImages.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="bg-green-dark text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-green-mid transition-colors"
            >
              Load More Photos
            </button>
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 cursor-pointer"
        >
          <img
            src={activeImage}
            alt="Expanded gallery photo"
            className="max-w-full max-h-full rounded-2xl object-contain"
          />
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}