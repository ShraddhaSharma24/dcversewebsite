import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-14 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Coming Up Section */}
        <div className="md:col-span-2 bg-[#0f0f0f] border-2 border-white rounded-xl md:rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Coming Up</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Content Creation */}
            <div className="text-left space-y-2">
              <h3 className="font-semibold text-base sm:text-lg">Content Creation</h3>
              <ul className="text-gray-400 space-y-1 text-xs sm:text-sm">
                <li>AI UGC Generator</li>
                <li>AI Audio Tool</li>
                <li>Speech to Speech</li>
              </ul>
            </div>

            {/* Advertisement */}
            <div className="text-left space-y-2">
              <h3 className="font-semibold text-base sm:text-lg">Advertisement</h3>
              <ul className="text-gray-400 space-y-1 text-xs sm:text-sm">
                <li>AI Facebook Ad Generator</li>
                <li>AI Audio Ad Generator</li>
                <li>AI Product Video Generator</li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="text-left space-y-2">
              <h3 className="font-semibold text-base sm:text-lg">Solutions</h3>
              <ul className="text-gray-400 space-y-1 text-xs sm:text-sm">
                <li>Batch Creations</li>
                <li>AI Ads</li>
                <li>AI Shorts</li>
                <li>AI Video Generator</li>
                <li>AI Shorts Generator</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Info Section */}
        <div className="flex flex-col gap-3 sm:gap-4 h-full justify-between">
          <div className="bg-[#0f0f0f] rounded-xl md:rounded-2xl border-white border-2 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-center">
            dcverce@gmail.com
          </div>
          <div className="bg-[#0f0f0f] rounded-xl md:rounded-2xl border-white border-2 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-center">
            9999999999
          </div>
          <div className="bg-[#0f0f0f] rounded-xl md:rounded-2xl border-white border-2 px-4 sm:px-6 py-3 sm:py-4 text-center">
            <p className="font-semibold text-sm sm:text-base mb-1">Career<br />Get Update</p>
            <p className="text-xs sm:text-sm text-gray-400">Privacy Policy</p>
            <p className="text-xs sm:text-sm text-gray-400">Imprint</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-600 mt-8 sm:mt-10">
        © 2025 dcverse.in
      </div>
    </footer>
  );
}

export default Footer;