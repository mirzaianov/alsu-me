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
const DEFAULT_GESTURE_RELEASE_COAST_DURATION = 0.18;
const DEFAULT_GESTURE_RELEASE_DECAY_DURATION = 1.15;
const DEFAULT_GESTURE_RELEASE_DECAY_STRENGTH = 1.55;
const DEFAULT_MIN_GESTURE_RELEASE_TIME_SCALE = MARQUEE_NORMAL_TIME_SCALE;
const POINTER_RELEASE_SAMPLE_WINDOW = 240;
const REVERSE_LOOP_OFFSET_MULTIPLIER = 100;

type ScrollResponsiveMarqueeOptions = {
  animation: gsap.core.Animation;
  controller?: MarqueeTimeScaleController;
  gestureReleaseCoastDuration?: number;
  gestureReleaseDecayDuration?: number;
  gestureReleaseDecayStrength?: number;
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

type ReleaseVelocityOptions = {
  coastDuration?: number;
  decayDuration?: number;
  decayStrength?: number;
  direction: MarqueeDirection;
  maxTimeScale?: number;
  minTimeScale?: number;
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

  return gsap.utils.clamp(
    Math.max(normalTimeScale, minTimeScale),
    maxTimeScale,
    Math.abs(velocity) / pixelsPerSecond,
  );
};

const getExponentialDecayRatio = (progress: number, strength: number) => {
  const safeStrength = Math.max(strength, 0.01);
  const decay = Math.exp(-safeStrength * progress);
  const endDecay = Math.exp(-safeStrength);

  return (decay - endDecay) / (1 - endDecay);
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
  gestureReleaseCoastDuration = DEFAULT_GESTURE_RELEASE_COAST_DURATION,
  gestureReleaseDecayDuration = DEFAULT_GESTURE_RELEASE_DECAY_DURATION,
  gestureReleaseDecayStrength = DEFAULT_GESTURE_RELEASE_DECAY_STRENGTH,
  maxTimeScale = DEFAULT_MAX_SCROLL_MARQUEE_TIME_SCALE,
  minReleaseTimeScale = DEFAULT_MIN_GESTURE_RELEASE_TIME_SCALE,
  normalTimeScale = MARQUEE_NORMAL_TIME_SCALE,
  responseDuration = DEFAULT_SCROLL_RESPONSE_DURATION,
  settleDelay = DEFAULT_SETTLE_DELAY,
  settleDuration = DEFAULT_SETTLE_DURATION,
  velocityForMaxBoost = DEFAULT_SCROLL_VELOCITY_FOR_MAX_BOOST,
}: Omit<ScrollResponsiveMarqueeOptions, 'controller'>) => {
  let settledTimeScale = normalTimeScale;
  let timeScaleTween: gsap.core.Animation | null = null;

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
    coastDuration = gestureReleaseCoastDuration,
    decayDuration = gestureReleaseDecayDuration,
    decayStrength = gestureReleaseDecayStrength,
    direction,
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
    settleMarquee.pause(0);
    timeScaleTween?.kill();

    animation.timeScale(direction * releaseTimeScale);

    const releaseState = { progress: 0 };
    timeScaleTween = gsap
      .timeline({
        onComplete: () => {
          animation.timeScale(settledTimeScale);
        },
      })
      .to(
        {},
        {
          duration: coastDuration,
        },
      )
      .to(releaseState, {
        duration: decayDuration,
        ease: 'none',
        onUpdate: () => {
          const decayRatio = getExponentialDecayRatio(
            releaseState.progress,
            decayStrength,
          );
          const currentTimeScale =
            normalTimeScale + (releaseTimeScale - normalTimeScale) * decayRatio;

          animation.timeScale(direction * currentTimeScale);
        },
        progress: 1,
      });
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
  gestureReleaseCoastDuration,
  gestureReleaseDecayDuration,
  gestureReleaseDecayStrength,
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
      gestureReleaseCoastDuration,
      gestureReleaseDecayDuration,
      gestureReleaseDecayStrength,
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
  let gestureDirection: MarqueeDirection | null = null;
  let gestureLastSampleAt = 0;
  let gestureVelocitySamples: { time: number; velocity: number }[] = [];
  let gestureVelocity = 0;
  let isDragging = false;

  const getRecentGestureVelocity = () => {
    const now = Date.now();

    gestureVelocitySamples = gestureVelocitySamples.filter(
      (sample) => now - sample.time <= POINTER_RELEASE_SAMPLE_WINDOW,
    );

    if (gestureVelocitySamples.length === 0) {
      return gestureVelocity;
    }

    return (
      gestureVelocitySamples.reduce(
        (totalVelocity, sample) => totalVelocity + sample.velocity,
        0,
      ) / gestureVelocitySamples.length
    );
  };

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
      const now = Date.now();
      const sampleDuration = (now - gestureLastSampleAt) / 1000;
      const sampleVelocity =
        sampleDuration > 0 ? Math.abs(self.deltaX) / sampleDuration : 0;

      gestureLastSampleAt = now;
      gestureVelocity = Math.max(Math.abs(self.velocityX), sampleVelocity);
      gestureVelocitySamples.push({ time: now, velocity: gestureVelocity });
      gestureVelocitySamples = gestureVelocitySamples.filter(
        (sample) => now - sample.time <= POINTER_RELEASE_SAMPLE_WINDOW,
      );
      controller.seekByPixels(self.deltaX, getPixelsPerSecond());
    },
    onPress: () => {
      gestureDirection = null;
      gestureLastSampleAt = Date.now();
      gestureVelocity = 0;
      gestureVelocitySamples = [];
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
        velocity: getRecentGestureVelocity(),
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
