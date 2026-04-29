import styles from './hero-background.module.css';

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
