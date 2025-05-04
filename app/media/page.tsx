'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function MediaPage() {
  const [mediaFiles, setMediaFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the media files from the API endpoint
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Club Media Gallery</h2>
      
      {loading ? (
        <div className="flex justify-center">
          <p className="text-lg">Loading media...</p>
        </div>
      ) : mediaFiles.length === 0 ? (
        <p>No media files found in the slides folder.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaFiles.map((file, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={`/slides/${file}`}
                alt={`Slide ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}