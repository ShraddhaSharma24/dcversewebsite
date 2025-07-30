import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faStar, faDownload } from '@fortawesome/free-solid-svg-icons';

export default function ResultsGrid({ handleRatingClick }: { handleRatingClick: (stars: number) => void }) {
  return (
    <div className="bg-[#1d1d1d] p-6 rounded-xl border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Your Virtual Try-On Results</h2>
        <div className="text-sm text-gray-400">
          <span className="font-medium">Generations left today:</span> 12/20
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample generated image card */}
        <div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600 hover:border-gray-400 transition duration-300">
          <div className="aspect-square bg-[#1d1d1d] flex items-center justify-center">
            <span className="text-gray-400">Virtual Try-On Result</span>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-300">Summer Floral Dress</span>
              <div className="flex space-x-2">
                <button 
                  className="text-white hover:text-yellow-500"
                  onClick={() => handleRatingClick(5)}
                >
                  <FontAwesomeIcon icon={faStar} />
                </button>
                <button className="text-white hover:text-purple-500">
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              <p>Generated 5 minutes ago</p>
            </div>
          </div>
        </div>

        {/* Another sample */}
        <div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600 hover:border-gray-400 transition duration-300">
          <div className="aspect-square bg-[#1d1d1d] flex items-center justify-center">
            <span className="text-gray-400">Virtual Try-On Result</span>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-300">Casual T-Shirt</span>
              <div className="flex space-x-2">
                <button 
                  className="text-white hover:text-yellow-500"
                  onClick={() => handleRatingClick(4)}
                >
                  <FontAwesomeIcon icon={faStar} />
                </button>
                <button className="text-white hover:text-purple-500">
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              <p>Generated 12 minutes ago</p>
            </div>
          </div>
        </div>

        {/* Empty state for new generations */}
        <div className="bg-gray-700 rounded-lg flex items-center justify-center aspect-square border border-gray-600">
          <div className="text-center p-6">
            <FontAwesomeIcon icon={faTshirt} className="text-4xl text-white mb-3" />
            <p className="text-white">Your generated outfits will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}