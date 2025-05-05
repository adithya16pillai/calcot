'use client';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg">
        <Image
          src="/slides/slide3.jpg"
          alt="Calcot Cricket Club"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h1 className="text-3xl md:text-4xl font-bold text-white p-6">About Calcot Cricket Club</h1>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-[#012682] mb-4">Our History</h2>
        <div className="space-y-4">
          <p>
            Calcot Cricket Club was established in 2022 as a community-focused cricket club serving the Calcot area and wider West Berkshire. 
            Despite being relatively new, we have quickly established ourselves as a welcoming and competitive presence in local cricket.
          </p>
          <p>
            The club was founded by a group of passionate cricketers who saw the need for a new cricket club that would prioritize 
            both competitive play and community engagement. Starting with just one team, we&apos;ve rapidly expanded to operate four teams 
            across different formats and competitions.
          </p>
          <p>
            In our short history, we have already achieved promotion in the Berkshire Cricket League and built a thriving community 
            of players, supporters, and volunteers. Our home ground has become a hub for cricket enthusiasts of all ages and abilities.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-[#012682] mb-8">Key Stakeholders</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Club Officials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/chairman.png" 
                      alt="Club Chairman" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Mudit Sharma</h4>
                    <p className="text-lg text-[#012682] font-medium">Chairman</p>
                    <a 
                      href="https://calcotcc.play-cricket.com" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/secretary.jpg" 
                      alt="Club Secretary" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Vinayak Kamath</h4>
                    <p className="text-lg text-[#012682] font-medium">Secretary</p>
                    <a 
                      href="https://calcotcc.play-cricket.com" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/treasurer.png" 
                      alt="Club Treasurer" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Rahul Aul</h4>
                    <p className="text-lg text-[#012682] font-medium">Treasurer</p>
                    <a 
                      href="https://calcotcc.play-cricket.com" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Club Captains</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/captain1.png" 
                      alt="First XI Captain" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Sunil Varrikkara</h4>
                    <p className="text-lg text-[#012682] font-medium">First XI Captain</p>
                    <a 
                      href="https://calcotcc.play-cricket.com/player_stats/batting/5832164?sub_tab=batting_summary&tab=batting" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/captain2.png" 
                      alt="Second XI Captain" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Rahul Singhal</h4>
                    <p className="text-lg text-[#012682] font-medium">Second XI Captain</p>
                    <a 
                      href="https://calcotcc.play-cricket.com/player_stats/batting/5089066" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/captain3.png" 
                      alt="T20 Captain" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Pramuldeep Pai</h4>
                    <p className="text-lg text-[#012682] font-medium">First Midweek XI Captain</p>
                    <a 
                      href="https://calcotcc.play-cricket.com/player_stats/batting/4863628" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/captain4.png" 
                      alt="Sunday XI Captain" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Piyush Bedi</h4>
                    <p className="text-lg text-[#012682] font-medium">Second Midweek XI Captain</p>
                    <a 
                      href="hhttps://calcotcc.play-cricket.com/player_stats/batting/5595332" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/captain5.png" 
                      alt="Development XI Captain" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Veerendra Kolhar</h4>
                    <p className="text-lg text-[#012682] font-medium">Friendly Team XI Captain</p>
                    <a 
                      href="https://calcotcc.play-cricket.com/player_stats/batting/5617199" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Management Committee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/committee1.jpg" 
                      alt="Committee Member" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Blank</h4>
                    <p className="text-lg text-[#012682] font-medium">Blank</p>
                    <a 
                      href="https://calcotcc.play-cricket.com" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/committee2.jpg" 
                      alt="Committee Member" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Blank</h4>
                    <p className="text-lg text-[#012682] font-medium">Blank</p>
                    <a 
                      href="https://calcotcc.play-cricket.com" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/committee3.jpg" 
                      alt="Committee Member" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Blank</h4>
                    <p className="text-lg text-[#012682] font-medium">Blank</p>
                    <a 
                      href="https://calcotcc.play-cricket.com" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/committee4.jpg" 
                      alt="Committee Member" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Blank</h4>
                    <p className="text-lg text-[#012682] font-medium">Blank</p>
                    <a 
                      href="https://calcotcc.play-cricket.com" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/committee5.jpg" 
                      alt="Committee Member" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Blank</h4>
                    <p className="text-lg text-[#012682] font-medium">Blank</p>
                    <a 
                      href="https://calcotcc.play-cricket.com" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/committee6.jpg" 
                      alt="Committee Member" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Blank</h4>
                    <p className="text-lg text-[#012682] font-medium">Blank</p>
                    <a 
                      href="https://calcotcc.play-cricket.com" 
                      className="inline-block mt-2 px-4 py-2 bg-[#012682] text-white rounded-full text-sm font-medium hover:bg-[#011d5e] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}