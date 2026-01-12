import type { Metadata } from 'next';
import { Inter, Kanit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-kanit',
  subsets: ['thai', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NT Conduit | ท่อร้อยสายสื่อสารใต้ดิน',
  description: 'โครงสร้างพื้นฐานดิจิทัลเพื่อความตระหนักรู้และความปลอดภัยของโครงข่ายสื่อสารไทย',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${inter.variable} ${kanit.variable} font-sans antialiased flex flex-col min-h-screen bg-gray-50 text-charcoal`}
      >
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
