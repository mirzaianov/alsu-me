import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  children: ReactNode;
  ariaLabel: string;
  text?: string;
  icon?: string;
  size?: string;
  type?: string;
  onClick?: () => void;
  link?: string;
};

const Button = ({
  children,
  ariaLabel,
  text = '',
  icon = '',
  size = '',
  type = '',
  onClick,
  link = '',
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (text === 'Email') {
      window.open(`mailto:${link}`, '_blank');
      return;
    }

    window.open(link, '_blank');
  };

  return (
    <button
      aria-label={ariaLabel}
      className={clsx(
        styles.button,
        styles[type || 'primary'],
        size === 'large' && styles.large,
        icon === 'true' && styles.icon,
      )}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
