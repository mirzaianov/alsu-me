import { clsx } from 'clsx';
import { PiArrowRightBold } from 'react-icons/pi';
import Button from '../../shared/ui/button/button';
import styles from './actions.module.css';

type ActionsProps = {
  size?: string;
  link?: string;
  ariaLabel: string;
  text: string;
};

const Actions = ({ size = '', link = '', ariaLabel, text }: ActionsProps) => {
  return (
    <Button
      ariaLabel={ariaLabel}
      className={styles.heroCTA}
      link={link}
      size={size}
    >
      <span
        className={clsx(styles.shape, styles.shapeTwo)}
        aria-hidden="true"
      />
      <span
        className={clsx(styles.shape, styles.shapeOne)}
        aria-hidden="true"
      />
      <span
        className={clsx(styles.shape, styles.shapeThree)}
        aria-hidden="true"
      />
      <span className={styles.label}>{text}</span>
      <PiArrowRightBold
        className={styles.icon}
        aria-hidden="true"
      />
    </Button>
  );
};

export default Actions;
