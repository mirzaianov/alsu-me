import propTypes from 'prop-types';

const ServiceCard = ({ src, alt, subheading, description }) => {
  return (
    <div
      className={`service-card flex h-[336px] w-[288px] flex-col items-center justify-start gap-[var(--s)] rounded-[var(--s)] px-[var(--s)] py-[var(--m)] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)]`}
    >
      <div
        className={`flex flex-col items-center justify-center gap-[var(--m)]`}
      >
        <img
          src={src}
          alt={alt}
        />
        <h4 className={`text-center text-body-bold-upper uppercase`}>
          {subheading}
        </h4>
      </div>
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
    </div>
  );
};

ServiceCard.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  subheading: propTypes.string.isRequired,
  description: propTypes.array.isRequired,
};

export default ServiceCard;
