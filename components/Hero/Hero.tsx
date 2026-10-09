import css from './Hero.module.css';
import Container from '../Container/Container';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.heroContent}>
          <h1 className={css.heroTitle}>Campers of your dreams</h1>
          <p className={css.heroDescription}>
            You can find everything you want in our catalog
          </p>
          <Link href="/catalog" className={css.heroButton}>
            View Now
          </Link>
        </div>
      </Container>
    </section>
  );
}
