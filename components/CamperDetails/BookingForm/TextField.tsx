'use client';

import { useField } from 'formik';
import css from './BookingForm.module.css';

type TextFieldProps = {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
};

export default function TextField({
  name,
  label,
  type = 'text',
  autoComplete,
}: TextFieldProps) {
  const [field, meta] = useField(name);
  const error = meta.touched ? meta.error : undefined;

  return (
    <div className={css.field}>
      <label className={error ? css.controlError : css.control}>
        <input
          {...field}
          className={css.input}
          type={type}
          placeholder=" "
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        <span className={css.floating}>{label}</span>
        {error && (
          <svg
            className={css.errorIcon}
            width={20}
            height={20}
            aria-hidden="true"
          >
            <use href="/sprite.svg#error" />
          </svg>
        )}
      </label>
      {error && (
        <p id={`${name}-error`} className={css.error}>
          {error}
        </p>
      )}
    </div>
  );
}
