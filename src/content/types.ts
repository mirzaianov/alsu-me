export type ActionContent = {
  ariaLabel: string;
  text: string;
  link: string;
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

