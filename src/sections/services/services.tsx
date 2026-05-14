import Image from 'next/image';
import ServiceCard from './service-card';
import Badge from '../../shared/ui/badge/badge';
import ScrollCardReveal from '../../shared/ui/scroll-card-reveal/scroll-card-reveal';
import tutor from '../../assets/img/services/tutor.png';
import translator from '../../assets/img/services/translator.png';
import uk from '../../assets/icons/uk.svg';
import usa from '../../assets/icons/usa.svg';
import services from '../../assets/img/services/services.png';
import { clsx } from 'clsx';
import styles from './services.module.css';

const serviceCardData = [
  {
    delay: 0,
    badgeOneText: 'General',
    badgeTwoText: 'Travel',
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
    delay: 0,
    badgeOneText: 'Education',
    badgeTwoText: 'Business',
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
];

const Services = () => {
  return (
    <section
      id="services"
      className={clsx('section', styles.services)}
    >
      <h2 className={clsx('title', styles.title)}>Что я предлагаю</h2>
      <article className={styles.intro}>
        <Image
          className={styles.image}
          src={services}
          alt="Services"
          quality={100}
          sizes="(max-width: 576px) 170px, 300px"
        />
        <div className={clsx('stack', styles.copy)}>
          <p>
            В своих занятиях я делаю акцент на развитии разговорных навыков и
            понимании аутентичной речи.
          </p>
          <p>
            Моя методика преподавания основана на индивидуальном подходе к
            каждому ученику. Я стремлюсь создать комфортную и дружелюбную
            атмосферу, где можно и нужно свободно выражать свои мысли на
            английском и развивать навыки общения.
          </p>
          <p className={styles.emphasis}>
            Важный момент: обучаю только взрослых с 16 лет. Не готовлю к ОГЭ и
            ЕГЭ.
          </p>
          <p>
            На протяжении нескольких лет являюсь надежным партнером в качестве
            переводчика компаний России, Европы и США. Помогу с сопровождением
            инсталляции оборудования, тренингов, переговоров, а также
            презентаций продукта.
          </p>
        </div>
      </article>
      <article className={styles.badgeGroups}>
        <div className={clsx('stack', styles.badgeGroup)}>
          <h3 className={styles.subtitle}>Прокачаю все 4 навыка</h3>
          <ScrollCardReveal
            as="ul"
            className={styles.badgeList}
          >
            <li className={styles.badgeItem1}>
              <Badge
                alt="The flag of the United States of America"
                text="Speaking"
                icon={usa}
                type="secondary-15"
              />
            </li>
            <li className={styles.badgeItem2}>
              <Badge
                alt="The flag of the United Kingdom"
                text="Writing"
                icon={uk}
                type="secondary-25"
              />
            </li>
            <li className={styles.badgeItem3}>
              <Badge
                alt="The flag of the United Kingdom"
                text="Listening"
                icon={uk}
                type="secondary-45"
              />
            </li>
            <li className={styles.badgeItem4}>
              <Badge
                alt="The flag of the United States of America"
                text="Reading"
                icon={usa}
                type="secondary-55"
              />
            </li>
          </ScrollCardReveal>
        </div>
        <div className={clsx('stack', styles.badgeGroupAlt)}>
          <h3 className={styles.subtitle}>Подготовлю к любым целям</h3>
          <ScrollCardReveal
            as="ul"
            className={styles.badgeList}
          >
            <li className={styles.badgeItem1}>
              <Badge
                alt="The flag of the United States of America"
                text="Travel"
                icon={usa}
                type="secondary-15"
              />
            </li>
            <li className={styles.badgeItem2}>
              <Badge
                alt="The flag of the United Kingdom"
                text="General"
                icon={uk}
                type="secondary-25"
              />
            </li>
            <li className={styles.badgeItem3}>
              <Badge
                alt="The flag of the United Kingdom"
                text="Business"
                icon={uk}
                type="secondary-45"
              />
            </li>
            <li className={styles.badgeItem4}>
              <Badge
                alt="The flag of the United States of America"
                text="Education"
                icon={usa}
                type="secondary-55"
              />
            </li>
          </ScrollCardReveal>
        </div>
      </article>
      <article className={clsx('stack', styles.servicesGroup)}>
        <h3 className={styles.subtitle}>Базовые услуги</h3>
        <ScrollCardReveal className={clsx('gridCards', styles.cards)}>
          {serviceCardData.map((item) => (
            <ServiceCard
              key={item.alt}
              {...item}
            />
          ))}
        </ScrollCardReveal>
      </article>
    </section>
  );
};

export default Services;
