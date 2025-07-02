import Divider from "./components/divider";

import AIRelisticSkin from "./components/AIRealisticSkin";
import AiTryOn from "./components/AiTryOn";
import ModelControl from "./components/ModelControl";


import DCVerse from "./components/hero";
import AdsSection from "./components/Ads";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/faetures";
import Form from "./components/form";
import Footer from "./components/footer";
import Dcverse_logo from "@/app/assets/Dcverse_logo.png";
import PoweredBy from "./components/PoweredBy";
import VirtualHumans from "./components/new";
import Image from "next/image";

import FashionInfluencers from "./components/new2";

export default function Home() {
  return (
    <div
      className="w-full relative bg-black bg-[url('/background_1.png')] bg-repeat bg-[length:300px_300px]"
    >
      
      <div className="fixed top-0 left-0 right-0 h-[8vh] min-h-[40px] bg-black z-10 flex items-center justify-center px-2 sm:px-0 border-b-1 border-white">
        <Image 
          src={Dcverse_logo} 
          alt="DCverse Logo" 
          className="h-[80%] max-h-[36px] sm:max-h-[60px] object-contain" 
          style={{ width: 'auto' }} 
        />
      </div>
      <div className="backdrop-blur-sm backdrop-brightness-[0.6]">
        <DCVerse />
        
        <Divider />
        <h1 className="text-5xl font-bold text-white mb-2 text-center font-poppins p-2">
          Let&apos;s Get you inside the DC Verse
        </h1>
        <Divider />
        <VirtualHumans/>
        <FashionInfluencers/>
        {/* <Kshan />
        <Rynaa />
        <Nadia />
        <Bunny /> */}
        <PoweredBy />
        <AIRelisticSkin />
        <AiTryOn />
        <ModelControl />
        <Divider />
        <AdsSection />
        <TrustedBy />
        <Features />
        <Form />
        <Divider />
        <Footer />
      </div>
    </div>
  );
}
