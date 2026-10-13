import type { Metadata } from 'next';

const HERO_PATH = '/image/Hero-og.jpg';

export const heroImage = {
  url: HERO_PATH,
  width: 1200,
  height: 630,
  alt: 'Yellow camper van with a pop-up roof parked by a lake at sunset',
} as const;

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  if (explicit) return explicit;

  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return 'http://localhost:3000';
}

export function heroImageUrl() {
  return new URL(HERO_PATH, getSiteUrl()).toString();
}

type SocialImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

export function withHeroImage({
  title,
  description,
  path,
  image,
}: {
  title?: string;
  description: string;
  path: string;
  image?: SocialImage;
}): Metadata {
  const socialTitle = title ? `Travel Trucks | ${title}` : 'Travel Trucks';
  const socialImage = image ?? heroImage;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Travel Trucks',
      title: socialTitle,
      description,
      url: path,
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
