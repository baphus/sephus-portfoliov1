import type { Metadata } from 'next';

export const SITE_URL = 'https://sephus.tech';
export const SITE_NAME = 'Josephus Kim Sarsonas';
export const DEFAULT_TITLE = `${SITE_NAME} | Full-Stack Software Engineer in Cebu`;
export const DEFAULT_DESCRIPTION =
  'Josephus Kim Sarsonas is a full-stack software engineer and systems analyst in Cebu, Philippines, building with Laravel, Next.js, React and PostgreSQL.';

const socialImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — Full-Stack Software Engineer in Cebu`,
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_PH',
      url: path,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [socialImage.url],
    },
  };
}
