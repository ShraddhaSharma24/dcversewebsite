import React from "react";
import logo1 from "@/app/assets/logo1.png";
import logo2 from "@/app/assets/logo2.png";
import logo3 from "@/app/assets/logo3.png";
import logo4 from "@/app/assets/logo4.png";
import logo5 from "@/app/assets/logo5.png";
import Image from "next/image";

function TrustedBy() {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="border border-white mx-4 sm:mx-[10%] lg:mx-[20%] bg-black h-auto py-4 sm:py-6"> {/* Box container */}
      <div className="flex items-center mb-4 sm:mb-6 mt-4 sm:mt-6">
        <hr className="flex-grow border-t border-white" /> {/* Horizontal line */}
        <p className="text-white text-center mx-2 sm:mx-4 text-sm sm:text-base md:text-xl uppercase font-poppins font-semibold tracking-widest">
          Trusted by global brands
        </p>
        <hr className="flex-grow border-t border-white" /> {/* Horizontal line */}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {logos.map((logo, idx) => (
          <div key={idx} className="relative h-8 sm:h-10 md:h-12 mb-6 sm:mb-10 w-auto">
            <Image
              src={logo}
              alt={`Logo ${idx + 1}`}
              width={120}
              height={80}
              className="object-contain w-[80px] sm:w-[100px] md:w-[120px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustedBy;