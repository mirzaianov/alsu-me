import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import BrandLogo from './BrandLogo';
import NavBar from './NavBar';
import Hamburger from './Hamburger';
import Button from './Button';
import HamburgerDropdown from './HamburgerDropdown';
import useOnClickOutside from '../hooks/useOnClickOutside';
import useMediaQuery from '../hooks/useMediaQuery';
import styles from './Header.module.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1061px)');
  const isMobile = !isDesktop;
  const isMenuOpen = isMobile && isDropdownOpen;

  const dropdownRef = useRef();
  const buttonRef = useRef();

  useOnClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
  }, [buttonRef]);

  const closeOnEscape = (e) => {
    if (e.code === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.addEventListener('keydown', closeOnEscape);
      document.body.classList.add('noScroll');
    } else {
      document.body.classList.remove('noScroll');
    }

    return () => {
      document.body.removeEventListener('keydown', closeOnEscape);
      document.body.classList.remove('noScroll');
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const infiniteLogosSection = document.getElementById('infinite-logos');

      if (infiniteLogosSection) {
        const stickyPoint = infiniteLogosSection.offsetTop;

        setIsFixed(window.scrollY >= stickyPoint);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={styles.root}
    >
      <div
        className={clsx(styles.shell, isFixed ? styles.fixed : styles.default)}
      >
        <div className={styles.brand}>
          <BrandLogo />
        </div>
        <div className={styles.navSlot}>
          {isMobile ? '' : <NavBar type="inline" />}
        </div>
        <div
          className={styles.action}
          ref={buttonRef}
        >
          {isMobile ? (
            <Hamburger
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              isDropdownOpen={isMenuOpen}
            />
          ) : (
            <Button
              ariaLabel="Записаться"
              type="secondary"
              link="https://t.me/sue_onlineenglish"
            >
              <span>Записаться</span>
            </Button>
          )}
        </div>
        {isMobile && (
          <HamburgerDropdown
            isFixed={isFixed}
            isDropdownOpen={isMenuOpen}
          >
            <div ref={dropdownRef}>
              <NavBar
                type="block-1"
                setIsDropdownOpen={setIsDropdownOpen}
                isDropdownOpen={isMenuOpen}
              />
            </div>
          </HamburgerDropdown>
        )}
      </div>
    </header>
  );
};

export default Header;
