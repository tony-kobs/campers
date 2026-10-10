import Container from '@/components/Container/Container';
import CamperList from '@/components/CamperList/CamperList';
import css from './page.module.css';

export default function Catalog() {
  return (
    <main className={css.catalogPage}>
      <Container>
        <CamperList />
      </Container>
    </main>
  );
}
