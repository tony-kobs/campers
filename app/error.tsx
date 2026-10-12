'use client';

import { useEffect } from 'react';
import StatusScreen from '@/components/StatusScreen/StatusScreen';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusScreen
      title="Something went wrong"
      text="We couldn't load this page. Please try again."
      primary={{ label: 'Try again', onClick: reset }}
      secondary={{ label: 'Back to catalog', href: '/catalog' }}
    />
  );
}
