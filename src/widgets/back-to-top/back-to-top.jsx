import { clsx } from 'clsx';
import { useState, useEffect } from 'react';
import { PiArrowFatUpFill } from 'react-icons/pi';
import styles from './back-to-top.module.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const infiniteLogosSection =
        document.getElementById('infinite-logos').offsetTop;
      const footerSection = document.getElementById('footer').offsetTop - 1000;

      if (
        window.scrollY >= infiniteLogosSection &&
        window.scrollY <= footerSection
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      aria-label="Go to the top of the page"
      className={clsx(styles.backToTopButton, isVisible && styles.visible)}
      href="#app"
    >
      <PiArrowFatUpFill className={styles.icon} />
    </a>
  );
};

export default BackToTop;
