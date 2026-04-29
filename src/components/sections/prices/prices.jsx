import PriceTutorCard from './price-tutor-card';
import PriceTranslatorCard from './price-translator-card';
import prices from '../../../assets/img/prices/prices.png';
import sale from '../../../assets/img/prices/sale.png';
import { clsx } from 'clsx';
import styles from './prices.module.css';

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
    price: 2500,
    description: ['80% занятия - практика', 'Современные материалы'],
  },
  {
    quantity: 5,
    discount: 1250,
    heading: '5',
    subheading: 'Индивидуальных занятий',
    duration: `Продолжительность: 60 мин`,
    price: 2500,
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
    subheading: '1000 знаков без пробелов',
    price: 1500,
    description: ['Английский - Русский', 'Русский - Английский'],
    note: 'Стоимость и сроки - после ознакомления с материалом',
  },
];

const Prices = () => {
  return (
    <section
      id="prices"
      className={clsx('section', styles.prices)}
    >
      <div className={styles.sale}>
        <img
          className={styles.saleImage}
          src={sale}
          alt="Sale"
          loading="lazy"
        />
      </div>
      <h2 className={clsx('title', styles.title)}>Выбери свой план</h2>
      <article className={styles.intro}>
        <img
          className={styles.image}
          src={prices}
          alt="Prices"
          loading="lazy"
        />
        <div className={clsx('stack', styles.copy)}>
          <p>Подбери план и стоимость, которые наиболее подходят тебе.</p>
          <p>Или свяжись со мной, и мы вместе определимся с программой.</p>
        </div>
      </article>
      <article className={styles.groups}>
        <div className={clsx('stack', styles.group)}>
          <h3 className={styles.subtitle}>
            Индивидуальные занятия на платформе Zoom
          </h3>
          <div className={clsx('gridCards', styles.cards)}>
            {tutorCardData.map((item) => (
              <PriceTutorCard
                key={item.heading}
                {...item}
              />
            ))}
          </div>
        </div>
        <div className={clsx('stack', styles.group)}>
          <h3 className={styles.subtitle}>Переводы</h3>
          <div className={clsx('gridCards', styles.cards)}>
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
