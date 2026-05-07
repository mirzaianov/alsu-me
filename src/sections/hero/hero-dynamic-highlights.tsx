'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ProfileSummary from './profile-summary';
import Introduction from './introduction';
import styles from './hero.module.css';

const highlightTiming = {
  swapDuration: 1.2,
  swapInterval: 6,
  firstSwapAt: 3,
} as const;
const highlightSchedule = {
  loopDuration: highlightTiming.swapInterval * 2,
  toTranslatorAt: highlightTiming.firstSwapAt,
  toTeacherAt: highlightTiming.firstSwapAt + highlightTiming.swapInterval,
} as const;
const highlightSwap = {
  duration: highlightTiming.swapDuration,
  ease: 'back.inOut(1.35)',
} as const;
const highlightSwapMidpoint = highlightSwap.duration / 2;
const noteHiddenRotationX = -180;
const noteVisibleRotationX = 0;
const noteFullRotationX = -360;

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
const wordSlideBounceEase = createTimingEase([
  { progress: 0, value: 0 }, // Current word position.
  { progress: 0.23, value: -0.055 }, // Higher, slower upward recoil.
  { progress: 0.38, value: 0.07 }, // Slow turn back down.
  { ease: easeInTravel, progress: 0.78, value: 1 }, // Accelerated downward slide into the target.
  { progress: 0.835, value: 1.055 }, // First downward landing rebound.
  { progress: 0.89, value: 0.985 }, // Pullback before the target.
  { progress: 0.945, value: 1.028 }, // Smaller second downward rebound.
  { progress: 1, value: 1 }, // Final settled position.
]);

gsap.registerPlugin(useGSAP);

const HeroDynamicHighlights = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const wordTrack = root.querySelector<HTMLElement>(
        '[data-hero-word-track]',
      );
      const statTrack = root.querySelector<HTMLElement>(
        '[data-hero-stat-track]',
      );
      const teacherNote = root.querySelector<HTMLElement>(
        '[data-hero-note="teacher"]',
      );
      const translatorNote = root.querySelector<HTMLElement>(
        '[data-hero-note="translator"]',
      );

      if (!wordTrack || !statTrack || !teacherNote || !translatorNote) {
        return;
      }

      const media = gsap.matchMedia();

      media.add(
        {
          isMobile: '(max-width: 576px)',
          isTablet: '(min-width: 577px) and (max-width: 1060px)',
          isDesktop: '(min-width: 1061px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            reduceMotion: boolean;
          };

          const wordItems = gsap.utils.toArray<HTMLElement>(wordTrack.children);
          const statItems = gsap.utils.toArray<HTMLElement>(statTrack.children);

          const initialWord = wordItems[2];
          const translatorWord = wordItems[1];
          const resetWord = wordItems[0];
          const initialStat = statItems[2];
          const translatorStat = statItems[1];
          const resetStat = statItems[0];

          if (
            reduceMotion ||
            !initialWord ||
            !translatorWord ||
            !resetWord ||
            !initialStat ||
            !translatorStat ||
            !resetStat
          ) {
            return;
          }

          const initialWordY = -initialWord.offsetTop;
          const translatorWordY = -translatorWord.offsetTop;
          const resetWordY = -resetWord.offsetTop;
          const initialStatY = -initialStat.offsetTop;
          const translatorStatY = -translatorStat.offsetTop;
          const resetStatY = -resetStat.offsetTop;

          gsap.set(wordTrack, { y: initialWordY });
          gsap.set(statTrack, { y: initialStatY });
          gsap.set(teacherNote, {
            autoAlpha: 1,
            rotationX: noteVisibleRotationX,
            transformPerspective: 1000,
            zIndex: 2,
          });
          gsap.set(translatorNote, {
            autoAlpha: 0,
            rotationX: noteHiddenRotationX,
            transformPerspective: 1000,
            zIndex: 1,
          });

          const timeline = gsap.timeline({
            repeat: -1,
            defaults: {
              duration: highlightSwap.duration,
              ease: highlightSwap.ease,
              overwrite: 'auto',
            },
          });

          timeline.set(wordTrack, { y: initialWordY }, 0);
          timeline.set(statTrack, { y: initialStatY }, 0);

          const addSynchronizedSwap = ({
            label,
            at,
            incomingNote,
            outgoingNote,
            statY,
            wordY,
          }: {
            label: string;
            at: number;
            incomingNote: HTMLElement;
            outgoingNote: HTMLElement;
            statY: number;
            wordY: number;
          }) => {
            timeline
              .addLabel(label, at)
              .set(
                incomingNote,
                {
                  autoAlpha: 1,
                  rotationX: noteHiddenRotationX,
                  transformPerspective: 1000,
                  zIndex: 1,
                },
                label,
              )
              .set(
                outgoingNote,
                {
                  autoAlpha: 1,
                  rotationX: noteVisibleRotationX,
                  transformPerspective: 1000,
                  zIndex: 2,
                },
                label,
              )
              .to(wordTrack, { ease: wordSlideBounceEase, y: wordY }, label)
              .to(statTrack, { y: statY }, label)
              .to(
                outgoingNote,
                {
                  rotationX: noteHiddenRotationX,
                },
                label,
              )
              .to(
                incomingNote,
                {
                  autoAlpha: 1,
                  rotationX: noteFullRotationX,
                },
                label,
              )
              .set(
                incomingNote,
                {
                  zIndex: 2,
                },
                `${label}+=${highlightSwapMidpoint}`,
              )
              .set(
                outgoingNote,
                {
                  zIndex: 1,
                },
                `${label}+=${highlightSwapMidpoint}`,
              )
              .set(
                outgoingNote,
                {
                  autoAlpha: 0,
                  rotationX: noteHiddenRotationX,
                  zIndex: 1,
                },
                `${label}+=${highlightSwap.duration}`,
              )
              .set(
                incomingNote,
                {
                  rotationX: noteVisibleRotationX,
                  zIndex: 2,
                },
                `${label}+=${highlightSwap.duration}`,
              );
          };

          timeline.to(
            {},
            { duration: highlightSchedule.loopDuration, ease: 'none' },
            0,
          );

          addSynchronizedSwap({
            label: 'toTranslator',
            at: highlightSchedule.toTranslatorAt,
            incomingNote: translatorNote,
            outgoingNote: teacherNote,
            statY: translatorStatY,
            wordY: translatorWordY,
          });

          addSynchronizedSwap({
            label: 'toTeacher',
            at: highlightSchedule.toTeacherAt,
            incomingNote: teacherNote,
            outgoingNote: translatorNote,
            statY: resetStatY,
            wordY: resetWordY,
          });
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
    <article
      ref={rootRef}
      className={styles.content}
    >
      <ProfileSummary />
      <Introduction />
    </article>
  );
};

export default HeroDynamicHighlights;
