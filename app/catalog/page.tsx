import Container from '@/components/Container/Container';
import CamperList from '@/components/CamperList/CamperList';
import SideBar from '@/components/SideBar/SideBar';
import css from './page.module.css';

export default function Catalog() {
  return (
    <main className={css.catalogPage}>
      <Container>
        <div className={css.catalogPageContent}>
          <SideBar />
          <CamperList />
        </div>
      </Container>
    </main>
  );
}
