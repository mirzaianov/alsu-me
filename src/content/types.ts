import type { StaticImageData } from 'next/image';

export type SectionId =
  | 'hero'
  | 'about'
  | 'services'
  | 'pricing'
  | 'testimonials'
  | 'contact';

export type ActionContent = {
  ariaLabel: string;
  text: string;
  link: string;
};

export type ImageContent = {
  src: StaticImageData;
  alt: string;
};

export type BadgeContent = {
  icon: StaticImageData | string;
  alt: string;
  text?: string;
  type?: string;
  size?: string;
  isReversed?: boolean;
  isAnimated?: boolean;
};

