import Note from '../../shared/ui/note/note';
import styles from './introduction.module.css';

const Introduction = () => {
  return (
    <div className={styles.heroTextBlock}>
      <h1 className={styles.heading}>
        <span>В поисках идеального</span>
        <div className={styles.words}>
          <div
            className={styles.wordsTrack}
            data-hero-word-track
          >
            <div className={styles.word}>преподавателя</div>
            <div className={styles.word}>переводчика</div>
            <div className={styles.word}>преподавателя</div>
          </div>
        </div>
        <span>английского?</span>
      </h1>
      <div className={styles.bottom}>
        <div className={styles.greeting}>
          <span>Привет!&nbsp;</span>
          <span className={styles.greetingLine}>Меня зовут Алсу</span>
        </div>
        <div className={styles.notes}>
          <div
            className={styles.firstNote}
            data-hero-note="teacher"
          >
            <Note type="translator">
              Научу тебя понимать и говорить на английском языке, подобрав
              индивидуальную программу
            </Note>
          </div>
          <div
            className={styles.secondNote}
            data-hero-note="translator"
          >
            <Note>
              Помогу твоему бизнесу с устным и письменным переводом, тренингом
              сотрудников
            </Note>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
