import Container from '@/components/Container/Container';
import CatalogContent from '@/components/CatalogContent/CatalogContent';
import css from './page.module.css';
import { withHeroImage } from '@/lib/seo';

export const metadata = withHeroImage({
  title: 'Catalog',
  description:
    'Filter campers by location, body type, engine, and transmission. Load more results and open a vehicle to book it.',
  path: '/catalog',
});

export default function Catalog() {
  return (
    <main className={css.catalogPage}>
      <Container>
        <CatalogContent />
      </Container>
    </main>
  );
}
