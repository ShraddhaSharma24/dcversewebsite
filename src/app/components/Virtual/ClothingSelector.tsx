import { FaTshirt, FaMagic } from 'react-icons/fa';

export const ClothingSelector = () => {
  const templates = [
    { name: "Summer", icon: <FaTshirt className="text-yellow-400 text-sm" /> },
    { name: "Work", icon: <FaTshirt className="text-blue-400 text-sm" /> },
    { name: "Party", icon: <FaTshirt className="text-pink-400 text-sm" /> },
    { name: "Gym", icon: <FaTshirt className="text-green-400 text-sm" /> }
  ];

  return (
    <div className="bg-[#1d1d1d] p-4 rounded-xl border border-gray-700">
      <h3 className="text-md font-bold mb-3">Select Clothing</h3>
      
      {/* Template Section - More Compact */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-medium text-gray-300">Templates</h4>
          <button className="text-xs text-purple-400 hover:text-purple-300 flex items-center">
            <FaMagic className="mr-1 text-xs" /> AI Suggest
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {templates.map((template, index) => (
            <button
              key={index}
              className="flex items-center space-x-1.5 p-2 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition-colors text-xs"
            >
              <span>{template.icon}</span>
              <span className="text-white truncate">{template.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selection Options - More Compact */}
      <div className="space-y-3">
        <div>
          <label htmlFor="clothing-type" className="block text-xs font-medium text-gray-300 mb-1">Category</label>
          <select 
            id="clothing-type" 
            name="clothing-type" 
            className="mt-0.5 block w-full pl-2 pr-8 py-1.5 text-sm bg-gray-700 border-gray-600 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white rounded"
          >
            <option>Top</option>
            <option>Bottom</option>
            <option>Dress</option>
            <option>Outerwear</option>
            <option>Accessories</option>
          </select>
        </div>
        <div>
          <label htmlFor="clothing-style" className="block text-xs font-medium text-gray-300 mb-1">Style</label>
          <select 
            id="clothing-style" 
            name="clothing-style" 
            className="mt-0.5 block w-full pl-2 pr-8 py-1.5 text-sm bg-gray-700 border-gray-600 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white rounded"
          >
            <option>Casual</option>
            <option>Formal</option>
            <option>Sporty</option>
            <option>Vintage</option>
            <option>Bohemian</option>
          </select>
        </div>
        <div>
          <label htmlFor="clothing-color" className="block text-xs font-medium text-gray-300 mb-1">Color</label>
          <select 
            id="clothing-color" 
            name="clothing-color" 
            className="mt-0.5 block w-full pl-2 pr-8 py-1.5 text-sm bg-gray-700 border-gray-600 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white rounded"
          >
            <option>Any</option>
            <option>Black</option>
            <option>White</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
            <option>Yellow</option>
            <option>Patterned</option>
          </select>
        </div>
        <div>
          <label htmlFor="clothing-size" className="block text-xs font-medium text-gray-300 mb-1">Size</label>
          <select 
            id="clothing-size" 
            name="clothing-size" 
            className="mt-0.5 block w-full pl-2 pr-8 py-1.5 text-sm bg-gray-700 border-gray-600 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white rounded"
          >
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
        <div>
          <label htmlFor="clothing-brand" className="block text-xs font-medium text-gray-300 mb-1">Brand</label>
          <select 
            id="clothing-brand" 
            name="clothing-brand" 
            className="mt-0.5 block w-full pl-2 pr-8 py-1.5 text-sm bg-gray-700 border-gray-600 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white rounded"
          >
            <option>Any</option>
            <option>Nike</option>
            <option>Adidas</option>
            <option>Zara</option>
            <option>H&M</option>
            <option>Gucci</option>
            <option>Prada</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ClothingSelector;