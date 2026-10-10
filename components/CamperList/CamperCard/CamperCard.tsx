import type { Camper } from '@/types/camper';
import Image from 'next/image';
import css from './CamperCard.module.css';
import Link from 'next/link';

type PropsCamperCard = {
  camper: Camper;
  priority?: boolean;
};

export default function CamperCard({
  camper,
  priority = false,
}: PropsCamperCard) {
  return (
    <article className={css.camperCard}>
      <Image
        src={camper.coverImage}
        alt={camper.name}
        width={219}
        height={240}
        priority={priority}
        className={css.camperCardImage}
      />
      <div className={css.camperCardContent}>
        <div className={css.camperCardHeader}>
          <div className={css.camperCardTitle}>
            <h2>{camper.name}</h2>
            <p className={css.camperCardPrice}>{camper.price}</p>
          </div>
          <div className={css.camperCardRating}>
            <p>
              {camper.rating} ({camper.totalReviews} Reviews)
            </p>
            <p className={css.camperCardLocation}>{camper.location}</p>
          </div>
        </div>
        <p className={css.camperCardDescription}>{camper.description}</p>
        <ul className={css.camperCardFeatures}>
          <li className={css.camperCardEngine}>{camper.engine}</li>
          <li className={css.camperCardTransmission}>{camper.transmission}</li>
          <li className={css.camperCardForm}>{camper.form}</li>
        </ul>
        <Link href={`/catalog/${camper.id}`} className={css.camperCardLink}>
          Show more
        </Link>
      </div>
    </article>
  );
}
