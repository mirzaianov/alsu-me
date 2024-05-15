import propTypes from 'prop-types';
import Button from './Button';
import addSpacesToNumber from '../utils/addSpacesToNumbers.js';

const PriceTutorCard = ({ quantity = 0, price = 0, discount = false }) => {
  const data = {
    heading: 'Пробное',
    subheading: 'Индивидуальное занятие',
    duration: `Продолжительность: 20 мин`,
    price: 'Бесплатно',
    description: ['Знакомимся', 'Определяем уровень'],
  };

  if (quantity > 0) {
    data.heading = `${quantity}`;
    data.duration = `Продолжительность: 60 мин`;
    data.price = price * quantity;
    data.description = ['80% занятия - практика', 'Современные материалы'];
  }

  if (quantity > 1) {
    data.heading = `${quantity}`;
    data.subheading = 'Индивидуальных занятия';
  }

  if (quantity > 3) {
    data.subheading = 'Индивидуальных занятий';
  }

  return (
    <div
      className={`price-tutor-card relative flex h-[380px] w-[288px] flex-col items-center justify-start gap-[var(--s)] rounded-[var(--s)] px-[var(--xs)] pb-[var(--m)] pt-[var(--l)] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)] ${discount ? 'bg-[var(--primary-10)] text-[var(--text-00)]' : ''}`}
    >
      <div
        className={`flex flex-col items-center justify-center gap-[var(--xs)]`}
      >
        <h4 className={`text-heading-s-upper uppercase`}>{data.heading}</h4>
        <p className={`uppercase`}>{data.subheading}</p>
      </div>
      <p>{data.duration}</p>
      <div
        className={`flex h-full flex-col items-center justify-start ${discount ? '' : 'text-[var(--text-20)]'}`}
      >
        {/* main price */}
        {discount ? (
          <h5 className={`text-heading-s-upper uppercase`}>
            {addSpacesToNumber(data.price - discount)}
            {` ₽`}
          </h5>
        ) : (
          <p className={`text-heading-s-upper uppercase`}>
            {quantity ? addSpacesToNumber(data.price) : data.price}
            {quantity ? ` ₽` : ''}
          </p>
        )}
        {/* discount price */}
        {discount ? (
          <h5 className={`text-body-bold line-through`}>
            {addSpacesToNumber(data.price)}
            {` ₽`}
          </h5>
        ) : (
          <p className={`hidden text-body-bold line-through`}>hidden</p>
        )}
      </div>
      <div className={`mt-auto`}>
        {discount ? (
          <Button
            text="Записаться"
            type="neutral"
          />
        ) : (
          <Button text="Записаться" />
        )}
      </div>
      <ul className={`mt-auto flex flex-col justify-start`}>
        {data.description.map((item) => (
          <li
            key={item}
            className={`text-center`}
          >
            {item}
          </li>
        ))}
      </ul>
      {discount && (
        <div className={`absolute -top-[20px] left-2/4 -translate-x-1/2`}>
          <div className={`animate-tada`}>
            <Button
              text="Популярно"
              type="accent"
            />
          </div>
        </div>
      )}
    </div>
  );
};

PriceTutorCard.propTypes = {
  quantity: propTypes.number,
  price: propTypes.number,
  discount: propTypes.number,
};

export default PriceTutorCard;
