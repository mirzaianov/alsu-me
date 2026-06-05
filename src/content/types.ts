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

export type SiteNavigationItem = {
  id: SectionId;
  label: string;
  ariaLabel: string;
};

export type ServiceCardContent = ImageContent & {
  subheading: string;
  description: string[];
};

export type LessonPlanContent = {
  quantity: number;
  discount: number;
  heading: string;
  subheading: string;
  duration: string;
  price: number;
  description: string[];
};

export type TranslationRateContent = {
  heading: string;
  subheading: string;
  price: number;
  description: string[];
  note: string;
};

export type TestimonialContent = ImageContent & {
  fullName: string;
  occupation: string;
  comment: string;
};
