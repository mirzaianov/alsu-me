import { clsx } from 'clsx';
import Button from '../../shared/ui/button/button';
import addSpacesToNumber from '../../utils/numbers/add-spaces-to-numbers';
import type { ActionContent } from '../../content/types';
import styles from './lesson-plan-card.module.css';

type LessonPlanCardLabels = {
  freePrice: string;
  cta: ActionContent;
  popular: string;
};

type LessonPlanCardProps = {
  quantity: number;
  discount: number;
  heading: string;
  subheading: string;
  duration: string;
  price: number;
  description: string[];
  labels: LessonPlanCardLabels;
};

const LessonPlanCard = ({
  quantity,
  discount,
  heading,
  subheading,
  duration,
  price,
  description,
  labels,
}: LessonPlanCardProps) => {
  return (
    <div className={clsx(styles.priceTutorCard, discount && styles.discount)}>
      <div className={styles.header}>
        <h4 className={styles.heading}>{heading}</h4>
        <p className={styles.subheading}>{subheading}</p>
      </div>
      <p>{duration}</p>
      <div className={clsx(styles.pricing, !discount && styles.pricingNeutral)}>
        {price ? (
          <h5 className={styles.price}>
            {addSpacesToNumber(price * quantity - discount)}
            {quantity ? ` ₽` : ''}
          </h5>
        ) : (
          <h5 className={styles.price}>{labels.freePrice}</h5>
        )}
        {discount ? (
          <p className={styles.crossedOut}>
            {addSpacesToNumber(price * quantity)}
            {` ₽`}
          </p>
        ) : (
          <p className={styles.hidden}>{price}</p>
        )}
      </div>
      <div className={styles.action}>
        <Button
          ariaLabel={labels.cta.ariaLabel}
          type={discount ? 'inverse' : undefined}
          link={labels.cta.link}
        >
          <span>{labels.cta.text}</span>
        </Button>
      </div>
      <ul className={styles.list}>
        {description.map((item) => (
          <li
            key={item}
            className={styles.item}
          >
            {item}
          </li>
        ))}
      </ul>
      {discount ? (
        <div className={styles.promoWrap}>
          <div className={styles.promo}>{labels.popular}</div>
        </div>
      ) : null}
    </div>
  );
};

export default LessonPlanCard;
