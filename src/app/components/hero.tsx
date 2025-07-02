"use client";
import React from "react";
import Image from "next/image";
import Dcverse_logo from "@/app/assets/Dcverse_logo.png";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[400px] bg-black overflow-hidden">
      <header className="absolute top-0 left-0 right-0 h-[8vh] min-h-[40px] bg-black z-10 flex items-center justify-center px-2 sm:px-0">
        <Image 
          src={Dcverse_logo} 
          alt="DCverse Logo" 
          className="h-[80%] max-h-[36px] sm:max-h-[60px] object-contain" 
          style={{ width: 'auto' }} 
        />
      </header>
      <video
        src={"/herovideo.mp4"}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full  object-cover lg:object-contain object-center mt-[8vh]  sm:min-h-0"
        style={{ objectPosition: 'center center' }}
      />
    </section>
  );
}
