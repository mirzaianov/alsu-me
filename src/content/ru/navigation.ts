import type { SiteNavigationItem } from '../types';

export type { SectionId } from '../types';

export const siteNavigationItems = [
  {
    id: 'hero',
    label: 'Главная',
    ariaLabel: 'Go to the hero section',
  },
  {
    id: 'about',
    label: 'Обо мне',
    ariaLabel: 'Go to the about section',
  },
  {
    id: 'services',
    label: 'Услуги',
    ariaLabel: 'Go to the services section',
  },
  {
    id: 'pricing',
    label: 'Цены',
    ariaLabel: 'Go to the pricing section',
  },
  {
    id: 'testimonials',
    label: 'Отзывы',
    ariaLabel: 'Go to the testimonials section',
  },
  {
    id: 'contact',
    label: 'Контакты',
    ariaLabel: 'Go to the contact section',
  },
] satisfies SiteNavigationItem[];
