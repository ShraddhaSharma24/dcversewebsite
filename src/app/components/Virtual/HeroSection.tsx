import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface HeroSectionProps {
  handleDashboardClick: (e: React.MouseEvent) => void;
}

const HeroSection = ({ handleDashboardClick }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">DIGITAL FASHION REVOLUTION</h1>
            <p className="text-xl mb-8 opacity-90">Experience clothing in the digital realm. Our neural networks construct precise simulations to visualize garments on your form.</p>
            <div className="flex space-x-4">
              <button
                onClick={handleDashboardClick}
                className="bg-white text-black px-6 py-3 rounded-none text-lg font-medium tracking-wider hover:bg-gray-200"
              >
                BEGIN SESSION
              </button>
              <Link href="#how-it-works" className="bg-transparent border border-white text-white px-6 py-3 rounded-none text-lg font-medium tracking-wider hover:bg-[#1d1d1d]">
                PROTOCOL
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="border border-gray-700 w-full aspect-video bg-[#1d1d1d] flex items-center justify-center">
              <div className="text-center">
                <FontAwesomeIcon icon={faPlay} className="text-4xl text-gray-500 mb-2" />
                <p className="text-gray-400">Demo Video</p>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-purple-600 px-4 py-2 rounded-full shadow-lg">
              <FontAwesomeIcon icon={faPlay} className="mr-2" /> Watch Demo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;