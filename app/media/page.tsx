'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function MediaPage() {
  const [mediaFiles, setMediaFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMediaFiles() {
      try {
        const response = await fetch('/api/media');
        if (!response.ok) throw new Error('Failed to fetch media files');
        const data = await response.json();
        setMediaFiles(data.files);
      } catch (error) {
        console.error('Error loading media files:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchMediaFiles();
  }, []);

  const openImageModal = (file: string) => {
    setSelectedImage(file);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-8 max-w-7xl">
      <h2 className="text-3xl font-semibold mb-6">Club Media Gallery</h2>
      
      {loading ? (
        <div className="flex justify-center">
          <p className="text-lg">Loading media...</p>
        </div>
      ) : mediaFiles.length === 0 ? (
        <p>No media files found in the public/media folder.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaFiles.map((file, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openImageModal(file)}
            >
              <Image
                src={`/media/${file}`}
                alt={`Media ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      )}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 bg-white rounded-full p-2 text-black hover:bg-gray-200 z-10"
              onClick={closeImageModal}
            >
              ✕
            </button>
            <Image
              src={`/media/${selectedImage}`}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
}