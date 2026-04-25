import styles from './HeroBackground.module.css';

const HeroBackground = () => {
  return (
    <div className={styles.heroBackground}>
      <div className={styles.first}></div>
      <div className={styles.second}></div>
      <div className={styles.third}></div>
    </div>
  );
};

export default HeroBackground;
