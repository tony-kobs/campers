import Container from '@/components/Container/Container';
import CatalogContent from '@/components/CatalogContent/CatalogContent';
import css from './page.module.css';

export default function Catalog() {
  return (
    <main className={css.catalogPage}>
      <Container>
        <CatalogContent />
      </Container>
    </main>
  );
}
