import services from '../../assets/img/services/services.png';
import translator from '../../assets/img/services/translator.png';
import tutor from '../../assets/img/services/tutor.png';
import uk from '../../assets/icons/uk.svg';
import usa from '../../assets/icons/usa.svg';
import type { BadgeContent, ImageContent, ServiceCardContent } from '../types';

const usaBadgeAlt = 'The flag of the United States of America';
const ukBadgeAlt = 'The flag of the United Kingdom';

export const servicesContent = {
  title: 'Что я предлагаю',
  introImage: {
    src: services,
    alt: 'Services',
  } satisfies ImageContent,
  introParagraphs: [
    {
      text: 'В своих занятиях я делаю акцент на развитии разговорных навыков и понимании аутентичной речи.',
    },
    {
      text: 'Моя методика преподавания основана на индивидуальном подходе к каждому ученику. Я стремлюсь создать комфортную и дружелюбную атмосферу, где можно и нужно свободно выражать свои мысли на английском и развивать навыки общения.',
    },
    {
      text: 'Важный момент: обучаю только взрослых с 16 лет. Не готовлю к ОГЭ и ЕГЭ.',
      emphasis: true,
    },
    {
      text: 'На протяжении нескольких лет являюсь надежным партнером в качестве переводчика компаний России, Европы и США. Помогу с сопровождением инсталляции оборудования, тренингов, переговоров, а также презентаций продукта.',
    },
  ],
  badgeGroups: [
    {
      title: 'Прокачаю все 4 навыка',
      items: [
        {
          alt: usaBadgeAlt,
          text: 'Speaking',
          icon: usa,
          type: 'secondary-15',
        },
        {
          alt: ukBadgeAlt,
          text: 'Writing',
          icon: uk,
          type: 'secondary-25',
        },
        {
          alt: ukBadgeAlt,
          text: 'Listening',
          icon: uk,
          type: 'secondary-45',
        },
        {
          alt: usaBadgeAlt,
          text: 'Reading',
          icon: usa,
          type: 'secondary-55',
        },
      ] satisfies BadgeContent[],
    },
    {
      title: 'Подготовлю к любым целям',
      items: [
        {
          alt: usaBadgeAlt,
          text: 'Travel',
          icon: usa,
          type: 'secondary-15',
        },
        {
          alt: ukBadgeAlt,
          text: 'General',
          icon: uk,
          type: 'secondary-25',
        },
        {
          alt: ukBadgeAlt,
          text: 'Business',
          icon: uk,
          type: 'secondary-45',
        },
        {
          alt: usaBadgeAlt,
          text: 'Education',
          icon: usa,
          type: 'secondary-55',
        },
      ] satisfies BadgeContent[],
    },
  ],
  servicesTitle: 'Базовые услуги',
  serviceCards: [
    {
      src: tutor,
      alt: 'Преподаватель',
      subheading: 'Индивидуальные занятия на платформе Zoom',
      description: [
        'Программа под запрос',
        'Прокачка всех 4 навыков',
        'Домашнее задание с подробным разбором',
      ],
    },
    {
      src: translator,
      alt: 'Переводчик',
      subheading: 'Переводы',
      description: [
        'Письменные',
        'Устные',
        'Английский - Русский',
        'Русский - Английский',
      ],
    },
  ] satisfies ServiceCardContent[],
};
