"use client";

import React, { useEffect, useRef } from "react";
import ad1 from "@/app/assets/ad1.png";
import ad2 from "@/app/assets/ad2.png";
import ad3 from "@/app/assets/ad3.png";
import ad4 from "@/app/assets/ad4.png";
import { SplitText } from "@/components/split-text";
import Image from "next/image";

const ads = [
  { id: 1, url: "https://www.youtube.com/embed/-jPTWxxeP4I?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0" },
  { id: 2, url: "https://www.youtube.com/embed/mI1lqu-_sDA?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0" },
  { id: 3, url: "https://www.youtube.com/embed/OD1cOgm1UBA?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0" },
  { id: 4, url: "https://www.youtube.com/embed/ZPtGxEFbMDs?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0" },
];

export default function AdsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

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
      <div className="mx-4 sm:mx-[10%] lg:mx-[20%] bg-black border border-white shadow-lg h-full ">
        <div className="p-4">
        <SplitText
          text="OUR ADVERTISEMENT"
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white sm: ml-[10%] lg:ml-[30%]"
          delay={50}
          textAlign="center"
          animationFrom={{ opacity: 0, transform: "translate3d(0, 30px, 0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          threshold={0.3}
          rootMargin="-100px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        </div>
        <hr className="h-px bg-white border-0" />
        <div
          ref={containerRef}
          className="flex overflow-x-hidden whitespace-nowrap gap-6 sm:gap-8 items-center scrollbar-hide mt-6 mb-6 pt-6 sm:pt-8 ml-6 sm:ml-8 mr-6 sm:mr-8"
          style={{ height: "400px", minHeight: "400px" }}
        >
          {[...ads, ...ads].map((ad, index) => (
            <div
              key={`${ad.id}-${index}`}
              className="inline-flex h-full relative rounded-lg overflow-hidden transition-transform hover:scale-105 bg-black"
              style={{ minWidth: "300px", width: "300px", height: "100%" }}
            >
              <iframe
                src={ad.url}
                title={`Advertisement ${ad.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
                style={{ aspectRatio: '9/16', minHeight: '100%', minWidth: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
