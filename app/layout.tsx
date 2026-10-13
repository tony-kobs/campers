import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { getSiteUrl, heroImage } from '@/lib/seo';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';
import 'modern-normalize/modern-normalize.css';
import '@/components/StatusScreen/StatusScreen.module.css';
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

const description = 'Choose your trucks for best travel experiences';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'Travel Trucks',
    template: 'Travel Trucks | %s',
  },
  description,
  applicationName: 'Travel Trucks',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Travel Trucks',
    title: 'Travel Trucks',
    description,
    images: [heroImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Trucks',
    description,
    images: [heroImage.url],
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
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
