'use client';

import Link from 'next/link';
import css from './StatusScreen.module.css';

type Action = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type StatusScreenProps = {
  title: string;
  text: string;
  primary: Action;
  secondary?: Action;
};

function ActionControl({
  action,
  variant,
}: {
  action: Action;
  variant: 'primary' | 'secondary';
}) {
  const className = variant === 'primary' ? css.primary : css.secondary;

  if (action.href) {
    return (
      <Link href={action.href} className={className}>
        {action.label}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={action.onClick}>
      {action.label}
    </button>
  );
}

export default function StatusScreen({
  title,
  text,
  primary,
  secondary,
}: StatusScreenProps) {
  return (
    <main className={css.page}>
      <section className={css.card}>
        <h1 className={css.title}>{title}</h1>
        <p className={css.text}>{text}</p>
        <div className={css.actions}>
          {secondary && (
            <ActionControl action={secondary} variant="secondary" />
          )}
          <ActionControl action={primary} variant="primary" />
        </div>
      </section>
    </main>
  );
}
