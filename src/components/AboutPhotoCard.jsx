import alsuAbout from '../assets/img/about/alsu-about.png';
import alsuAboutTablet from '../assets/img/about/alsu-about-tablet.png';
import styles from './AboutPhotoCard.module.css';

const AboutPhotoCard = () => {
  return (
    <div className={styles.aboutPhotoCard}>
      <div className={styles.inner}>
        <div className={styles.color} />
        <img
          className={styles.image}
          src={alsuAbout}
          srcSet={`
                   ${alsuAbout} 577w,
                   ${alsuAboutTablet}
                 `}
          alt="Alsu in a formal office suit"
        />
      </div>
    </div>
  );
};

export default AboutPhotoCard;
