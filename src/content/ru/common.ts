import type { ActionContent } from '../types';

export const primaryBookingAction = {
  ariaLabel: 'Записаться',
  text: 'Записаться',
  link: 'https://t.me/sue_onlineenglish',
} satisfies ActionContent;

export const commonUiContent = {
  brandLogo: {
    ariaLabel: 'Go to the top of the page',
    alt: 'BrandLogo',
  },
  backToTop: {
    ariaLabel: 'Go to the top of the page',
  },
  mobileMenu: {
    title: 'Site navigation',
    close: 'Close mobile menu',
    openToggle: 'Open mobile menu',
    closeToggle: 'Close mobile menu',
  },
};
