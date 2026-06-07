import { Container } from '@/components/ui/Container';

export default function Loading() {
  return (
    <Container as="section" className="flex flex-1 items-center justify-center py-24">
      <div className="flex flex-col items-center gap-4">
        <div className="border-muted border-t-foreground h-8 w-8 animate-spin rounded-full border-4" />
        <p className="text-muted-foreground text-sm">Loading…</p>
      </div>
    </Container>
  );
}
