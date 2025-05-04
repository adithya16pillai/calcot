'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="bg-[#012682] text-white shadow">
      {/* Update to match the new max-width */}
      <div className="max-w-7xl w-full mx-auto px-6 py-4">
        <div className="flex items-center gap-6">
          {/* Logo (left column) */}
          <Link href="/" className="block">
            <Image
              src="/logo.png"
              alt="Cricket Club Logo"
              width={100}
              height={100}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          
          {/* Right column with club name and navigation */}
          <div className="flex flex-col">
            {/* Club Name (top row) */}
            <div className="text-3xl font-bold mb-4">
              CALCOT CRICKET CLUB
            </div>
            
            {/* Navigation (bottom row) */}
            <nav className="flex flex-wrap gap-6 text-base font-semibold uppercase">
              <Link 
                href="/" 
                className={`hover:text-gray-200 py-1 relative ${
                  pathname === '/' ? 'active-nav' : ''
                }`}
              >
                HOME
                {pathname === '/' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                )}
              </Link>
              <Link 
                href="/aboutus" 
                className={`hover:text-gray-200 py-1 relative ${
                  pathname === '/aboutus' ? 'active-nav' : ''
                }`}
              >
                ABOUT US
                {pathname === '/aboutus' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                )}
              </Link>
              <Link 
                href="/teams" 
                className={`hover:text-gray-200 py-1 relative ${
                  pathname === '/teams' ? 'active-nav' : ''
                }`}
              >
                TEAMS
                {pathname === '/teams' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                )}
              </Link>
              <Link 
                href="/fixtures" 
                className={`hover:text-gray-200 py-1 relative ${
                  pathname === '/fixtures' ? 'active-nav' : ''
                }`}
              >
                FIXTURES &amp; RESULTS
                {pathname === '/fixtures' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                )}
              </Link>
              <Link 
                href="/media" 
                className={`hover:text-gray-200 py-1 relative ${
                  pathname === '/media' ? 'active-nav' : ''
                }`}
              >
                MEDIA
                {pathname === '/media' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                )}
              </Link>
              <Link 
                href="/contact" 
                className={`hover:text-gray-200 py-1 relative ${
                  pathname === '/contact' ? 'active-nav' : ''
                }`}
              >
                CONTACT US
                {pathname === '/contact' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                )}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}