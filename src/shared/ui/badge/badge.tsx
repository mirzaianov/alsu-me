import { clsx } from 'clsx';
import styles from './badge.module.css';

type BadgeProps = {
  icon: string;
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
  return (
    <div
      className={clsx(
        styles.badge,
        styles[type || 'primary'],
        size === 'large' && styles.large,
        isReversed && styles.reversed,
      )}
    >
      <img
        className={clsx(styles.icon, isAnimated && styles.animated)}
        src={icon}
        alt={alt}
      />
      {text}
    </div>
  );
};

export default Badge;
