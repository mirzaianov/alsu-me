import { clsx } from 'clsx';
import styles from './stat.module.css';

type StatProps = {
  quantity: string;
  text: string;
  className?: string;
};

const Stat = ({ quantity, text, className }: StatProps) => {
  return (
    <li className={clsx(styles.stat, className)}>
      <p className={styles.quantity}>{quantity}</p>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

export default Stat;
