import propTypes from 'prop-types';
import { clsx } from 'clsx';
import { PiArrowRightBold } from 'react-icons/pi';
import styles from './hero-cta.module.css';

const HeroCTA = ({ size = '', link = '', ariaLabel, text }) => {
  return (
    <button
      className={styles.heroCTA}
      aria-label={ariaLabel}
      onClick={() => window.open(link, '_blank')}
    >
      <div className={clsx(styles.surface, size === 'large' && styles.large)}>
        <div className={clsx(styles.shape, styles.shapeTwo)}></div>
        <div className={clsx(styles.shape, styles.shapeOne)}></div>
        <div className={clsx(styles.shape, styles.shapeThree)}></div>
        <span className={styles.label}>{text}</span>
        <PiArrowRightBold className={styles.icon} />
      </div>
    </button>
  );
};

HeroCTA.propTypes = {
  text: propTypes.string.isRequired,
  ariaLabel: propTypes.string.isRequired,
  size: propTypes.string,
  link: propTypes.string,
};

export default HeroCTA;
