import Hero from '@/components/Hero/Hero';
import { getSiteUrl, heroImageUrl, withHeroImage } from '@/lib/seo';
import styles from './page.module.css';

const description =
  'Rent a camper for your next trip. Browse Travel Trucks and find a vehicle for the road.';

export const metadata = withHeroImage({
  description,
  path: '/',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Travel Trucks',
      url: getSiteUrl(),
      description,
      image: heroImageUrl(),
    },
    {
      '@type': 'Organization',
      name: 'Travel Trucks',
      url: getSiteUrl(),
      image: heroImageUrl(),
    },
  ],
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Hero />
      </main>
    </div>
  );
}
