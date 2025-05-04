'use client';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      {/* Hero section */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg">
        <Image
          src="/about/clubhouse.jpg"
          alt="Calcot Cricket Club"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h1 className="text-3xl md:text-4xl font-bold text-white p-6">About Calcot Cricket Club</h1>
        </div>
      </div>

      {/* Club History */}
      <section>
        <h2 className="text-2xl font-semibold text-[#012682] mb-4">Our History</h2>
        <div className="space-y-4">
          <p>
            Calcot Cricket Club was established in 2022 as a community-focused cricket club serving the Calcot area and wider West Berkshire. 
            Despite being relatively new, we have quickly established ourselves as a welcoming and competitive presence in local cricket.
          </p>
          <p>
            The club was founded by a group of passionate cricketers who saw the need for a new cricket club that would prioritize 
            both competitive play and community engagement. Starting with just one team, we've rapidly expanded to operate four teams 
            across different formats and competitions.
          </p>
          <p>
            In our short history, we have already achieved promotion in the Berkshire Cricket League and built a thriving community 
            of players, supporters, and volunteers. Our home ground has become a hub for cricket enthusiasts of all ages and abilities.
          </p>
        </div>
      </section>

      {/* Vision and Values */}
      <section>
        <h2 className="text-2xl font-semibold text-[#012682] mb-4">Our Vision & Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Community</h3>
            <p>We are committed to being an active part of the local Holybrook Parish community, welcoming players of all backgrounds and abilities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Development</h3>
            <p>We focus on developing players at all levels, from beginners to experienced cricketers, with quality coaching and support.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Sportsmanship</h3>
            <p>We believe in playing competitive cricket while upholding the spirit of the game and showing respect to opponents and officials.</p>
          </div>
        </div>
      </section>

      {/* Key Stakeholders */}
      <section>
        <h2 className="text-2xl font-semibold text-[#012682] mb-4">Key Stakeholders</h2>
        <div className="space-y-6">
          {/* Committee Members */}
          <div>
            <h3 className="text-xl font-medium mb-3">Club Committee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-100">
                  <Image 
                    src="/about/chairman.jpg" 
                    alt="Club Chairman" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">John Smith</h4>
                  <p className="text-gray-700">Club Chairman</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-100">
                  <Image 
                    src="/about/secretary.jpg" 
                    alt="Club Secretary" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-700">Club Secretary</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-100">
                  <Image 
                    src="/about/treasurer.jpg" 
                    alt="Club Treasurer" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">David Williams</h4>
                  <p className="text-gray-700">Club Treasurer</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-100">
                  <Image 
                    src="/about/captain.jpg" 
                    alt="Club Captain" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Michael Brown</h4>
                  <p className="text-gray-700">Club Captain</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coaches */}
          <div>
            <h3 className="text-xl font-medium mb-3">Coaching Staff</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-100">
                  <Image 
                    src="/about/coach1.jpg" 
                    alt="Head Coach" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">James Wilson</h4>
                  <p className="text-gray-700">Head Coach (ECB Level 3)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-100">
                  <Image 
                    src="/about/coach2.jpg" 
                    alt="Assistant Coach" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Emma Lewis</h4>
                  <p className="text-gray-700">Assistant Coach (ECB Level 2)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-[#012682] text-white rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-3">Join Our Cricket Family</h2>
        <p className="mb-4">
          Whether you're looking to play competitive cricket, improve your skills, or just enjoy the social aspect of club life, 
          we'd love to welcome you to Calcot Cricket Club.
        </p>
        <button className="bg-white text-[#012682] px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
          Contact Us
        </button>
      </section>
    </div>
  );
}