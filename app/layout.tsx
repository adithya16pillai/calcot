import './globals.css';
import { ReactNode } from 'react';
import { Poppins, Montserrat, Roboto } from 'next/font/google'; // Import Poppins, Montserrat, and Roboto
import Header from '../components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: ['400', '600', '700'], // Adjust weights as desired
  subsets: ['latin'],
});

// Load Montserrat with specific weights
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Load Roboto with specific weights
const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['400', '500', '700', '900'],
});

// Note: Gibson is a premium font and isn't available in Google Fonts
// You'll need to add it through a custom CSS file or a service like Adobe Fonts

export const metadata = {
  title: 'Calcot Cricket Club',
  description: 'Official website of Calcot Cricket Club - Inspiring Communities',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.className} ${montserrat.variable} ${roboto.variable}`}>
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
