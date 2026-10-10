import type { Metadata, Viewport } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import type { ReactNode } from 'react';
import Tracking from '@/components/Tracking';
import { MERCHANT_ORIGIN } from '@/lib/affiliate';
import './globals.css';

const display = Barlow_Condensed({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-display', display: 'swap' });
const body = Barlow({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });

const TITLE = 'Amyet S8, V9-G60 & EB26 Electric Bikes: Compare Specs & Prices | PrimeGearLab';
const DESCRIPTION =
  'Compare the Amyet S8 dual motor, V9-G60 and EB26 fat tire e-bikes: motor power, range, battery and price. Independent guide with links to Amyet.';
const OG_IMAGE =
  'https://www.amyet.com/cdn/shop/files/d7cf8746159726355664c973c03e53bd.jpg?v=1788493249&width=1200';

export const metadata: Metadata = {
  metadataBase: new URL('https://primegearlab.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://primegearlab.com/',
    siteName: 'PrimeGearLab',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 1200, alt: 'AMYET S8 dual motor electric bike' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0D1117',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="dns-prefetch" href={MERCHANT_ORIGIN} />
        <link rel="preconnect" href={MERCHANT_ORIGIN} crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Tracking />
      </body>
    </html>
  );
}
