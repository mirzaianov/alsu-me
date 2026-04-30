import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import type { AnimationEvent } from 'react';
import BrandLogo from '../../shared/ui/brand-logo/brand-logo';
import SiteNav from '../site-nav/site-nav';
import MenuToggle from '../menu-toggle/menu-toggle';
import Button from '../../shared/ui/button/button';
import type { MenuState } from '../mobile-menu/mobile-menu';
import MobileMenu from '../mobile-menu/mobile-menu';
import useOnClickOutside from '../../hooks/use-on-click-outside';
import useMediaQuery from '../../hooks/use-media-query';
import styles from './site-header.module.css';

const SiteHeader = () => {
  const [menuState, setMenuState] = useState<MenuState>('closed');
  const [isFixed, setIsFixed] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1061px)');
  const isMobile = !isDesktop;
  const isMenuOpen = isMobile && menuState === 'open';

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = () => {
    setMenuState((state) => (state === 'open' ? 'closing' : state));
  };

  const toggleMenu = () => {
    setMenuState((state) => (state === 'open' ? 'closing' : 'open'));
  };

  const handleMobileMenuAnimationEnd = (
    event: AnimationEvent<HTMLDivElement>,
  ) => {
    if (event.currentTarget !== event.target) {
      return;
    }

    setMenuState((state) => (state === 'closing' ? 'closed' : state));
  };

  useOnClickOutside(menuRef, () => {
    closeMenu();
  }, [buttonRef]);

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
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
          {isMobile ? '' : <SiteNav type="inline" />}
        </div>
        <div
          className={styles.action}
          ref={buttonRef}
        >
          {isMobile ? (
            <MenuToggle
              onClick={toggleMenu}
              isMenuOpen={isMenuOpen}
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
          <MobileMenu
            isFixed={isFixed}
            menuState={menuState}
            onAnimationEnd={handleMobileMenuAnimationEnd}
          >
            <div ref={menuRef}>
              <SiteNav
                type="block-1"
                onNavigate={() => closeMenu()}
              />
            </div>
          </MobileMenu>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
