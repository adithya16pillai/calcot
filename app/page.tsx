'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Fixture = {
  id: number;
  date: string;
  competition: string;
  teams: string;
  venue: string;
  time?: string;
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

  const upcomingFixtures: Fixture[] = [
    {
      id: 1,
      date: "15 May 2025",
      competition: "Berkshire Cricket League Div 1",
      teams: "Calcot CC vs Reading CC",
      venue: "Calcot Recreation Ground",
      time: "13:30"
    },
    {
      id: 2,
      date: "22 May 2025",
      competition: "Berkshire Cricket League Div 3",
      teams: "Newbury CC vs Calcot CC",
      venue: "Newbury Cricket Ground",
      time: "14:00"
    },
    {
      id: 3,
      date: "29 May 2025",
      competition: "Sunday Friendly",
      teams: "Calcot CC vs Theale CC",
      venue: "Calcot Recreation Ground",
      time: "13:00"
    }
  ];

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
        <h2 className="text-3xl font-semibold mb-5">Upcoming Matches</h2>
        
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingFixtures.map((fixture) => (
              <div 
                key={fixture.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#012682] text-white p-3">
                  <div className="text-sm font-medium">
                    {fixture.date} {fixture.time && `• ${fixture.time}`}
                  </div>
                  <div className="text-xs mt-1">{fixture.competition}</div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-3">{fixture.teams}</h3>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="flex-shrink-0">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    <span className="text-sm">{fixture.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/fixtures"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              <span>View All Fixtures</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </Link>
          </div>
        </>
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
        </div>
      </section>
    </div>
  );
}
