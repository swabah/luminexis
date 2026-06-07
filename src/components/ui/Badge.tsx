import { type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-foreground text-background hover:bg-foreground/90',
        secondary: 'border-transparent bg-foreground/10 text-foreground hover:bg-foreground/15',
        outline: 'border-border/60 bg-transparent text-foreground hover:bg-foreground/5',
        destructive: 'border-transparent bg-red-600 text-white hover:bg-red-700',
        success:
          'border-transparent bg-emerald-600/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400 border border-emerald-600/20 dark:border-emerald-400/20 hover:bg-emerald-600/15 dark:hover:bg-emerald-400/15',
        accent:
          'border-transparent bg-accent/10 text-accent border border-accent/20 hover:bg-accent/15',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
