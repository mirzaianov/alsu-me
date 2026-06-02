import hand from '../../assets/icons/hand.svg';
import akulchev from '../../assets/icons/logos/logo-akulchev.svg';
import amis from '../../assets/icons/logos/logo-amis.svg';
import bendix from '../../assets/icons/logos/logo-bendix.svg';
import inn from '../../assets/icons/logos/logo-inn.svg';
import ischi from '../../assets/icons/logos/logo-ischi.svg';
import kamaz from '../../assets/icons/logos/logo-kamaz.svg';
import knorr from '../../assets/icons/logos/logo-knorr.svg';
import tempo from '../../assets/icons/logos/logo-tempo.svg';
import type { BadgeContent, ImageContent } from '../types';
import { primaryBookingAction } from './common';

export const heroIntroContent = {
  headingStart: 'В поисках идеального',
  rotatingWords: ['преподавателя', 'переводчика', 'преподавателя'],
  headingEnd: 'английского?',
  greetingPrefix: 'Привет!\u00a0',
  greetingLine: 'Меня зовут Алсу',
  notes: [
    {
      id: 'teacher',
      text: 'Научу тебя понимать и говорить на английском языке, подобрав индивидуальную программу',
      type: 'translator',
    },
    {
      id: 'translator',
      text: 'Помогу твоему бизнесу с устным и письменным переводом, тренингом сотрудников',
    },
  ],
};

export const heroSummaryContent = {
  stats: [
    {
      quantity: '16+',
      text: 'лет опыта',
    },
    {
      quantity: '4+',
      text: 'года работы в США',
    },
  ],
  slidingStats: [
    {
      quantity: '200+',
      text: 'довольных учеников',
    },
    {
      quantity: '50+',
      text: 'успешных кейсов',
    },
    {
      quantity: '200+',
      text: 'довольных учеников',
    },
  ],
  greetingBadge: {
    alt: 'The hand icon with wavy animation',
    text: 'Hi',
    icon: hand,
    isReversed: true,
    isAnimated: true,
    size: 'large',
  } satisfies BadgeContent,
};

export const heroCtaContent = {
  mobile: {
    prefix: 'Запишись на',
    highlight: 'бесплатное',
    suffix: 'занятие',
  },
  desktop: {
    prefix: 'Запишись на',
    highlight: 'бесплатное',
    suffix: 'пробное занятие',
  },
  action: primaryBookingAction,
};

export const clientLogoContent = [
  {
    alt: 'Камский автомобильный завод ПАО «КАМАЗ»',
    src: kamaz,
  },
  {
    alt: 'Knorr-Bremse AG',
    src: knorr,
  },
  {
    alt: 'Bendix Commercial Vehicle Systems',
    src: bendix,
  },
  {
    alt: 'Amis Group',
    src: amis,
  },
  {
    alt: 'Charles Ischi AG',
    src: ischi,
  },
  {
    alt: 'Holiday Inn Hotels',
    src: inn,
  },
  {
    alt: 'Акульчев',
    src: akulchev,
  },
  {
    alt: 'Камский металлургический комбинат «ТЭМПО»',
    src: tempo,
  },
] satisfies ImageContent[];
