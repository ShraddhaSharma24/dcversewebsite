import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

export default function CreditsModal({ show, onClose }: { show: boolean; onClose: () => void }) {
  if (!show) return null;

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-[#1d1d1d] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gray-700">
          <div className="bg-[#1d1d1d] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                <FontAwesomeIcon icon={faCoins} className="text-orange-500" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-white">Out of Credits</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-300">You've used all your available credits. Upgrade your plan to continue generating virtual try-ons.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {[
                { 
                  name: "Starter Plan", 
                  description: "5,000 credits (100 images)", 
                  price: "$19/month",
                  color: "bg-orange-500 hover:bg-orange-600"
                },
                { 
                  name: "Professional Plan", 
                  description: "25,000 credits (500 images)", 
                  price: "$49/month",
                  color: "bg-purple-600 hover:bg-purple-700",
                  popular: true
                },
                { 
                  name: "Enterprise Plan", 
                  description: "100,000 credits (2,000 images)", 
                  price: "$149/month",
                  color: "bg-purple-600 hover:bg-purple-700"
                }
              ].map((plan, index) => (
                <div 
                  key={index} 
                  className={`border ${plan.popular ? 'border-purple-500 bg-[#1d1d1d]' : 'border-gray-600'} rounded-lg p-4`}
                >
                  <h4 className="font-medium text-lg text-white">{plan.name}</h4>
                  <p className="text-gray-400">{plan.description}</p>
                  <p className="text-purple-400 font-bold text-xl mt-2">{plan.price}</p>
                  <button 
                    className={`mt-3 w-full text-white py-2 px-4 rounded-md text-sm font-medium ${plan.color}`}
                  >
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#1d1d1d] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button 
              type="button" 
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-[#1d1d1d] text-base font-medium text-white hover:bg-[#1d1d1d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}