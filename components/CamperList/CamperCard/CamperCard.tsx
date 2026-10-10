import type { Camper } from '@/types/camper';
import Image from 'next/image';
import css from './CamperCard.module.css';
import Link from 'next/link';

type PropsCamperCard = {
  camper: Camper;
  priority?: boolean;
};

function formatLabel(value: string) {
  return value
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

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
            <p className={css.camperCardPrice}>&euro;{camper.price}</p>
          </div>
          <div className={css.camperCardRating}>
            <p>
              <svg
                className={css.star}
                width={15}
                height={14}
                aria-hidden="true"
              >
                <use href="/sprite.svg#star" />
              </svg>
              {camper.rating} ({camper.totalReviews} Reviews)
            </p>

            <p className={css.camperCardLocation}>
              <svg
                className={css.icon}
                width={16}
                height={16}
                aria-hidden="true"
              >
                <use href="/sprite.svg#map" />
              </svg>
              {camper.location}
            </p>
          </div>
        </div>
        <p className={css.camperCardDescription}>{camper.description}</p>
        <ul className={css.camperCardFeatures}>
          <li className={css.camperCardEngine}>
            <svg className={css.icon} width={20} height={20} aria-hidden="true">
              <use href="/sprite.svg#pump" />
            </svg>
            {formatLabel(camper.engine)}
          </li>
          <li className={css.camperCardTransmission}>
            <svg className={css.icon} width={20} height={20} aria-hidden="true">
              <use href="/sprite.svg#scheme" />
            </svg>
            {formatLabel(camper.transmission)}
          </li>
          <li className={css.camperCardForm}>
            <svg className={css.icon} width={20} height={20} aria-hidden="true">
              <use href="/sprite.svg#car" />
            </svg>
            {formatLabel(camper.form)}
          </li>
        </ul>
        <Link href={`/catalog/${camper.id}`} className={css.camperCardLink}>
          Show more
        </Link>
      </div>
    </article>
  );
}
