'use client';

import {
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
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
const testimonialDialogCloseHoverSyncDelayMs = 180;

type PointerPosition = {
  pointerType: string;
  x: number;
  y: number;
};
type PointerPositionEvent = Pick<
  PointerEvent,
  'clientX' | 'clientY' | 'pointerType'
>;

gsap.registerPlugin(useGSAP, Observer, ScrollTrigger);

const TestimonialCarousel = () => {
  const [isModalPaused, setIsModalPaused] = useState(false);
  const [isFocusPaused, setIsFocusPaused] = useState(false);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const isImmediateCarouselPausedRef = useRef(isModalPaused || isFocusPaused);
  const isHoverPausedRef = useRef(isHoverPaused);
  const closeHoverSyncTimeoutRef = useRef<number | null>(null);
  const lastPointerPositionRef = useRef<PointerPosition | null>(null);
  const syncTimelinePausedRef = useRef<(() => void) | null>(null);

  const clearCloseHoverSyncTimeout = () => {
    if (closeHoverSyncTimeoutRef.current === null) {
      return;
    }

    window.clearTimeout(closeHoverSyncTimeoutRef.current);
    closeHoverSyncTimeoutRef.current = null;
  };

  const updatePointerPosition = (event: PointerPositionEvent) => {
    lastPointerPositionRef.current = {
      pointerType: event.pointerType,
      x: event.clientX,
      y: event.clientY,
    };
  };

  const isPointerOverCarousel = () => {
    const pointerPosition = lastPointerPositionRef.current;
    const root = rootRef.current;

    if (!pointerPosition || !root || pointerPosition.pointerType === 'touch') {
      return false;
    }

    const rect = root.getBoundingClientRect();

    return (
      pointerPosition.x >= rect.left &&
      pointerPosition.x <= rect.right &&
      pointerPosition.y >= rect.top &&
      pointerPosition.y <= rect.bottom
    );
  };

  const pauseForHover = (event: ReactPointerEvent<HTMLDivElement>) => {
    updatePointerPosition(event);

    if (event.pointerType === 'touch') {
      return;
    }

    setIsHoverPaused(true);
  };

  const syncHoverPauseFromPointer = () => {
    setIsHoverPaused(isPointerOverCarousel());
  };

  const syncHoverPause = (event: ReactPointerEvent<HTMLDivElement>) => {
    updatePointerPosition(event);

    if (event.pointerType === 'touch') {
      setIsHoverPaused(false);
      return;
    }

    syncHoverPauseFromPointer();
  };

  const handleModalPausedChange = (paused: boolean) => {
    clearCloseHoverSyncTimeout();
    setIsModalPaused(paused);

    if (paused) {
      return;
    }

    setIsHoverPaused(isPointerOverCarousel());
    closeHoverSyncTimeoutRef.current = window.setTimeout(() => {
      syncHoverPauseFromPointer();
      closeHoverSyncTimeoutRef.current = null;
    }, testimonialDialogCloseHoverSyncDelayMs);
  };

  const handleFocusCapture = (event: FocusEvent<HTMLDivElement>) => {
    const focusedElement = event.target;

    if (!(focusedElement instanceof HTMLElement)) {
      return;
    }

    window.requestAnimationFrame(() => {
      setIsFocusPaused(focusedElement.matches(':focus-visible'));
    });
  };

  const handleBlurCapture = (event: FocusEvent<HTMLDivElement>) => {
    const nextFocusedElement = event.relatedTarget;

    if (
      nextFocusedElement instanceof Node &&
      event.currentTarget.contains(nextFocusedElement)
    ) {
      return;
    }

    setIsFocusPaused(false);
  };

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
          delayedPaused: () => isHoverPausedRef.current,
          isPaused: () => isImmediateCarouselPausedRef.current,
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
    isImmediateCarouselPausedRef.current = isModalPaused || isFocusPaused;
    isHoverPausedRef.current = isHoverPaused;
    syncTimelinePausedRef.current?.();
  }, [isFocusPaused, isHoverPaused, isModalPaused]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      updatePointerPosition(event);
    };

    document.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);

      if (closeHoverSyncTimeoutRef.current !== null) {
        window.clearTimeout(closeHoverSyncTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={styles.testimonialInfiniteCards}
      onBlurCapture={handleBlurCapture}
      onFocusCapture={handleFocusCapture}
      onPointerCancel={syncHoverPause}
      onPointerDown={pauseForHover}
      onPointerEnter={pauseForHover}
      onPointerLeave={syncHoverPause}
      onPointerUp={syncHoverPause}
    >
      <TestimonialRow setIsModalPaused={handleModalPausedChange} />
      <TestimonialRow setIsModalPaused={handleModalPausedChange} />
    </div>
  );
};

export default TestimonialCarousel;
