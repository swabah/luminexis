import type { NavItem } from '@/types';

export const MAIN_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'The Reality', href: '#reality' },
  { label: 'Luminexis', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
];

export const FOOTER_NAV: Record<string, NavItem[]> = {
  product: [
    { label: 'The Reality', href: '#reality' },
    { label: 'Luminexis', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Us', href: '#why-us' },
  ],
  company: [
    { label: 'Contact', href: 'https://wa.me/918113841363' },
  ],
};
