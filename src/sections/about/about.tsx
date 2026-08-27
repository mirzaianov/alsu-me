import { clsx } from 'clsx';
import Button from '../../shared/ui/button/button';
import PhotoCard from './photo-card';
import Badge from '../../shared/ui/badge/badge';
import ScrollCardReveal from '../../shared/ui/scroll-card-reveal/scroll-card-reveal';
import { aboutContent } from '../../content/ru/about';
import styles from './about.module.css';

const About = () => {
  return (
    <section
      id="about"
      className={clsx('section', styles.about)}
    >
      <h2 className={clsx('title', styles.title)}>{aboutContent.title}</h2>
      <div className={styles.content}>
        <article className={styles.figure}>
          <PhotoCard />
          <div className={styles.badgeLeft}>
            <ScrollCardReveal>
              <Badge {...aboutContent.badges.ielts} />
            </ScrollCardReveal>
          </div>
          <div className={styles.badgeRight}>
            <ScrollCardReveal>
              <Badge {...aboutContent.badges.tesol} />
            </ScrollCardReveal>
          </div>
        </article>
        <article className={styles.copy}>
          <div className={clsx('stack', styles.text)}>
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Button
            ariaLabel={aboutContent.action.ariaLabel}
            size="large"
            link={aboutContent.action.link}
          >
            <span>{aboutContent.action.text}</span>
          </Button>
        </article>
      </div>
    </section>
  );
};

export default About;
