import Image from 'next/image';
import ServiceCard from './service-card';
import Badge from '../../shared/ui/badge/badge';
import ScrollCardReveal from '../../shared/ui/scroll-card-reveal/scroll-card-reveal';
import { servicesContent } from '../../content/ru/services';
import { clsx } from 'clsx';
import styles from './services.module.css';

const badgeItemClassNames = [
  styles.badgeItem1,
  styles.badgeItem2,
  styles.badgeItem3,
  styles.badgeItem4,
];

const Services = () => {
  return (
    <section
      id="services"
      className={clsx('section', styles.services)}
    >
      <h2 className={clsx('title', styles.title)}>{servicesContent.title}</h2>
      <article className={styles.intro}>
        <Image
          className={styles.image}
          src={servicesContent.introImage.src}
          alt={servicesContent.introImage.alt}
          quality={100}
          sizes="(min-width: 1921px) 368px, (max-width: 576px) 170px, 300px"
        />
        <div className={clsx('stack', styles.copy)}>
          {servicesContent.introParagraphs.map((paragraph) => (
            <p
              className={paragraph.emphasis ? styles.emphasis : undefined}
              key={paragraph.text}
            >
              {paragraph.text}
            </p>
          ))}
        </div>
      </article>
      <article className={styles.badgeGroups}>
        {servicesContent.badgeGroups.map((group, groupIndex) => (
          <div
            className={clsx(
              'stack',
              groupIndex === 0 ? styles.badgeGroup : styles.badgeGroupAlt,
            )}
            key={group.title}
          >
            <h3 className={styles.subtitle}>{group.title}</h3>
            <ScrollCardReveal
              as="ul"
              className={styles.badgeList}
            >
              {group.items.map((item, index) => (
                <li
                  className={badgeItemClassNames[index]}
                  key={item.text}
                >
                  <Badge {...item} />
                </li>
              ))}
            </ScrollCardReveal>
          </div>
        ))}
      </article>
      <article className={clsx('stack', styles.servicesGroup)}>
        <h3 className={styles.subtitle}>{servicesContent.servicesTitle}</h3>
        <ScrollCardReveal className={clsx('gridCards', styles.cards)}>
          {servicesContent.serviceCards.map((item) => (
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
