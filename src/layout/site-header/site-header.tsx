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
const dockHideTransitionMs = 320;

type HeaderContentProps = {
  isMenuOpen: boolean;
};

const HeaderContent = ({ isMenuOpen }: HeaderContentProps) => (
  <>
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
  </>
);

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDockbarActive, setIsDockbarActive] = useState(false);
  const [isDockbarHidden, setIsDockbarHidden] = useState(true);
  const previousScrollYRef = useRef(0);
  const isScrollTrackingReadyRef = useRef(false);
  const wasInDockZoneRef = useRef(false);
  const heroReleaseTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1161px)');
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
    const clearHeroReleaseTimeout = () => {
      if (heroReleaseTimeoutRef.current === null) {
        return;
      }

      window.clearTimeout(heroReleaseTimeoutRef.current);
      heroReleaseTimeoutRef.current = null;
    };

    const setDockbarState = (isActive: boolean, isHidden: boolean) => {
      setIsDockbarActive(isActive);
      setIsDockbarHidden(isHidden);
    };

    const releaseDockToHero = () => {
      clearHeroReleaseTimeout();

      const transitionDelay = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
        ? 0
        : dockHideTransitionMs;

      heroReleaseTimeoutRef.current = window.setTimeout(() => {
        setDockbarState(false, true);
        heroReleaseTimeoutRef.current = null;
      }, transitionDelay);
    };

    const handleScroll = () => {
      const dockBoundary = document.getElementById('about');

      if (!dockBoundary) {
        return;
      }

      const currentScrollY = window.scrollY;
      const stickyPoint = dockBoundary.offsetTop;
      const isInDockZone = currentScrollY >= stickyPoint;
      const scrollDelta = currentScrollY - previousScrollYRef.current;
      const isScrollingDown = scrollDelta > 0;
      const isScrollingUp = scrollDelta < 0;

      if (!isScrollTrackingReadyRef.current) {
        setDockbarState(isInDockZone, !isInDockZone);
        previousScrollYRef.current = currentScrollY;
        isScrollTrackingReadyRef.current = true;
        wasInDockZoneRef.current = isInDockZone;
        return;
      }

      if (isMenuOpen) {
        clearHeroReleaseTimeout();
        setDockbarState(isInDockZone, !isInDockZone);
        previousScrollYRef.current = currentScrollY;
        wasInDockZoneRef.current = isInDockZone;
        return;
      }

      if (!isInDockZone) {
        if (heroReleaseTimeoutRef.current !== null) {
          setDockbarState(true, true);
          previousScrollYRef.current = currentScrollY;
          wasInDockZoneRef.current = false;
          return;
        }

        if (wasInDockZoneRef.current && isScrollingUp) {
          setDockbarState(true, true);
          previousScrollYRef.current = currentScrollY;
          wasInDockZoneRef.current = false;
          releaseDockToHero();
          return;
        }

        setDockbarState(false, true);
        previousScrollYRef.current = currentScrollY;
        wasInDockZoneRef.current = false;
        return;
      }

      clearHeroReleaseTimeout();

      if (isScrollingUp) {
        setDockbarState(true, false);
        previousScrollYRef.current = currentScrollY;
        wasInDockZoneRef.current = true;
        return;
      }

      if (!wasInDockZoneRef.current && isScrollingDown) {
        setDockbarState(true, true);
        previousScrollYRef.current = currentScrollY;
        wasInDockZoneRef.current = true;
        return;
      }

      if (Math.abs(scrollDelta) < headerHideDelta) {
        wasInDockZoneRef.current = true;
        return;
      }

      setDockbarState(true, scrollDelta > 0);
      previousScrollYRef.current = currentScrollY;
      wasInDockZoneRef.current = true;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearHeroReleaseTimeout();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const isDockbarInteractive = isDockbarActive && !isDockbarHidden;
  const isHeroHeaderInteractive = !isDockbarActive;

  return (
    <Dialog.Root
      open={isMenuOpen}
      onOpenChange={(open) => setIsMenuOpen(open)}
    >
      <header
        id="header"
        className={styles.header}
        aria-hidden={isHeroHeaderInteractive ? undefined : true}
        inert={isHeroHeaderInteractive ? undefined : true}
      >
        <div className={clsx(styles.shell, styles.heroShell)}>
          <HeaderContent isMenuOpen={isMenuOpen} />
        </div>
      </header>
      <div
        className={clsx(
          styles.shell,
          styles.dockbar,
          isDockbarHidden && styles.hidden,
        )}
        aria-hidden={isDockbarInteractive ? undefined : true}
        inert={isDockbarInteractive ? undefined : true}
        onFocusCapture={() => setIsDockbarHidden(false)}
      >
        <HeaderContent isMenuOpen={isMenuOpen} />
      </div>
      <MobileMenu isFixed={isDockbarActive}>
        <SiteNav
          type="block-1"
          onNavigate={() => setIsMenuOpen(false)}
        />
      </MobileMenu>
    </Dialog.Root>
  );
};

export default SiteHeader;
