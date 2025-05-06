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
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl space-y-12 font-montserrat">
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
          <h2 className="text-3xl font-semibold mb-5 font-gibson">About Us</h2>
          <p className="mb-4 text-lg font-roboto">
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
            We have 5 adult teams playing, which includes 2 Saturday Teams, 2 Mid-week Teams 2, and Friendly Sunday Team. We play in Division 6B and 9B of the Thames Valley Cricket League (TVCL) and Division 1 and 3 of the Reading Midweek Cricket League (RMCL).
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-semibold mb-6 font-gibson">Upcoming Matches</h2>
        
        <div className="flex flex-col gap-5">
          {upcomingFixtures.map((fixture) => (
            <div 
              key={fixture.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="p-6">
                {/* Header row with league and date */}
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <div className="bg-red-600 text-white py-2 px-4 rounded-md font-bold text-base font-montserrat">
                    {fixture.competition}
                  </div>
                  <div className="font-bold text-gray-800 text-lg font-gibson">
                    {fixture.date}
                  </div>
                </div>
                
                {/* Teams */}
                <div className="text-center py-5 border-y border-gray-100">
                  <h3 className="font-black text-2xl md:text-3xl text-gray-800 uppercase tracking-wide font-gibson">
                    {fixture.teams}
                  </h3>
                </div>
                
                {/* Footer row with venue and time */}
                <div className="flex flex-wrap justify-between items-center mt-4 gap-4">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="flex-shrink-0 text-red-600">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    <span className="font-bold text-gray-700 text-lg font-roboto">{fixture.venue}</span>
                  </div>
                  {fixture.time && (
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="flex-shrink-0 text-red-600">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                      </svg>
                      <span className="font-bold text-gray-700 text-lg font-roboto">{fixture.time}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <Link
            href="/fixtures"
            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white py-3 px-8 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-md text-lg font-montserrat"
          >
            <span>View All Fixtures</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </Link>
        </div>
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
