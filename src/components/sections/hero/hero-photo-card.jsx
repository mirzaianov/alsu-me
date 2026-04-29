import alsuHero from '../../../assets/img/hero/alsu-hero.png';
import alsuHeroTablet from '../../../assets/img/hero/alsu-hero-tablet.png';
import styles from './hero-photo-card.module.css';

const HeroPhotoCard = () => {
  return (
    <div className={styles.heroPhotoCard}>
      <div className={styles.inner}>
        <div className={styles.border} />
        <div className={styles.mask}>
          <div className={styles.color} />
          <img
            fetchPriority="high"
            className={styles.image}
            src={alsuHero}
            srcSet={`
                     ${alsuHero} 577w,
                     ${alsuHeroTablet}
                   `}
            alt="Alsu in a formal office suit smiling"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPhotoCard;
