import type { Review } from '@/types/camper';
import RatingStars from '@/components/RatingStars/RatingStars';
import css from './CamperReviews.module.css';

type CamperReviewsProps = {
  reviews: Review[];
  failed?: boolean;
};

export default function CamperReviews({
  reviews,
  failed = false,
}: CamperReviewsProps) {
  return (
    <section className={css.reviews}>
      <h2 className={css.title}>Reviews</h2>
      {failed ? (
        <p className={css.unavailable}>
          Could not load reviews. Please try again.
        </p>
      ) : (
        <ul className={css.list}>
          {reviews.map((review) => (
            <li key={review.id} className={css.card}>
              <div className={css.header}>
                <span className={css.avatar} aria-hidden="true">
                  {review.reviewer_name.charAt(0)}
                </span>
                <div className={css.nameRow}>
                  <p className={css.name}>{review.reviewer_name}</p>
                  <RatingStars value={review.reviewer_rating} />
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
