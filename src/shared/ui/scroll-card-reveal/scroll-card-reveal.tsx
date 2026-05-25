'use client';

import { type HTMLAttributes, type ReactNode, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { clsx } from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './scroll-card-reveal.module.css';

type ScrollCardRevealProps = Omit<
  HTMLAttributes<HTMLElement>,
  'children' | 'className'
> & {
  as?: 'div' | 'ul';
  children: ReactNode;
  className?: string;
  stagger?: number;
};

const CARD_REVEAL_DURATION = 0.75;
const CARD_REVEAL_STAGGER = 0.18;
const CARD_REVEAL_START = 'top 80%';
const CARD_REVEAL_READY_STATE = 'ready';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ScrollCardReveal = ({
  as = 'div',
  children,
  className,
  stagger = CARD_REVEAL_STAGGER,
  ...rootProps
}: ScrollCardRevealProps) => {
  const rootRef = useRef<HTMLElement | null>(null);
  const setRootRef = (node: HTMLElement | null) => {
    rootRef.current = node;
  };

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const cards = gsap.utils.toArray<HTMLElement>(root.children);

      if (cards.length === 0) {
        root.dataset.scrollCardReveal = CARD_REVEAL_READY_STATE;
        return;
      }

      const media = gsap.matchMedia();

      media.add('(prefers-reduced-motion: reduce)', () => {
        root.dataset.scrollCardReveal = CARD_REVEAL_READY_STATE;
        gsap.set(cards, {
          clearProps: 'opacity,visibility,transform,willChange',
        });
      });
      media.add(
        '(prefers-reduced-motion: no-preference)',
        () => {
          const tween = gsap.fromTo(
            cards,
            {
              autoAlpha: 0,
              scale: 0.97,
              y: 36,
            },
            {
              autoAlpha: 1,
              clearProps: 'opacity,visibility,transform,willChange',
              duration: CARD_REVEAL_DURATION,
              ease: 'power2.out',
              overwrite: 'auto',
              scale: 1,
              stagger: {
                each: stagger,
                from: 'start',
              },
              scrollTrigger: {
                trigger: root,
                start: CARD_REVEAL_START,
                once: true,
              },
              willChange: 'opacity, transform',
              y: 0,
            },
          );

          root.dataset.scrollCardReveal = CARD_REVEAL_READY_STATE;

          return () => {
            tween.kill();
          };
        },
        root,
      );

      return () => {
        media.revert();
      };
    },
    { scope: rootRef },
  );

  const revealProps = {
    ...rootProps,
    className: clsx(styles.reveal, className),
    'data-scroll-card-reveal': 'pending',
  } as const;

  const reveal =
    as === 'ul' ? (
      <ul
        ref={setRootRef}
        {...revealProps}
      >
        {children}
      </ul>
    ) : (
      <div
        ref={setRootRef}
        {...revealProps}
      >
        {children}
      </div>
    );

  return (
    <>
      <noscript>
        <style>
          {'[data-scroll-card-reveal="pending"]>*{visibility:visible}'}
        </style>
      </noscript>
      {reveal}
    </>
  );
};

export default ScrollCardReveal;
