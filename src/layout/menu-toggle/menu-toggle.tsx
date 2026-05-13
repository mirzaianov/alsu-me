import { forwardRef } from 'react';
import { clsx } from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import styles from './menu-toggle.module.css';

type MenuToggleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isMenuOpen: boolean;
};

const MenuToggle = forwardRef<HTMLButtonElement, MenuToggleProps>(
  ({ className, isMenuOpen, type = 'button', ...buttonProps }, ref) => {
    return (
      <button
        {...buttonProps}
        ref={ref}
        aria-label={`${isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}`}
        className={clsx(styles.menuToggle, className)}
        type={type}
      >
        <svg
          className={clsx(styles.icon, isMenuOpen && styles.active)}
          viewBox="17 17 65 65"
          width="40"
        >
          <path
            className={clsx(styles.line, styles.top)}
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path
            className={clsx(styles.line, styles.middle)}
            d="m 70,50 h -40"
          />
          <path
            className={clsx(styles.line, styles.bottom)}
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </button>
    );
  },
);

MenuToggle.displayName = 'MenuToggle';

export default MenuToggle;
