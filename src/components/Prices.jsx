import PriceTutorCard from './PriceTutorCard';
import PriceTranslatorCard from './PriceTranslatorCard';
import pig from '../assets/icons/pig.svg';
import discount from '../assets/img/discount.gif';

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
    subheading: 'Индивидуальных занятия',
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
      <artile
        className="tablet: flex flex-col items-center
                        justify-center gap-[var(--xl)] tablet:flex-row
                        "
      >
        <div
          className="flex max-w-[var(--mobile-text-wrapper)] flex-col justify-start gap-[var(--m)] text-center
                        tablet:max-w-[var(--tablet-text-wrapper)] tablet:justify-between tablet:text-start
                        desktop:max-w-[var(--desktop-text-wrapper)]"
        >
          <p className="p-fade-in animate-p-fade-in">
            Подбери план и стоимость, которые наиболее подходят тебе.
          </p>
          <p className="p-fade-in animate-p-fade-in">
            Или свяжись со мной, и мы вместе определимся с программой.
          </p>
        </div>
        <img
          className="size-60"
          src={discount}
          alt="Discount"
        />
      </artile>
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
          <div className="flex flex-col flex-wrap items-center justify-center gap-[var(--l)] text-body tablet:min-w-[610px] tablet:flex-row">
            <div
              className="p-fade-in absolute right-0 top-0 hidden animate-icon-fade-in-right
                          tablet:right-12 tablet:top-[520px] tablet:block
                          desktop:-bottom-32 desktop:right-0 desktop:top-auto"
            >
              <img
                className="size-16
                        tablet:size-24"
                src={pig}
                alt="Discount"
              />
            </div>
            {tutorCardData.map((item) => (
              <PriceTutorCard
                key={item.heading}
                {...item}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-[var(--m)] tablet:gap-[var(--l)]">
          <h3 className="text-center text-body-bold uppercase tablet:text-heading-s">
            Переводы
          </h3>
          <div className="flex flex-col flex-wrap items-center justify-center gap-[var(--l)] text-body tablet:min-w-[610px] tablet:flex-row">
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
