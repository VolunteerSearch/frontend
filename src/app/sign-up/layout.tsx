import type { Metadata, } from 'next';
import { Inter, } from 'next/font/google';
import '../globals.css';
import './sign-up.module.css';

const inter = Inter({ subsets: ['latin',], },);

export const metadata: Metadata = {
  title: 'Sign Up - Volunteer Search',
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
        {children}
      </body>
    </html>
  );
}
