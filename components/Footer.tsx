import React from 'react';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6'; // Import X/Twitter icon

const Footer = () => {
  return (
    <footer className="bg-[#012682] text-white mt-12 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-xl mb-3">Calcot Cricket Club</h3>
            <p className="text-gray-200">
              King&apos;s Academy Prospect<br />
              Cockney Hill, Tilehurst<br />
              Reading RG30 4EX
            </p>
            
            {/* Twitter/X Link */}
            <div className="mt-4">
              <a 
                href="https://x.com/calcotcc2023" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-white hover:text-gray-300 transition-colors"
                aria-label="Follow us on X/Twitter"
              >
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              <li><Link href="/about" className="text-gray-200 hover:text-white hover:underline font-bold">About Us</Link></li>
              <li><Link href="/teams" className="text-gray-200 hover:text-white hover:underline font-bold">Teams</Link></li>
              <li><Link href="/fixtures" className="text-gray-200 hover:text-white hover:underline font-bold">Fixtures & Results</Link></li>
              <li><Link href="/media" className="text-gray-200 hover:text-white hover:underline font-bold">Media</Link></li>
              <li><Link href="/contact" className="text-gray-200 hover:text-white hover:underline font-bold">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-600 text-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} Calcot Cricket Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;