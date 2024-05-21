import propTypes from 'prop-types';
import Button from './Button';
import addSpacesToNumber from '../utils/addSpacesToNumbers.js';

const PriceTranslatorCard = ({
  heading,
  subheading,
  price,
  description,
  note,
}) => {
  return (
    <div
      className={`price-tutor-card relative flex h-[436px] w-[288px] flex-col items-center justify-start gap-[var(--s)] rounded-[var(--s)] bg-[var(--neutral-00)] px-[var(--xs)] pb-[var(--m)] pt-[var(--l)] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)]`}
    >
      <h4 className={`min-h-[56px] text-center uppercase`}>{heading}</h4>
      <p>{subheading}</p>
      <h5 className={`text-heading-s-upper uppercase text-[var(--text-20)]`}>
        {addSpacesToNumber(price)}
        {` ₽`}
      </h5>
      <Button text="Записаться" />
      <ul className={`mt-auto flex flex-col justify-start`}>
        {description.map((item) => (
          <li
            key={item}
            className={`text-center`}
          >
            {item}
          </li>
        ))}
      </ul>
      <p className={`min-h-[84px] max-w-[180px] text-center text-body-bold`}>
        {note}
      </p>
    </div>
  );
};

PriceTranslatorCard.propTypes = {
  heading: propTypes.string.isRequired,
  subheading: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  description: propTypes.array.isRequired,
  note: propTypes.string.isRequired,
};

export default PriceTranslatorCard;
