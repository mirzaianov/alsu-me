'use client';

import { useState, useEffect } from 'react';
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

const activeSectionThreshold = 0.4;

type SectionId = (typeof items)[number][0];
type SiteNavLayout = 'inline' | 'block-1' | 'block-2' | 'block-3';
const sectionIds = new Set<string>(items.map(([id]) => id));

const isSectionId = (id: string): id is SectionId => sectionIds.has(id);

type SiteNavProps = {
  type: SiteNavLayout;
  onNavigate?: (id: SectionId) => void;
};

const SiteNav = ({ type, onNavigate }: SiteNavProps) => {
  const [activeLink, setActiveLink] = useState<SectionId | ''>('');

  useEffect(() => {
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
        threshold: activeSectionThreshold,
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
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  const handleClick = (id: SectionId) => {
    onNavigate?.(id);
    setActiveLink(id);
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
            onClick={() => handleClick(item[0])}
          >
            {item[1]}
            <span
              className={clsx(
                styles.underline,
                activeLink === item[0] && styles.underlineActive,
              )}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SiteNav;
