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

const testimonialCarouselDuration = 120;
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
      media.add(
        '(prefers-reduced-motion: no-preference)',
        () => {
          const timeline = gsap
            .timeline({
              repeat: -1,
              defaults: { ease: 'none' },
            })
            .to(
              rows,
              {
                duration: testimonialCarouselDuration,
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
          const cleanupGestureResponsiveMarquee =
            createGestureResponsiveMarquee({
              controller: timeScaleController,
              getPixelsPerSecond: () =>
                rows[0].offsetWidth / testimonialCarouselDuration,
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
