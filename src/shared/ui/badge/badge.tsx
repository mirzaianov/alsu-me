import { clsx } from 'clsx';
import Image, { type StaticImageData } from 'next/image';
import styles from './badge.module.css';

type BadgeProps = {
  icon: StaticImageData | string;
  type?: string;
  alt: string;
  text?: string;
  size?: string;
  isReversed?: boolean;
  isAnimated?: boolean;
};

const Badge = ({
  icon,
  type,
  alt,
  text = '',
  size = '',
  isReversed = false,
  isAnimated = false,
}: BadgeProps) => {
  const isSvgIcon =
    typeof icon === 'string'
      ? icon.endsWith('.svg')
      : icon.src.endsWith('.svg');

  return (
    <div
      className={clsx(
        styles.badge,
        styles[type || 'primary'],
        size === 'large' && styles.large,
        isReversed && styles.reversed,
      )}
    >
      <Image
        className={clsx(styles.icon, isAnimated && styles.animated)}
        src={icon}
        alt={alt}
        quality={100}
        sizes="(max-width: 576px) 64px, 96px"
        unoptimized={isSvgIcon}
      />
      {text}
    </div>
  );
};

export default Badge;
