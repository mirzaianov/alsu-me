import propTypes from 'prop-types';
import { clsx } from 'clsx';
import styles from './note.module.css';

const Note = ({ type, children }) => {
  return (
    <div
      className={clsx(styles.note, type === 'translator' && styles.translator)}
    >
      {children}
    </div>
  );
};

Note.propTypes = {
  children: propTypes.node.isRequired,
  type: propTypes.string,
};

export default Note;
