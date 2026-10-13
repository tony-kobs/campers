import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import styles from './page.module.css';

export const metadata: Metadata = {
  description:
    'Rent a camper for your next trip. Browse Travel Trucks and find a vehicle for the road.',
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  );
}
