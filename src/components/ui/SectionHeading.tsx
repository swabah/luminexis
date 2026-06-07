import { type HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sectionHeadingVariants = cva('flex flex-col gap-3 md:gap-4', {
  variants: {
    align: {
      left: 'text-left items-start',
      center: 'text-center items-center',
      right: 'text-right items-end',
    },
  },
  defaultVariants: {
    align: 'center',
  },
});

export interface SectionHeadingProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof sectionHeadingVariants> {
  title: string;
  subtitle?: string;
  badge?: string | React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  titleClassName?: string;
  subtitleClassName?: string;
  badgeClassName?: string;
  as?: 'div' | 'header';
}

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    {
      className,
      title,
      subtitle,
      badge,
      align = 'center',
      size = 'md',
      titleClassName,
      subtitleClassName,
      badgeClassName,
      as: Component = 'div',
      ...props
    },
    ref,
  ) => {
    const titleSizeClass =
      size === 'sm'
        ? 'text-2xl md:text-3xl font-bold tracking-tight'
        : size === 'lg'
          ? 'text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight'
          : 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight';

    const subtitleSizeClass =
      size === 'sm'
        ? 'text-sm md:text-base text-muted-foreground max-w-2xl'
        : size === 'lg'
          ? 'text-lg md:text-xl text-muted-foreground max-w-4xl'
          : 'text-base md:text-lg text-muted-foreground max-w-3xl';

    return (
      <Component ref={ref} className={cn(sectionHeadingVariants({ align }), className)} {...props}>
        {badge && (
          <div
            className={cn(
              'bg-accent/10 text-accent border-accent/20 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase transition-colors',
              badgeClassName,
            )}
          >
            {badge}
          </div>
        )}
        <h2
          className={cn('text-foreground font-sans leading-tight', titleSizeClass, titleClassName)}
        >
          {title}
        </h2>
        {subtitle && (
          <p className={cn('leading-relaxed', subtitleSizeClass, subtitleClassName)}>{subtitle}</p>
        )}
      </Component>
    );
  },
);

SectionHeading.displayName = 'SectionHeading';

export { SectionHeading, sectionHeadingVariants };
