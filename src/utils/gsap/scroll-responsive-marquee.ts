import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const MARQUEE_NORMAL_TIME_SCALE = 1;

const POINTER_MOVEMENT_MINIMUM = 2;
const DEFAULT_MAX_SCROLL_MARQUEE_TIME_SCALE = 4;
const DEFAULT_SCROLL_VELOCITY_FOR_MAX_BOOST = 3200;
const DEFAULT_SCROLL_RESPONSE_DURATION = 0.18;
const DEFAULT_SETTLE_DELAY = 0.12;
const DEFAULT_SETTLE_DURATION = 0.65;
const DEFAULT_GESTURE_RELEASE_HOLD_DURATION = 0.25;
const DEFAULT_GESTURE_RELEASE_DURATION = 0.5;
const DEFAULT_MIN_GESTURE_RELEASE_TIME_SCALE = MARQUEE_NORMAL_TIME_SCALE;
const POINTER_RELEASE_SAMPLE_WINDOW = 240;
const POINTER_HORIZONTAL_INTENT_RATIO = 1.2;
const REVERSE_LOOP_OFFSET_MULTIPLIER = 100;

type ScrollResponsiveMarqueeOptions = {
  animation: gsap.core.Animation;
  controller?: MarqueeTimeScaleController;
  gestureReleaseDuration?: number;
  gestureReleaseHoldDuration?: number;
  maxTimeScale?: number;
  minReleaseTimeScale?: number;
  normalTimeScale?: number;
  responseDuration?: number;
  settleDelay?: number;
  settleDuration?: number;
  velocityForMaxBoost?: number;
};

type GestureResponsiveMarqueeOptions = {
  controller: MarqueeTimeScaleController;
  getPixelsPerSecond: () => number;
  maxReleaseTimeScale?: number;
  minReleaseTimeScale?: number;
  target: Element;
};

type MarqueeDirection = -1 | 1;
type GestureAxis = 'x' | 'y' | null;

type ReleaseVelocityOptions = {
  direction: MarqueeDirection;
  duration?: number;
  holdDuration?: number;
  maxTimeScale?: number;
  minTimeScale?: number;
  pixelsPerSecond: number;
  velocity: number;
};

type GesturePositionSample = {
  time: number;
  x: number;
};

type MarqueeTimeScaleController = {
  applyVelocity: (direction: MarqueeDirection, velocity: number) => void;
  hold: () => void;
  kill: () => void;
  releaseWithVelocity: (options: ReleaseVelocityOptions) => void;
  seekByPixels: (deltaX: number, pixelsPerSecond: number) => void;
  settleToDirection: (direction: MarqueeDirection) => void;
};

const getScrollTimeScale = ({
  maxTimeScale,
  normalTimeScale,
  velocity,
  velocityForMaxBoost,
}: {
  maxTimeScale: number;
  normalTimeScale: number;
  velocity: number;
  velocityForMaxBoost: number;
}) =>
  gsap.utils.clamp(
    normalTimeScale,
    maxTimeScale,
    gsap.utils.mapRange(
      0,
      velocityForMaxBoost,
      normalTimeScale,
      maxTimeScale,
      velocity,
    ),
  );

const getPointerTimeScale = ({
  maxTimeScale,
  minTimeScale,
  normalTimeScale,
  pixelsPerSecond,
  velocity,
}: {
  maxTimeScale: number;
  minTimeScale: number;
  normalTimeScale: number;
  pixelsPerSecond: number;
  velocity: number;
}) => {
  if (pixelsPerSecond <= 0) {
    return normalTimeScale;
  }

  const clampTimeScale = gsap.utils.clamp(
    Math.max(normalTimeScale, minTimeScale),
    maxTimeScale,
  );

  return clampTimeScale(Math.abs(velocity) / pixelsPerSecond);
};

export const keepMarqueeLoopingInReverse = (timeline: gsap.core.Timeline) => {
  timeline.eventCallback('onReverseComplete', () => {
    timeline.totalTime(
      timeline.rawTime() + timeline.duration() * REVERSE_LOOP_OFFSET_MULTIPLIER,
    );
  });
};

export const createMarqueeTimeScaleController = ({
  animation,
  gestureReleaseDuration = DEFAULT_GESTURE_RELEASE_DURATION,
  gestureReleaseHoldDuration = DEFAULT_GESTURE_RELEASE_HOLD_DURATION,
  maxTimeScale = DEFAULT_MAX_SCROLL_MARQUEE_TIME_SCALE,
  minReleaseTimeScale = DEFAULT_MIN_GESTURE_RELEASE_TIME_SCALE,
  normalTimeScale = MARQUEE_NORMAL_TIME_SCALE,
  responseDuration = DEFAULT_SCROLL_RESPONSE_DURATION,
  settleDelay = DEFAULT_SETTLE_DELAY,
  settleDuration = DEFAULT_SETTLE_DURATION,
  velocityForMaxBoost = DEFAULT_SCROLL_VELOCITY_FOR_MAX_BOOST,
}: Omit<ScrollResponsiveMarqueeOptions, 'controller'>) => {
  let isGestureReleaseActive = false;
  let settledTimeScale = normalTimeScale;
  let timeScaleTween: gsap.core.Animation | null = null;

  const setTimeScale = (timeScale: number) => {
    timeScaleTween?.kill();
    timeScaleTween = null;
    animation.timeScale(timeScale);
  };

  const tweenTimeScale = (
    timeScale: number,
    duration: number,
    ease = 'power2.out',
  ) => {
    timeScaleTween?.kill();
    timeScaleTween = gsap.to(animation, {
      duration,
      ease,
      overwrite: true,
      timeScale,
    });
  };

  const settleMarquee = gsap
    .delayedCall(settleDelay, () => {
      tweenTimeScale(settledTimeScale, settleDuration);
    })
    .pause();

  const applyVelocity = (direction: MarqueeDirection, velocity: number) => {
    const scrollTimeScale = getScrollTimeScale({
      maxTimeScale,
      normalTimeScale,
      velocity,
      velocityForMaxBoost,
    });

    settledTimeScale = direction * normalTimeScale;
    const targetTimeScale = direction * scrollTimeScale;

    if (isGestureReleaseActive) {
      isGestureReleaseActive = false;
      setTimeScale(targetTimeScale);
    } else {
      tweenTimeScale(targetTimeScale, responseDuration);
    }

    settleMarquee.restart(true);
  };

  const hold = () => {
    isGestureReleaseActive = false;
    settleMarquee.pause(0);
    setTimeScale(0);
  };

  const seekByPixels = (deltaX: number, pixelsPerSecond: number) => {
    const duration = animation.duration();

    if (duration <= 0 || pixelsPerSecond <= 0) {
      return;
    }

    animation.time(
      gsap.utils.wrap(0, duration, animation.time() - deltaX / pixelsPerSecond),
      true,
    );
  };

  const releaseWithVelocity = ({
    direction,
    duration = gestureReleaseDuration,
    holdDuration = gestureReleaseHoldDuration,
    maxTimeScale: releaseMaxTimeScale = maxTimeScale,
    minTimeScale = minReleaseTimeScale,
    pixelsPerSecond,
    velocity,
  }: ReleaseVelocityOptions) => {
    const releaseTimeScale = getPointerTimeScale({
      maxTimeScale: releaseMaxTimeScale,
      minTimeScale,
      normalTimeScale,
      pixelsPerSecond,
      velocity,
    });

    settledTimeScale = direction * normalTimeScale;
    isGestureReleaseActive = true;
    settleMarquee.pause(0);
    timeScaleTween?.kill();

    const releaseState = {
      timeScale: direction * releaseTimeScale,
    };

    animation.timeScale(releaseState.timeScale);
    timeScaleTween = gsap
      .timeline({
        onComplete: () => {
          isGestureReleaseActive = false;
          animation.timeScale(settledTimeScale);
        },
      })
      .to({}, { duration: holdDuration })
      .to(releaseState, {
        duration,
        ease: 'sine.out',
        onUpdate: () => {
          animation.timeScale(releaseState.timeScale);
        },
        overwrite: true,
        timeScale: settledTimeScale,
      });
  };

  const settleToDirection = (direction: MarqueeDirection) => {
    isGestureReleaseActive = false;
    settledTimeScale = direction * normalTimeScale;
    settleMarquee.pause(0);
    tweenTimeScale(settledTimeScale, settleDuration);
  };

  return {
    applyVelocity,
    hold,
    kill: () => {
      settleMarquee.kill();
      timeScaleTween?.kill();
    },
    releaseWithVelocity,
    seekByPixels,
    settleToDirection,
  };
};

export const createScrollResponsiveMarquee = ({
  animation,
  controller,
  maxTimeScale,
  gestureReleaseDuration,
  gestureReleaseHoldDuration,
  minReleaseTimeScale,
  normalTimeScale,
  responseDuration,
  settleDelay,
  settleDuration,
  velocityForMaxBoost,
}: ScrollResponsiveMarqueeOptions) => {
  const timeScaleController =
    controller ??
    createMarqueeTimeScaleController({
      animation,
      gestureReleaseDuration,
      gestureReleaseHoldDuration,
      maxTimeScale,
      minReleaseTimeScale,
      normalTimeScale,
      responseDuration,
      settleDelay,
      settleDuration,
      velocityForMaxBoost,
    });

  const scrollTrigger = ScrollTrigger.create({
    end: 'max',
    onUpdate: (self) => {
      const scrollDirection = self.direction === -1 ? -1 : 1;
      timeScaleController.applyVelocity(
        scrollDirection,
        Math.abs(self.getVelocity()),
      );
    },
    start: 0,
  });

  return () => {
    scrollTrigger.kill();
    if (!controller) {
      timeScaleController.kill();
    }
  };
};

export const createGestureResponsiveMarquee = ({
  controller,
  getPixelsPerSecond,
  maxReleaseTimeScale,
  minReleaseTimeScale,
  target,
}: GestureResponsiveMarqueeOptions) => {
  let gestureAxis: GestureAxis = null;
  let gestureDirection: MarqueeDirection | null = null;
  let gestureLastSampleAt = 0;
  let gesturePositionSamples: GesturePositionSample[] = [];
  let gestureOffsetX = 0;
  let gestureVelocity = 0;
  let isDragging = false;

  const getReleaseGestureVelocity = () => {
    const now = performance.now();

    gesturePositionSamples = gesturePositionSamples.filter(
      (sample) => now - sample.time <= POINTER_RELEASE_SAMPLE_WINDOW,
    );

    const firstSample = gesturePositionSamples[0];
    const lastSample =
      gesturePositionSamples[gesturePositionSamples.length - 1];

    if (!firstSample || !lastSample || firstSample === lastSample) {
      return gestureVelocity;
    }

    const sampleDuration = (lastSample.time - firstSample.time) / 1000;

    if (sampleDuration <= 0) {
      return gestureVelocity;
    }

    return Math.abs(lastSample.x - firstSample.x) / sampleDuration;
  };

  const observer = Observer.create({
    allowClicks: true,
    dragMinimum: POINTER_MOVEMENT_MINIMUM,
    lockAxis: true,
    onChangeY: (self) => {
      if (
        gestureAxis === null &&
        Math.abs(self.deltaY) >= POINTER_MOVEMENT_MINIMUM &&
        Math.abs(self.deltaY) >
          Math.abs(self.deltaX) * POINTER_HORIZONTAL_INTENT_RATIO
      ) {
        gestureAxis = 'y';
      }
    },
    onChangeX: (self) => {
      if (gestureAxis === 'y') {
        return;
      }

      if (
        Math.abs(self.deltaX) < POINTER_MOVEMENT_MINIMUM ||
        Math.abs(self.deltaX) <=
          Math.abs(self.deltaY) * POINTER_HORIZONTAL_INTENT_RATIO
      ) {
        return;
      }

      gestureAxis = 'x';

      if (!isDragging) {
        isDragging = true;
        controller.hold();
      }

      gestureDirection = self.deltaX < 0 ? 1 : -1;
      const now = performance.now();
      const sampleDuration = (now - gestureLastSampleAt) / 1000;
      const sampleVelocity =
        sampleDuration > 0 ? Math.abs(self.deltaX) / sampleDuration : 0;

      gestureLastSampleAt = now;
      gestureOffsetX += self.deltaX;
      gestureVelocity = sampleVelocity || Math.abs(self.velocityX);
      gesturePositionSamples.push({ time: now, x: gestureOffsetX });
      gesturePositionSamples = gesturePositionSamples.filter(
        (sample) => now - sample.time <= POINTER_RELEASE_SAMPLE_WINDOW,
      );
      controller.seekByPixels(self.deltaX, getPixelsPerSecond());
    },
    onPress: () => {
      gestureAxis = null;
      gestureDirection = null;
      gestureLastSampleAt = performance.now();
      gestureOffsetX = 0;
      gestureVelocity = 0;
      gesturePositionSamples = [];
      isDragging = false;
    },
    onRelease: () => {
      isDragging = false;

      if (!gestureDirection) {
        return;
      }

      controller.releaseWithVelocity({
        direction: gestureDirection,
        maxTimeScale: maxReleaseTimeScale,
        minTimeScale: minReleaseTimeScale,
        pixelsPerSecond: getPixelsPerSecond(),
        velocity: getReleaseGestureVelocity(),
      });
    },
    target,
    tolerance: POINTER_MOVEMENT_MINIMUM,
    type: 'touch,pointer',
  });

  return () => {
    observer.kill();
  };
};
