'use client';

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TestimonialRow from './testimonial-row';
import {
  createGestureResponsiveMarquee,
  createMarqueeTimeScaleController,
  createScrollResponsiveMarquee,
  keepMarqueeLoopingInReverse,
  MARQUEE_NORMAL_TIME_SCALE,
} from '../../utils/gsap/scroll-responsive-marquee';
import styles from './testimonial-carousel.module.css';
import rowStyles from './testimonial-row.module.css';

const testimonialCarouselSpeeds = {
  desktop: 44,
  mobile: 20,
  tablet: 28,
} as const;
const testimonialCarouselQueries = {
  desktop: '(prefers-reduced-motion: no-preference) and (min-width: 1061px)',
  mobile: '(prefers-reduced-motion: no-preference) and (max-width: 576px)',
  tablet:
    '(prefers-reduced-motion: no-preference) and (min-width: 577px) and (max-width: 1060px)',
} as const;
const testimonialGestureMaxReleaseTimeScale = 96;

gsap.registerPlugin(useGSAP, Observer, ScrollTrigger);

const TestimonialCarousel = () => {
  const [isInfiniteScroll, setIsInfiniteScroll] = useState<boolean>(true);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const rows = gsap.utils.toArray<HTMLElement>(
        `.${rowStyles.testimonialCardsRow}`,
        root,
      );

      if (rows.length === 0) {
        return;
      }

      const media = gsap.matchMedia();

      media.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(rows, { xPercent: 0 });
      });
      const createResponsiveCarousel = (pixelsPerSecond: number) => {
        const carouselDuration = rows[0].offsetWidth / pixelsPerSecond;

        if (!Number.isFinite(carouselDuration) || carouselDuration <= 0) {
          return;
        }

        const timeline = gsap
          .timeline({
            repeat: -1,
            defaults: { ease: 'none' },
          })
          .to(
            rows,
            {
              duration: carouselDuration,
              xPercent: -100,
            },
            0,
          );

        keepMarqueeLoopingInReverse(timeline);
        timeline
          .progress(1, true)
          .progress(0, true)
          .timeScale(MARQUEE_NORMAL_TIME_SCALE);

        timelineRef.current = timeline;

        const timeScaleController = createMarqueeTimeScaleController({
          animation: timeline,
        });
        const cleanupScrollResponsiveMarquee = createScrollResponsiveMarquee({
          animation: timeline,
          controller: timeScaleController,
        });
        const cleanupGestureResponsiveMarquee = createGestureResponsiveMarquee({
          controller: timeScaleController,
          getPixelsPerSecond: () => pixelsPerSecond,
          maxReleaseTimeScale: testimonialGestureMaxReleaseTimeScale,
          target: root,
        });

        const cleanupResponsiveControls = () => {
          cleanupScrollResponsiveMarquee();
          cleanupGestureResponsiveMarquee();
          timeScaleController.kill();
        };

        return () => {
          cleanupResponsiveControls();
          timeline.kill();
          timelineRef.current = null;
        };
      };

      media.add(testimonialCarouselQueries.mobile, () => {
        return createResponsiveCarousel(testimonialCarouselSpeeds.mobile);
      });
      media.add(testimonialCarouselQueries.tablet, () => {
        return createResponsiveCarousel(testimonialCarouselSpeeds.tablet);
      });
      media.add(testimonialCarouselQueries.desktop, () => {
        return createResponsiveCarousel(testimonialCarouselSpeeds.desktop);
      });

      return () => {
        media.revert();
      };
    },
    { scope: rootRef },
  );

  useEffect(() => {
    timelineRef.current?.paused(!isInfiniteScroll);
  }, [isInfiniteScroll]);

  return (
    <div
      ref={rootRef}
      className={styles.testimonialInfiniteCards}
    >
      <TestimonialRow setIsInfiniteScroll={setIsInfiniteScroll} />
      <TestimonialRow setIsInfiniteScroll={setIsInfiniteScroll} />
    </div>
  );
};

export default TestimonialCarousel;
