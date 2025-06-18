import Image from "next/image";
import Divider from "./components/divider";
import Kshan from "./components/kshan";
import Rynaa from "./components/Rynaa";
import Nadia from "./components/Nadia";
import Bunny from "./components/Bunny";
import AIRelisticSkin from "./components/AIRealisticSkin";
import AiTryOn from "./components/AiTryOn";
import ModelControl from "./components/ModelControl";
import Advertisement from "./components/Advertisement";
import AdsCarousel from "./components/AdsCarousel/AdsCarousel";
import DCVerse from "./components/hero";
import AdsSection from "./components/Ads";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/faetures";
import Form from "./components/form";
import Footer from "./components/footer";
import RetroGridBackground from "./components/bg";
export default function Home() {
  return (
   <div className= "bg-black w-full">
    <DCVerse/>
    <Divider/>
    <h1 className="text-5xl font-bold text-white mb-2 text-center font-poppins p-2"> Let's Get you inside the DC Verse </h1>
    <Divider/>
    <Kshan/>
    <Rynaa/>
    <Nadia />
    <Bunny />
    <AIRelisticSkin/>
    <AiTryOn/>
    <ModelControl/>
    <Divider/>
    <AdsSection/>
    <TrustedBy />
    <Features/>
    <Form/>
    <Divider/>
    <Footer/>
   </div>
  );
}
