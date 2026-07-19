"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VideoCarouselProps {
  videos: string[];
  className?: string;
}

export function VideoCarousel({ videos, className }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrentIndex((current) => (current === videos.length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((current) => (current === 0 ? videos.length - 1 : current - 1));
  };

  if (!videos || videos.length === 0) return null;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className={cn("relative group w-full", className)}>
      <div className="overflow-hidden rounded-2xl relative bg-black aspect-video shadow-2xl border border-primary-light">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <video 
              src={videos[currentIndex]} 
              className="absolute inset-0 w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {videos.length > 1 && (
        <>
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 bg-background/90 hover:bg-background rounded-full z-10 shadow-lg text-primary"
            onClick={prev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 bg-background/90 hover:bg-background rounded-full z-10 shadow-lg text-primary"
            onClick={next}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          <div className="flex items-center justify-center gap-3 mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-accent scale-125" : "bg-neutral-light/50 hover:bg-neutral-light"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
