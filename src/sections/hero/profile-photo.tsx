import Image, { getImageProps } from 'next/image';
import alsuHero from '../../assets/img/hero/alsu-hero.png';
import alsuHeroTablet from '../../assets/img/hero/alsu-hero-tablet.png';
import styles from './profile-photo.module.css';

const ProfilePhoto = () => {
  const alt = 'Alsu in a formal office suit smiling';
  const {
    props: { srcSet: tabletSrcSet },
  } = getImageProps({
    src: alsuHeroTablet,
    alt,
    quality: 100,
    sizes: '(min-width: 1921px) 720px, 450px',
  });

  return (
    <div className={styles.heroPhotoCard}>
      <div className={styles.inner}>
        <div className={styles.border} />
        <div className={styles.mask}>
          <div className={styles.color} />
          <picture>
            <source
              media="(min-width: 577px)"
              sizes="(min-width: 1921px) 720px, 450px"
              srcSet={tabletSrcSet}
            />
            <Image
              priority
              quality={100}
              sizes="255px"
              src={alsuHero}
              alt={alt}
              className={styles.image}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
