import { type TextareaHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-default border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
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

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return <textarea className={cn(textareaVariants({ error }), className)} ref={ref} {...props} />;
  },
);
Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
