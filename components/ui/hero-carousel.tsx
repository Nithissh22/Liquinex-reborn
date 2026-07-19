"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/hero-slider/img-1.png",
  "/hero-slider/img-2.png",
  "/hero-slider/img-3.png",
  "/hero-slider/img-4.png",
  "/hero-slider/img-5.png",
  "/hero-slider/img-6.png",
  "/hero-slider/img-7.png",
  "/hero-slider/img-8.png",
  "/hero-slider/img-9.png",
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Hero Background ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay to ensure white text is perfectly legible */}
      <div className="absolute inset-0 bg-slate-900/60 z-10" />
      
      {/* Top gradient to protect navbar legibility */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-900/90 to-transparent z-10" />

      {/* Bottom gradient to smoothly blend into the next section */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between z-50 pointer-events-none">
        <button
          onClick={goToPrev}
          className="pointer-events-auto p-3 rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition-all border border-white/20 hidden md:block"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="pointer-events-auto p-3 rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition-all border border-white/20 hidden md:block"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-50 pointer-events-auto">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-white scale-125 w-6" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
