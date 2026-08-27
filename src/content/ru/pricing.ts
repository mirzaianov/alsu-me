import pricingImage from '../../assets/img/prices/prices.png';
import sale from '../../assets/img/prices/sale.png';
import type {
  ImageContent,
  LessonPlanContent,
  TranslationRateContent,
} from '../types';
import { primaryBookingAction } from './common';

export const pricingContent = {
  title: 'Выбери свой план',
  introImage: {
    src: pricingImage,
    alt: 'Pricing',
  } satisfies ImageContent,
  introParagraphs: [
    'Подбери план и стоимость, которые наиболее подходят тебе.',
    'Или свяжись со мной, и мы вместе определимся с программой.',
  ],
  tutorSubtitle: 'Индивидуальные занятия на платформе Zoom',
  translatorSubtitle: 'Переводы',
  saleBadgeImage: {
    src: sale,
    alt: 'Sale',
  } satisfies ImageContent,
  lessonPlanLabels: {
    freePrice: 'Бесплатно',
    cta: primaryBookingAction,
    popular: 'Популярно',
  },
  translationRateLabels: {
    cta: {
      ...primaryBookingAction,
      text: 'Заказать',
    },
  },
  lessonPlans: [
    {
      quantity: 0,
      discount: 0,
      heading: 'Пробное',
      subheading: 'Индивидуальное занятие',
      duration: 'Продолжительность: 20 мин',
      price: 0,
      description: ['Знакомимся', 'Определяем уровень'],
    },
    {
      quantity: 1,
      discount: 0,
      heading: '1',
      subheading: 'Индивидуальное занятие',
      duration: 'Продолжительность: 60 мин',
      price: 2500,
      description: ['80% занятия - практика', 'Современные материалы'],
    },
    {
      quantity: 5,
      discount: 1250,
      heading: '5',
      subheading: 'Индивидуальных занятий',
      duration: 'Продолжительность: 60 мин',
      price: 2500,
      description: ['80% занятия - практика', 'Современные материалы'],
    },
  ] satisfies LessonPlanContent[],
  translationRates: [
    {
      heading: 'Устный последовательный перевод',
      subheading: 'Продолжительность: 60 мин',
      price: 2500,
      description: ['Английский - Русский', 'Русский - Английский'],
      note: 'Минимальная оплата - 2 часа',
    },
    {
      heading: 'Письменный перевод',
      subheading: '1000 знаков без пробелов',
      price: 1500,
      description: ['Английский - Русский', 'Русский - Английский'],
      note: 'Стоимость и сроки - после ознакомления с материалом',
    },
  ] satisfies TranslationRateContent[],
};
