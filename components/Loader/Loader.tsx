import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.backdrop} role="status" aria-live="polite">
      <div className={css.card}>
        <div className={css.spinner} aria-hidden="true" />
        <p className={css.title}>Loading tracks...</p>
        <p className={css.text}>
          Please wait while we fetch the best travel trucks for you
        </p>
      </div>
    </div>
  );
}
