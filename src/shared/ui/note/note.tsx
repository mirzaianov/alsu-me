import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import styles from './note.module.css';

type NoteProps = {
  children: ReactNode;
  type?: string;
};

const Note = ({ type, children }: NoteProps) => {
  return (
    <div
      className={clsx(styles.note, type === 'translator' && styles.translator)}
    >
      {children}
    </div>
  );
};

export default Note;
