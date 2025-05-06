import Link from 'next/link';
import Image from 'next/image';

export default function TeamsPage() {
  const teams = [
    {
      id: 'saturday-a',
      name: 'First XI',
      division: 'Thames Valley Cricket League - Division 6B 2025',
      imageUrl: '/teams/team-a.jpg',
      description: 'Team Captain: Sunil Varrikkara',
      playCricketUrl: 'https://calcotcc.play-cricket.com/Teams/325656',
    },
    {
      id: 'saturday-b',
      name: 'Second XI',
      division: 'Thames Valley Cricket League - Division 9B 2025',
      imageUrl: '/teams/team-b.jpg',
      description: 'Team Captain: Rahul Singhal',
      playCricketUrl: 'https://calcotcc.play-cricket.com/Teams/325657',
    },
    {
      id: 'midweek',
      name: 'Midweek XI',
      division: 'Berkshire Cricket Competitions - RMCL - Division 1 2025',
      imageUrl: '/teams/midweek.jpg',
      description: 'Team Captain: Pramuldeep Pai',
      playCricketUrl: 'https://calcotcc.play-cricket.com/Teams/330556',
    },
    {
      id: 'midweek-2nd',
      name: 'Midweek 2nd XI',
      division: 'Berkshire Cricket Competitions - RMCL - Division 3 2025	',
      imageUrl: '/teams/midweek-2.jpg',
      description: 'Team Captain: Piyush Bedi',
      playCricketUrl: 'https://calcotcc.play-cricket.com/Teams/358546',
    },
    {
      id: 'friendly-xi',
      name: 'Friendly XI',
      division: 'Sunday Friendlies',
      imageUrl: '/teams/friendly-xi.jpg',
      description: 'Team Captain: Veerendra Kolhar',
      playCricketUrl: 'https://calcotcc.play-cricket.com/Teams/325558',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-8">
      <h1 className="text-3xl font-bold mb-6">Our Teams</h1>
      
      <p className="text-lg">
        Calcot Cricket Club fields five competitive teams across different leagues and formats. 
        Whether you&apos;re looking for serious league cricket or more relaxed evening games, 
        we have opportunities for players of all abilities.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {teams.map((team) => (
          <Link 
            href={team.playCricketUrl} 
            key={team.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-48 relative">
              <Image 
                src={team.imageUrl} 
                alt={team.name} 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{team.name}</h2>
              <p className="text-sm text-[#012682] font-medium mt-1"><strong>{team.division}</strong></p>
              <p className="mt-3 text-gray-600">{team.description}</p>
              <div className="mt-4 flex">
                <span className="text-[#012682] font-medium flex items-center">
                  View Team
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="ml-2">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}