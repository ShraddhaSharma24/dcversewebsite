'use client';

import { useState, useCallback } from 'react';
import Header from '@/app/components/Header';
import Sidebar from '@/app/components/Sidebar-profile';
import AvatarSelection from '@/app/components/AvatarSelection';
import SelectedAvatarPreview from '@/app/components/SelectAvatarPreview';
import ScriptUpload from '@/app/components/ScriptUpload';
import StoryboardGeneration from '@/app/components/StoryboardGeneration';
import VideoModelSelection from '@/app/components/VideoModelSelection';
import Footer from '@/app/components/Footer-profile';

export default function NeoRetroCreator() {
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar | null>({
    id: '1',
    name: 'Salman Khan',
    role: 'Bollywood Superstar',
    imageUrl: 'https://placehold.co/400x500/1d1d1d/00f0ff?text=Salman+Khan',
    popularity: 94,
    rating: 4.8,
    price: 950000,
    voice: '#12',
    style: 'Futuristic',
    languages: 'EN, ES, JP',
    description: "Salman Khan is one of Bollywood's biggest superstars known for his action-packed performances and charismatic screen presence. With blockbuster hits and a massive fan following, he's perfect for entertainment projects and brand endorsements.",
  });

  const [scriptFile, setScriptFile] = useState<File | null>(null);
  const [scriptText, setScriptText] = useState('');

  const handleAvatarSelect = (avatar: Avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleFileUpload = useCallback((file: File) => {
    setScriptFile(file);
    // Read the file content if it's a text file
    if (file.type.includes('text') || file.name.endsWith('.txt')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setScriptText(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  }, []);

  const handleScriptTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setScriptText(e.target.value);
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Sidebar />
          
          <div className="lg:col-span-3 space-y-6">
            <AvatarSelection 
              selectedAvatar={selectedAvatar} 
              onSelectAvatar={handleAvatarSelect} 
            />
            
            {selectedAvatar && (
              <SelectedAvatarPreview avatar={selectedAvatar} />
            )}
            
            <ScriptUpload 
              scriptFile={scriptFile}
              scriptText={scriptText}
              onFileUpload={handleFileUpload}
              onScriptTextChange={handleScriptTextChange}
            />
            
            <StoryboardGeneration />
            <VideoModelSelection />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export interface Avatar {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  popularity: number;
  rating: number;
  price?: number;
  voice?: string;
  style?: string;
  languages?: string;
  description?: string;
}