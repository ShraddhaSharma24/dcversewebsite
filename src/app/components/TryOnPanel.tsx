"use client";
import { useState } from "react";
import { FiUpload, FiThumbsUp, FiThumbsDown, FiDownload, FiStar } from "react-icons/fi";
import { FiUploadCloud } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";

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
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-2 sm:p-4 border-b border-white">
        <h1 className="font-mono text-white text-sm sm:text-base">AI Virtual Try-On</h1>
        <div className="flex items-center gap-2">
          <span className="text-white text-xs sm:text-sm mr-2 sm:mr-6">🔥 2000 </span>
          <button className="bg-green-500 px-2 sm:px-4 py-1 text-xs rounded">Plan</button>
        </div>
      </div>

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Left Panel - becomes top panel on mobile */}
        <div className="relative w-full md:w-[20%] bg-[#1d1d1d] p-2 sm:p-4 border-b md:border-r border-white font-mono flex flex-col overflow-y-auto">
          {/* Virtual Models */}
          <p className="text-xs text-white mb-2">Virtual Model</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-x-2 sm:gap-x-4 gap-y-2 mb-4 sm:mb-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-full aspect-square bg-white rounded-md" />
            ))}
          </div>

          {/* Garment Upload Heading */}
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs text-white">Garment Upload</p>
            <div className="relative group flex items-center gap-1">
              <FiInfo className="text-white cursor-pointer" size={14} />
              <div className="absolute z-10 hidden group-hover:flex flex-col gap-2 left-full ml-2 top-0 w-64 bg-black border border-gray-400 p-3 rounded shadow-lg">
                <img src="/guideline1.png" alt="Guideline 1" className="rounded w-full" />
                <img src="/guideline2.png" alt="Guideline 2" className="rounded w-full" />
              </div>
            </div>
          </div>

          {/* Upload Box */}
          <div className="flex items-start mb-4 gap-2">
            <div
              onClick={handleUploadClick}
              className="border-2 border-white rounded-lg py-8 sm:py-12 h-20 w-full flex justify-center items-center cursor-pointer text-white text-xs relative overflow-hidden"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Uploaded Garment"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 sm:gap-3 mt-6 sm:mt-10 mb-4 sm:mb-7">
                  <FiUploadCloud size={18} className="mr-1" />
                  <span className="text-center">Upload Garment</span>
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
              className="w-full bg-[#1d1d1d] border border-white text-xs rounded-sm pb-2 pl-2 pt-1 text-white"
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
            className="w-full bg-[#1d1d1d] border border-white text-xs rounded-sm pb-2 sm:pb-3 pl-2 pt-1 text-white placeholder-grey-200"
          />

          {/* Generate Button */}
          <button className="mt-4 mb-2 w-full font-bold text-green-500 border border-white bg-white py-2 text-xs rounded">
            Generate
          </button>
        </div>

        {/* Right Panel - AI Outfits */}
        <div className="flex-1 p-2 sm:p-4 md:p-8 space-y-4 overflow-y-auto">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="mb-4">
              <p className="text-white text-xs sm:text-sm mb-2">AI Outfit</p>
              <div className="bg-white rounded p-2 sm:p-4 h-64 sm:h-80 md:h-96 relative">
                <div className="absolute top-2 right-2 flex gap-2 text-black">
                  <FiThumbsUp className="text-sm sm:text-base" />
                  <FiThumbsDown className="text-sm sm:text-base" />
                  <FiDownload className="text-sm sm:text-base" />
                  <FiStar className="text-sm sm:text-base" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}