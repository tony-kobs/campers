'use client';

import { Rating, Star, type ItemStyles } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const itemStyles: ItemStyles = {
  itemShapes: Star,
  activeFillColor: 'var(--rating)',
  inactiveFillColor: 'var(--gray-light)',
};

type RatingStarsProps = {
  value: number;
};

export default function RatingStars({ value }: RatingStarsProps) {
  return (
    <Rating
      style={{ maxWidth: 90 }}
      value={value}
      readOnly
      itemStyles={itemStyles}
    />
  );
}
