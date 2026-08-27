import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import { siteMetadataContent } from '../src/content/ru/site-metadata';
import './globals.css';

const isProduction = process.env.NODE_ENV === 'production';

const inter = localFont({
  src: [
    {
      path: '../src/assets/fonts/inter-v13-cyrillic_cyrillic-ext_latin_latin-ext-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../src/assets/fonts/inter-v13-cyrillic_cyrillic-ext_latin_latin-ext-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadataContent.baseUrl),
  title: siteMetadataContent.title,
  description: siteMetadataContent.description,
  manifest: siteMetadataContent.manifest,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.ico',
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  },
  openGraph: {
    title: siteMetadataContent.title,
    description: siteMetadataContent.description,
    url: siteMetadataContent.baseUrl,
    siteName: siteMetadataContent.siteName,
    images: [
      {
        url: siteMetadataContent.ogImage.url,
        alt: siteMetadataContent.title,
      },
    ],
    locale: siteMetadataContent.locale,
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang={siteMetadataContent.language}
      className={inter.variable}
    >
      <body>
        <div className="appRoot">{children}</div>
        {isProduction ? <Analytics /> : null}
      </body>
    </html>
  );
};

export default RootLayout;
