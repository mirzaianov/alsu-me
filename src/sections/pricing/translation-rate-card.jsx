import propTypes from 'prop-types';
import Button from '../../shared/ui/button/button';
import addSpacesToNumber from '../../utils/add-spaces-to-numbers';
import styles from './translation-rate-card.module.css';

const TranslationRateCard = ({
  heading,
  subheading,
  price,
  description,
  note,
}) => {
  return (
    <div className={styles.priceTranslatorCard}>
      <h4 className={styles.heading}>{heading}</h4>
      <p>{subheading}</p>
      <h5 className={styles.price}>
        {addSpacesToNumber(price)}
        {` ₽`}
      </h5>
      <Button
        ariaLabel="Записаться"
        link="https://t.me/sue_onlineenglish"
      >
        <span>Заказать</span>
      </Button>
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
      <p className={styles.note}>{note}</p>
    </div>
  );
};

TranslationRateCard.propTypes = {
  heading: propTypes.string.isRequired,
  subheading: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  description: propTypes.array.isRequired,
  note: propTypes.string.isRequired,
};

export default TranslationRateCard;
