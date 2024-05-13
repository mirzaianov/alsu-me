import propTypes from 'prop-types';
import tutorImage from '../assets/icons/tutor.svg';
import translatorImage from '../assets/icons/translator.svg';

const ServiceCard = ({ type }) => {
  const style = {
    src: type === 'tutor' ? tutorImage : translatorImage,
    alt: type === 'tutor' ? 'Tutor' : 'Translator',
    subheading:
      type === 'tutor'
        ? 'Индивидуальные занятия на платформе Zoom'
        : 'Переводы',
    description:
      type === 'tutor'
        ? [
            'Программа под запрос',
            'Прокачка всех 4 навыков',
            'Домашнее задание с подробным разбором',
          ]
        : [
            'Письменные',
            'Устные',
            'Английский - Русский',
            'Русский - Английский',
          ],
  };

  return (
    <div
      className={`flex w-[288px] flex-col items-center justify-start gap-[var(--s)] rounded-[var(--s)] px-[var(--xs)] py-[var(--m)] shadow-lg`}
    >
      <div
        className={`flex flex-col items-center justify-center gap-[var(--m)]`}
      >
        <img
          src={style.src}
          alt={style.alt}
        />
        <h4 className={`text-center text-body-bold-upper uppercase`}>
          {style.subheading}
        </h4>
      </div>
      <ul className={`flex flex-col justify-start`}>
        {style.description.map((item) => (
          <li
            key={item}
            className={`text-center`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

ServiceCard.propTypes = {
  type: propTypes.string.isRequired,
};

export default ServiceCard;
