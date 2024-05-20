import PriceTutorCard from './PriceTutorCard';
import PriceTranslatorCard from './PriceTranslatorCard';

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
      className={`flex w-full max-w-[var(--container-mobile)] flex-col items-center justify-start gap-[var(--l)] px-[var(--s)] py-[var(--xl)]`}
    >
      <h2 className={`text-heading-s`}>Выбери свой план</h2>
      <article
        className={`flex flex-col justify-start gap-[var(--m)] text-center`}
      >
        <p>Подбери план и стоимость, которые наиболее подходят тебе.</p>
        <p>Или свяжись со мной, и мы вместе определимся с программой.</p>
      </article>
      <article className={`flex flex-col gap-[var(--l)]`}>
        <div className={`flex flex-col gap-[var(--m)]`}>
          <h3 className={`text-center text-body-bold-upper uppercase`}>
            Индивидуальные занятия на платформе Zoom
          </h3>
          <div className={`flex flex-col items-center gap-[var(--l)]`}>
            {tutorCardData.map((item) => (
              <PriceTutorCard
                key={item.heading}
                {...item}
              />
            ))}
          </div>
        </div>
        <div className={`flex flex-col items-center gap-[var(--m)]`}>
          <h3 className={`text-center text-body-bold-upper uppercase`}>
            Переводы
          </h3>
          <div className={`flex flex-col gap-[var(--l)]`}>
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
