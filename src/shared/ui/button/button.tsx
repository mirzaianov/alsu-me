'use client';

import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  children: ReactNode;
  ariaLabel: string;
  className?: string;
  icon?: string;
  size?: string;
  type?: string;
  onClick?: () => void;
  link?: string;
};

const Button = ({
  children,
  ariaLabel,
  className,
  icon = '',
  size = '',
  type = '',
  onClick,
  link = '',
}: ButtonProps) => {
  const buttonClassName = clsx(
    styles.button,
    styles[type || 'primary'],
    size === 'large' && styles.large,
    icon === 'true' && styles.icon,
    className,
  );

  if (link) {
    const isExternal = /^https?:\/\//.test(link);

    return (
      <a
        aria-label={ariaLabel}
        className={buttonClassName}
        href={link}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        target={isExternal ? '_blank' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      aria-label={ariaLabel}
      className={buttonClassName}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
