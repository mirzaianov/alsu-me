import propTypes from 'prop-types';
import tutorImage from '../assets/icons/tutor.svg';
import translatorImage from '../assets/icons/translator.svg';

const ServiceCard = ({ type }) => {
  const data = {
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
      className={`service-card flex h-[336px] w-[288px] flex-col items-center justify-start gap-[var(--s)] rounded-[var(--s)] px-[var(--s)] py-[var(--m)] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)]`}
    >
      <div
        className={`flex flex-col items-center justify-center gap-[var(--m)]`}
      >
        <img
          src={data.src}
          alt={data.alt}
        />
        <h4 className={`text-center text-body-bold-upper uppercase`}>
          {data.subheading}
        </h4>
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
    </div>
  );
};

ServiceCard.propTypes = {
  type: propTypes.string.isRequired,
};

export default ServiceCard;
