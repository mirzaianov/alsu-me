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
    { lat: 54.7388, lng: 55.9721, label: 'Уфа, Россия', size: 0.8 },
    { lat: 55.7961, lng: 49.1064, label: 'Казань, Россия', size: 0.8 },
    {
      lat: 55.7436,
      lng: 52.3958,
      label: 'Набережные Челны, Россия',
      size: 0.8,
    },
    { lat: 55.7558, lng: 37.6173, label: 'Москва, Россия', size: 0.8 },
    { lat: 59.9311, lng: 30.3609, label: 'Санкт-Петербург, Россия', size: 0.8 },
    { lat: 47.6062, lng: -122.3321, label: 'Сиэтл, США', size: 0.8 },
    { lat: 25.7617, lng: -80.1918, label: 'Майами, США', size: 0.8 },
    { lat: 19.4326, lng: -99.1332, label: 'Мехико, Мексика', size: 0.8 },
    { lat: 41.0082, lng: 28.9784, label: 'Стамбул, Турция', size: 0.8 },
    { lat: 40.1885, lng: 29.061, label: 'Бурса, Турция', size: 0.8 },
    { lat: 41.7151, lng: 44.8271, label: 'Тбилиси, Грузия', size: 0.8 },
    { lat: 41.6168, lng: 41.6367, label: 'Батуми, Грузия', size: 0.8 },
    { lat: 44.8125, lng: 20.4612, label: 'Белград, Сербия', size: 0.8 },
    { lat: 45.0355, lng: 38.9753, label: 'Краснодар, Россия', size: 0.8 },
    { lat: 25.2048, lng: 55.2708, label: 'Дубай, ОАЭ', size: 0.8 },
    { lat: 32.8872, lng: 13.1913, label: 'Триполи, Ливия', size: 0.8 },
    { lat: 56.8527, lng: 53.2115, label: 'Ижевск, Россия', size: 0.8 },
  ].map((marker, index) => ({
    ...marker,
    color: contactMapMarkerColors[index % contactMapMarkerColors.length],
  })) satisfies ContactMapMarker[],
};
