"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface LogoMarqueeProps {
  className?: string;
}

const partners = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  logo: `/partners/partner-${i + 1}.png`
}));

export function LogoMarquee({ className }: LogoMarqueeProps) {
  // Duplicate array to create seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className={cn("w-full overflow-hidden bg-primary/30 py-8 border-y border-primary-light/20", className)}>
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-neutral text-sm tracking-widest uppercase font-semibold">
          Working With Big and Small
        </p>
      </div>
      <div className="relative flex w-full">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // adjust speed here
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`partner-${index}`}
              className="flex items-center justify-center px-10 md:px-16"
            >
              <div className="relative w-32 h-16 md:w-48 md:h-24 hover:scale-110 transition-all duration-500 cursor-pointer">
                <Image
                  src={partner.logo}
                  alt={`Partner ${partner.id}`}
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
