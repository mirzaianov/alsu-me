import Stat from '../../ui/stat/stat';
import HeroPhotoCard from './hero-photo-card';
import Badge from '../../ui/badge/badge';
import hand from '../../../assets/icons/hand.svg';
import styles from './hero-photo-card-block.module.css';

const HeroPhotoCardBlock = () => {
  return (
    <div className={styles.heroPhotoCardBlock}>
      <div className={styles.statsWrap}>
        <ul className={styles.stats}>
          <Stat
            quantity="16+"
            text="лет опыта"
          />
          <Stat
            quantity="4+"
            text="года работы в США"
          />
          <div className={styles.slider}>
            <Stat
              className={styles.slideItemAnimated}
              quantity="200+"
              text="довольных учеников"
            />
            <Stat
              className={styles.slideItem}
              quantity="50+"
              text="успешных кейсов"
            />
            <Stat
              className={styles.slideItem}
              quantity="200+"
              text="довольных учеников"
            />
          </div>
        </ul>
      </div>
      <div className={styles.photoWrap}>
        <div className={styles.photoInner}>
          <HeroPhotoCard />
          <div className={styles.badge}>
            <Badge
              alt="The hand icon with wavy animation"
              text="Hi"
              icon={hand}
              isReversed
              isAnimated
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPhotoCardBlock;
