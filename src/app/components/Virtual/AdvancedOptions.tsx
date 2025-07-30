import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';

export default function AdvancedOptions({ handleGenerateClick }: { handleGenerateClick: () => void }) {
  return (
    <div className="bg-[#1d1d1d] p-6 rounded-xl border border-gray-700">
      <h3 className="text-lg font-bold mb-4">Advanced Options</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="seed" className="block text-sm font-medium text-gray-300 mb-1">Seed</label>
          <input 
            type="number" 
            id="seed" 
            name="seed" 
            className="mt-1 block w-full bg-gray-700 border-gray-600 text-white rounded-md focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div>
          <label htmlFor="pose" className="block text-sm font-medium text-gray-300 mb-1">Pose</label>
          <select 
            id="pose" 
            name="pose" 
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-white rounded-md"
          >
            <option>Keep original</option>
            <option>Standing front</option>
            <option>Standing side</option>
            <option>Sitting</option>
            <option>Walking</option>
          </select>
        </div>
      </div>
      <button 
        onClick={handleGenerateClick}
        className="mt-6 w-full bg-orange-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faMagic} className="mr-2" /> Generate (50 credits)
      </button>
    </div>
  );
}