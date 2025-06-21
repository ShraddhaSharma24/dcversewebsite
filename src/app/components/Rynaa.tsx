"use client";

import React from "react";
import Image from "next/image";
import rynaa from "@/app/assets/rynaa.png";

import { Instagram, Youtube } from 'lucide-react';

export default function Rynaa() {
  return (
    <div className="mx-4 sm:mx-[10%] lg:mx-[20%] border-2 border-white bg-black bg-opacity-50 backdrop-blur-sm font-poppins text-white">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-center font-poppins pt-4">RYNAA</h1>
          <hr className="h-px bg-white border-0" />
          
          <p className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 font-semibold mb-4 px-4 sm:ml-8 sm:mr-20 text-center sm:text-left">
            Avant-garde fashion queen. Bold looks, fearless vibes. #AvantGardeFashion #FashionAsArt.
          </p>
          
          <div className="flex gap-3 sm:gap-4 mb-4 mt-4 justify-center sm:justify-start sm:ml-8">
            <span className="px-3 py-1 bg-[#4EBF74] text-black rounded-full text-base sm:text-lg font-poppins">Trendsetter</span>
            <span className="px-3 py-1 bg-[#8C4EBF] text-black rounded-full text-base sm:text-lg font-poppins">Fearless</span>
          </div>
          
          <div className="mt-4 sm:ml-8 flex items-center justify-center sm:justify-start mb-6 sm:mb-4">
            <div className="text-xl sm:text-2xl text-white mr-3 sm:mr-4">
              Unlock My Vision
            </div>
            <Instagram className="w-7 h-7 sm:w-8 sm:h-8 ml-1 sm:ml-2 text-white hover:scale-110 transition-transform duration-300 ease-in-out" />
            <Youtube className="w-8 h-8 sm:w-10 sm:h-10 ml-1 sm:ml-2 text-white hover:scale-110 transition-transform duration-300 ease-in-out" />
          </div>
        </div>
        
        <div className="hidden md:block w-px bg-white m-0 p-0"></div>
        
        <div className="flex justify-center p-4 sm:p-2 sm:pt-4">
          <Image 
            src={rynaa} 
            alt="rynaa" 
            width={300} 
            height={300}
            className="rounded-lg object-cover w-[250px] sm:w-[300px] mx-2 sm:mx-4 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}