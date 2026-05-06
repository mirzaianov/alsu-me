import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const siteTitle =
  'Алсу Каримова • Преподаватель и переводчик английского языка';
const siteDescription =
  'Дипломированный преподаватель и переводчик английского с опытом профессиональной деятельности более 16 лет';

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
  metadataBase: new URL('https://www.alsu.me'),
  title: siteTitle,
  description: siteDescription,
  manifest: '/site.webmanifest',
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
    title: siteTitle,
    description: siteDescription,
    url: 'https://www.alsu.me',
    siteName: 'ALSU.ME',
    images: [
      {
        url: '/og-image.jpg',
        alt: siteTitle,
      },
    ],
    locale: 'ru_RU',
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
      lang="ru"
      className={inter.variable}
    >
      <body>
        {children}
        <div id="mobile-menu" />
        <div id="testimonial-dialog" />
        {isProduction ? <Analytics /> : null}
      </body>
    </html>
  );
};

export default RootLayout;
