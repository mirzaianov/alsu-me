import Stat from '../../shared/ui/stat/stat';
import ProfilePhoto from './profile-photo';
import Badge from '../../shared/ui/badge/badge';
import { heroSummaryContent } from '../../content/ru/hero';
import styles from './profile-summary.module.css';

const ProfileSummary = () => {
  return (
    <div className={styles.heroPhotoCardBlock}>
      <div className={styles.statsWrap}>
        <ul className={styles.stats}>
          {heroSummaryContent.stats.map((stat) => (
            <Stat
              key={`${stat.quantity}-${stat.text}`}
              quantity={stat.quantity}
              text={stat.text}
            />
          ))}
          <div className={styles.slider}>
            <div
              className={styles.sliderTrack}
              data-hero-stat-track
            >
              {heroSummaryContent.slidingStats.map((stat, index) => (
                <Stat
                  className={styles.slideItem}
                  key={`${index}-${stat.quantity}-${stat.text}`}
                  quantity={stat.quantity}
                  text={stat.text}
                />
              ))}
            </div>
          </div>
        </ul>
      </div>
      <div className={styles.photoWrap}>
        <div className={styles.photoInner}>
          <ProfilePhoto />
          <div className={styles.badge}>
            <Badge {...heroSummaryContent.greetingBadge} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
