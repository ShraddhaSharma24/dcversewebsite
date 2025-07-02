"use client";
import React from "react";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[400px] bg-black overflow-hidden">
      
      
      
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
