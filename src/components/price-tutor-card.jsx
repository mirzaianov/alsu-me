import propTypes from 'prop-types';
import { clsx } from 'clsx';
import Button from './button';
import addSpacesToNumber from '../utils/add-spaces-to-numbers.js';
import styles from './price-tutor-card.module.css';

const PriceTutorCard = ({
  quantity,
  discount,
  heading,
  subheading,
  duration,
  price,
  description,
}) => {
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
          <h5 className={styles.price}>Бесплатно</h5>
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
        {discount ? (
          <Button
            ariaLabel="Записаться"
            type="inverse"
            link="https://t.me/sue_onlineenglish"
          >
            <span>Записаться</span>
          </Button>
        ) : (
          <Button
            ariaLabel="Записаться"
            link="https://t.me/sue_onlineenglish"
          >
            <span>Записаться</span>
          </Button>
        )}
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
          <div className={styles.promo}>Популярно</div>
        </div>
      ) : null}
    </div>
  );
};

PriceTutorCard.propTypes = {
  quantity: propTypes.number.isRequired,
  discount: propTypes.number.isRequired,
  heading: propTypes.string.isRequired,
  subheading: propTypes.string.isRequired,
  duration: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  description: propTypes.array.isRequired,
};

export default PriceTutorCard;
