'use client';

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type MouseEvent,
} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { clsx } from 'clsx';
import styles from './site-nav.module.css';

const items = [
  ['hero', 'Главная'],
  ['about', 'Обо мне'],
  ['services', 'Услуги'],
  ['pricing', 'Цены'],
  ['testimonials', 'Отзывы'],
  ['contact', 'Контакты'],
] as const;

const activeSectionRootMargin = '-12% 0px -82% 0px';
const heroHash = '#hero';
const rootPath = '/';
const dockbarSelector = '[data-site-dockbar]';
const observedItems = items.filter(([id]) => id !== 'hero');
const dotFallbackSize = 4;
const indicatorFadeDuration = 0.14;
const indicatorTravelDuration = 0.78;
const indicatorSwapDelay = indicatorTravelDuration - indicatorFadeDuration * 2;
const pendingNavigationReleaseMs = 1800;

type SectionId = (typeof items)[number][0];
type SiteNavLayout = 'inline' | 'block-1' | 'block-2' | 'block-3';
const sectionIds = new Set<string>(items.map(([id]) => id));

const isSectionId = (id: string): id is SectionId => sectionIds.has(id);

const getPageTopScrollBehavior = (): ScrollBehavior =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth';

const scrollToPageTop = (behavior: ScrollBehavior = 'auto') => {
  window.scrollTo({ top: 0, left: 0, behavior });
};

const parsePixelValue = (value: string) => {
  const parsedValue = Number.parseFloat(value);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
};

const getDockbarReservedOffset = () => {
  const dockbar = document.querySelector<HTMLElement>(dockbarSelector);

  if (!dockbar) {
    return 0;
  }

  const { height } = dockbar.getBoundingClientRect();
  const top = parsePixelValue(getComputedStyle(dockbar).top);

  return top + height + top;
};

const getSectionScrollOffset = (
  target: HTMLElement,
  options: { reserveDockbar: boolean },
) => {
  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  const sectionOffset = parsePixelValue(
    getComputedStyle(target).scrollMarginTop,
  );
  const isScrollingUp = window.scrollY > targetTop;

  return isScrollingUp || options.reserveDockbar
    ? Math.max(sectionOffset, getDockbarReservedOffset())
    : sectionOffset;
};

const scrollToSection = (
  target: HTMLElement,
  behavior: ScrollBehavior,
  options = { reserveDockbar: false },
) => {
  const targetTop = target.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: Math.max(0, targetTop - getSectionScrollOffset(target, options)),
    left: 0,
    behavior,
  });
};

const isBeforeAboutSection = () => {
  const aboutSection = document.getElementById('about');

  return !aboutSection || window.scrollY < aboutSection.offsetTop;
};

const correctHashScrollPosition = () => {
  const hash = window.location.hash;

  if (!hash) {
    return;
  }

  if (hash === heroHash) {
    scrollToPageTop();
    window.history.replaceState(null, '', rootPath);
    window.requestAnimationFrame(() => {
      scrollToPageTop();
      window.history.replaceState(null, '', rootPath);
    });
    return;
  }

  const target = document.getElementById(hash.slice(1));

  if (!target) {
    return;
  }

  scrollToSection(target, 'auto', { reserveDockbar: true });
  window.requestAnimationFrame(() => {
    scrollToSection(target, 'auto', { reserveDockbar: true });
  });
};

type SiteNavProps = {
  hasAnimatedIndicator?: boolean;
  shouldCorrectHashOnMount?: boolean;
  type: SiteNavLayout;
  onNavigate?: (id: SectionId) => void;
};

type IndicatorPosition = {
  x: number;
  y: number;
};

gsap.registerPlugin(useGSAP);

const SiteNav = ({
  hasAnimatedIndicator = false,
  shouldCorrectHashOnMount = true,
  type,
  onNavigate,
}: SiteNavProps) => {
  const [activeLink, setActiveLink] = useState<SectionId | ''>('hero');
  const navBarRef = useRef<HTMLUListElement | null>(null);
  const labelRefs = useRef<Partial<Record<SectionId, HTMLSpanElement | null>>>(
    {},
  );
  const pendingNavigationTargetRef = useRef<SectionId | null>(null);
  const pendingNavigationReleaseTimeoutRef = useRef<number | null>(null);
  const previousIndicatorPositionRef = useRef<IndicatorPosition | null>(null);

  const clearPendingNavigationTarget = useCallback(() => {
    pendingNavigationTargetRef.current = null;

    if (pendingNavigationReleaseTimeoutRef.current !== null) {
      window.clearTimeout(pendingNavigationReleaseTimeoutRef.current);
      pendingNavigationReleaseTimeoutRef.current = null;
    }
  }, []);

  const holdActiveLinkUntilTarget = useCallback(
    (id: SectionId) => {
      clearPendingNavigationTarget();
      pendingNavigationTargetRef.current = id;
      pendingNavigationReleaseTimeoutRef.current = window.setTimeout(
        clearPendingNavigationTarget,
        pendingNavigationReleaseMs,
      );
    },
    [clearPendingNavigationTarget],
  );

  const getIndicatorPosition = useCallback(
    (id: SectionId): IndicatorPosition | null => {
      const navBar = navBarRef.current;
      const label = labelRefs.current[id];

      if (!navBar || !label) {
        return null;
      }

      const navBarRect = navBar.getBoundingClientRect();
      const labelRect = label.getBoundingClientRect();
      const indicatorStyles = getComputedStyle(navBar);
      const dotSize =
        parsePixelValue(
          indicatorStyles.getPropertyValue('--nav-current-dot-size'),
        ) || dotFallbackSize;

      if (type === 'inline') {
        return {
          x:
            labelRect.left -
            navBarRect.left +
            labelRect.width / 2 -
            dotSize / 2,
          y: labelRect.bottom - navBarRect.top - dotSize / 2,
        };
      }

      const dotGap = parsePixelValue(
        indicatorStyles.getPropertyValue('--nav-current-dot-gap'),
      );

      return {
        x: labelRect.left - navBarRect.left - dotGap - dotSize,
        y: labelRect.top - navBarRect.top + labelRect.height / 2 - dotSize / 2,
      };
    },
    [type],
  );

  useGSAP(
    () => {
      const navBar = navBarRef.current;

      if (!navBar) {
        return;
      }

      if (type !== 'inline') {
        gsap.set(navBar, {
          '--nav-current-dot-opacity': 0,
        });
        return;
      }

      if (!activeLink) {
        delete navBar.dataset.indicatorReady;
        gsap.set(navBar, {
          '--nav-current-dot-opacity': 0,
        });
        return;
      }

      const targetPosition = getIndicatorPosition(activeLink);

      if (!targetPosition) {
        return;
      }

      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      const previousPosition = previousIndicatorPositionRef.current;
      const startPosition = previousPosition
        ? {
            x: parsePixelValue(
              getComputedStyle(navBar).getPropertyValue('--nav-current-dot-x'),
            ),
            y: parsePixelValue(
              getComputedStyle(navBar).getPropertyValue('--nav-current-dot-y'),
            ),
          }
        : null;

      gsap.killTweensOf(navBar);

      if (!hasAnimatedIndicator || !startPosition || reduceMotion) {
        if (!hasAnimatedIndicator && startPosition && !reduceMotion) {
          navBar.dataset.indicatorReady = 'true';
          gsap
            .timeline({
              defaults: {
                overwrite: 'auto',
              },
              onComplete: () => {
                previousIndicatorPositionRef.current = targetPosition;
              },
            })
            .set(navBar, {
              '--nav-current-dot-opacity': 1,
              '--nav-current-dot-x': `${startPosition.x}px`,
              '--nav-current-dot-y': `${startPosition.y}px`,
            })
            .to(navBar, {
              duration: indicatorFadeDuration,
              ease: 'power1.out',
              '--nav-current-dot-opacity': 0,
            })
            .set(
              navBar,
              {
                '--nav-current-dot-x': `${targetPosition.x}px`,
                '--nav-current-dot-y': `${targetPosition.y}px`,
              },
              `+=${indicatorSwapDelay}`,
            )
            .to(navBar, {
              duration: indicatorFadeDuration,
              ease: 'power1.in',
              '--nav-current-dot-opacity': 1,
            });
          return;
        }

        gsap.set(navBar, {
          '--nav-current-dot-opacity': 1,
          '--nav-current-dot-x': `${targetPosition.x}px`,
          '--nav-current-dot-y': `${targetPosition.y}px`,
        });
        navBar.dataset.indicatorReady = 'true';
        previousIndicatorPositionRef.current = targetPosition;
        return;
      }

      const deltaX = targetPosition.x - startPosition.x;
      const deltaY = targetPosition.y - startPosition.y;
      const distance = Math.hypot(deltaX, deltaY) || 1;
      const unitX = deltaX / distance;
      const unitY = deltaY / distance;

      gsap
        .timeline({
          defaults: {
            overwrite: 'auto',
          },
          onComplete: () => {
            previousIndicatorPositionRef.current = targetPosition;
          },
        })
        .set(navBar, {
          '--nav-current-dot-opacity': 1,
          '--nav-current-dot-x': `${startPosition.x}px`,
          '--nav-current-dot-y': `${startPosition.y}px`,
        })
        .call(() => {
          navBar.dataset.indicatorReady = 'true';
        })
        .to(navBar, {
          duration: 0.1,
          ease: 'power2.out',
          '--nav-current-dot-x': `${startPosition.x - unitX * 5}px`,
          '--nav-current-dot-y': `${startPosition.y - unitY * 5}px`,
        })
        .to(navBar, {
          duration: 0.36,
          ease: 'power3.out',
          '--nav-current-dot-x': `${targetPosition.x + unitX * 8}px`,
          '--nav-current-dot-y': `${targetPosition.y + unitY * 8}px`,
        })
        .to(navBar, {
          duration: 0.14,
          ease: 'power2.inOut',
          '--nav-current-dot-x': `${targetPosition.x - unitX * 4}px`,
          '--nav-current-dot-y': `${targetPosition.y - unitY * 4}px`,
        })
        .to(navBar, {
          duration: 0.18,
          ease: 'elastic.out(1, 0.55)',
          '--nav-current-dot-x': `${targetPosition.x}px`,
          '--nav-current-dot-y': `${targetPosition.y}px`,
        });
    },
    {
      dependencies: [
        activeLink,
        getIndicatorPosition,
        hasAnimatedIndicator,
        type,
      ],
      scope: navBarRef,
    },
  );

  useEffect(() => {
    const handleResize = () => {
      if (type !== 'inline' || !activeLink) {
        return;
      }

      window.requestAnimationFrame(() => {
        const navBar = navBarRef.current;
        const targetPosition = getIndicatorPosition(activeLink);

        if (!navBar || !targetPosition) {
          return;
        }

        gsap.set(navBar, {
          '--nav-current-dot-opacity': 1,
          '--nav-current-dot-x': `${targetPosition.x}px`,
          '--nav-current-dot-y': `${targetPosition.y}px`,
        });
        previousIndicatorPositionRef.current = targetPosition;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeLink, getIndicatorPosition, type]);

  useEffect(() => {
    if (shouldCorrectHashOnMount) {
      correctHashScrollPosition();
    }

    const handleHashChange = () => {
      if (shouldCorrectHashOnMount) {
        correctHashScrollPosition();
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    const updateHeroActiveState = () => {
      if (isBeforeAboutSection()) {
        const pendingNavigationTarget = pendingNavigationTargetRef.current;

        if (pendingNavigationTarget && pendingNavigationTarget !== 'hero') {
          return;
        }

        setActiveLink('hero');
        clearPendingNavigationTarget();
      }
    };

    updateHeroActiveState();
    window.addEventListener('scroll', updateHeroActiveState, { passive: true });

    const observedIds = new Set<SectionId>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting && isSectionId(id)) {
            const pendingNavigationTarget = pendingNavigationTargetRef.current;

            if (pendingNavigationTarget && pendingNavigationTarget !== id) {
              return;
            }

            setActiveLink(id);
            clearPendingNavigationTarget();
          }
        });
      },
      {
        rootMargin: activeSectionRootMargin,
        threshold: 0,
      },
    );

    const observeAvailableSections = () => {
      observedItems.forEach(([id]) => {
        if (observedIds.has(id)) {
          return;
        }

        const section = document.getElementById(id);

        if (section) {
          observer.observe(section);
          observedIds.add(id);
        }
      });

      return observedIds.size === observedItems.length;
    };

    const mutationObserver = new MutationObserver(() => {
      if (observeAvailableSections()) {
        mutationObserver.disconnect();
      }
    });

    if (!observeAvailableSections()) {
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', updateHeroActiveState);
      clearPendingNavigationTarget();
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [clearPendingNavigationTarget, shouldCorrectHashOnMount]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    onNavigate?.(id);
    setActiveLink(id);
    holdActiveLinkUntilTarget(id);

    event.preventDefault();

    const behavior = getPageTopScrollBehavior();

    if (id === 'hero') {
      if (window.location.pathname !== rootPath || window.location.hash) {
        window.history.pushState(null, '', rootPath);
      }

      scrollToPageTop(behavior);
      return;
    }

    const hash = `#${id}`;

    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash);
    }

    const target = document.getElementById(id);

    if (target) {
      scrollToSection(target, behavior);
    }
  };

  return (
    <ul
      ref={navBarRef}
      className={clsx(styles.navBar, styles[type])}
    >
      {items.map((item) => (
        <li
          className={clsx(styles.item, styles[item[0]])}
          key={item[0]}
        >
          <a
            aria-label={`Go to the ${item[0]} section`}
            className={styles.link}
            href={item[0] === 'hero' ? rootPath : `#${item[0]}`}
            onClick={(event) => handleClick(event, item[0])}
            aria-current={activeLink === item[0] ? 'location' : undefined}
          >
            <span
              ref={(node) => {
                labelRefs.current[item[0]] = node;
              }}
              className={styles.linkLabel}
            >
              {item[1]}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SiteNav;
