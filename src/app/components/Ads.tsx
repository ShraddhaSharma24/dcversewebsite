"use client";
import React, { useEffect, useRef } from "react";
import ad1 from "@/app/assets/ad1.png";
import ad2 from "@/app/assets/ad2.png"; 
import ad3 from "@/app/assets/ad3.png";
import ad4 from "@/app/assets/ad4.png";

const ads = [
  { id: 1, image: ad1 },
  { id: 2, image: ad2 },
  { id: 3, image: ad3 },
  { id: 4, image: ad4 }
];

export default function AdsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2; 
    let scrollAmount = 0;
    let requestId: number;

    const scroll = () => {
      scrollAmount += 0.5;
      if (scrollAmount >= scrollWidth) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
      requestId = requestAnimationFrame(scroll);
    };

    requestId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="bg-black overflow-hidden mt-4 h-full">
      <div className="mx-4 sm:mx-[10%] lg:mx-[20%] bg-black border border-white shadow-lg h-full">
        <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-poppins mb-6 sm:mb-8 tracking-wider font-bold text-center pt-6 sm:pt-8">
          OUR ADVERTISEMENT
        </h3>
        <hr className="h-px bg-white border-0" />
        <div 
          ref={containerRef}
          className="flex overflow-x-hidden whitespace-nowrap gap-6 sm:gap-8 items-center scrollbar-hide mt-6 mb-6 pt-6 sm:pt-8 ml-6 sm:ml-8 mr-6 sm:mr-8"
          style={{ height: "400px", minHeight: "400px" }}
        >
          {/* Original + Duplicated ads for seamless looping */}
          {[...ads, ...ads].map((ad, index) => (
            <div 
              key={`${ad.id}-${index}`}
              className="inline-flex h-full relative rounded-lg overflow-hidden transition-transform hover:scale-105"
              style={{ minWidth: "300px" }}
            >
              <img 
                src={ad.image.src} 
                alt={`Advertisement ${ad.id}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}