'use client';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg">
        <Image
          src="/about/slide4.jpg"
          alt="Calcot Cricket Club"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h1 className="text-3xl md:text-4xl font-bold text-white p-6">About Calcot Cricket Club</h1>
        </div>
      </div>
      <section>
        <h2 className="text-2xl font-semibold text-[#012682] mb-4">Our History</h2>
        <div className="space-y-6 text-xl font-medium text-gray-700">
          <p className="leading-relaxed">
            Calcot CC is driven with &ldquo;Inspiring Communities&rdquo; at its heart from Day 1. 
            Day 1 in 2022 is when 9 people who shared the passion for cricket and were 
            playing for different clubs in Thames Valley Cricket League (TVCL) came together 
            to found a club with trust and transparency all around. 
          </p>
          <p className="leading-relaxed">
            We have 5 adult teams playing, which includes 2 Saturday Teams, 2 Mid-week Teams 2, 
            and Friendly Sunday Team. We play in Division 6B and 9B of the Thames Valley Cricket 
            League (TVCL) and Division 1 and 3 of the Reading Midweek Cricket League (RMCL).
          </p>
          <div>
            <h3 className="text-xl font-bold text-[#012682] mb-4">The guiding values are:</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#012682] shadow-md hover:shadow-lg transition-shadow">
                <p className="text-lg">
                  To provide a positive and an enjoyable cricketing experience for everyone involved in the sport and society.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#012682] shadow-md hover:shadow-lg transition-shadow">
                <p className="text-lg">
                  Develop leaders and high calibre players from diverse background and contribute back to the community.
                </p>
              </div>
            </div>
          </div>
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
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Mudit Sharma</h4>
                    <p className="text-lg text-[#012682] font-medium">Chairman</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/secretary.png" 
                      alt="Club Secretary" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Vinayaka Kamath</h4>
                    <p className="text-lg text-[#012682] font-medium">Secretary</p>
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
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/captain2.jpg" 
                      alt="Second XI Captain" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Piyush Bedi</h4>
                    <p className="text-lg text-[#012682] font-medium">Second XI Captain</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/captain4.png" 
                      alt="T20 Captain" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Dani Katuri</h4>
                    <p className="text-lg text-[#012682] font-medium">First Midweek XI Captain</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 border-4 border-[#012682]">
                    <Image 
                      src="/about/captain3.png" 
                      alt="Sunday XI Captain" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Pramuldeep Pai</h4>
                    <p className="text-lg text-[#012682] font-medium">Second Midweek XI Captain</p>
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