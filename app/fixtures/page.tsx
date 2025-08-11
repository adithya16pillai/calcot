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
    const mockFixtures: Match[] = [
      {
        id: '6736471',
        date: 'Saturday, August 16, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Stratfield Turgis/Hartley Wespall CC - 1st XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30'
      },
      {
        id: '6737414',
        date: 'Saturday, August 16, 2025',
        homeTeam: 'Peppard Stoke Row CC - 3rd XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'NA',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30'
      },
      {
        id: '7159427',
        date: 'Sunday, August 17, 2025',
        homeTeam: 'Calcot CC - Friendly XI',
        awayTeam: 'Hampstead Norreys CC - Sunday 2nd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Friendly',
        time: '12:30'
      },
      {
        id: '6736475',
        date: 'Saturday, August 23, 2025',
        homeTeam: 'Reading CC - 3rd XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Sonning Lane',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30'
      },
      {
        id: '6737418',
        date: 'Saturday, August 23, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Crowthorne & Crown Wood CC - 4th XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30'
      },
      {
        id: '6736480',
        date: 'Saturday, August 30, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Hurley CC - 1st XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30'
      },
      {
        id: '6737422',
        date: 'Saturday, August 30, 2025',
        homeTeam: 'Reading CC - 4th XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'Sonning Lane',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30'
      },
      {
        id: '6736484',
        date: 'Saturday, September 6, 2025',
        homeTeam: 'West Reading CC - 1st XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Reading School',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30'
      },
      {
        id: '6737428',
        date: 'Saturday, September 6, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Wokingham CC - 6th XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30'
      },
      {
        id: '6888175',
        date: 'Sunday, September 7, 2025',
        homeTeam: 'Calcot CC - Friendly XI',
        awayTeam: 'West Drayton and Iver CC - Sunday 1st XI',
        venue: 'Kings Academy Prospect',
        competition: 'Friendly',
        time: '12:30'
      }
    ];

    const mockResults: Match[] = [
      {        
        id: '6954477',
        date: 'Wednesday, August 6, 2025',
        homeTeam: 'Calcot CC - Midweek XI',
        awayTeam: 'Shinfield CC - Midweek XI',
        venue: 'Kings Academy Prospect',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 1',
        time: '17:30',
        isCompleted: true,
        result: 'Shinfield CC won by 7 wickets',
        homeTeamScore: '100/10',
        awayTeamScore: '102/3'
      },
      {        
        id: '6954480',
        date: 'Tuesday, August 5, 2025',
        homeTeam: 'Earley CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'Bulmershe School',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 1',
        time: '17:30',
        isCompleted: true,
        result: 'Calcot CC won by 88 runs',
        homeTeamScore: '113/8',
        awayTeamScore: '201/10'
      },
      {        
        id: '7108110',
        date: 'Sunday, August 3, 2025',
        homeTeam: 'Hampstead Norreys CC - Sunday 2nd XI',
        awayTeam: 'Calcot CC - Friendly XI',
        venue: 'The Dean Meadow',
        competition: 'Friendly',
        time: '12:30',
        isCompleted: true,
        result: 'Hampstead Norreys CC won by 64 runs',
        homeTeamScore: '308/7',
        awayTeamScore: '244/7'
      },
      {        
        id: '6736461',
        date: 'Saturday, August 2, 2025',
        homeTeam: 'Peppard Stoke Row CC - 2nd XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Peppard Common',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 23 runs',
        homeTeamScore: '233/7',
        awayTeamScore: '256/10'
      },
      {        
        id: '6737404',
        date: 'Saturday, August 2, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Warfield CC - Saturday 1st XI',
        venue: 'Kings Academy Prospectt',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 52 runs',
        homeTeamScore: '222/8',
        awayTeamScore: '170/10'
      },
      {
        id: '7108110',
        date: 'Sunday, July 27, 2025',
        homeTeam: 'Theale and Tilehurst CC Friendly',
        awayTeam: 'Calcot CC Friendly XI',
        venue: 'Theale & Tilehurst',
        competition: 'Friendly',
        time: '12:30',
        isCompleted: true,
        result: 'Theale and Tilehurst CC won by 8 wickets',
        homeTeamScore: '291/2',
        awayTeamScore: '290/6'
      },
      {
        id: '6737399',
        date: 'Saturday, July 26, 2025',
        homeTeam: 'Woodcote CC - 2nd XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'Woodcote CC',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 5 wickets',
        homeTeamScore: '143/9',
        awayTeamScore: '149/5'
      },
      {
        id: '6736452',
        date: 'Saturday, July 26, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Woodcote CC - 1st XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 76 runs',
        homeTeamScore: '251/9',
        awayTeamScore: '175/10'
      },
      {
        id: '6954478',
        date: 'Wednesday, July 23, 2025',
        homeTeam: 'Calcot CC - Midweek XI',
        awayTeam: 'Theale and Tilehurst CC - Midweek XI',
        venue: 'Kings Academy Prospect',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 1',
        time: '17:30',
        isCompleted: true,
        result: 'Theale and Tilehurst CC won by 6 wickets',
        homeTeamScore: '153/8',
        awayTeamScore: '157/4'
      },
      {
        id: '6737394',
        date: 'Saturday, July 19, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Goring on Thames CC - 2nd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30',
        isCompleted: true,
        result: 'Goring on Thames CC won by 14 runs',
        homeTeamScore: '207/10',
        awayTeamScore: '199/5'
      },
      {
        id: '6736448',
        date: 'Saturday, July 19, 2025',
        homeTeam: 'Checkendon CC - 1st XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Checkendon Cricket Club',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30',
        isCompleted: true,
        result: 'Match Abandoned',
        homeTeamScore: '-',
        awayTeamScore: '-'
      },
      {
        id: '6957575',
        date: 'Thursday, July 17, 2025',
        homeTeam: 'Calcot CC - Midweek 2nd XI',
        awayTeam: 'Warfield CC - Midweek XI',
        venue: 'Kings Academy Prospect',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 3',
        time: '17:30',
        isCompleted: true,
        result: 'Warfield CC Conceded',
        homeTeamScore: '-',
        awayTeamScore: '-'
      },
      {
        id: '7161529',
        date: 'Tuesday, July 15, 2025',
        homeTeam: 'Theale and Tilehurst CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'Theale & Tilehurst CC',
        competition: 'Keith Mitchell Memorial Cup - Final',
        time: '17:30',
        isCompleted: true,
        result: 'Theale and Tilehurst CC won by 9 wickets',
        homeTeamScore: '128/1',
        awayTeamScore: '127/10'
      },
      {
        id: '7132120',
        date: 'Sunday, July 13, 2025',
        homeTeam: 'Calcot CC - Friendly XI',
        awayTeam: 'KannadigaruUK CC - Sunday 1st XI',
        venue: 'Kings Academy Prospect',
        competition: 'Friendly',
        time: '12:30',
        isCompleted: true,
        result: 'KannadigaruUK CC won by 94 runs',
        homeTeamScore: '198/10',
        awayTeamScore: '292/9'
      },
      {
        id: '6737389',
        date: 'Saturday, July 12, 2025',
        homeTeam: 'Woodley CC, Berks - 2nd XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'Woodford Park',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30',
        isCompleted: true,
        result: 'Woodley CC, Berks won by 5 wickets',
        homeTeamScore: '231/5',
        awayTeamScore: '228/9'
      },
      {
        id: '6736444',
        date: 'Saturday, July 12, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Purley on Thames CC - Saturday 2nd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 86 runs',
        homeTeamScore: '220/10',
        awayTeamScore: '134/9'
      },
      {
        id: '6957589',
        date: 'Thursday, July 10, 2025',
        homeTeam: 'Wood Group Plc - Midweek XI',
        awayTeam: 'Calcot CC - Midweek 2nd XI',
        venue: 'Farley Hill Cricket Club',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 3',
        time: '17:30',
        isCompleted: true,
        result: 'Calcot CC won by 16 runs',
        homeTeamScore: '166/6',
        awayTeamScore: '182/3'
      },
      {
        id: '6954479',
        date: 'Wednesday, July 9, 2025',
        homeTeam: 'Calcot CC - Midweek XI',
        awayTeam: 'Tilehurst CC - Midweek XI',
        venue: 'Kings Academy Prospect',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 1',
        time: '17:30',
        isCompleted: true,
        result: 'Tilehurst CC won by 37 runs',
        homeTeamScore: '126/10',
        awayTeamScore: '163/5'
      },
      {
        id: '7070255',
        date: 'Sunday, July 6, 2025',
        homeTeam: 'Theale and Tilehurst CC Friendly',
        awayTeam: 'Calcot CC - Friendly XI',
        venue: 'Theale and Tilehurst CC',
        competition: 'Friendly',
        time: '12:30',
        isCompleted: true,
        result: 'Theale and Tilehurst CC won by 4 wickets',
        homeTeamScore: '286/5',
        awayTeamScore: '284/6'
      },
      {
        id: '6737383',
        date: 'Saturday, July 5, 2025',
        homeTeam: 'Wokingham CC - 6th XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'Wokingham CC',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 9 wickets',
        homeTeamScore: '117/10',
        awayTeamScore: '121/1'
      },
      {
        id: '6736439',
        date: 'Saturday, July 5, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'West Reading CC - 1st XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 8 wickets',
        homeTeamScore: '91/2',
        awayTeamScore: '89/10'
      },
      {
        id: '6957573',
        date: 'Thursday, July 3, 2025',
        homeTeam: 'Calcot CC - Midweek 2nd XI',
        awayTeam: 'Emmbrook and Bearwood CC - Midweek XI',
        venue: 'Kings Academy Prospect',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 3',
        time: '17:30',
        isCompleted: true,
        result: 'Calcot CC won by 24 runs',
        homeTeamScore: '163/7',
        awayTeamScore: '139/4'
      },
      {
        id: '7153564',
        date: 'Wednesday, July 2, 2025',
        homeTeam: 'Calcot CC - Midweek XI',
        awayTeam: 'Earley CC - Midweek XI',
        venue: 'Kings Academy Prospect',
        competition: 'Berkshire Cricket Competitions - Keith Mitchell Memorial Cup 2025',
        time: '17:30',
        isCompleted: true,
        result: 'Calcot CC won by 10 wickets',
        homeTeamScore: '145/0',
        awayTeamScore: '144/10'
      },
      {
        id: '6954485',
        date: 'Tuesday, July 1, 2025',
        homeTeam: 'Hurst Rangers CC - Midweek - RMCL',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'Hurst Rangers Cricket Club',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 1',
        time: '17:30',
        isCompleted: true,
        result: 'Hurst Rangers CC won by 8 wickets',
        homeTeamScore: '108/2',
        awayTeamScore: '107/10'
      },
      {
        id: '6737377',
        date: 'Saturday, June 28, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Reading CC - 4th XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 87 runs',
        homeTeamScore: '230/10',
        awayTeamScore: '143/8'
      },
      {
        id: '6736435',
        date: 'Saturday, June 28, 2025',
        homeTeam: 'Hurley CC - 1st XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Hurley CC',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 156 runs',
        homeTeamScore: '139/10',
        awayTeamScore: '295/7'
      },
      {
        id: '6954475',
        date: 'Wednesday, June 25, 2025',
        homeTeam: 'Calcot CC - Midweek XI',
        awayTeam: 'Earley CC - Midweek XI',
        venue: 'Kings Academy Prospect',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 1',
        time: '18:00',
        isCompleted: true,
        result: 'Earley CC Conceded',
        homeTeamScore: 'NIL',
        awayTeamScore: 'NIL'
      },
      {
        id: '7132118',
        date: 'Sunday, June 22, 2025',
        homeTeam: 'Calcot CC - Friendly XI',
        awayTeam: 'KannadigaruUK CC - Sunday 1st XI',
        venue: 'Kings Academy Prospect',
        competition: 'Friendly',
        time: '12:30',
        isCompleted: true,
        result: 'KannadigaruUK CC won by 29 runs',
        homeTeamScore: '199/10',
        awayTeamScore: '228/10'
      },
      {
        id: '6737373',
        date: 'Saturday, June 21, 2025',
        homeTeam: 'Crowthorne & Crown Wood CC - 4th XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'Great Hollands Recreation Ground',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 214 runs',
        homeTeamScore: '49/10',
        awayTeamScore: '263/9'
      },
      {
        id: '6736430',
        date: 'Saturday, June 21, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Reading CC - 3rd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 132 runs',
        homeTeamScore: '284/7',
        awayTeamScore: '152/10'
      },
      {
        id: '7144102',
        date: 'Thursday, June 19, 2025',
        homeTeam: 'Shinfield CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'Manor Ground Sports Facility',
        competition: 'Berkshire Cricket Competitions - Keith Mitchell Memorial Cup 2025',
        time: '18:30',
        isCompleted: true,
        result: 'Calcot CC won by 86 runs',
        homeTeamScore: '88/10',
        awayTeamScore: '174/7'
      },
      {
        id: '6957581',
        date: 'Thursday, June 19, 2025',
        homeTeam: 'Reading Lions CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek 2nd XI',
        venue: 'Reading Lions CC',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 3',
        time: '18:30',
        isCompleted: true,
        result: 'Reading Lions CC won by 6 wickets',
        homeTeamScore: '176/4',
        awayTeamScore: '141/7'
      },
      {
        id: '6954495',
        date: 'Tuesday, June 17, 2025',
        homeTeam: 'Theale and Tilehurst CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'Theale and Tilehurst CC',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 1',
        time: '18:30',
        isCompleted: true,
        result: 'Theale and Tilehurst CC won by 12 runs',
        homeTeamScore: '138/9',
        awayTeamScore: '126/9'
      },
      {
        id: '6736426',
        date: 'Saturday, June 14, 2025',
        homeTeam: 'Stratfield Turgis/Hartley Wespall CC - 1st XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'The Green',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 102 runs',
        homeTeamScore: '139/10',
        awayTeamScore: '241/10'
      },
      {
        id: '6957576',
        date: 'Saturday, June 14, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Peppard Stoke Row CC - 3rd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 170 runs',
        homeTeamScore: '332/6',
        awayTeamScore: '162/10'
      },
      {
        id: '6957576',
        date: 'Thursday, June 12, 2025',
        homeTeam: 'Calcot CC - Midweek 2nd XI',
        awayTeam: 'Wood Group Plc - Midweek XI',
        venue: 'Kings Academy Prospect',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 3',
        time: '18:00',
        isCompleted: true,
        result: 'Wood Group Plc won by 6 wickets',
        homeTeamScore: '118/8',
        awayTeamScore: '123/4'
      },
      {
        id: '6954490',
        date: 'Tuesday, June 10, 2025',
        homeTeam: 'Shinfield CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'Manor Ground Sports facility',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 1',
        time: '18:00',
        isCompleted: true,
        result: 'Shinfield CC won by 52 runs',
        homeTeamScore: '192/5',
        awayTeamScore: '140/10'
      },
      {
        id: '6736421',
        date: 'Saturday, June 7, 2025',
        homeTeam: 'Earley CC - 1st XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Bulmershe School',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30',
        isCompleted: true,
        result: 'Abandoned',
        homeTeamScore: '0/0',
        awayTeamScore: '143/10'
      },
      {
        id: '6737364',
        date: 'Saturday, June 7, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Purley on Thames CC - Saturday 3rd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 8 wickets',
        homeTeamScore: '137/2',
        awayTeamScore: '136/5'
      },
      {
        id: '6954476',
        date: 'Wednesday, June 4, 2025',
        homeTeam: 'Calcot CC - Midweek XI',
        awayTeam: 'Hurst Rangers CC - Midweek',
        venue: 'Kings Academy Prospect',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 1',
        time: '18:30',
        isCompleted: true,
        result: 'Calcot CC won by 2 wickets',
        homeTeamScore: '155/8',
        awayTeamScore: '154/5'
      },
      {
        id: '6957585',
        date: 'Wednesday, June 4, 2025',
        homeTeam: 'Warfield CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek 2nd XI',
        venue: 'Warfield CC',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 3',
        time: '18:30',
        isCompleted: true,
        result: 'Warfield CC won by 7 wickets',
        homeTeamScore: '117/3',
        awayTeamScore: '116/4'
      },
      {
        id: '6736416',
        date: 'Saturday, May 31, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Peppard Stoke Row CC - 2nd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30',
        isCompleted: true,
        result: 'Peppard Stoke Row CC won by 9 runs',
        homeTeamScore: '181/10',
        awayTeamScore: '190/6'
      },
      {
        id: '6737359',
        date: 'Saturday, May 31, 2025',
        homeTeam: 'Warfield CC - Saturday 1st XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'The Memorial Ground',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 93 runs',
        homeTeamScore: '170/7',
        awayTeamScore: '263/9'
      },
      {
        id: '6957574',
        date: 'Thursday, May 29, 2025',
        homeTeam: 'Calcot CC - Midweek 2nd XI',
        awayTeam: 'Reading Lions CC - Midweek XI',
        venue: 'Kings Academy Prospect',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 3',
        time: '18:30',
        isCompleted: true,
        result: 'Reading Lions CC won by 29 runs',
        homeTeamScore: '119/10',
        awayTeamScore: '148/6'
      },
      {
        id: '6736407',
        date: 'Saturday, May 24, 2025',
        homeTeam: 'Woodcote CC - 1st XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Woodcote',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30',
        isCompleted: true,
        result: 'Woodcote CC won by 1 wicket',
        homeTeamScore: '193/9',
        awayTeamScore: '192/9'
      },
      {
        id: '6737354',
        date: 'Saturday, May 24, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Woodcote CC - 2nd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 7 wickets',
        homeTeamScore: '170/3',
        awayTeamScore: '167/9'
      },
      {
        id: '6736403',
        date: 'Saturday, May 17, 2025',
        homeTeam: 'Calcot CC - 1st XI',
        awayTeam: 'Checkendon CC - 1st XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30',
        isCompleted: true,
        result: 'Checkendon CC won by 114 runs',
        homeTeamScore: '216/10',
        awayTeamScore: '330/5'
      },
      {
        id: '6737349',
        date: 'Saturday, May 17, 2025',
        homeTeam: 'Goring on Thames CC - 2nd XI',
        awayTeam: 'Calcot CC - 2nd XI',
        venue: 'Gardiner Recreation Ground',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30',
        isCompleted: true,
        result: 'Goring on Thames CC won by 5 wickets',
        homeTeamScore: '113/5',
        awayTeamScore: '111/10'
      },
      {
        id: '6954500',
        date: 'Thursday, May 15, 2025',
        homeTeam: 'Tilehurst CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek XI',
        venue: 'Reading CC, Sonnig Lane',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 1',
        time: '18:00',
        isCompleted: true,
        result: 'Calcot CC won by 19 runs',
        homeTeamScore: '121/6',
        awayTeamScore: '140/5'
      },
      {
        id: '6957577',
        date: 'Wednesday, May 14, 2025',
        homeTeam: 'Emmbrook and Bearwood CC - Midweek XI',
        awayTeam: 'Calcot CC - Midweek 2nd XI',
        venue: 'Emmbrook and Bearwood CC',
        competition: 'Berkshire Cricket Competitions (RMCL) - Division 3',
        time: '18:00',
        isCompleted: true,
        result: 'Emmbrook and Bearwood CC won by 67 runs',
        homeTeamScore: '189/9',
        awayTeamScore: '122/10'
      },
      {
        id: '6736399',
        date: 'Saturday, May 10, 2025',
        homeTeam: 'Purley on Thames CC - Saturday 2nd XI',
        awayTeam: 'Calcot CC - 1st XI',
        venue: 'Goosecroft',
        competition: 'Thames Valley Cricket League - Division 6B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 55 runs',
        homeTeamScore: '216/10',
        awayTeamScore: '271/7'
      },
      {
        id: '6737344',
        date: 'Saturday, May 10, 2025',
        homeTeam: 'Calcot CC - 2nd XI',
        awayTeam: 'Woodley CC, Berks - 2nd XI',
        venue: 'Kings Academy Prospect',
        competition: 'Thames Valley Cricket League - Division 9B',
        time: '12:30',
        isCompleted: true,
        result: 'Calcot CC won by 21 runs',
        homeTeamScore: '306/8',
        awayTeamScore: '285/9'
      },
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
      setFixtures(mockFixtures);
      setResults(mockResults);
      setLoading(false);
    } catch (err) {
      setError('An error occurred while fetching matches');
      console.error(err);
      setLoading(false);
    }
  }, []);

  const scrollFixtures = (direction: 'left' | 'right') => {
    if (fixturesScrollerRef.current) {
      const scrollAmount = 330; 
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
      const scrollAmount = 330; 
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
      
      {!loading && !error && (
        <div className="space-y-12">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#012682] border-b-2 border-[#012682] pb-2">Fixtures</h2>
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
                    className="min-w-[480px] w-[500px] flex-shrink-0 rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all snap-start flex flex-col"
                  >
                    <div className="bg-[#012682] text-white px-6 py-4">
                      <span className="font-bold text-lg">{match.competition}</span>
                    </div>
                    
                    <div className="p-8 flex flex-col h-[380px] justify-between">
                      <div>
                        <div className="flex items-center justify-center space-x-4 mb-7">
                          <div className="text-right w-5/12 flex flex-col justify-center items-end">
                            <h3 className="font-bold text-lg" title={match.homeTeam}>{match.homeTeam}</h3>
                          </div>
                          <div className="flex-shrink-0 bg-gray-100 rounded-full px-3 py-1 text-gray-700 font-bold">vs</div>
                          <div className="w-5/12 flex flex-col justify-center">
                            <h3 className="font-bold text-lg" title={match.awayTeam}>{match.awayTeam}</h3>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-center text-gray-800 flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#012682] flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                          <span className="font-bold text-lg">{match.date}</span>
                        </div>
                        
                        <div className="text-gray-800 flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#012682] flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          <span className="font-bold text-center">{match.venue}</span>
                        </div>
                        
                        <div className="text-gray-800 flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#012682] flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-bold text-center">Start Time: {match.time}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 pt-4 mt-auto">
                      <a 
                        href={`https://calcotcc.play-cricket.com/match_details?id=${match.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#012682] text-white px-7 py-4 rounded-full hover:bg-blue-800 transition-all duration-200 text-base font-bold shadow-sm hover:shadow-md w-full justify-center"
                      >
                        <span>Live Scorecard</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#012682] border-b-2 border-[#012682] pb-2">Results</h2>
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
                    className="min-w-[480px] w-[500px] flex-shrink-0 rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all snap-start flex flex-col"
                  >
                    <div className="bg-[#012682] text-white px-6 py-4">
                      <span className="font-bold text-lg">{match.competition}</span>
                    </div>
                    
                    <div className="p-8 flex flex-col h-[400px] justify-between">
                      <div>
                        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-3 rounded-lg text-center border border-blue-100 mb-6">
                          <span className="font-bold text-xl text-[#012682]">{match.result}</span>
                        </div>
                        
                        <div className="flex items-center justify-center space-x-4 mb-7">
                          <div className="text-right w-5/12 flex flex-col justify-center items-end">
                            <h3 className="font-bold text-lg" title={match.homeTeam}>{match.homeTeam}</h3>
                            <div className="text-lg font-bold mt-2 text-[#012682]">{match.homeTeamScore}</div>
                          </div>
                          <div className="flex-shrink-0 bg-gray-100 rounded-full px-3 py-1 text-gray-700 font-bold">vs</div>
                          <div className="w-5/12 flex flex-col justify-center">
                            <h3 className="font-bold text-lg" title={match.awayTeam}>{match.awayTeam}</h3>
                            <div className="text-lg font-bold mt-2 text-[#012682]">{match.awayTeamScore}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-center text-gray-800 flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#012682] flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                          <span className="font-bold text-lg">{match.date}</span>
                        </div>
                        
                        <div className="text-gray-800 flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#012682] flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          <span className="font-bold text-center">{match.venue}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 pt-4 mt-auto">
                      <a 
                        href={`https://calcotcc.play-cricket.com/website/results/${match.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#012682] text-white px-7 py-4 rounded-full hover:bg-blue-800 transition-all duration-200 text-base font-bold shadow-sm hover:shadow-md w-full justify-center"
                      >
                        <span>Full Scorecard</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      
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