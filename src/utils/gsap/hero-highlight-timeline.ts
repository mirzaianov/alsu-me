import gsap from 'gsap';
import {
  noteFlipBounceEase,
  statSlideBounceEase,
  wordSlideBounceEase,
} from './hero-highlight-easing';

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

const noteHiddenRotationX = -180;
const noteVisibleRotationX = 0;
const noteFullRotationX = -360;

// Handoff waits until the eased flip is visually near edge-on, not half time.
const noteFlipHandoffProgress = 0.63;
const noteFlipHandoffAt = highlightSwap.duration * noteFlipHandoffProgress;

export const heroHighlightMediaQueries = {
  isMobile: '(max-width: 576px)',
  isTablet: '(min-width: 577px) and (max-width: 1160px)',
  isDesktop: '(min-width: 1161px)',
  reduceMotion: '(prefers-reduced-motion: reduce)',
} as const;

type HeroHighlightTimelineOptions = {
  reduceMotion: boolean;
  root: HTMLElement;
};

type SynchronizedSwapConfig = {
  at: number;
  incomingNote: HTMLElement;
  label: string;
  outgoingNote: HTMLElement;
  statY: number;
  wordY: number;
};

const getHeroHighlightElements = (root: HTMLElement) => {
  const wordTrack = root.querySelector<HTMLElement>('[data-hero-word-track]');
  const statTrack = root.querySelector<HTMLElement>('[data-hero-stat-track]');
  const teacherNote = root.querySelector<HTMLElement>(
    '[data-hero-note="teacher"]',
  );
  const translatorNote = root.querySelector<HTMLElement>(
    '[data-hero-note="translator"]',
  );

  if (!wordTrack || !statTrack || !teacherNote || !translatorNote) {
    return;
  }

  return {
    statTrack,
    teacherNote,
    translatorNote,
    wordTrack,
  };
};

export const createHeroHighlightTimeline = ({
  reduceMotion,
  root,
}: HeroHighlightTimelineOptions) => {
  if (reduceMotion) {
    return;
  }

  const elements = getHeroHighlightElements(root);

  if (!elements) {
    return;
  }

  const { statTrack, teacherNote, translatorNote, wordTrack } = elements;
  const wordItems = gsap.utils.toArray<HTMLElement>(wordTrack.children);
  const statItems = gsap.utils.toArray<HTMLElement>(statTrack.children);

  const initialWord = wordItems[2];
  const translatorWord = wordItems[1];
  const resetWord = wordItems[0];
  const initialStat = statItems[2];
  const translatorStat = statItems[1];
  const resetStat = statItems[0];

  if (
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
  }: SynchronizedSwapConfig) => {
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
      .to(statTrack, { ease: statSlideBounceEase, y: statY }, label)
      .to(
        outgoingNote,
        {
          ease: noteFlipBounceEase,
          rotationX: noteHiddenRotationX,
        },
        label,
      )
      .to(
        incomingNote,
        {
          autoAlpha: 1,
          ease: noteFlipBounceEase,
          rotationX: noteFullRotationX,
        },
        label,
      )
      .set(
        incomingNote,
        {
          zIndex: 2,
        },
        `${label}+=${noteFlipHandoffAt}`,
      )
      .set(
        outgoingNote,
        {
          zIndex: 1,
        },
        `${label}+=${noteFlipHandoffAt}`,
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

  return timeline;
};
