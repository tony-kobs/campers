import type { CamperDetails } from '@/types/camper';
import css from './CamperDescription.module.css';

type CamperDescriptionProps = {
  camper: CamperDetails;
};

function formatLabel(value: string) {
  if (value === 'ac') return 'AC';
  if (value === 'tv') return 'TV';

  return value
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function CamperDescription({ camper }: CamperDescriptionProps) {
  const badges = [
    { label: formatLabel(camper.transmission), icon: 'scheme' },
    { label: formatLabel(camper.engine), icon: 'pump' },
    ...camper.amenities.map((amenity) => ({
      label: formatLabel(amenity),
    })),
    { label: formatLabel(camper.form), icon: 'car' },
  ];

  const specs = [
    ['Form', formatLabel(camper.form)],
    ['Length', camper.length],
    ['Width', camper.width],
    ['Height', camper.height],
    ['Tank', camper.tank],
    ['Consumption', camper.consumption],
  ];

  return (
    <div className={css.summary}>
      <div className={css.titleRow}>
        <h1 className={css.title}>{camper.name}</h1>
        <div className={css.meta}>
          <p>
            <svg className={css.star} width={16} height={16} aria-hidden="true">
              <use href="/sprite.svg#star" />
            </svg>
            {camper.rating} ({camper.totalReviews} Reviews)
          </p>
          <p>
            <svg className={css.icon} width={16} height={16} aria-hidden="true">
              <use href="/sprite.svg#map" />
            </svg>
            {camper.location}
          </p>
        </div>
        <p className={css.price}>&euro;{camper.price}</p>
        <div className={css.description}>
          <p>{camper.description}</p>
        </div>
      </div>
      <div className={css.vehicle}>
        <h2 className={css.vehicleTitle}>Vehicle details</h2>
        <ul className={css.badges}>
          {badges.map((badge) => (
            <li key={badge.label}>
              <span>{badge.label}</span>
            </li>
          ))}
        </ul>
        <dl className={css.specs}>
          {specs.map(([label, value]) => (
            <div key={label} className={css.spec}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
