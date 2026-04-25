import propTypes from 'prop-types';
import { clsx } from 'clsx';
import styles from './Stat.module.css';

const Stat = ({ quantity, text, className }) => {
  return (
    <li className={clsx(styles.stat, className)}>
      <p className={styles.quantity}>{quantity}</p>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

Stat.propTypes = {
  className: propTypes.string,
  quantity: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default Stat;
