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
const DEFAULT_GESTURE_RELEASE_DURATION = 1.4;
const REVERSE_LOOP_OFFSET_MULTIPLIER = 100;

type ScrollResponsiveMarqueeOptions = {
  animation: gsap.core.Animation;
  controller?: MarqueeTimeScaleController;
  gestureReleaseDuration?: number;
  maxTimeScale?: number;
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
  target: Element;
};

type MarqueeDirection = -1 | 1;

type ReleaseVelocityOptions = {
  direction: MarqueeDirection;
  duration?: number;
  maxTimeScale?: number;
  pixelsPerSecond: number;
  velocity: number;
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
  normalTimeScale,
  pixelsPerSecond,
  velocity,
}: {
  maxTimeScale: number;
  normalTimeScale: number;
  pixelsPerSecond: number;
  velocity: number;
}) => {
  if (pixelsPerSecond <= 0) {
    return normalTimeScale;
  }

  return gsap.utils.clamp(
    normalTimeScale,
    maxTimeScale,
    Math.abs(velocity) / pixelsPerSecond,
  );
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
  maxTimeScale = DEFAULT_MAX_SCROLL_MARQUEE_TIME_SCALE,
  normalTimeScale = MARQUEE_NORMAL_TIME_SCALE,
  responseDuration = DEFAULT_SCROLL_RESPONSE_DURATION,
  settleDelay = DEFAULT_SETTLE_DELAY,
  settleDuration = DEFAULT_SETTLE_DURATION,
  velocityForMaxBoost = DEFAULT_SCROLL_VELOCITY_FOR_MAX_BOOST,
}: Omit<ScrollResponsiveMarqueeOptions, 'controller'>) => {
  let settledTimeScale = normalTimeScale;
  let timeScaleTween: gsap.core.Tween | null = null;

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
    tweenTimeScale(direction * scrollTimeScale, responseDuration);
    settleMarquee.restart(true);
  };

  const hold = () => {
    settleMarquee.pause(0);
    timeScaleTween?.kill();
    timeScaleTween = null;
    animation.timeScale(0);
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
    maxTimeScale: releaseMaxTimeScale = maxTimeScale,
    pixelsPerSecond,
    velocity,
  }: ReleaseVelocityOptions) => {
    const releaseTimeScale = getPointerTimeScale({
      maxTimeScale: releaseMaxTimeScale,
      normalTimeScale,
      pixelsPerSecond,
      velocity,
    });

    settledTimeScale = direction * normalTimeScale;
    settleMarquee.pause(0);
    timeScaleTween?.kill();
    animation.timeScale(direction * releaseTimeScale);
    tweenTimeScale(settledTimeScale, duration, 'power2.inOut');
  };

  const settleToDirection = (direction: MarqueeDirection) => {
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
      maxTimeScale,
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
  target,
}: GestureResponsiveMarqueeOptions) => {
  let gestureDirection: MarqueeDirection | null = null;
  let gestureVelocity = 0;
  let isDragging = false;

  const observer = Observer.create({
    allowClicks: true,
    dragMinimum: POINTER_MOVEMENT_MINIMUM,
    lockAxis: true,
    onChangeX: (self) => {
      if (Math.abs(self.deltaX) < POINTER_MOVEMENT_MINIMUM) {
        return;
      }

      if (!isDragging) {
        isDragging = true;
        controller.hold();
      }

      gestureDirection = self.deltaX < 0 ? 1 : -1;
      gestureVelocity = Math.abs(self.velocityX);
      controller.seekByPixels(self.deltaX, getPixelsPerSecond());
    },
    onPress: () => {
      gestureDirection = null;
      gestureVelocity = 0;
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
        pixelsPerSecond: getPixelsPerSecond(),
        velocity: gestureVelocity,
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
