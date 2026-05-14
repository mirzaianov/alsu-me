'use client';

import { type ReactNode, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  createHeroHighlightTimeline,
  heroHighlightMediaQueries,
} from '../../utils/gsap/hero-highlight-timeline';
import styles from './hero.module.css';

type HeroDynamicHighlightsProps = {
  children: ReactNode;
};

gsap.registerPlugin(useGSAP);

const HeroDynamicHighlights = ({ children }: HeroDynamicHighlightsProps) => {
  const rootRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const media = gsap.matchMedia();

      media.add(
        heroHighlightMediaQueries,
        (context) => {
          const { reduceMotion } = context.conditions as {
            reduceMotion: boolean;
          };

          createHeroHighlightTimeline({ reduceMotion, root });
        },
        root,
      );

      return () => {
        media.revert();
      };
    },
    { scope: rootRef },
  );

  return (
    <article
      ref={rootRef}
      className={styles.content}
    >
      {children}
    </article>
  );
};

export default HeroDynamicHighlights;
