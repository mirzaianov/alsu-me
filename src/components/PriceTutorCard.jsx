import propTypes from 'prop-types';
import Button from './Button';
import addSpacesToNumber from '../utils/addSpacesToNumbers.js';

const telegramLink = import.meta.env.VITE_TELEGRAM;

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
    <div
      className={`relative flex h-[380px] w-[var(--card-width)] flex-col items-center justify-start gap-[var(--s)] rounded-[var(--s)] px-[var(--xs)] pb-[var(--m)] pt-[var(--l)] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)] last:mt-[var(--m)] desktop:last:mt-0 ${discount ? 'bg-primary-10 text-text-0' : 'bg-neutral-0'}`}
    >
      <div className="flex flex-col items-center justify-center gap-[var(--xs)]">
        <h4 className="text-heading-s uppercase">{heading}</h4>
        <p className="uppercase">{subheading}</p>
      </div>
      <p>{duration}</p>
      <div
        className={`flex h-full flex-col items-center justify-start ${discount ? '' : 'text-text-10'}`}
      >
        {/* main price */}
        {price ? (
          <h5 className="text-heading-s uppercase">
            {addSpacesToNumber(price * quantity - discount)}
            {quantity ? ` ₽` : ''}
          </h5>
        ) : (
          <h5 className="text-heading-s uppercase">Бесплатно</h5>
        )}
        {/* discount price */}
        {discount ? (
          <p className="text-body-bold line-through">
            {addSpacesToNumber(price * quantity)}
            {` ₽`}
          </p>
        ) : (
          <p className="hidden text-body-bold line-through">{price}</p>
        )}
      </div>
      <div className="mt-auto">
        {discount ? (
          <Button
            text="Записаться"
            type="inverse"
            link={telegramLink}
          />
        ) : (
          <Button
            text="Записаться"
            link={telegramLink}
          />
        )}
      </div>
      <ul className="mt-auto flex flex-col justify-start">
        {description.map((item) => (
          <li
            key={item}
            className="text-center"
          >
            {item}
          </li>
        ))}
      </ul>
      {discount ? (
        <div className="absolute -top-[19px] left-2/4 -translate-x-1/2">
          <div className="flex animate-tada cursor-default justify-center rounded-lg bg-primary-30 px-[var(--s)] py-[var(--2xs)] font-bold tracking-[0.05em] text-text-0">
            Популярно
          </div>
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
