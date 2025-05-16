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
      id: 6736403,
      date: "Saturday May 17 2025",
      competition: "Thames Valley Cricket League - Division 6B",
      teams: "Calcot CC - 1st XI vs Checkendon CC - 1st XI",
      venue: "Kings Academy Prospect",
      time: "12:30"
    },
    {
      id: 6737349,
      date: "Saturday May 17 2025",
      competition: "Thames Valley Cricket League - Division 9B",
      teams: "Goring on Thames CC - 2nd XI vs Calcot CC - 2nd XI",
      venue: "Gardiner Recreation Ground",
      time: "12:30"
    },
    {
      id: 6736407,
      date: "Saturday May 24 2025",
      competition: "Thames Valley Cricket League - Division 6B",
      teams: "Woodcote CC - 1st XI vs Calcot CC - 1st XI",
      venue: "Woodcote",
      time: "12:30"
    },
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
            Calcot CC is a friendly and social club. We welcome all new members across all abilities to come and enjoy the game of cricket. As a socially responsible club, we actively engage with the local community events.
          </p>
          <p className="text-lg">
            We have 5 adult teams playing, which includes 2 Saturday Teams, 2 Mid-week Teams 2, and Friendly Sunday Team. We play in Division 6B and 9B of the Thames Valley Cricket League (TVCL) and Division 1 and 3 of the Reading Midweek Cricket League (RMCL).
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-semibold mb-6 font-gibson">Upcoming Matches</h2>
        
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x justify-center px-4 md:px-10">
          {upcomingFixtures.map((fixture) => (
            <div 
              key={fixture.id} 
              className="min-w-[350px] w-[350px] flex-shrink-0 rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all snap-start flex flex-col"
            >
              <div className="bg-[#012682] text-white px-6 py-3">
                <span className="font-bold text-base">{fixture.competition}</span>
              </div>
              
              <div className="p-6 flex flex-col h-[250px] justify-between">
                <div>
                  <div className="flex items-center justify-center space-x-4 mb-5">
                    <div className="text-right w-5/12 flex flex-col justify-center items-end">
                      <h3 className="font-bold text-md" title={fixture.teams.split("vs")[0].trim()}>
                        {fixture.teams.split("vs")[0].trim()}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 bg-gray-100 rounded-full px-2 py-1 text-gray-700 font-bold">vs</div>
                    <div className="w-5/12 flex flex-col justify-center">
                      <h3 className="font-bold text-md" title={fixture.teams.split("vs")[1].trim()}>
                        {fixture.teams.split("vs")[1].trim()}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-center text-gray-800 flex items-center justify-center gap-2 bg-gray-50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#012682] flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span className="font-bold">{fixture.date}</span>
                  </div>
                  
                  <div className="text-gray-800 flex items-center justify-center gap-2 bg-gray-50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#012682] flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="font-bold text-sm text-center">{fixture.venue}</span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6 pt-2 mt-auto">
                <a 
                  href={`https://calcotcc.play-cricket.com/match_details?id=${fixture.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#012682] text-white px-5 py-3 rounded-full hover:bg-blue-800 transition-all duration-200 text-sm font-bold shadow-sm hover:shadow-md w-full"
                >
                  <span>Live Scorecard</span>
                </a>
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
          <Link href="https://thamesvalleycl.play-cricket.com/home" target="_blank" rel="noopener noreferrer" className="w-32 h-32 relative">
            <Image 
              src="/affiliations/aff1.png" 
              alt="Thames Valley Cricket League" 
              fill
              className="object-contain"
            />
          </Link>
          <Link href="https://www.ecb.co.uk/" target="_blank" rel="noopener noreferrer" className="w-32 h-32 relative">
            <Image 
              src="/affiliations/aff2.png" 
              alt="ECB" 
              fill
              className="object-contain"
            />
          </Link>
          <Link href="https://www.play-cricket.com/" target="_blank" rel="noopener noreferrer" className="w-32 h-32 relative">
            <Image 
              src="/affiliations/aff3.png" 
              alt="Play Cricket" 
              fill
              className="object-contain"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
