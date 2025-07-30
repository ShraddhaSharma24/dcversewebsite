'use client';
import { faTshirt, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  handleDashboardClick: (e: React.MouseEvent) => void;
}

export const Header = ({ mobileMenuOpen, toggleMobileMenu, handleDashboardClick }: HeaderProps) => {
  return (
    <nav className="bg-black fixed w-full z-10 border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <FontAwesomeIcon icon={faTshirt} className="text-white text-2xl mr-2" />
              <span className="text-xl font-bold text-white tracking-widest">AI-tryon</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link href="#features" className="nav-link text-white hover:text-purple-300 px-3 py-2 text-sm font-medium">
              Features
            </Link>
            <Link href="#how-it-works" className="nav-link text-white hover:text-purple-300 px-3 py-2 text-sm font-medium">
              How It Works
            </Link>
            <Link href="#pricing" className="nav-link text-white hover:text-purple-300 px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
            <a href="/signin">
            <button
              // onClick={handleDashboardClick}
              className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-300"
            >
              Try It Now
            </button>
            </a>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1 bg-[#1d1d1d]">
          <Link href="#features" className="block px-3 py-2 text-base font-medium text-white hover:bg-[#1d1d1d]">
            Features
          </Link>
          <Link href="#how-it-works" className="block px-3 py-2 text-base font-medium text-white hover:bg-[#1d1d1d]">
            How It Works
          </Link>
          <Link href="#pricing" className="block px-3 py-2 text-base font-medium text-white hover:bg-[#1d1d1d]">
            Pricing
          </Link>
          <a href='/signin'>
          <button
            // onClick={handleDashboardClick}
            className="block w-full text-left px-3 py-2 text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
          >
            
            Try It Now
          </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;