'use client';

import { clsx } from 'clsx';
import { useState, useEffect } from 'react';
import { PiArrowFatUpFill } from 'react-icons/pi';
import { commonUiContent } from '../../content/ru/common';
import styles from './back-to-top.module.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const dockBoundarySection = document.getElementById('about');
      const footerSection = document.getElementById('footer');

      if (!dockBoundarySection || !footerSection) {
        setIsVisible(false);
        return;
      }

      const currentScrollY = window.scrollY;
      const dockBoundaryOffset =
        dockBoundarySection.getBoundingClientRect().top + currentScrollY;
      const footerOffset =
        footerSection.getBoundingClientRect().top + currentScrollY - 1000;

      if (
        currentScrollY >= dockBoundaryOffset &&
        currentScrollY <= footerOffset
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      aria-label={commonUiContent.backToTop.ariaLabel}
      className={clsx(styles.backToTopButton, isVisible && styles.visible)}
      href="#app"
    >
      <PiArrowFatUpFill className={styles.icon} />
    </a>
  );
};

export default BackToTop;
