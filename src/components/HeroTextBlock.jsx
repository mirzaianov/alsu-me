import Note from './Note';
import styles from './HeroTextBlock.module.css';

const HeroTextBlock = () => {
  return (
    <div className={styles.heroTextBlock}>
      <h1 className={styles.heading}>
        <span>В поисках идеального</span>
        <div className={styles.words}>
          <div className={styles.wordCurrent}>преподавателя</div>
          <div className={styles.word}>переводчика</div>
          <div className={styles.word}>преподавателя</div>
        </div>
        <span>английского?</span>
      </h1>
      <div className={styles.bottom}>
        <div className={styles.greeting}>
          <span>Привет!&nbsp;</span>
          <span className={styles.greetingLine}>Меня зовут Алсу</span>
        </div>
        <div className={styles.notes}>
          <div className={styles.firstNote}>
            <Note type="translator">
              Научу тебя понимать и говорить на английском языке, подобрав
              индивидуальную программу
            </Note>
          </div>
          <div className={styles.secondNote}>
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

export default HeroTextBlock;
