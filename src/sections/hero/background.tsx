import styles from './background.module.css';

const Background = () => {
  return (
    <div className={styles.heroBackground}>
      <div className={styles.first}></div>
      <div className={styles.second}></div>
      <div className={styles.third}></div>
    </div>
  );
};

export default Background;
