'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type TeamResult = {
  id: number;
  name: string;
  league: string;
  standing: string;
  record: string;
  cricketUrl: string;
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
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  const teamResults: TeamResult[] = [
    {
      id: 1,
      name: "1st XI",
      league: "Thames Valley Cricket League Division 6B",
      standing: "3rd Place",
      record: "W: 12, L: 6, D: 2",
      cricketUrl: "https://calcotcc.play-cricket.com/website/division/126809"
    },
    {
      id: 2,
      name: "2nd XI",
      league: "Thames Valley Cricket League Division 9B",
      standing: "5th Place",
      record: "W: 8, L: 10, D: 2",
      cricketUrl: "https://calcotcc.play-cricket.com/website/division/126810"
    },
    {
      id: 3,
      name: "Midweek Team 1",
      league: "Reading Midweek Cricket League Division 1",
      standing: "2nd Place",
      record: "W: 14, L: 4, D: 1",
      cricketUrl: "https://calcotcc.play-cricket.com/website/division/126811"
    },
    {
      id: 4,
      name: "Midweek Team 2",
      league: "Reading Midweek Cricket League Division 3",
      standing: "1st Place",
      record: "W: 16, L: 2, D: 2",
      cricketUrl: "https://calcotcc.play-cricket.com/website/division/126812"
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
            Calcot CC is a friendly and social club. We welcome all new members across all abilities to come and enjoy the game of cricket. As a socially responsible club, we actively engage with the local community events.
          </p>
          <p className="text-lg">
            We have 5 adult teams playing, which includes 2 Saturday Teams, 2 Mid-week Teams 2, and Friendly Sunday Team. We play in Division 6B and 9B of the Thames Valley Cricket League (TVCL) and Division 1 and 3 of the Reading Midweek Cricket League (RMCL).
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-semibold mb-6 font-gibson">Results for the 2025 Season</h2>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-6 border-b border-gray-200">
          {teamResults.map((team, index) => (
            <button
              key={team.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 mx-1 mb-2 font-semibold text-sm rounded-t-lg transition-all duration-200 ${
                activeTab === index
                  ? 'bg-[#012682] text-white border-b-2 border-[#012682]'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {team.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px] bg-white rounded-lg border border-gray-200 shadow-md p-8">
          {teamResults.map((team, index) => (
            <div
              key={team.id}
              className={`${activeTab === index ? 'block' : 'hidden'}`}
            >
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-[#012682] mb-4">
                  {team.name}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-600 mb-2">League</h4>
                    <p className="text-lg font-bold text-gray-800">{team.league}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-600 mb-2">Final Standing</h4>
                    <p className="text-lg font-bold text-[#012682]">{team.standing}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-600 mb-2">Season Record</h4>
                    <p className="text-lg font-bold text-gray-800">{team.record}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a
                    href={team.cricketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#012682] text-white py-3 px-8 rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-md text-lg"
                  >
                    <span>View Full League Table</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
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
