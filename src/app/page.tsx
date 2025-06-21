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

import PoweredBy from "./components/PoweredBy";
import VirtualHumans from "./components/new";

import FashionInfluencers from "./components/new2";

export default function Home() {
  return (
    <div
      className="w-full bg-black bg-[url('/background_1.png')] bg-repeat bg-[length:300px_300px]"
    >
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
