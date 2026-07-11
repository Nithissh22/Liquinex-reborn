"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function GlobalLoader() {
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState("falling"); 

  useEffect(() => {
    setIsMounted(true);
    
    // Prevent scrolling while the animation plays
    document.body.style.overflow = "hidden";

    // Animation timeline - Spaced out for ultra-smooth transitions
    const timers = [
      setTimeout(() => setPhase("swell"), 800),     // Drop hits center
      setTimeout(() => setPhase("bigdrop"), 1400),  // Smooth expansion
      setTimeout(() => setPhase("text"), 1800),     // Logo gently emerges
      setTimeout(() => setPhase("reveal"), 3500),   // Long hold, then fade out
      setTimeout(() => {
        setShow(false);
        document.body.style.overflow = "auto";
      }, 4500) // Unmounts component after a long, smooth 1-second exit fade
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 overflow-hidden pointer-events-none"
        >
          {/* Impact Ripple - Smoother and softer */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              phase === "swell" || phase === "bigdrop" || phase === "text" || phase === "reveal" 
                ? { scale: 12, opacity: [0, 0.4, 0] } 
                : {}
            }
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute w-40 h-40 border-[4px] border-primary rounded-full"
          />

          {/* The Water Drop */}
          <motion.div
            initial={{ 
              y: "-150vh", 
              scale: 0.5,
              borderRadius: "50% 0% 50% 50%", // Sharp top-right corner
              rotate: -45, // Rotates sharp corner to point straight up (falling down)
              opacity: 1
            }}
            animate={
              phase === "falling" ? { 
                y: 0, 
                scale: 1,
                borderRadius: "50% 0% 50% 50%",
                rotate: -45
              } : phase === "swell" ? {
                y: 5, 
                scale: [1, 1.2, 1],
                borderRadius: "50% 50% 50% 50%", 
                rotate: -45
              } : phase === "bigdrop" || phase === "text" || phase === "reveal" ? {
                y: 0,
                scale: 60, // Massive smooth expansion
                borderRadius: "50% 50% 50% 50%",
                rotate: 0,
                backgroundColor: "#0ea5e9" 
              } : {}
            }
            transition={{ 
              y: { type: "spring", damping: 25, stiffness: 120, mass: 1 },
              scale: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
              borderRadius: { duration: 0.5, ease: "easeInOut" },
              backgroundColor: { duration: 0.8, ease: "easeInOut" }
            }}
            className="absolute w-12 h-12 bg-accent shadow-[0_0_80px_rgba(2,132,199,0.8)]"
          />

          {/* The LIQUINEX Logo Reveal - Removed blur for better performance and smoother transition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={
              phase === "text" || phase === "reveal" ? {
                opacity: 1,
                scale: 1,
                y: 0
              } : {}
            }
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex items-center justify-center w-full max-w-[80vw] md:max-w-2xl h-32 md:h-48"
          >
            <Image 
              src="/logo-v2.png" 
              alt="Liquinex Logo" 
              fill 
              priority
              className="object-contain brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
