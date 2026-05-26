import Image from 'next/image';
import LessonPlanCard from './lesson-plan-card';
import PricingSaleBadge from './pricing-sale-badge';
import TranslationRateCard from './translation-rate-card';
import ScrollCardReveal from '../../shared/ui/scroll-card-reveal/scroll-card-reveal';
import pricingImage from '../../assets/img/prices/prices.png';
import { clsx } from 'clsx';
import styles from './pricing.module.css';

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

const Pricing = () => {
  return (
    <section
      id="pricing"
      className={clsx('section', styles.pricing)}
    >
      <h2 className={clsx('title', styles.title)}>Выбери свой план</h2>
      <article className={styles.intro}>
        <Image
          className={styles.image}
          src={pricingImage}
          alt="Pricing"
          quality={100}
          sizes="(min-width: 1921px) 368px, (max-width: 576px) 170px, 300px"
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
          <ScrollCardReveal className={clsx('gridCards', styles.cards)}>
            {tutorCardData.map((item) =>
              item.discount ? (
                <div
                  key={item.heading}
                  className={styles.discountCardFrame}
                >
                  <PricingSaleBadge />
                  <LessonPlanCard {...item} />
                </div>
              ) : (
                <LessonPlanCard
                  key={item.heading}
                  {...item}
                />
              ),
            )}
          </ScrollCardReveal>
        </div>
        <div className={clsx('stack', styles.group)}>
          <h3 className={styles.subtitle}>Переводы</h3>
          <ScrollCardReveal className={clsx('gridCards', styles.cards)}>
            {translatorCardData.map((item) => (
              <TranslationRateCard
                key={item.heading}
                {...item}
              />
            ))}
          </ScrollCardReveal>
        </div>
      </article>
    </section>
  );
};

export default Pricing;
