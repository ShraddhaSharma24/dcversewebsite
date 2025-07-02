"use client";

import React from "react";
import Image from "next/image";
import slider_replacement from "@/app/assets/slider_replacement.png";
import { SplitText } from "@/components/split-text";
import beforeImg from "@/app/assets/before.png";
import afterImg from "@/app/assets/after.png";
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from "@/components/ui/image-comparison";
import { FaArrowRight } from "react-icons/fa";


export default function RealisticSkinAd() {
  
   const handleAnimationComplete = () => {
  console.log('All letters have animated!');

};
  return (
    <div className="mx-4 sm:mx-[10%] lg:mx-[20%] border-2 border-white bg-black bg-opacity-50 backdrop-blur-sm font-poppins">
      <div className="p-4">
      <SplitText
        text="OUR FEATURES"
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center ml-[10%] lg:ml-[35%]"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}

        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      </div>
      <hr className="h-px bg-white border-2" />
      
      <div className="flex flex-row flex-wrap md:flex-nowrap">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4 mt-2 sm:mt-4 md:mt-6 flex justify-center items-center">
          <ImageComparison className="aspect-[7/8] w-full border-0.5 border-zinc-200 dark:border-zinc-800">
            <ImageComparisonImage
              src={beforeImg.src}
              alt="Motion Primitives Dark"
              position="left"
            />
            <ImageComparisonImage
              src={afterImg.src}
              alt="Motion Primitives Light"
              position="right"
            />
            <ImageComparisonSlider className="bg-white " />
          </ImageComparison>
        </div>
        <div className="hidden md:block w-px bg-white m-0 p-0"></div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="p-4 sm:p-6">
            <p className="uppercase text-white text-xs sm:text-sm mb-1 sm:mb-2">
              No more Plastic AI Skin
            </p>
            
            {/* Typewriter Effect Here */}
            <SplitText
        text="AI REALISTIC SKIN"
        className="text-2xl md:text-4xl lg:text-4xl font-bold text-white text-center ml-[5%] lg:ml-[10%]"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
       
        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
          </div>
          
          <hr className="border border-white" />
          
          <div className="flex flex-1">
            <div className="w-5/7 p-4 sm:p-6 text-white">
              <p className="text-lg sm:text-xl md:text-2xl">
                Skip the boring AI plastic skins and connect with your target audience on a personal level, with our crafted tool. Perfect for Cosmetics and Skincare brands.
              </p>
            </div>
            
           
            <div className="w-px bg-white"></div>
            
            <div className="w-2/7 relative overflow-hidden">
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 20px,
                    white 20px,
                    white 21px
                  )`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}