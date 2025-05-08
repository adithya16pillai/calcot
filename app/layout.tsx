import './globals.css';
import { ReactNode } from 'react';
import { Poppins, Montserrat, Roboto } from 'next/font/google'; 
import Header from '../components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: ['400', '600', '700'], 
  subsets: ['latin'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['400', '500', '700', '900'],
});

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
