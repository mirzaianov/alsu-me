'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sale from '../../assets/img/prices/sale.png';
import styles from './pricing.module.css';

const SALE_BADGE_REVEAL_READY_STATE = 'ready';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PricingSaleBadge = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const media = gsap.matchMedia();

      media.add(
        '(min-width: 577px) and (prefers-reduced-motion: reduce)',
        () => {
          root.dataset.pricingSaleReveal = SALE_BADGE_REVEAL_READY_STATE;
          gsap.set(root, {
            clearProps: 'opacity,visibility,transform,willChange',
          });
        },
      );
      media.add(
        '(min-width: 577px) and (prefers-reduced-motion: no-preference)',
        () => {
          const tween = gsap.fromTo(
            root,
            {
              autoAlpha: 0,
              xPercent: 35,
              yPercent: -50,
            },
            {
              autoAlpha: 0.7,
              duration: 0.9,
              ease: 'power2.out',
              scrollTrigger: {
                end: 'top 55%',
                scrub: true,
                start: 'top 90%',
                trigger: root,
              },
              willChange: 'opacity, transform',
              xPercent: 0,
              yPercent: -50,
            },
          );

          root.dataset.pricingSaleReveal = SALE_BADGE_REVEAL_READY_STATE;

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

  return (
    <div
      ref={rootRef}
      className={styles.sale}
      data-pricing-sale-reveal="pending"
    >
      <Image
        className={styles.saleImage}
        src={sale}
        alt="Sale"
        quality={100}
        sizes="(max-width: 576px) 170px, 300px"
      />
    </div>
  );
};

export default PricingSaleBadge;
