import Image, { getImageProps } from 'next/image';
import alsuAbout from '../../assets/img/about/alsu-about.png';
import alsuAboutTablet from '../../assets/img/about/alsu-about-tablet.png';
import styles from './photo-card.module.css';

const PhotoCard = () => {
  const alt = 'Alsu in a formal office suit';
  const {
    props: { srcSet: tabletSrcSet },
  } = getImageProps({
    src: alsuAboutTablet,
    alt,
    quality: 100,
    sizes: '450px',
  });

  return (
    <div className={styles.aboutPhotoCard}>
      <div className={styles.inner}>
        <div className={styles.color} />
        <picture>
          <source
            media="(min-width: 577px)"
            sizes="450px"
            srcSet={tabletSrcSet}
          />
          <Image
            quality={100}
            sizes="255px"
            src={alsuAbout}
            alt={alt}
            className={styles.image}
          />
        </picture>
      </div>
    </div>
  );
};

export default PhotoCard;
