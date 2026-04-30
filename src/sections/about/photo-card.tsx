import Image from 'next/image';
import alsuAbout from '../../assets/img/about/alsu-about.png';
import styles from './photo-card.module.css';

const PhotoCard = () => {
  return (
    <div className={styles.aboutPhotoCard}>
      <div className={styles.inner}>
        <div className={styles.color} />
        <Image
          className={styles.image}
          src={alsuAbout}
          sizes="(max-width: 576px) 170px, 300px"
          alt="Alsu in a formal office suit"
        />
      </div>
    </div>
  );
};

export default PhotoCard;
