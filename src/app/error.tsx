'use client';

import { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <Container
          as="section"
          className="flex min-h-screen flex-col items-center justify-center py-24"
        >
          <p className="text-sm font-semibold text-red-500">Error</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Something went wrong
          </h1>
          <p className="mt-6 text-base leading-7 text-neutral-500">
            An unexpected error has occurred. Please try again.
          </p>
          <div className="mt-10">
            <Button variant="primary" onClick={reset}>
              Try again
            </Button>
          </div>
        </Container>
      </body>
    </html>
  );
}
