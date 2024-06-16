import type { Metadata, } from 'next';
import { Inter, } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { Overlay } from '@/components/overlay';

const inter = Inter({ subsets: ['latin',], },);

export const metadata: Metadata = {
  title: 'Volunteer Search',
  description: 'Site for search for volunteers for any needs',
  keywords: ['volunteers',],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>,) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Overlay />
        {children}
      </body>
    </html>
  );
}
