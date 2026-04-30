'use client';

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
  const className = clsx(
    styles.button,
    styles[type || 'primary'],
    size === 'large' && styles.large,
    icon === 'true' && styles.icon,
  );

  if (link) {
    const href = text === 'Email' ? `mailto:${link}` : link;
    const isExternal = /^https?:\/\//.test(href);

    return (
      <a
        aria-label={ariaLabel}
        className={className}
        href={href}
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
      className={className}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
