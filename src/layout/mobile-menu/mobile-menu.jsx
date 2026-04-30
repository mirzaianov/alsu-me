import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import { clsx } from 'clsx';
import styles from './mobile-menu.module.css';

const modalRoot = document.getElementById('mobile-menu');

const MobileMenu = ({ children, isFixed, menuState, onAnimationEnd }) => {
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
        styles.mobileMenu,
        styles[menuState],
        isFixed ? styles.fixed : styles.default,
      )}
    >
      <div className={styles.content}>{children}</div>
    </div>,
    portalElement,
  );
};

MobileMenu.propTypes = {
  children: propTypes.node.isRequired,
  isFixed: propTypes.bool,
  menuState: propTypes.oneOf(['closed', 'open', 'closing']).isRequired,
  onAnimationEnd: propTypes.func.isRequired,
};

export default MobileMenu;
