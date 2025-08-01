"use client";
import { useState } from "react";
import { FiUpload, FiThumbsUp, FiThumbsDown, FiDownload, FiStar, FiUploadCloud, FiInfo } from "react-icons/fi";

export default function TryOnPanel() {
  const [prompt, setPrompt] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [garmentType, setGarmentType] = useState("select");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    document.getElementById("garment-upload")?.click();
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#1d1d1d]">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-white">
        <h1 className="font-mono text-white text-base">AI Virtual Try-On</h1>
        <div className="flex items-center gap-2">
          <span className="text-white text-sm mr-4">🔥 2000 </span>
          <button className="bg-green-500 px-4 py-1 text-xs rounded">Plan</button>
        </div>
      </div>

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Left Panel */}
        <div className="relative w-full md:w-[20%] bg-[#1d1d1d] p-4 border-b md:border-r border-white font-mono flex flex-col overflow-y-auto">
          {/* Virtual Models */}
          <p className="text-xs text-white mb-2">Virtual Model</p>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-full aspect-square bg-white rounded-md" />
            ))}
          </div>

          {/* Garments Present */}
          <p className="text-xs text-white mb-2">Garments Present</p>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-full aspect-square bg-white rounded-md" />
            ))}
          </div>

          {/* Garment Upload with Hover Guidelines */}
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs text-white">Garment Upload</p>
            <div className="relative group">
              <FiInfo 
                className="text-white cursor-pointer" 
                size={14} 
              />
              <div className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 right-0 mt-2 w-64 bg-black border border-gray-400 p-3 rounded shadow-lg pointer-events-none">
                <p className="text-white text-xs mb-2 font-bold">Upload Guidelines:</p>
                <div className="bg-gray-800 p-2 rounded mb-2">
                  <p className="text-white text-xs">1. Use clear, well-lit photos</p>
                  <p className="text-white text-xs">2. Show entire garment</p>
                  <p className="text-white text-xs">3. Plain background preferred</p>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <p className="text-white text-xs">4. Avoid folded/wrinkled items</p>
                  <p className="text-white text-xs">5. Front view recommended</p>
                  <p className="text-white text-xs">6. High resolution (1MB+)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Box */}
          <div className="flex items-start mb-4 gap-2">
            <div
              onClick={handleUploadClick}
              className="border-2 border-dashed border-white rounded-lg py-12 w-full flex justify-center items-center cursor-pointer text-white text-xs relative overflow-hidden"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Uploaded Garment"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <FiUploadCloud size={18} />
                  <span>Upload Garment</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                id="garment-upload"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Garment Type Dropdown */}
          <div className="mb-4">
            <p className="text-xs text-white mb-2">Garment Type</p>
            <select
              value={garmentType}
              onChange={(e) => setGarmentType(e.target.value)}
              className="w-full bg-[#1d1d1d] border border-white text-xs rounded-sm p-2 text-white"
            >
              <option value="select">Select Garment Type</option>
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="full sleeves">Full Sleeves</option>
              <option value="dress">Dress</option>
            </select>
          </div>

          {/* Prompt */}
          <p className="text-xs text-white mb-2">Prompt</p>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your scene"
            className="w-full bg-[#1d1d1d] border border-white text-xs rounded-sm p-2 text-white placeholder-gray-400"
          />

          {/* Generate Button */}
          <button className="mt-4 w-full font-bold text-green-500 border border-white bg-white py-2 text-xs rounded hover:bg-gray-100 transition-colors">
            Generate
          </button>
        </div>

        {/* Right Panel - AI Outfits */}
        <div className="flex-1 p-4 md:p-8 space-y-4 overflow-y-auto">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="mb-6">
              <p className="text-white text-sm mb-2">AI Outfit #{item}</p>
              <div className="bg-white rounded p-4 h-96 relative">
                <div className="absolute top-4 right-4 flex gap-4 text-black">
                  <button className="hover:text-gray-600">
                    <FiThumbsUp size={16} />
                  </button>
                  <button className="hover:text-gray-600">
                    <FiThumbsDown size={16} />
                  </button>
                  <button className="hover:text-gray-600">
                    <FiDownload size={16} />
                  </button>
                  <button className="hover:text-gray-600">
                    <FiStar size={16} />
                  </button>
                </div>
                {/* Placeholder for generated outfit */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Generated outfit will appear here
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}