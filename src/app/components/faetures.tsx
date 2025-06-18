import Image from "next/image";
import pb1 from "@/app/assets/pb1.png";
import pb2 from "@/app/assets/pb2.png";
import pb3 from "@/app/assets/pb3.png";

function Features() {
  const features = [
    {
      title: "Faster Production",
      description: "Reduce content creation time significantly",
    },
    {
      title: "Increase in Engagement",
      description: "Higher interaction rate with AI-powered content",
    },
  ];

  const logos = [
    { src: pb1, alt: "Nvidia" },
    { src: pb2, alt: "Google Cloud" },
    { src: pb3, alt: "Microsoft for Startups" },
  ];

  return (
    <div className="bg-black text-white mx-4 sm:mx-[10%] lg:mx-[20%] border-2 border-white mb-0">
      {/* Features Section */}
      <div className="font-bold text-xl sm:text-2xl md:text-3xl text-white m-2 text-center">OUR FEATURES</div>
      <hr className="h-px bg-white border-0" />
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 p-4 sm:p-6 md:p-10 mb-6 sm:mb-10">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex-1 p-4 sm:p-6 rounded-md relative transition-all transform group 
                       border border-white hover:shadow-[4px_0_10px_0_rgba(0,255,255,0.3)]"
          >
            {/* arrow icon */}
            <div className="flex items-center mb-3 sm:mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#06d6d6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 sm:w-6 h-5 sm:h-6 mr-2 transition-transform group-hover:rotate-45 group-hover:stroke-cyan-400 group-hover:filter group-hover:drop-shadow-[0_0_5px_cyan]"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>

              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold group-hover:text-cyan-400 transition-all">
                {item.title}
              </h2>
            </div>

            <p className="text-gray-400 text-sm sm:text-base mb-2 group-hover:text-gray-200 transition-all">
              {item.description}
            </p>

            {/* Holographic glow bar at bottom */}
            <div
              className="absolute bottom-0 left-0 w-full h-1 
                         transform scale-x-0 group-hover:scale-x-100 
                         transition-transform duration-500 origin-left"
            ></div>
          </div>
        ))}
      </div>

      {/* Powered by Section */}
      <div>
        <div className="flex items-center mb-4 sm:mb-6 mt-4 sm:mt-6">
          <hr className="flex-grow border-t border-white" />
          <p className="text-white text-center mx-2 sm:mx-4 text-sm sm:text-base md:text-xl uppercase font-poppins font-semibold tracking-widest">
            Powered By
          </p>
          <hr className="flex-grow border-t border-white" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pl-4 sm:pl-8 pt-4 pr-4 sm:pr-8 pb-4 mb-6 sm:mb-8">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="transition-all transform 
                         hover:translate-y-[-5px] 
                         bg-gradient-to-br from-black to-gray-900"
            >
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={200} 
                height={200}
                className="w-[120px] sm:w-[160px] md:w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features;