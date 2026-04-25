import propTypes from 'prop-types';
import { clsx } from 'clsx';
import styles from './Badge.module.css';

const Badge = ({
  icon,
  type,
  alt,
  text = '',
  size = '',
  isReversed = false,
  isAnimated = false,
}) => {
  return (
    <div
      className={clsx(
        styles.badge,
        styles[type || 'primary'],
        size === 'large' && styles.large,
        isReversed && styles.reversed,
      )}
    >
      <img
        className={clsx(styles.icon, isAnimated && styles.animated)}
        src={icon}
        alt={alt}
      />
      {text}
    </div>
  );
};

Badge.propTypes = {
  icon: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  text: propTypes.string,
  type: propTypes.string,
  size: propTypes.string,
  isReversed: propTypes.bool,
  isAnimated: propTypes.bool,
};

export default Badge;
