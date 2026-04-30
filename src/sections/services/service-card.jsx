import propTypes from 'prop-types';
import styles from './service-card.module.css';

const ServiceCard = ({ src, alt, subheading, description }) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.content}>
        <img
          className={styles.image}
          src={src}
          alt={alt}
          loading="lazy"
        />
        <h4 className={styles.title}>{subheading}</h4>
      </div>
      <ul className={styles.list}>
        {description.map((item, index) => (
          <li
            className={styles.item}
            key={`${index}-${item}`}
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
