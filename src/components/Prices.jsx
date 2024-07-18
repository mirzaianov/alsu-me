import PriceTutorCard from './PriceTutorCard';
import PriceTranslatorCard from './PriceTranslatorCard';
import prices from '../assets/img/prices/prices.png';
import sale from '../assets/img/prices/sale.png';

const tutorCardData = [
  {
    quantity: 0,
    discount: 0,
    heading: 'Пробное',
    subheading: 'Индивидуальное занятие',
    duration: `Продолжительность: 20 мин`,
    price: 0,
    description: ['Знакомимся', 'Определяем уровень'],
  },
  {
    quantity: 1,
    discount: 0,
    heading: '1',
    subheading: 'Индивидуальное занятие',
    duration: `Продолжительность: 60 мин`,
    price: 2000,
    description: ['80% занятия - практика', 'Современные материалы'],
  },
  {
    quantity: 5,
    discount: 500,
    heading: '5',
    subheading: 'Индивидуальных занятий',
    duration: `Продолжительность: 60 мин`,
    price: 2000,
    description: ['80% занятия - практика', 'Современные материалы'],
  },
];

const translatorCardData = [
  {
    heading: 'Устный последовательный перевод',
    subheading: `Продолжительность: 60 мин`,
    price: 2500,
    description: ['Английский - Русский', 'Русский - Английский'],
    note: 'Минимальная оплата - 2 часа',
  },
  {
    heading: 'Письменный перевод',
    subheading: '1800 знаков, включая пробелы',
    price: 2500,
    description: ['Английский - Русский', 'Русский - Английский'],
    note: 'Стоимость и сроки - после ознакомления с материалом',
  },
];

const Prices = () => {
  return (
    <section
      id="prices"
      className="relative my-[var(--mobile-y-margin)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)] tablet:my-[var(--tablet-y-margin)] tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--xl)] tablet:px-[var(--xl)] desktop:my-[var(--desktop-y-margin)] desktop:max-w-[var(--container-desktop)] desktop:gap-[var(--2xl)] desktop:px-[var(--3xl)]"
    >
      <div className="image-fade-in-right absolute right-0 top-0 z-10 hidden animate-image-fade-in-right desktop:-right-1/4 desktop:top-2/3 desktop:block">
        <img
          className="desktop:h-full"
          src={sale}
          alt="Sale"
          loading="lazy"
        />
      </div>
      <h2 className="text-balance text-heading-s tablet:text-heading-m desktop:text-heading-l">
        Выбери свой план
      </h2>
      <article className="tablet: flex flex-col items-center justify-center gap-[var(--l)] tablet:gap-[var(--xl)] desktop:w-full desktop:flex-row desktop:justify-between">
        <img
          className="ml-8 h-[var(--img-size-mobile)] tablet:ml-16 tablet:h-[var(--img-size-tablet)] desktop:h-auto desktop:w-4/12"
          src={prices}
          alt="Prices"
          loading="lazy"
        />
        <div className="flex max-w-[var(--mobile-text-wrapper)] flex-col justify-start gap-[var(--m)] text-start tablet:max-w-[var(--tablet-text-wrapper)] tablet:justify-between tablet:gap-[var(--s)] desktop:w-7/12 desktop:max-w-[var(--desktop-text-wrapper)]">
          <p className="p-fade-in animate-p-fade-in text-pretty">
            Подбери план и стоимость, которые наиболее подходят тебе.
          </p>
          <p className="p-fade-in animate-p-fade-in text-pretty">
            Или свяжись со мной, и мы вместе определимся с программой.
          </p>
          <p className="p-fade-in animate-p-fade-in text-pretty font-bold text-primary-30">
            * Цены актуальны до 01.01.2025
          </p>
        </div>
      </article>
      <article className="flex flex-col items-center gap-[var(--xl)] desktop:gap-[var(--2xl)]">
        <div className="relative flex flex-col items-center gap-[var(--m)] tablet:gap-[var(--l)] desktop:gap-[var(--xl)]">
          <h3 className="max-w-[var(--mobile-text-wrapper)] text-center text-body-bold uppercase tablet:max-w-[var(--tablet-text-wrapper)] tablet:text-heading-s desktop:max-w-[var(--desktop-text-wrapper)]">
            Индивидуальные занятия на платформе Zoom
          </h3>
          <div className="flex flex-col items-center justify-center gap-[var(--l)] text-body tablet:flex-row tablet:flex-wrap tablet:gap-[var(--xl)] desktop:gap-[var(--2xl)]">
            {tutorCardData.map((item) => (
              <PriceTutorCard
                key={item.heading}
                {...item}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-[var(--m)] tablet:gap-[var(--l)] desktop:gap-[var(--xl)]">
          <h3 className="text-center text-body-bold uppercase tablet:text-heading-s">
            Переводы
          </h3>
          <div className="flex flex-col items-center justify-center gap-[var(--l)] text-body tablet:flex-row tablet:flex-wrap tablet:gap-[var(--xl)] desktop:gap-[var(--2xl)]">
            {translatorCardData.map((item) => (
              <PriceTranslatorCard
                key={item.heading}
                {...item}
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Prices;
