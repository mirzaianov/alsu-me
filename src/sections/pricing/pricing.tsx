import Image from 'next/image';
import LessonPlanCard from './lesson-plan-card';
import PricingSaleBadge from './pricing-sale-badge';
import TranslationRateCard from './translation-rate-card';
import ScrollCardReveal from '../../shared/ui/scroll-card-reveal/scroll-card-reveal';
import { pricingContent } from '../../content/ru/pricing';
import { clsx } from 'clsx';
import styles from './pricing.module.css';

const Pricing = () => {
  return (
    <section
      id="pricing"
      className={clsx('section', styles.pricing)}
    >
      <h2 className={clsx('title', styles.title)}>{pricingContent.title}</h2>
      <article className={styles.intro}>
        <Image
          className={styles.image}
          src={pricingContent.introImage.src}
          alt={pricingContent.introImage.alt}
          quality={100}
          sizes="(min-width: 1921px) 368px, (max-width: 576px) 170px, 300px"
        />
        <div className={clsx('stack', styles.copy)}>
          {pricingContent.introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      <article className={styles.groups}>
        <div className={clsx('stack', styles.group)}>
          <h3 className={styles.subtitle}>{pricingContent.tutorSubtitle}</h3>
          <ScrollCardReveal className={clsx('gridCards', styles.cards)}>
            {pricingContent.lessonPlans.map((item) =>
              item.discount ? (
                <div
                  key={item.heading}
                  className={styles.discountCardFrame}
                >
                  <PricingSaleBadge image={pricingContent.saleBadgeImage} />
                  <LessonPlanCard
                    {...item}
                    labels={pricingContent.lessonPlanLabels}
                  />
                </div>
              ) : (
                <LessonPlanCard
                  key={item.heading}
                  {...item}
                  labels={pricingContent.lessonPlanLabels}
                />
              ),
            )}
          </ScrollCardReveal>
        </div>
        <div className={clsx('stack', styles.group)}>
          <h3 className={styles.subtitle}>
            {pricingContent.translatorSubtitle}
          </h3>
          <ScrollCardReveal className={clsx('gridCards', styles.cards)}>
            {pricingContent.translationRates.map((item) => (
              <TranslationRateCard
                key={item.heading}
                {...item}
                labels={pricingContent.translationRateLabels}
              />
            ))}
          </ScrollCardReveal>
        </div>
      </article>
    </section>
  );
};

export default Pricing;
