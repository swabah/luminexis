import { type HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const containerVariants = cva('mx-auto w-full px-4 sm:px-6 lg:px-8', {
  variants: {
    size: {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-7xl',
      xl: 'max-w-[90rem]',
      full: 'max-w-full',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
  as?: 'div' | 'section' | 'article' | 'main';
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, as: Component = 'div', ...props }, ref) => {
    return (
      <Component ref={ref} className={cn(containerVariants({ size }), className)} {...props} />
    );
  },
);

Container.displayName = 'Container';

export type ContainerSize = NonNullable<VariantProps<typeof containerVariants>['size']>;

export { Container, containerVariants };
