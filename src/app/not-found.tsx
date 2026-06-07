import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <Container
      as="section"
      className="flex flex-1 flex-col items-center justify-center py-24 sm:py-32"
    >
      <p className="text-accent text-sm font-semibold">404</p>
      <h1 className="text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="text-muted-foreground mt-6 text-base leading-7">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="mt-10">
        <Link href="/">
          <Button variant="primary">Go back home</Button>
        </Link>
      </div>
    </Container>
  );
}
