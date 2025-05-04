import Link from 'next/link';
import Image from 'next/image';

export default function TeamsPage() {
  const teams = [
    {
      id: 'saturday-a',
      name: 'First XI',
      division: 'Berkshire Cricket League Division 1',
      imageUrl: '/teams/team-a.jpg',
      description: 'Our first team competes in the Berkshire Cricket League Division 1, playing competitive cricket every Saturday throughout the season.',
    },
    {
      id: 'saturday-b',
      name: 'Second XI',
      division: 'Berkshire Cricket League Division 3',
      imageUrl: '/teams/team-b.jpg',
      description: 'Our second team competes in the Berkshire Cricket League Division 3, providing competitive cricket and development opportunities for players.',
    },
    {
      id: 'midweek',
      name: 'Midweek XI',
      division: 'Reading Midweek Cricket League',
      imageUrl: '/teams/midweek.jpg',
      description: 'Our midweek team plays evening T20 matches, offering a more relaxed environment while still maintaining a competitive spirit.',
    },
    {
      id: 'midweek-2nd',
      name: 'Midweek 2nd XI',
      division: 'Reading Midweek Cricket League Division 2',
      imageUrl: '/teams/midweek-2.jpg',
      description: 'Our second midweek team provides additional opportunities for players to enjoy evening cricket in a friendly and developmental setting.',
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Our Teams</h1>
      
      <p className="text-lg">
        Calcot Cricket Club fields three competitive teams across different leagues and formats. 
        Whether you're looking for serious league cricket or more relaxed evening games, 
        we have opportunities for players of all abilities.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {teams.map((team) => (
          <Link 
            href={`/teams/${team.id}`} 
            key={team.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
              <p className="text-sm text-[#012682] font-medium mt-1">{team.division}</p>
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
      
      <div className="mt-8 p-5 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Join Our Teams</h2>
        <p>
          We're always looking for new players to join our teams, whether you're an experienced cricketer or new to the game. 
          Training sessions are held weekly, and we welcome players of all abilities.
        </p>
        <Link 
          href="/contact" 
          className="inline-block mt-4 bg-[#012682] text-white py-2 px-4 rounded hover:bg-blue-900 transition-colors"
        >
          Contact Us to Join
        </Link>
      </div>
    </div>
  );
}