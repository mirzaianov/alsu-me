import Image from 'next/image';
import TestimonialCarousel from './testimonial-carousel';
import { testimonialsContent } from '../../content/ru/testimonials';
import { clsx } from 'clsx';
import styles from './testimonials.module.css';

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className={clsx('section', styles.testimonials)}
    >
      <h2 className={clsx('title', styles.title)}>
        {testimonialsContent.title}
      </h2>
      <article className={styles.intro}>
        <Image
          className={styles.image}
          src={testimonialsContent.introImage.src}
          alt={testimonialsContent.introImage.alt}
          quality={100}
          sizes="(min-width: 1921px) 368px, (max-width: 576px) 170px, 300px"
        />
        <div className={clsx('stack', styles.copy)}>
          {testimonialsContent.introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      <article className={styles.carousel}>
        <TestimonialCarousel />
      </article>
    </section>
  );
};

export default Testimonials;
