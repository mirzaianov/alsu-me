import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import { clsx } from 'clsx';
import styles from './HamburgerDropdown.module.css';

const modalRoot = document.getElementById('hamburger-dropdown');

const HamburgerDropdown = ({
  children,
  isFixed,
  menuState,
  onAnimationEnd,
}) => {
  const [portalElement] = useState(() => document.createElement('div'));

  useEffect(() => {
    modalRoot.appendChild(portalElement);

    return () => {
      modalRoot.removeChild(portalElement);
    };
  }, [portalElement]);

  return ReactDOM.createPortal(
    <div
      onAnimationEnd={onAnimationEnd}
      className={clsx(
        styles.hamburgerDropdown,
        styles[menuState],
        isFixed ? styles.fixed : styles.default,
      )}
    >
      <div className={styles.content}>{children}</div>
    </div>,
    portalElement,
  );
};

HamburgerDropdown.propTypes = {
  children: propTypes.node.isRequired,
  isFixed: propTypes.bool,
  menuState: propTypes.oneOf(['closed', 'open', 'closing']).isRequired,
  onAnimationEnd: propTypes.func.isRequired,
};

export default HamburgerDropdown;
