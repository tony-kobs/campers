import css from './EmptyState.module.css';
import Image from 'next/image';

type Props = {
  onClear: () => void;
};

export default function EmptyState({ onClear }: Props) {
  return (
    <div className={css.empty}>
      <Image
        className={css.image}
        src="/image/not-found-campers.png"
        alt=""
        width={488}
        height={463}
      />
      <h2 className={css.title}>No campers found</h2>
      <p className={css.text}>
        We couldn&apos;t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>
      <div className={css.actions}>
        <button type="button" className={css.clearButton} onClick={onClear}>
          <svg
            className={css.clearIcon}
            width={24}
            height={24}
            aria-hidden="true"
          >
            <use href="/sprite.svg#close" />
          </svg>
          Clear filters
        </button>
        <button type="button" className={css.viewButton} onClick={onClear}>
          View all campers
        </button>
      </div>
    </div>
  );
}
