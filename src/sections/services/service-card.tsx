import styles from './service-card.module.css';

type ServiceCardProps = {
  src: string;
  alt: string;
  subheading: string;
  description: string[];
};

const ServiceCard = ({
  src,
  alt,
  subheading,
  description,
}: ServiceCardProps) => {
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

export default ServiceCard;
