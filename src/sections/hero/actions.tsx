import { clsx } from 'clsx';
import { PiArrowRightBold } from 'react-icons/pi';
import styles from './actions.module.css';

type ActionsProps = {
  size?: string;
  link?: string;
  ariaLabel: string;
  text: string;
};

const Actions = ({ size = '', link = '', ariaLabel, text }: ActionsProps) => {
  return (
    <a
      className={styles.heroCTA}
      aria-label={ariaLabel}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={clsx(styles.surface, size === 'large' && styles.large)}>
        <div className={clsx(styles.shape, styles.shapeTwo)}></div>
        <div className={clsx(styles.shape, styles.shapeOne)}></div>
        <div className={clsx(styles.shape, styles.shapeThree)}></div>
        <span className={styles.label}>{text}</span>
        <PiArrowRightBold className={styles.icon} />
      </div>
    </a>
  );
};

export default Actions;
