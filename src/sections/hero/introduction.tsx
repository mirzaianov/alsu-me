import Note from '../../shared/ui/note/note';
import { heroIntroContent } from '../../content/ru/hero';
import styles from './introduction.module.css';

const Introduction = () => {
  return (
    <div className={styles.heroTextBlock}>
      <h1 className={styles.heading}>
        <span>{heroIntroContent.headingStart}</span>
        <div className={styles.words}>
          <div
            className={styles.wordsTrack}
            data-hero-word-track
          >
            {heroIntroContent.rotatingWords.map((word, index) => (
              <div
                className={styles.word}
                key={`${index}-${word}`}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <span>{heroIntroContent.headingEnd}</span>
      </h1>
      <div className={styles.bottom}>
        <div className={styles.greeting}>
          <span>{heroIntroContent.greetingPrefix}</span>
          <span className={styles.greetingLine}>
            {heroIntroContent.greetingLine}
          </span>
        </div>
        <div className={styles.notes}>
          {heroIntroContent.notes.map((note, index) => (
            <div
              className={index === 0 ? styles.firstNote : styles.secondNote}
              data-hero-note={note.id}
              key={note.id}
            >
              <Note type={note.type}>{note.text}</Note>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
