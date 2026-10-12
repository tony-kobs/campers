import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';
import 'modern-normalize/modern-normalize.css';
import './globals.css';
import { Toaster } from 'sonner';

const geistInter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const geistManrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Travel Trucks',
  description: 'Choose your trucks for best travel experiences',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistInter.variable} ${geistManrope.variable}`}
    >
      <body>
        <TanStackProvider>
          <Header />
          <Toaster position="top-center" richColors closeButton />
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
