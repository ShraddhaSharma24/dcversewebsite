"use client";
import { useState } from "react";
import { FiUpload, FiThumbsUp, FiThumbsDown, FiDownload, FiStar } from "react-icons/fi";
import { FiUploadCloud } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";


export default function TryOnPanel() {
  const [prompt, setPrompt] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-white">
        <h1 className="font-mono text-white">AI Virtual Try-On</h1>
        <div className="flex items-center gap-2">
          <span className="text-white text-sm mr-6">🔥 2000 </span>
          <button className="bg-green-500 px-4 py-1.5 text-xs rounded">Plan</button>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Left Panel */}
        <div className="relative w-[20%] bg-[#1d1d1d] p-4 border-r border-white font-mono flex flex-col h-screen">
          
          {/* Virtual Models */}
          <p className="text-xs text-white mb-2">Virtual Model</p>
         <div className="grid grid-cols-3 gap-x-4 gap-y-2 mb-6">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-18 h-22 bg-white rounded-md" />
            ))}
            </div>


     {/* Garment Upload */}
<div className="flex items-start mb-4 gap-2">
  {/* Upload Box */}
  <div
    onClick={handleUploadClick}
    className="border-2 border-white rounded-lg py-12 h-20 w-full flex justify-center items-center cursor-pointer text-white text-xs relative overflow-hidden"
  >
    {previewUrl ? (
      <img
        src={previewUrl}
        alt="Uploaded Garment"
        className="object-cover w-full h-full"
      />
    ) : (
      <div className="flex flex-col items-center gap-3 mt-10 mb-7">
        <FiUploadCloud size={22} className="mr-1" />
        Upload Garment
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

  {/* Guidelines Icon with Tooltip */}
  <div className="relative group mt-1">
    <FiInfo className="text-white cursor-pointer" size={16} />
    <div className="absolute z-10 hidden group-hover:block left-6 top-0 w-64 text-xs text-white bg-black border border-gray-400 p-3 rounded shadow-lg">
      <strong>Motion Control</strong><br />
      Apply specific motions to characters in the image.<br /><br />
      <strong>Motion Capture</strong><br />
      Upload motion data to animate the avatar accurately.
    </div>
  </div>
</div>


          {/* Prompt */}
          <p className="text-xs text-white mb-2">Prompt</p>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your scene"
            className="w-full bg-[#1d1d1d] border border-white text-xs rounded-sm pb-3 pl-2 pt-1 text-white placeholder-grey-200  top-1 left-0"
          />

          {/* Generate Button at Bottom */}
          <button
            className="absolute bottom-26 mb-10 w-[calc(80%-2rem)] self-center font-bold text-green-500 border border-white bg-white py-2 text-xs rounded "
          >
            Generate
          </button>
        </div>

        {/* Right Panel - AI Outfits */}
       <div className="flex-1 p-8 space-y-4 overflow-y-auto h-screen hide-scrollbar">
          {[1, 2,3,4,5,6].map((item) => (
            <div>
                 <p className="text-white text-sm mb-2  ">AI Outfit</p>
            <div key={item} className="bg-white rounded p-4 h-96 relative">
             
              <div className="absolute top-2 right-2 flex gap-2 text-black">
                <FiThumbsUp />
                <FiThumbsDown />
                <FiDownload />
                <FiStar />
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
