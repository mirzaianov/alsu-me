import propTypes from 'prop-types';
import Button from './Button';
import addSpacesToNumber from '../utils/addSpacesToNumbers.js';

const PriceTranslatorCard = ({ type, price = 0 }) => {
  const data = {
    price,
    heading: '',
    subheading: '',
    description: ['Английский - Русский', 'Русский - Английский'],
    note: '',
  };

  if (type === 'written') {
    data.heading = 'Письменный перевод';
    data.subheading = `1800 знаков, включая пробелы`;
    data.note = 'Стоимость и сроки - после ознакомления с материалом';
  }

  if (type === 'oral') {
    data.heading = 'Устный последовательный перевод';
    data.subheading = `Продолжительность: 60 мин`;
    data.note = 'Минимальная оплата - 2 часа';
  }

  return (
    <div
      className={`price-tutor-card relative flex h-[436px] w-[288px] flex-col items-center justify-start gap-[var(--s)] rounded-[var(--s)] px-[var(--xs)] pb-[var(--m)] pt-[var(--l)] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)]`}
    >
      <h4 className={`min-h-[56px] text-center uppercase`}>{data.heading}</h4>
      <p>{data.subheading}</p>
      <h5 className={`text-heading-s-upper uppercase text-[var(--text-20)]`}>
        {addSpacesToNumber(data.price)}
        {` ₽`}
      </h5>
      <Button text="Записаться" />
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
      <p className={`min-h-[84px] max-w-[180px] text-center text-body-bold`}>
        {data.note}
      </p>
    </div>
  );
};

PriceTranslatorCard.propTypes = {
  type: propTypes.string.isRequired,
  price: propTypes.number,
};

export default PriceTranslatorCard;
