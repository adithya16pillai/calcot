import React from 'react';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6'; // Import X/Twitter icon

const Footer = () => {
  return (
    <footer className="bg-[#012682] text-white mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Address and Map */}
          <div className="text-center">
            <h3 className="font-semibold text-xl mb-3">CALCOT CRICKET CLUB</h3>
            <p className="text-gray-200">
              King&apos;s Academy Prospect<br />
              Cockney Hill, Tilehurst<br />
              Reading RG30 4EX
            </p>
            
            {/* Map Embed */}
            <div className="mt-4 relative w-full max-w-md mx-auto h-48 rounded-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.6064567951685!2d-1.0196459!3d51.4470209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48769bc02f697e1b%3A0xe744284b9b32bb89!2sKing%E2%80%99s%20Academy%20Prospect!5e0!3m2!1sen!2suk!4v1746535479920!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Calcot Cricket Club Location"
                className="rounded-md"
                aria-label="Google Maps showing Calcot Cricket Club location"
              ></iframe>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="text-center pt-4">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div className="text-center">
                <Link href="/about" className="text-gray-200 hover:text-white hover:underline font-bold block py-3 text-lg uppercase tracking-wide">
                  ABOUT US
                </Link>
                <Link href="/teams" className="text-gray-200 hover:text-white hover:underline font-bold block py-3 text-lg uppercase tracking-wide">
                  TEAMS
                </Link>
                <Link href="/fixtures" className="text-gray-200 hover:text-white hover:underline font-bold block py-3 text-lg uppercase tracking-wide">
                  FIXTURES
                </Link>
              </div>
              <div className="text-center">
                <Link href="/results" className="text-gray-200 hover:text-white hover:underline font-bold block py-3 text-lg uppercase tracking-wide">
                  RESULTS
                </Link>
                <Link href="/media" className="text-gray-200 hover:text-white hover:underline font-bold block py-3 text-lg uppercase tracking-wide">
                  MEDIA
                </Link>
                <Link href="/contact" className="text-gray-200 hover:text-white hover:underline font-bold block py-3 text-lg uppercase tracking-wide">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="text-center">
            <h3 className="font-semibold text-xl mb-3">CONNECT WITH US</h3>
            <div className="mt-4">
              <a 
                href="https://x.com/calcotcc2023" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                aria-label="Follow us on X/Twitter"
              >
                <FaXTwitter size={24} /> <span className="uppercase">@calcotcc2023</span>
              </a>
            </div>
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="bg-white text-[#012682] hover:bg-gray-200 transition-colors font-bold py-3 px-6 rounded-full uppercase tracking-wide text-lg"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-600 text-center text-gray-300 text-sm uppercase">
          <p>© {new Date().getFullYear()} CALCOT CRICKET CLUB. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;