import { clsx } from 'clsx';
import Button from '../../shared/ui/button/button';
import PhotoCard from './photo-card';
import Badge from '../../shared/ui/badge/badge';
import ScrollCardReveal from '../../shared/ui/scroll-card-reveal/scroll-card-reveal';
import ielts from '../../assets/img/about/ielts.png';
import tesol from '../../assets/img/about/tesol.png';
import styles from './about.module.css';

const About = () => {
  return (
    <section
      id="about"
      className={clsx('section', styles.about)}
    >
      <h2 className={clsx('title', styles.title)}>Обо мне</h2>
      <div className={styles.content}>
        <article className={styles.figure}>
          <PhotoCard />
          <div className={styles.badgeLeft}>
            <ScrollCardReveal>
              <Badge
                alt="IELTS"
                icon={ielts}
                type="secondary-25"
                size="large"
              />
            </ScrollCardReveal>
          </div>
          <div className={styles.badgeRight}>
            <ScrollCardReveal>
              <Badge
                alt="TESOL"
                icon={tesol}
                type="secondary-15"
                size="large"
              />
            </ScrollCardReveal>
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
