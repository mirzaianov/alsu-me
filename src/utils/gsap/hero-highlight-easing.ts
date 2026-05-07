import gsap from 'gsap';

type TimingEasePoint = {
  ease?: (progress: number) => number;
  progress: number;
  value: number;
};

const easeInTravel = (progress: number) => progress * (0.3 + 0.7 * progress);

const createTimingEase = (points: readonly TimingEasePoint[]) => {
  return (rawProgress: number) => {
    const progress = gsap.utils.clamp(0, 1, rawProgress);
    const nextIndex = points.findIndex((point) => point.progress >= progress);

    if (nextIndex <= 0) {
      return points[0]?.value ?? 0;
    }

    const previousPoint = points[nextIndex - 1];
    const nextPoint = points[nextIndex];

    if (!previousPoint || !nextPoint) {
      return points[points.length - 1]?.value ?? 1;
    }

    const localProgress = gsap.utils.normalize(
      previousPoint.progress,
      nextPoint.progress,
      progress,
    );
    const easedProgress = nextPoint.ease
      ? nextPoint.ease(localProgress)
      : localProgress;

    return gsap.utils.interpolate(
      previousPoint.value,
      nextPoint.value,
      easedProgress,
    );
  };
};

// progress is normalized time in the 1.2s tween; value is normalized y progress.
// Negative values recoil before the start, values above 1 overshoot past the target.
export const wordSlideBounceEase = createTimingEase([
  { progress: 0, value: 0 }, // Current word position.
  { progress: 0.23, value: -0.055 }, // Higher, slower upward recoil.
  { progress: 0.38, value: 0.07 }, // Slow turn back down.
  { ease: easeInTravel, progress: 0.78, value: 1 }, // Accelerated downward slide into the target.
  { progress: 0.835, value: 1.055 }, // First downward landing rebound.
  { progress: 0.89, value: 0.985 }, // Pullback before the target.
  { progress: 0.945, value: 1.028 }, // Smaller second downward rebound.
  { progress: 1, value: 1 }, // Final settled position.
]);

// Stats follow the word timing, but use softer overshoots for the larger block.
export const statSlideBounceEase = createTimingEase([
  { progress: 0, value: 0 }, // Current stat position.
  { progress: 0.23, value: -0.035 }, // Softer upward recoil.
  { progress: 0.38, value: 0.05 }, // Slow turn back down.
  { ease: easeInTravel, progress: 0.78, value: 1 }, // Accelerated downward slide into the target.
  { progress: 0.835, value: 1.035 }, // First downward landing rebound.
  { progress: 0.89, value: 0.99 }, // Pullback before the target.
  { progress: 0.945, value: 1.018 }, // Smaller second downward rebound.
  { progress: 1, value: 1 }, // Final settled position.
]);

// Notes use the same timing shape, with smaller rotation rebounds.
export const noteFlipBounceEase = createTimingEase([
  { progress: 0, value: 0 }, // Current note rotation.
  { progress: 0.23, value: -0.065 }, // Stronger opposite tilt.
  { progress: 0.38, value: 0.085 }, // Turn back into the flip.
  { ease: easeInTravel, progress: 0.78, value: 1 }, // Accelerated flip into the target side.
  { progress: 0.835, value: 1.06 }, // First landing rebound.
  { progress: 0.89, value: 0.98 }, // Pullback before the target side.
  { progress: 0.945, value: 1.032 }, // Smaller second rebound.
  { progress: 1, value: 1 }, // Final settled rotation.
]);
