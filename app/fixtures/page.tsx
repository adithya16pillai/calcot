'use client';
import { useEffect, useState, useRef } from 'react';

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
  const fixturesScrollerRef = useRef<HTMLDivElement>(null);
  const resultsScrollerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Mock data for fixtures and results
    const mockFixtures: Match[] = [
      { //1
        id: '6736399',
        date: 'Saturday, May 10, 2025',
        homeTeam: 'Purley on Thames CC - 1st XI',
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
      },
      {
        id: '6737345',
        date: 'Saturday, May 17, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Kidmore End CC - 1st XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30'
      },
      {
        id: '6737346',
        date: 'Saturday, May 17, 2025',
        homeTeam: 'Wokingham CC - 4th XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'Sadlers End',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '12:30'
      },
      {
        id: '6737347',
        date: 'Saturday, May 24, 2025',
        homeTeam: 'Farnham Royal CC - 2nd XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Church Road',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30'
      },
      {
        id: '6737348',
        date: 'Saturday, May 24, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Theale & Tilehurst CC - 3rd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '12:30'
      },
      {
        id: '6737349',
        date: 'Saturday, May 31, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Wokingham CC - 3rd XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30'
      },
      {
        id: '6737350',
        date: 'Saturday, May 31, 2025',
        homeTeam: 'Royal Ascot CC - 3rd XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'Locks Ride Recreation Ground',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '12:30'
      },
      {
        id: '6737351',
        date: 'Saturday, June 7, 2025',
        homeTeam: 'Eversley CC - 2nd XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Fox Lane',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '13:00'
      },
      {
        id: '6737352',
        date: 'Saturday, June 7, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Twyford & Ruscombe CC - 2nd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '13:00'
      },
      {
        id: '6737353',
        date: 'Saturday, June 14, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'White Waltham CC - 1st XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '13:00'
      },
      {
        id: '6737354',
        date: 'Saturday, June 14, 2025',
        homeTeam: 'Binfield CC - 3rd XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'Foxley Fields',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '13:00'
      },
      {
        id: '6737355',
        date: 'Saturday, June 21, 2025',
        homeTeam: 'Boyne Hill CC - 2nd XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Boyne Hill Cricket Club',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '13:00'
      },
      {
        id: '6737356',
        date: 'Saturday, June 21, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Kidmore End CC - 2nd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '13:00'
      },
      {
        id: '6737357',
        date: 'Saturday, June 28, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Cove CC - 2nd XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '13:00'
      },
      {
        id: '6737358',
        date: 'Saturday, June 28, 2025',
        homeTeam: 'Wargrave CC - 4th XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'Recreation Ground',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '13:00'
      },
      {
        id: '6737359',
        date: 'Saturday, July 5, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Purley on Thames CC - 1st XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '13:00'
      },
      {
        id: '6737360',
        date: 'Saturday, July 5, 2025',
        homeTeam: 'Woodley CC, Berks - 2nd XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'Woodford Park',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '13:00'
      },
      {
        id: '6737361',
        date: 'Saturday, July 12, 2025',
        homeTeam: 'Kidmore End CC - 1st XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'The Gallowstree Common',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '13:00'
      },
      {
        id: '6737362',
        date: 'Saturday, July 12, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Wokingham CC - 4th XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '13:00'
      },
      {
        id: '6737363',
        date: 'Saturday, July 19, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Farnham Royal CC - 2nd XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '13:00'
      },
      {
        id: '6737364',
        date: 'Saturday, July 19, 2025',
        homeTeam: 'Theale & Tilehurst CC - 3rd XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'Theale Green Recreation Ground',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '13:00'
      },
      {
        id: '6737365',
        date: 'Saturday, July 26, 2025',
        homeTeam: 'Wokingham CC - 3rd XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Sadlers End',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '13:00'
      },
      {
        id: '6737366',
        date: 'Saturday, July 26, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Royal Ascot CC - 3rd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '13:00'
      },
      {
        id: '6737367',
        date: 'Saturday, August 2, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Eversley CC - 2nd XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '13:00'
      },
      {
        id: '6737368',
        date: 'Saturday, August 2, 2025',
        homeTeam: 'Twyford & Ruscombe CC - 2nd XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'King George V Playing Field',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '13:00'
      },
      {
        id: '6737369',
        date: 'Saturday, August 9, 2025',
        homeTeam: 'White Waltham CC - 1st XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'White Waltham Cricket Club',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '13:00'
      },
      {
        id: '6737370',
        date: 'Saturday, August 9, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Binfield CC - 3rd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '13:00'
      },
      {
        id: '6737371',
        date: 'Saturday, August 16, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Boyne Hill CC - 2nd XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '13:00'
      },
      {
        id: '6737372',
        date: 'Saturday, August 16, 2025',
        homeTeam: 'Kidmore End CC - 2nd XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'The Gallowstree Common',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '13:00'
      },
      {
        id: '6737373',
        date: 'Saturday, August 23, 2025',
        homeTeam: 'Cove CC - 2nd XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Cove Cricket Club',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30'
      },
      {
        id: '6737374',
        date: 'Saturday, August 23, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Wargrave CC - 4th XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 8B',
        time: '12:30'
      },
      {
        id: '6737375',
        date: 'Sunday, May 11, 2025',
        homeTeam: 'Calcot CC - Sunday XI',
        awayTeam: 'Sonning CC - Sunday XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Friendly Match',
        time: '14:00'
      },
      {
        id: '6737376',
        date: 'Sunday, May 18, 2025',
        homeTeam: 'Bradfield CC - Sunday XI',
        awayTeam: 'Calcot CC - Sunday XI',
        venue: 'Bradfield College',
        competition: 'Friendly Match',
        time: '14:00'
      },
      {
        id: '6737377',
        date: 'Sunday, May 25, 2025',
        homeTeam: 'Calcot CC - Sunday XI',
        awayTeam: 'Sulhamstead & Ufton CC - Sunday XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Friendly Match',
        time: '14:00'
      },
      {
        id: '6737378',
        date: 'Sunday, June 1, 2025',
        homeTeam: 'Peppard Stoke Row CC - Sunday XI',
        awayTeam: 'Calcot CC - Sunday XI',
        venue: 'Peppard Common',
        competition: 'Friendly Match',
        time: '14:00'
      },
      {
        id: '6737379',
        date: 'Sunday, June 8, 2025',
        homeTeam: 'Calcot CC - Sunday XI',
        awayTeam: 'Shinfield CC - Sunday XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Berkshire Cricket League - Sunday Division',
        time: '14:00'
      },
      {
        id: '6737380',
        date: 'Sunday, June 15, 2025',
        homeTeam: 'West Reading CC - Sunday XI',
        awayTeam: 'Calcot CC - Sunday XI',
        venue: 'Reading University',
        competition: 'Berkshire Cricket League - Sunday Division',
        time: '14:00'
      },
      {
        id: '6737381',
        date: 'Sunday, June 22, 2025',
        homeTeam: 'Calcot CC - Sunday XI',
        awayTeam: 'Bradfield CC - Sunday XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Berkshire Cricket League - Sunday Division',
        time: '14:00'
      },
      {
        id: '6737382',
        date: 'Sunday, June 29, 2025',
        homeTeam: 'Farley Hill CC - Sunday XI',
        awayTeam: 'Calcot CC - Sunday XI',
        venue: 'Church Lane',
        competition: 'Berkshire Cricket League - Sunday Division',
        time: '14:00'
      },
      {
        id: '6737383',
        date: 'Sunday, July 6, 2025',
        homeTeam: 'Calcot CC - Sunday XI',
        awayTeam: 'Sandhurst CC - Sunday XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Berkshire Cricket League - Sunday Division',
        time: '14:00'
      },
      {
        id: '6737384',
        date: 'Sunday, July 13, 2025',
        homeTeam: 'Shinfield CC - Sunday XI',
        awayTeam: 'Calcot CC - Sunday XI',
        venue: 'Shinfield Cricket Club',
        competition: 'Berkshire Cricket League - Sunday Division',
        time: '14:00'
      },
      {
        id: '6737385',
        date: 'Sunday, July 20, 2025',
        homeTeam: 'Calcot CC - Sunday XI',
        awayTeam: 'West Reading CC - Sunday XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Berkshire Cricket League - Sunday Division',
        time: '14:00'
      },
      {
        id: '6737386',
        date: 'Sunday, July 27, 2025',
        homeTeam: 'Bradfield CC - Sunday XI',
        awayTeam: 'Calcot CC - Sunday XI',
        venue: 'Bradfield College',
        competition: 'Berkshire Cricket League - Sunday Division',
        time: '14:00'
      },
      {
        id: '6737387',
        date: 'Sunday, August 3, 2025',
        homeTeam: 'Calcot CC - Sunday XI',
        awayTeam: 'Farley Hill CC - Sunday XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Berkshire Cricket League - Sunday Division',
        time: '14:00'
      },
      {
        id: '6737388',
        date: 'Sunday, August 10, 2025',
        homeTeam: 'Sandhurst CC - Sunday XI',
        awayTeam: 'Calcot CC - Sunday XI',
        venue: 'Memorial Park',
        competition: 'Berkshire Cricket League - Sunday Division',
        time: '14:00'
      },
      {
        id: '6737389',
        date: 'Sunday, August 17, 2025',
        homeTeam: 'Calcot CC - Sunday XI',
        awayTeam: 'Reading CC - Sunday XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Friendly Match',
        time: '13:30'
      },
      {
        id: '6737390',
        date: 'Sunday, August 24, 2025',
        homeTeam: 'Mortimer West End CC - Sunday XI',
        awayTeam: 'Calcot CC - Sunday XI',
        venue: 'Mortimer Cricket Ground',
        competition: 'Friendly Match',
        time: '13:30'
      },
      {
        id: '6737391',
        date: 'Wednesday, May 14, 2025',
        homeTeam: 'Calcot CC - Midweek XI',
        awayTeam: 'Wokingham CC - Midweek XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Berkshire Midweek League',
        time: '18:00'
      },
      {
        id: '6737392',
        date: 'Wednesday, May 21, 2025',
        homeTeam: 'Reading CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'Sonning Lane',
        competition: 'Berkshire Midweek League',
        time: '18:00'
      },
      {
        id: '6737393',
        date: 'Wednesday, May 28, 2025',
        homeTeam: 'Calcot CC - Midweek XI',
        awayTeam: 'Theale & Tilehurst CC - Midweek XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Berkshire Midweek League',
        time: '18:00'
      },
      {
        id: '6737394',
        date: 'Wednesday, June 4, 2025',
        homeTeam: 'Sonning CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'King George V Playing Field',
        competition: 'Berkshire Midweek League',
        time: '18:15'
      },
      {
        id: '6737395',
        date: 'Wednesday, June 11, 2025',
        homeTeam: 'Calcot CC - Midweek XI',
        awayTeam: 'Earley CC - Midweek XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Berkshire Midweek League',
        time: '18:15'
      },
      {
        id: '6737396',
        date: 'Wednesday, June 18, 2025',
        homeTeam: 'Bradfield CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'Bradfield College',
        competition: 'Berkshire Midweek League',
        time: '18:15'
      },
      {
        id: '6737397',
        date: 'Wednesday, June 25, 2025',
        homeTeam: 'Calcot CC - Midweek XI',
        awayTeam: 'Purley on Thames CC - Midweek XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Berkshire Midweek League',
        time: '18:15'
      },
      {
        id: '6737398',
        date: 'Wednesday, July 2, 2025',
        homeTeam: 'Wokingham CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'Sadlers End',
        competition: 'Berkshire Midweek League',
        time: '18:15'
      },
      {
        id: '6737399',
        date: 'Wednesday, July 9, 2025',
        homeTeam: 'Calcot CC - Midweek XI',
        awayTeam: 'Reading CC - Midweek XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Berkshire Midweek League',
        time: '18:15'
      },
      {
        id: '6737400',
        date: 'Wednesday, July 16, 2025',
        homeTeam: 'Theale & Tilehurst CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'Theale Green Recreation Ground',
        competition: 'Berkshire Midweek League',
        time: '18:15'
      },
      {
        id: '6737401',
        date: 'Wednesday, July 23, 2025',
        homeTeam: 'Calcot CC - Midweek XI',
        awayTeam: 'Sonning CC - Midweek XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Berkshire Midweek League',
        time: '18:15'
      },
      {
        id: '6737402',
        date: 'Wednesday, July 30, 2025',
        homeTeam: 'Earley CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'Bulmershe School',
        competition: 'Berkshire Midweek League',
        time: '18:15'
      },
      {
        id: '6737403',
        date: 'Wednesday, August 6, 2025',
        homeTeam: 'Calcot CC - Midweek XI',
        awayTeam: 'Bradfield CC - Midweek XI',
        venue: 'Calcot Recreation Ground',
        competition: 'Berkshire Midweek League',
        time: '18:00'
      },
      {
        id: '6737404',
        date: 'Wednesday, August 13, 2025',
        homeTeam: 'Purley on Thames CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'Goosecroft',
        competition: 'Berkshire Midweek League',
        time: '18:00'
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
  }, []);

  const scrollFixtures = (direction: 'left' | 'right') => {
    if (fixturesScrollerRef.current) {
      const scrollAmount = 330; // Adjust based on card width + gap
      const scrollLeft = direction === 'left' 
        ? fixturesScrollerRef.current.scrollLeft - scrollAmount 
        : fixturesScrollerRef.current.scrollLeft + scrollAmount;
      
      fixturesScrollerRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const scrollResults = (direction: 'left' | 'right') => {
    if (resultsScrollerRef.current) {
      const scrollAmount = 330; // Adjust based on card width + gap
      const scrollLeft = direction === 'left' 
        ? resultsScrollerRef.current.scrollLeft - scrollAmount 
        : resultsScrollerRef.current.scrollLeft + scrollAmount;
      
      resultsScrollerRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
        <div className="space-y-12">
          {/* Fixtures Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#012682] border-b-2 border-[#012682] pb-2">Fixtures 🗓️</h2>
              <div className="flex space-x-2">
                <button 
                  onClick={() => scrollFixtures('left')}
                  className="bg-gradient-to-r from-[#012682] to-blue-700 text-white p-2 rounded-full hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Scroll left"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => scrollFixtures('right')}
                  className="bg-gradient-to-r from-[#012682] to-blue-700 text-white p-2 rounded-full hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Scroll right"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {fixtures.length === 0 ? (
              <div className="p-8 text-center text-gray-600 border border-gray-200 rounded-lg">
                <p>No upcoming fixtures scheduled at the moment.</p>
              </div>
            ) : (
              <div 
                ref={fixturesScrollerRef}
                className="flex overflow-x-auto pb-4 hide-scrollbar gap-4 snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {fixtures.map((match) => (
                  <div 
                    key={match.id} 
                    className="min-w-[420px] w-[420px] flex-shrink-0 rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all snap-start"
                  >
                    <div className="bg-[#012682] text-white px-6 py-4">
                      <span className="font-bold text-lg">{match.competition}</span>
                    </div>
                    
                    <div className="p-8 space-y-7">
                      {/* Teams Section */}
                      <div className="flex items-center justify-center space-x-6">
                        <div className="text-right w-5/12">
                          <h3 className="font-bold text-xl">{match.homeTeam}</h3>
                        </div>
                        <div className="flex-shrink-0 bg-gray-100 rounded-full px-5 py-3 text-gray-700 font-bold">vs</div>
                        <div className="w-5/12">
                          <h3 className="font-bold text-xl">{match.awayTeam}</h3>
                        </div>
                      </div>
                      
                      {/* Details Section */}
                      <div className="grid grid-cols-1 gap-5">
                        <div className="text-center text-gray-800 flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#012682] flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                          <span className="font-bold text-lg">{match.date}</span>
                        </div>
                        
                        <div className="flex flex-col space-y-5">
                          <div className="text-gray-800 flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#012682] flex-shrink-0">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <span className="font-bold">{match.venue}</span>
                          </div>
                          
                          <div className="text-gray-800 flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#012682] flex-shrink-0">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-bold">Start Time: {match.time}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center pt-3">
                        <a 
                          href={`https://calcotcc.play-cricket.com/match_details?id=${match.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#012682] text-white px-7 py-4 rounded-full hover:bg-blue-800 transition-all duration-200 text-base font-bold shadow-sm hover:shadow-md w-full justify-center"
                        >
                          <span>Live Scorecard</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
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
          
          {/* Results Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#012682] border-b-2 border-[#012682] pb-2">Results 🏆</h2>
              <div className="flex space-x-2">
                <button 
                  onClick={() => scrollResults('left')}
                  className="bg-gradient-to-r from-[#012682] to-blue-700 text-white p-2 rounded-full hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Scroll left"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => scrollResults('right')}
                  className="bg-gradient-to-r from-[#012682] to-blue-700 text-white p-2 rounded-full hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Scroll right"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {results.length === 0 ? (
              <div className="p-8 text-center text-gray-600 border border-gray-200 rounded-lg">
                <p>No recent results to display yet.</p>
              </div>
            ) : (
              <div 
                ref={resultsScrollerRef}
                className="flex overflow-x-auto pb-4 hide-scrollbar gap-4 snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {results.map((match) => (
                  <div 
                    key={match.id} 
                    className="min-w-[420px] w-[420px] flex-shrink-0 rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all snap-start"
                  >
                    <div className="bg-[#012682] text-white px-6 py-4">
                      <span className="font-bold text-lg">{match.competition}</span>
                    </div>
                    
                    <div className="p-8 space-y-7">
                      {/* Result Banner */}
                      <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-3 rounded-lg text-center border border-blue-100">
                        <span className="font-bold text-xl text-[#012682]">{match.result}</span>
                      </div>
                      
                      {/* Teams Section with Scores */}
                      <div className="flex items-center justify-center space-x-6">
                        <div className="text-right w-5/12">
                          <h3 className="font-bold text-xl">{match.homeTeam}</h3>
                          <div className="text-lg font-bold mt-2 text-[#012682]">{match.homeTeamScore}</div>
                        </div>
                        <div className="flex-shrink-0 bg-gray-100 rounded-full px-5 py-3 text-gray-700 font-bold">vs</div>
                        <div className="w-5/12">
                          <h3 className="font-bold text-xl">{match.awayTeam}</h3>
                          <div className="text-lg font-bold mt-2 text-[#012682]">{match.awayTeamScore}</div>
                        </div>
                      </div>
                      
                      {/* Details Section */}
                      <div className="grid grid-cols-1 gap-5">
                        <div className="text-center text-gray-800 flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#012682] flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                          <span className="font-bold text-lg">{match.date}</span>
                        </div>
                        
                        <div className="text-gray-800 flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#012682] flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          <span className="font-bold">{match.venue}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-center pt-3">
                        <a 
                          href={`https://calcotcc.play-cricket.com/website/results/${match.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#012682] text-white px-7 py-4 rounded-full hover:bg-blue-800 transition-all duration-200 text-base font-bold shadow-sm hover:shadow-md w-full justify-center"
                        >
                          <span>Full Scorecard</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
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
        </div>
      )}
      
      {/* External Link */}
      <div className="text-center mt-12 pb-4">
        <a 
          href="https://calcotcc.play-cricket.com/Matches"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#012682] text-white py-3 px-8 rounded-full hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg text-lg font-bold"
        >
          <span>SEE ALL MATCHES ON PLAY-CRICKET</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </div>
  );
}