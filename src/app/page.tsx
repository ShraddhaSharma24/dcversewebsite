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
import ThreeWall3DBackground from "./components/ThreeDGridBackground";

import FashionInfluencers from "./components/new2";

export default function Home() {
  return (
    <div className="w-full relative bg-black">
      <div className="fixed top-0 left-0 right-0 h-[8vh] min-h-[40px] bg-black z-10 flex items-center justify-center px-2 sm:px-0 border-b-1 border-white" >
        <Image 
          src={Dcverse_logo} 
          alt="DCverse Logo" 
          className="h-[80%] max-h-[36px] sm:max-h-[60px] object-contain" 
          style={{ width: 'auto' }} 
        />
      </div>
      <div className="backdrop-blur-sm backdrop-brightness-[0.6]">
        <DCVerse />
        <Divider id="divider1" />
        
        <h1 className="text-5xl font-bold bg-black text-white mb-2 text-center font-poppins p-2">
          India&apos;s First AI Creatorverse
        </h1>
        <Divider id="divider2" />
        
        {/* First 3D grid between divider 2 and divider 3 */}
       
        
        <VirtualHumans/>
        <FashionInfluencers/>
        <Divider id="divider3" />
        <ThreeWall3DBackground startId="divider2" endId="divider3" />
        <PoweredBy />
        <AIRelisticSkin />
        <AiTryOn />
        <ModelControl />
        <Divider id="divider4" />
        <ThreeWall3DBackground startId="divider3" endId="divider4" />
        
        <AdsSection />
        <TrustedBy />
        <Features />
        <Form />
        <Divider id="divider5" />
      
        <Footer id="footer" />
        <ThreeWall3DBackground startId="divider4" endId="divider5" />
      </div>
    </div>
  );
}