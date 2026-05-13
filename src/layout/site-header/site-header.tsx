'use client';

import { useEffect, useRef, useState } from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { clsx } from 'clsx';
import BrandLogo from '../../shared/ui/brand-logo/brand-logo';
import SiteNav from '../site-nav/site-nav';
import MenuToggle from '../menu-toggle/menu-toggle';
import Button from '../../shared/ui/button/button';
import MobileMenu from '../mobile-menu/mobile-menu';
import styles from './site-header.module.css';

const headerHideDelta = 8;

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isDockHidden, setIsDockHidden] = useState(false);
  const previousScrollYRef = useRef(0);
  const isScrollTrackingReadyRef = useRef(false);
  const wasFixedRef = useRef(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1061px)');
    const closeOnDesktop = () => {
      if (desktopQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    closeOnDesktop();
    desktopQuery.addEventListener('change', closeOnDesktop);

    return () => {
      desktopQuery.removeEventListener('change', closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const infiniteLogosSection = document.getElementById('infinite-logos');

      if (!infiniteLogosSection) {
        return;
      }

      const currentScrollY = window.scrollY;
      const stickyPoint = infiniteLogosSection.offsetTop;
      const shouldFixHeader = currentScrollY >= stickyPoint;
      const scrollDelta = currentScrollY - previousScrollYRef.current;
      const isScrollingDown = scrollDelta > 0;
      const isScrollingUp = scrollDelta < 0;

      setIsFixed(shouldFixHeader);

      if (!isScrollTrackingReadyRef.current) {
        setIsDockHidden(false);
        previousScrollYRef.current = currentScrollY;
        isScrollTrackingReadyRef.current = true;
        wasFixedRef.current = shouldFixHeader;
        return;
      }

      if (!shouldFixHeader || isMenuOpen) {
        setIsFixed(shouldFixHeader);
        setIsDockHidden(false);
        previousScrollYRef.current = currentScrollY;
        wasFixedRef.current = shouldFixHeader;
        return;
      }

      if (isScrollingUp) {
        setIsFixed(true);
        setIsDockHidden(false);
        previousScrollYRef.current = currentScrollY;
        wasFixedRef.current = true;
        return;
      }

      if (!wasFixedRef.current && isScrollingDown) {
        setIsFixed(false);
        setIsDockHidden(true);
        previousScrollYRef.current = currentScrollY;
        return;
      }

      if (Math.abs(scrollDelta) < headerHideDelta) {
        return;
      }

      setIsDockHidden(scrollDelta > 0);
      previousScrollYRef.current = currentScrollY;
      wasFixedRef.current = true;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <Dialog.Root
      open={isMenuOpen}
      onOpenChange={(open) => setIsMenuOpen(open)}
    >
      <header
        id="header"
        className={styles.header}
      >
        <div
          className={clsx(
            styles.shell,
            isFixed ? styles.fixed : styles.default,
            isDockHidden && styles.hidden,
          )}
          onFocusCapture={() => setIsDockHidden(false)}
        >
          <div className={styles.brand}>
            <BrandLogo />
          </div>
          <div className={clsx(styles.navSlot, styles.desktopNav)}>
            <SiteNav type="inline" />
          </div>
          <div className={styles.action}>
            <div className={styles.mobileAction}>
              <Dialog.Trigger render={<MenuToggle isMenuOpen={isMenuOpen} />} />
            </div>
            <div className={styles.desktopAction}>
              <Button
                ariaLabel="Записаться"
                type="secondary"
                link="https://t.me/sue_onlineenglish"
              >
                <span>Записаться</span>
              </Button>
            </div>
          </div>
          <MobileMenu isFixed={isFixed}>
            <SiteNav
              type="block-1"
              onNavigate={() => setIsMenuOpen(false)}
            />
          </MobileMenu>
        </div>
      </header>
    </Dialog.Root>
  );
};

export default SiteHeader;
