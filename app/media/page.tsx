'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function MediaPage() {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In production, you'd ideally have a server-side or API route to get media files
    // This is a frontend-only approach that requires pre-knowledge of images
    // You could also create an API route that reads from the public/media directory
    fetch('/api/media')
      .then(res => res.json())
      .then(data => {
        setImages(data.images);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch images:', err);
        // Fallback with some example images if API doesn't exist yet
        setImages([
          '/media/image1.jpg',
          '/media/image2.jpg',
          '/media/image3.jpg',
          // Add more image paths as needed
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Media Gallery</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : images.length === 0 ? (
        <p className="text-center text-gray-500">No images found in media folder.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square relative overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      )}

      {/* Full-screen image modal */}
      <Dialog 
        open={selectedImage !== null} 
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative max-w-screen-lg w-full h-full max-h-screen flex items-center justify-center">
            <button
              type="button"
              className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            
            {selectedImage && (
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Enlarged view"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}