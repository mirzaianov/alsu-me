import Image from 'next/image';
import alsuHero from '../../assets/img/hero/alsu-hero.png';
import styles from './profile-photo.module.css';

const ProfilePhoto = () => {
  return (
    <div className={styles.heroPhotoCard}>
      <div className={styles.inner}>
        <div className={styles.border} />
        <div className={styles.mask}>
          <div className={styles.color} />
          <Image
            priority
            sizes="(max-width: 576px) 170px, 300px"
            className={styles.image}
            src={alsuHero}
            alt="Alsu in a formal office suit smiling"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
