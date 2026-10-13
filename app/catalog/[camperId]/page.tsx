import { notFound } from 'next/navigation';
import Container from '@/components/Container/Container';
import CamperGallery from '@/components/CamperDetails/CamperGallery/CamperGallery';
import CamperDescription from '@/components/CamperDetails/CamperDescription/CamperDescription';
import CamperReviews from '@/components/CamperDetails/CamperReviews/CamperReviews';
import BookingForm from '@/components/CamperDetails/BookingForm/BookingForm';
import { getCamper, getReviews } from '@/services/campers';
import type { Review } from '@/types/camper';
import css from './page.module.css';

type CamperPageProps = {
  params: Promise<{ camperId: string }>;
};

export default async function CamperPage({ params }: CamperPageProps) {
  const { camperId } = await params;
  const reviewsPromise = getReviews(camperId).then(
    (reviews) => ({ reviews, failed: false }),
    () => ({ reviews: [] as Review[], failed: true }),
  );
  const [camper, reviewsState] = await Promise.all([
    getCamper(camperId),
    reviewsPromise,
  ]);

  if (!camper) {
    notFound();
  }

  return (
    <main className={css.page}>
      <Container>
        <div className={css.layout}>
          <CamperGallery name={camper.name} gallery={camper.gallery} />
          <CamperDescription camper={camper} />
          <CamperReviews
            reviews={reviewsState.reviews}
            failed={reviewsState.failed}
          />
          <BookingForm camperId={camperId} />
        </div>
      </Container>
    </main>
  );
}
