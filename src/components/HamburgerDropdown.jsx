import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import { clsx } from 'clsx';
import styles from './HamburgerDropdown.module.css';

const modalRoot = document.getElementById('hamburger-dropdown');

const HamburgerDropdown = ({ children, isFixed, isDropdownOpen }) => {
  const [portalElement] = useState(() => document.createElement('div'));

  useEffect(() => {
    modalRoot.appendChild(portalElement);

    return () => {
      modalRoot.removeChild(portalElement);
    };
  }, [portalElement]);

  return ReactDOM.createPortal(
    <div
      className={clsx(
        styles.hamburgerDropdown,
        isDropdownOpen ? styles.open : styles.closed,
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
  isDropdownOpen: propTypes.bool.isRequired,
  isFixed: propTypes.bool,
};

export default HamburgerDropdown;
