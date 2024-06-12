import PriceTutorCard from './PriceTutorCard';
import PriceTranslatorCard from './PriceTranslatorCard';
import prices from '../assets/img/prices.png';

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
    price: 2000,
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
      className="my-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]
                tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--xl)] tablet:px-[var(--xl)]
                desktop:max-w-[var(--container-desktop)] desktop:px-[var(--2xl)]"
    >
      <h2
        className="text-heading-s
                    tablet:text-heading-m
                    desktop:text-heading-l"
      >
        Выбери свой план
      </h2>
      <article
        className="tablet: flex flex-col items-center justify-center gap-[var(--l)]
                  tablet:gap-[var(--xl)]
                  desktop:w-full desktop:flex-row desktop:justify-between"
      >
        <img
          className="ml-8 h-[var(--img-size-mobile)]
                     tablet:ml-16 tablet:h-[var(--img-size-tablet)]"
          src={prices}
          alt="Discount"
        />
        <div
          className="flex max-w-[var(--mobile-text-wrapper)] flex-col justify-start gap-[var(--m)] text-start
                        tablet:max-w-[var(--tablet-text-wrapper)] tablet:justify-between tablet:gap-[var(--s)]
                        desktop:max-w-[var(--desktop-text-wrapper)]"
        >
          <p className="p-fade-in animate-p-fade-in">
            Подбери план и стоимость, которые наиболее подходят тебе.
          </p>
          <p className="p-fade-in animate-p-fade-in">
            Или свяжись со мной, и мы вместе определимся с программой.
          </p>
        </div>
      </article>
      <article
        className="flex flex-col items-center gap-[var(--xl)]
                        desktop:gap-[var(--2xl)]"
      >
        <div
          className="relative flex flex-col items-center gap-[var(--m)]
                        tablet:gap-[var(--l)]"
        >
          <h3
            className="max-w-[var(--mobile-text-wrapper)] text-center text-body-bold uppercase
                        tablet:max-w-[var(--tablet-text-wrapper)] tablet:text-heading-s
                        desktop:max-w-[var(--desktop-text-wrapper)]"
          >
            Индивидуальные занятия на платформе Zoom
          </h3>
          <div
            className="flex flex-col items-center justify-center gap-[var(--l)] text-body
                       tablet:flex-row tablet:flex-wrap tablet:gap-[var(--xl)]"
          >
            {tutorCardData.map((item) => (
              <PriceTutorCard
                key={item.heading}
                {...item}
              />
            ))}
          </div>
        </div>
        <div
          className="flex flex-col items-center gap-[var(--m)]
                     tablet:gap-[var(--l)]"
        >
          <h3
            className="text-center text-body-bold uppercase
                       tablet:text-heading-s"
          >
            Переводы
          </h3>
          <div
            className="flex flex-col items-center justify-center gap-[var(--l)] text-body
                       tablet:flex-row tablet:flex-wrap tablet:gap-[var(--xl)]"
          >
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
