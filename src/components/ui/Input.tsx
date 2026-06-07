import { type InputHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex h-10 w-full rounded-default border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
  {
    variants: {
      error: {
        true: 'border-red-500 focus-visible:ring-red-500 focus-visible:ring-offset-2',
        false:
          'border-border/60 hover:border-foreground/20 focus-visible:ring-foreground/20 focus-visible:ring-offset-2',
      },
    },
    defaultVariants: {
      error: false,
    },
  },
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, ...props }, ref) => {
    return (
      <input type={type} className={cn(inputVariants({ error }), className)} ref={ref} {...props} />
    );
  },
);
Input.displayName = 'Input';

export { Input, inputVariants };
