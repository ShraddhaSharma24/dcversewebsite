import Navbar from "@/app/components/Navbar";
import ToolCard from "@/app/components/ToolCard";
import Image from "next/image";
import GridBox from "@/app/components/grid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-full bg-black text-white">
        <div className="sticky top-0">
            <Navbar/>
        </div>
      {/* Tools Section */}
      <section className="px-6 py-10">
        <div className="flex flex-row gap-30">
        <h2 className="text-2xl mb-6 text-white ml-20 text-center align-left pt-20">All Tools:</h2>
        <div className="flex gap-15">
          <ToolCard title="AI TRY ON" />
          <ToolCard title="AI PHOTOGRAPHY" />
          <ToolCard title="AI INFLUENCERS" />
        </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-10 ml-10">
          <Image src="/image.png" width={600} height={600} alt="Sample" />
          <Image src="/image.png" width={600} height={600} alt="Sample" />
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 py-10">
      <GridBox />
       <div className="w-full overflow-x-auto hide-scrollbar">
        <div className="grid grid-flow-col auto-cols-max gap-4 ">
            {[...Array(10)].map((_, i) => (
            <Image
                key={i}
                src="/image.png"
                width={300}
                height={200}
                alt="Thumb"
                className="rounded"
            />
            ))}
        </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-4 py-3 bg-[#EADDFE] rounded-md text-[#4F378A] font-bold">Generate Now</button>
        </div>
      </section>
    </div>
  );
}
