import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/footer';
import JsonLd from '@/components/json-ld';
import MenuBar from '@/components/menu-bar';
import Navbar from '@/components/navbar';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/toaster';
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: '/',
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
};

const identitySchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'en-PH',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: SITE_NAME,
    alternateName: ['Josephus Kim L. Sarsonas', 'Sephus', 'baphus'],
    url: SITE_URL,
    image: `${SITE_URL}/about/600x750.png`,
    jobTitle: ['Full-Stack Software Engineer', 'Systems Analyst'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cebu',
      addressCountry: 'PH',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Cebu Technological University',
    },
    knowsAbout: ['Laravel', 'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Systems analysis'],
    sameAs: [
      'https://github.com/baphus',
      'https://www.linkedin.com/in/josephus-kim-sarsonas-1b5191260/',
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <JsonLd data={identitySchema} />
        <Providers attribute="class" defaultTheme="dark" enableSystem={false}>
          <MenuBar />
          <main className="flex-1 pt-7">{children}</main>
          <Footer />
          <Navbar />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
