import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import BrandLogo from './brand-logo';
import NavBar from './nav-bar';
import Hamburger from './hamburger';
import Button from './button';
import HamburgerDropdown from './hamburger-dropdown';
import useOnClickOutside from '../hooks/use-on-click-outside';
import useMediaQuery from '../hooks/use-media-query';
import styles from './header.module.css';

const Header = () => {
  const [menuState, setMenuState] = useState('closed');
  const [isFixed, setIsFixed] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1061px)');
  const isMobile = !isDesktop;
  const isMenuOpen = isMobile && menuState === 'open';

  const dropdownRef = useRef();
  const buttonRef = useRef();

  const closeMenu = () => {
    setMenuState((state) => (state === 'open' ? 'closing' : state));
  };

  const toggleMenu = () => {
    setMenuState((state) => (state === 'open' ? 'closing' : 'open'));
  };

  const handleDropdownAnimationEnd = (event) => {
    if (event.currentTarget !== event.target) {
      return;
    }

    setMenuState((state) => (state === 'closing' ? 'closed' : state));
  };

  useOnClickOutside(dropdownRef, () => {
    closeMenu();
  }, [buttonRef]);

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.code === 'Escape') {
        setMenuState((state) => (state === 'open' ? 'closing' : state));
      }
    };

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
      className={styles.header}
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
              onClick={toggleMenu}
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
            menuState={menuState}
            onAnimationEnd={handleDropdownAnimationEnd}
          >
            <div ref={dropdownRef}>
              <NavBar
                type="block-1"
                setIsDropdownOpen={(next) => {
                  if (next === false) {
                    closeMenu();
                  }
                }}
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
