'use client';
import { useEffect, useState } from 'react';

type Match = {
  id: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  competition: string;
  time: string;
  isCompleted?: boolean;
  result?: string;
  homeTeamScore?: string;
  awayTeamScore?: string;
};

export default function FixturesAndResults() {
  const [fixtures, setFixtures] = useState<Match[]>([]);
  const [results, setResults] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Mock data for fixtures and results
    const mockFixtures: Match[] = [
      {
        id: '6736399',
        date: 'Saturday, May 10, 2025',
        homeTeam: 'Purley on Thames CC - 2nd XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Goosecroft',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30'
      },
      {
        id: '6737344',
        date: 'Saturday, May 10, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Woodley CC, Berks - 2nd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30'
      }
    ];
    
    const mockResults: Match[] = [
      {
        id: '7119866',
        date: 'Saturday, May 3, 2025',
        homeTeam: 'Earley CC - 1st XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'Bulmershe School',
        competition: 'Friendly Match',
        time: '13:00',
        isCompleted: true,
        result: 'Earley CC won by 27 runs',
        homeTeamScore: '149/9',
        awayTeamScore: '122/8'
      },
    ];
    
    try {
      // Simulate API call success
      setFixtures(mockFixtures);
      setResults(mockResults);
      setLoading(false);
    } catch (err) {
      // Use setError to satisfy the linter
      setError('An error occurred while fetching matches');
      console.error(err);
      setLoading(false);
    }
    
    // In a real app, you would fetch this data from an API
    // async function fetchMatches() {
    //   try {
    //     setLoading(true);
    //     const response = await fetch('/api/matches');
    //     const data = await response.json();
    //     
    //     if (data.success) {
    //       setFixtures(data.fixtures);
    //       setResults(data.results);
    //     } else {
    //       setError('Failed to load match data');
    //     }
    //   } catch (err) {
    //     setError('An error occurred while fetching matches');
    //     console.error(err);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // 
    // fetchMatches();
  }, []);

  return (
    <div className="space-y-8">
      {loading && (
        <div className="py-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#012682] mx-auto"></div>
          <p className="mt-4 text-gray-600">Bringing you the latest matches...</p>
        </div>
      )}
      
      {error && (
        <div className="py-8 text-center">
          <p className="text-red-500">{error}</p>
          <p className="mt-2">Please try again later or visit <a href="https://calcotcc.play-cricket.com/Matches" className="text-[#012682] underline" target="_blank" rel="noopener noreferrer">Play-Cricket</a> directly.</p>
        </div>
      )}
      
      {/* Content */}
      {!loading && !error && (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Fixtures (Left Column) */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#012682] border-b-2 border-[#012682] pb-2">Coming Up Next 🗓️</h2>
            
            {fixtures.length === 0 ? (
              <div className="p-8 text-center text-gray-600 border border-gray-200 rounded-lg">
                <p>No upcoming fixtures scheduled at the moment.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {fixtures.map((match) => (
                  <div key={match.id} className="rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="bg-[#012682] text-white px-4 py-2 flex justify-between items-center">
                      <span className="font-medium">{match.competition}</span>
                      <span className="font-medium">{match.date}</span>
                    </div>
                    
                    <div className="p-5 space-y-4">
                      <div className="flex items-center justify-center">
                        <div className="text-right w-5/12">
                          <h3 className="font-bold text-lg">{match.homeTeam}</h3>
                        </div>
                        <div className="flex-shrink-0 mx-3 text-gray-500 font-semibold">vs</div>
                        <div className="w-5/12">
                          <h3 className="font-bold text-lg">{match.awayTeam}</h3>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center space-y-3">
                        <div className="text-sm text-gray-700 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#012682]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          <span className="font-medium">{match.venue}</span>
                        </div>
                        
                        <div className="text-sm text-gray-700 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#012682]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">First ball: {match.time}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-center pt-2">
                        <a 
                          href={`https://calcotcc.play-cricket.com/match_details?id=${match.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#012682] text-white px-4 py-2 rounded-full hover:bg-blue-900 transition-all duration-200 text-sm font-bold"
                        >
                          <span>Live Scorecard</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Results (Right Column) */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#012682] border-b-2 border-[#012682] pb-2">Latest Results 🏆</h2>
            
            {results.length === 0 ? (
              <div className="p-8 text-center text-gray-600 border border-gray-200 rounded-lg">
                <p>No recent results to display yet.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {results.map((match) => (
                  <div key={match.id} className="rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="bg-[#012682] text-white px-4 py-2 flex justify-between items-center">
                      <span className="font-medium">{match.competition}</span>
                      <span className="font-medium">{match.date}</span>
                    </div>
                    
                    <div className="p-5 space-y-4">
                      <div className="text-center font-bold text-gray-800 text-lg mb-1 border-b border-gray-100 pb-2">
                        {match.result}
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="text-right w-5/12">
                          <h3 className="font-bold text-lg">{match.homeTeam}</h3>
                          <div className="text-base font-bold mt-1 text-[#012682]">{match.homeTeamScore}</div>
                        </div>
                        <div className="flex-shrink-0 mx-3 text-gray-500 font-semibold">vs</div>
                        <div className="w-5/12">
                          <h3 className="font-bold text-lg">{match.awayTeam}</h3>
                          <div className="text-base font-bold mt-1 text-[#012682]">{match.awayTeamScore}</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center space-y-2">
                        <div className="text-sm text-gray-700 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#012682]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          <span className="font-medium">{match.venue}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-center pt-3">
                        <a 
                          href={`https://calcotcc.play-cricket.com/website/results/7119866`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#012682] text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 text-sm font-bold shadow-sm"
                        >
                          <span>View Complete Scorecard</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* External Link */}
      <div className="text-center mt-10">
        <a 
          href="https://calcotcc.play-cricket.com/Matches"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#012682] text-white py-2 px-6 rounded-full hover:bg-blue-900 transition-all duration-200 shadow-sm hover:shadow"
        >
          <span>See all matches on Play-Cricket</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </div>
  );
}