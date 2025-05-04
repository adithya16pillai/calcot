import './globals.css';
import { ReactNode } from 'react';
import { Poppins } from 'next/font/google'; // Import Poppins
import Header from '../components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: ['400', '600', '700'], // Adjust weights as desired
  subsets: ['latin'],
});

export const metadata = {
  title: 'Calcot Cricket Club',
  description: 'Official website of Calcot Cricket Club - Inspiring Communities',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white text-blue-900 min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
