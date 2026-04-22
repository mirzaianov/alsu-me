import { clsx } from 'clsx';
import Button from './Button';
import AboutPhotoCard from './AboutPhotoCard';
import Badge from './Badge';
import ielts from '../assets/img/about/ielts.png';
import tesol from '../assets/img/about/tesol.png';
import styles from './About.module.css';

const About = () => {
  return (
    <section
      id="about"
      className={clsx('section', styles.root)}
    >
      <h2 className={clsx('title', styles.title)}>Обо мне</h2>
      <div className={styles.content}>
        <article className={styles.figure}>
          <AboutPhotoCard />
          <div className={styles.badgeLeft}>
            <Badge
              alt="IELTS"
              icon={ielts}
              type="secondary-25"
              size="large"
            />
          </div>
          <div className={styles.badgeRight}>
            <Badge
              alt="TESOL"
              icon={tesol}
              type="secondary-15"
              size="large"
            />
          </div>
        </article>
        <article className={styles.copy}>
          <div className={clsx('stack', styles.text)}>
            <p>
              Меня зовут Алсу Каримова, и я рада приветствовать тебя на своём
              сайте!
            </p>
            <p>
              Я дипломированный преподаватель и переводчик английского с опытом
              профессиональной деятельности более 16 лет.
            </p>
            <p>
              Уровень владения языком - advanced (C1) - подтвержден
              международным сертификатом IELTS. Также имею сертификат TESOL,
              выданный Arizona State University, который позволяет обучать языку
              в любой стране.
            </p>
            <p>
              Если ты хочешь начать изучение английского с нуля, улучшить свои
              навыки или же заказать устный / письменный перевод - то я с
              нетерпением жду возможности помочь тебе в этом!
            </p>
          </div>
          <Button
            ariaLabel="Записаться бесплатно"
            size="large"
            link="https://t.me/sue_onlineenglish"
          >
            <span>Записаться бесплатно</span>
          </Button>
        </article>
      </div>
    </section>
  );
};

export default About;
