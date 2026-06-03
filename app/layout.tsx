import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ntTypeface = localFont({
  src: [
    {
      path: '../CI/NT Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../CI/NT Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-nt',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NT Conduit | บริการท่อร้อยสายสื่อสาร',
  description: 'พอร์ทัลบริการท่อร้อยสายสื่อสารและ Single Last Mile จาก NT เพื่อโครงสร้างพื้นฐานโทรคมนาคมที่มั่นคง',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${ntTypeface.className} ${ntTypeface.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <Header />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
