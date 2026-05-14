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
  createViewportPausedAnimation,
  keepMarqueeLoopingInReverse,
  MARQUEE_NORMAL_TIME_SCALE,
} from '../../utils/gsap/scroll-responsive-marquee';
import {
  getResponsiveMarqueeSpeed,
  responsiveMarqueeMediaQueries,
} from '../../utils/gsap/responsive-marquee-speed';
import styles from './testimonial-carousel.module.css';
import rowStyles from './testimonial-row.module.css';

const testimonialGestureMaxReleaseTimeScale = 96;

gsap.registerPlugin(useGSAP, Observer, ScrollTrigger);

const TestimonialCarousel = () => {
  const [isInfiniteScroll, setIsInfiniteScroll] = useState<boolean>(true);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const isInfiniteScrollRef = useRef(isInfiniteScroll);
  const syncTimelinePausedRef = useRef<(() => void) | null>(null);

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

        const timeScaleController = createMarqueeTimeScaleController({
          animation: timeline,
        });
        const viewportAnimation = createViewportPausedAnimation({
          animation: timeline,
          isPaused: () => !isInfiniteScrollRef.current,
          trigger: root,
        });
        syncTimelinePausedRef.current = viewportAnimation.sync;

        const cleanupScrollResponsiveMarquee = createScrollResponsiveMarquee({
          animation: timeline,
          controller: timeScaleController,
          isActive: viewportAnimation.isActive,
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
          viewportAnimation.kill();
          timeScaleController.kill();
        };

        return () => {
          cleanupResponsiveControls();
          timeline.kill();
          if (syncTimelinePausedRef.current === viewportAnimation.sync) {
            syncTimelinePausedRef.current = null;
          }
        };
      };

      media.add(
        {
          isDesktop: responsiveMarqueeMediaQueries.desktop,
          isMobile: responsiveMarqueeMediaQueries.mobile,
          isTablet: responsiveMarqueeMediaQueries.tablet,
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop, isTablet, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            isTablet: boolean;
            reduceMotion: boolean;
          };

          gsap.set(rows, { xPercent: 0 });

          if (reduceMotion) {
            return;
          }

          return createResponsiveCarousel(
            getResponsiveMarqueeSpeed({ isDesktop, isTablet }),
          );
        },
        root,
      );

      return () => {
        media.revert();
      };
    },
    { scope: rootRef },
  );

  useEffect(() => {
    isInfiniteScrollRef.current = isInfiniteScroll;
    syncTimelinePausedRef.current?.();
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
