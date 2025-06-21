"use client";
import React from "react";
import Image from "next/image";
import Dcverse_logo from "@/app/assets/Dcverse_logo.png";
import VideoReplacement from "@/app/assets/video_replacement.png";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <header className="absolute top-0 left-0 right-0 h-[10vh] bg-black z-10 flex items-center justify-center">
        <Image 
          src={Dcverse_logo} 
          alt="DCverse Logo" 
          className="h-[80%] object-contain" 
          style={{ width: 'auto' }} 
        />
      </header>
      <Image
        src={VideoReplacement}
        alt="Background"
        fill
        className="absolute w-full h-full object-cover min-w-full min-h-full"
        style={{ objectPosition: 'center center' }}
        priority
      />
    </section>
  );
}
