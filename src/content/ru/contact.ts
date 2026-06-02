type ContactActionId = 'telegram' | 'email';

export type ContactMapMarker = {
  lat: number;
  lng: number;
  label: string;
  size?: number;
  pulse?: boolean;
  color?: string;
};

type ContactAction = {
  id: ContactActionId;
  ariaLabel: string;
  text: string;
  link: string;
  type: 'primary' | 'secondary';
};

const contactMapMarkerColors = [
  'var(--primary-30)',
  'var(--primary-10)',
  'var(--primary-50)',
  'var(--primary-20)',
  'var(--primary-40)',
];

export const contactContent = {
  title: 'Готов начать сотрудничество?',
  mapText:
    'Клиенты по всему миру обращаются ко мне, когда важны ответственность, профессионализм и индивидуальный подход с учетом их целей.',
  mapAriaLabel: 'Карта городов онлайн-занятий и переводческих проектов',
  subtitle: 'Свяжись со мной',
  actions: [
    {
      id: 'telegram',
      ariaLabel: 'Telegram',
      text: 'Telegram',
      link: 'https://t.me/sue_onlineenglish',
      type: 'primary',
    },
    {
      id: 'email',
      ariaLabel: 'Email',
      text: 'Email',
      link: 'mailto:karimovaalsu@yahoo.com',
      type: 'secondary',
    },
  ] satisfies ContactAction[],
  mapMarkers: [
    { lat: 55.7961, lng: 49.1064, label: 'Казань, Россия', size: 0.8 },
    { lat: 55.7558, lng: 37.6173, label: 'Москва, Россия', size: 0.8 },
    { lat: 40.1885, lng: 29.061, label: 'Бурса, Турция', size: 0.8 },
    { lat: 36.8969, lng: 30.7133, label: 'Анталья, Турция', size: 0.8 },
    { lat: 19.4326, lng: -99.1332, label: 'Мехико, Мексика', size: 0.8 },
    { lat: 47.6062, lng: -122.3321, label: 'Сиэтл, США', size: 0.8 },
    { lat: 27.6648, lng: -81.5158, label: 'Флорида, США', size: 0.8 },
    { lat: -8.65, lng: 115.2167, label: 'Бали, Индонезия', size: 0.8 },
    { lat: 7.8804, lng: 98.3923, label: 'Пхукет, Таиланд', size: 0.8 },
    { lat: 25.2048, lng: 55.2708, label: 'Дубай, ОАЭ', size: 0.8 },
    { lat: 25.2854, lng: 51.531, label: 'Доха, Катар', size: 0.8 },
  ].map((marker, index) => ({
    ...marker,
    color: contactMapMarkerColors[index % contactMapMarkerColors.length],
  })) satisfies ContactMapMarker[],
};
