'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Result = {
  id: number;
  date: string;
  competition: string;
  teams: string;
  result: string;
  scorecardUrl?: string;
};

export default function Home() {
  const images = [
    '/slides/slide1.jpg',
    '/slides/slide2.jpg',
    '/slides/slide3.jpg',
    '/slides/slide4.jpg',
    '/slides/slide5.jpg',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  const [recentResults, setRecentResults] = useState<Result[]>([]);
  const [resultsLoading, setResultsLoading] = useState(true);

  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await fetch('/api/cricket-data');
        const data = await response.json();
        
        if (data.success) {
          setRecentResults(data.recentResults.slice(0, 3));
        }
      } catch (err) {
        console.error('Failed to fetch results:', err);
      } finally {
        setResultsLoading(false);
      }
    }
    
    fetchResults();
  }, []);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 relative h-[400px] md:h-[450px] overflow-hidden rounded-md flex items-center justify-center">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain" 
                />
              </div>
            </div>
          ))}
          
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-5">About Us</h2>
          <p className="mb-4 text-lg">
            Calcot Cricket Club is a community club, established in 2022. The Club ethos is reflected in our tagline, &apos;Inspiring Communities&apos;. 
            Calcot CC is a friendly and social club. We welcome all new members across all abilities to come and enjoy the game of cricket.
          </p>
          <p className="mb-4 text-lg">
            As a socially responsible club, we actively engage with the local Holybrook Parish and West Berkshire Council in community events.
          </p>
          <p className="mb-4 text-lg">
            The club aims to provide its members, the opportunity to play the highest level of cricket, played in upholding the spirit of the game. We play in the Berkshire Cricket League (BCL).
          </p>
          <p className="text-lg">
            We have 4 adult teams playing on Saturday (2 teams), Mid-week (1 team), and Sunday (1 team). We play in Division 1 & Division 3 of BCL.
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-semibold mb-5">Recent Match Results</h2>
        
        {resultsLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#012682] mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading latest results...</p>
          </div>
        ) : recentResults.length === 0 ? (
          <p className="text-center py-8 text-gray-600">No recent results available.</p>
        ) : (
          <>
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              {recentResults.map((result, index) => (
                <div 
                  key={result.id} 
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } p-4 border-b last:border-b-0`}
                >
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <div className="text-sm text-gray-600 font-medium">{result.date}</div>
                    <div className="text-sm text-[#012682] font-medium">{result.competition}</div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-1">{result.teams}</h3>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2">
                    <div className="px-3 py-1 bg-[#012682] text-white inline-block rounded text-sm font-medium">
                      {result.result}
                    </div>
                    
                    {result.scorecardUrl && (
                      <a 
                        href={`https://calcotcc.play-cricket.com${result.scorecardUrl}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#012682] underline hover:text-blue-800"
                      >
                        View Scorecard
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <Link
                href="/fixtures"
                className="inline-flex items-center gap-2 bg-red-600 text-white py-2 px-5 rounded font-medium hover:bg-red-700 transition-colors"
              >
                <span>View All Results</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </Link>
              
              <Link
                href="/fixtures"
                className="text-[#012682] font-medium hover:underline"
              >
                Upcoming Fixtures
              </Link>
            </div>
          </>
        )}
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-5">Affiliations</h2>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          <div className="w-32 h-32 relative">
            <Image 
              src="/affiliations/aff1.png" 
              alt="Affiliation 1" 
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 h-32 relative">
            <Image 
              src="/affiliations/aff2.png" 
              alt="Affiliation 2" 
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 h-32 relative">
            <Image 
              src="/affiliations/aff3.png" 
              alt="Affiliation 3" 
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 h-32 relative">
            <Image 
              src="/affiliations/aff4.png" 
              alt="Affiliation 4" 
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 h-32 relative">
            <Image 
              src="/affiliations/aff5.png" 
              alt="Affiliation 5" 
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-5">Our Sponsors</h2>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          <div className="w-36 h-36 relative">
            <Image 
              src="/sponsors/sponsor1.png" 
              alt="Sponsor 1" 
              fill
              className="object-contain"
            />
          </div>
          <div className="w-36 h-36 relative">
            <Image 
              src="/sponsors/sponsor2.png" 
              alt="Sponsor 2" 
              fill
              className="object-contain"
            />
          </div>
          <div className="w-36 h-36 relative">
            <Image 
              src="/sponsors/sponsor3.png" 
              alt="Sponsor 3" 
              fill
              className="object-contain"
            />
          </div>
          <div className="w-36 h-36 relative">
            <Image 
              src="/sponsors/sponsor4.png" 
              alt="Sponsor 4" 
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
