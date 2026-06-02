import ielts from '../../assets/img/about/ielts.png';
import tesol from '../../assets/img/about/tesol.png';
import type { ActionContent, BadgeContent } from '../types';
import { primaryBookingAction } from './common';

export const aboutContent = {
  title: 'Обо мне',
  badges: {
    ielts: {
      alt: 'IELTS',
      icon: ielts,
      type: 'secondary-25',
      size: 'large',
    } satisfies BadgeContent,
    tesol: {
      alt: 'TESOL',
      icon: tesol,
      type: 'secondary-15',
      size: 'large',
    } satisfies BadgeContent,
  },
  paragraphs: [
    'Меня зовут Алсу Каримова, и я рада приветствовать тебя на своём сайте!',
    'Я дипломированный преподаватель и переводчик английского с опытом профессиональной деятельности более 16 лет.',
    'Уровень владения языком - advanced (C1) - подтвержден международным сертификатом IELTS. Также имею сертификат TESOL, выданный Arizona State University, который позволяет обучать языку в любой стране.',
    'Если ты хочешь начать изучение английского с нуля, улучшить свои навыки или же заказать устный / письменный перевод - то я с нетерпением жду возможности помочь тебе в этом!',
  ],
  action: {
    ...primaryBookingAction,
    ariaLabel: 'Записаться бесплатно',
    text: 'Записаться бесплатно',
  } satisfies ActionContent,
};
