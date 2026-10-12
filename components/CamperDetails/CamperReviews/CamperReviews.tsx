import type { Review } from '@/types/camper';
import css from './CamperReviews.module.css';

type CamperReviewsProps = {
  reviews: Review[];
};

export default function CamperReviews({ reviews }: CamperReviewsProps) {
  return (
    <section className={css.reviews}>
      <h2 className={css.title}>Reviews</h2>
      <ul className={css.list}>
        {reviews.map((review) => (
          <li key={review.id} className={css.card}>
            <div className={css.header}>
              <span className={css.avatar} aria-hidden="true">
                {review.reviewer_name.charAt(0)}
              </span>
              <div className={css.nameRow}>
                <p className={css.name}>{review.reviewer_name}</p>
                <div
                  className={css.stars}
                  role="img"
                  aria-label={`Rating: ${review.reviewer_rating} out of 5`}
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      className={
                        index < review.reviewer_rating
                          ? css.star
                          : css.starEmpty
                      }
                      width={15}
                      height={14}
                      aria-hidden="true"
                    >
                      <use href="/sprite.svg#star" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
