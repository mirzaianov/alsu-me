'use client';

import { useState, useEffect, type MouseEvent } from 'react';
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

const activeSectionRootMargin = '-45% 0px -45% 0px';
const heroHash = '#hero';

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

const correctHeroHashToPageTop = () => {
  if (window.location.hash !== heroHash) {
    return;
  }

  scrollToPageTop();
  window.requestAnimationFrame(() => {
    scrollToPageTop();
  });
};

type SiteNavProps = {
  type: SiteNavLayout;
  onNavigate?: (id: SectionId) => void;
};

const SiteNav = ({ type, onNavigate }: SiteNavProps) => {
  const [activeLink, setActiveLink] = useState<SectionId | ''>('');

  useEffect(() => {
    correctHeroHashToPageTop();

    const handleHashChange = () => correctHeroHashToPageTop();
    window.addEventListener('hashchange', handleHashChange);

    const observedIds = new Set<SectionId>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting && isSectionId(id)) {
            setActiveLink(id);
          }
        });
      },
      {
        rootMargin: activeSectionRootMargin,
        threshold: 0,
      },
    );

    const observeAvailableSections = () => {
      items.forEach(([id]) => {
        if (observedIds.has(id)) {
          return;
        }

        const section = document.getElementById(id);

        if (section) {
          observer.observe(section);
          observedIds.add(id);
        }
      });

      return observedIds.size === items.length;
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
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    onNavigate?.(id);
    setActiveLink(id);

    if (id !== 'hero') {
      return;
    }

    event.preventDefault();

    if (window.location.hash !== heroHash) {
      window.history.pushState(null, '', heroHash);
    }

    scrollToPageTop(getPageTopScrollBehavior());
  };

  return (
    <ul className={clsx(styles.navBar, styles[type])}>
      {items.map((item) => (
        <li
          className={clsx(styles.item, styles[item[0]])}
          key={item[0]}
        >
          <a
            aria-label={`Go to the ${item[0]} section`}
            className={clsx(
              styles.link,
              activeLink === item[0] && styles.active,
            )}
            href={`#${item[0]}`}
            onClick={(event) => handleClick(event, item[0])}
            aria-current={activeLink === item[0] ? 'location' : undefined}
          >
            <span className={styles.linkLabel}>
              {item[1]}
              <span
                className={clsx(
                  styles.underline,
                  activeLink === item[0] && styles.underlineActive,
                )}
              />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SiteNav;
