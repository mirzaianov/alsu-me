import propTypes from 'prop-types';

const ServiceCard = ({ src, alt, subheading, description }) => {
  return (
    <div className="service-card flex h-[352px] w-[var(--card-width)] flex-col items-center justify-start gap-[var(--s)] rounded-[var(--s)] bg-neutral-0 px-[var(--s)] pb-[var(--m)] pt-[var(--l)] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col items-center justify-center gap-[var(--m)]">
        <img
          className="h-20"
          src={src}
          alt={alt}
          loading="lazy"
        />
        <h4 className="text-center text-body-bold uppercase">{subheading}</h4>
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
