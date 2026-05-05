import Image, { type StaticImageData } from 'next/image';
import styles from './service-card.module.css';

type ServiceCardProps = {
  src: StaticImageData;
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
        <Image
          className={styles.image}
          src={src}
          alt={alt}
          quality={100}
          sizes="288px"
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
