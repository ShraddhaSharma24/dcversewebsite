'use client';
import { faCloudUploadAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent } from 'react';

interface UploadAreaProps {
  selectedFile: File | null;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const UploadArea = ({ selectedFile, handleFileChange }: UploadAreaProps) => {
  return (
    <div className="bg-[#1d1d1d] p-6 rounded-xl border border-gray-700">
      <h3 className="text-lg font-bold mb-4">Upload Your Garment</h3>
      <div className="border-2 border-dashed border-white rounded-lg p-8 bg-gray-700 text-center cursor-pointer hover:border-gray-400 transition duration-300">
        {selectedFile ? (
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faFileAlt} className="text-purple-500 text-4xl mb-3" />
            <p className="text-gray-300 mb-2">{selectedFile.name}</p>
            <p className="text-sm text-gray-500 mb-4">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
        ) : (
          <>
            <FontAwesomeIcon icon={faCloudUploadAlt} className="text-purple-500 text-4xl mb-3" />
            <p className="text-gray-300 mb-2">Drag & drop your photo here</p>
            <p className="text-sm text-gray-500 mb-4">or</p>
          </>
        )}
        <label htmlFor="file-upload" className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition duration-300 cursor-pointer">
          {selectedFile ? 'Change File' : 'Browse Files'}
        </label>
        <input 
          id="file-upload" 
          name="file-upload" 
          type="file" 
          className="sr-only" 
          onChange={handleFileChange}
        />
      </div>
      <div className="mt-4 text-sm text-gray-400">
        <p>For best results:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Use a clear, well-lit photo</li>
          <li>Wear form-fitting clothes</li>
          <li>Front-facing pose works best</li>
        </ul>
      </div>
    </div>
  );
};

export default UploadArea;