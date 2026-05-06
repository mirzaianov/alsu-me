import Stat from '../../shared/ui/stat/stat';
import ProfilePhoto from './profile-photo';
import Badge from '../../shared/ui/badge/badge';
import hand from '../../assets/icons/hand.svg';
import styles from './profile-summary.module.css';

const ProfileSummary = () => {
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
            <div
              className={styles.sliderTrack}
              data-hero-stat-track
            >
              <Stat
                className={styles.slideItem}
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
          </div>
        </ul>
      </div>
      <div className={styles.photoWrap}>
        <div className={styles.photoInner}>
          <ProfilePhoto />
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

export default ProfileSummary;
