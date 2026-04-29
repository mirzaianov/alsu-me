import TestimonialInfiniteCards from './testimonial-infinite-cards';
import testimonials from '../assets/img/testimonials/testimonials.png';
import { clsx } from 'clsx';
import styles from './testimonials.module.css';

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className={clsx('section', styles.testimonials)}
    >
      <h2 className={clsx('title', styles.title)}>
        Что говорят мои ученики и клиенты
      </h2>
      <article className={styles.intro}>
        <img
          className={styles.image}
          src={testimonials}
          alt="Testimonials"
          loading="lazy"
        />
        <div className={clsx('stack', styles.copy)}>
          <p>
            Мои ученики достигли значительных результатов благодаря нашей
            совместной работе, и я горжусь их успехами.
          </p>
          <p>
            Мои клиенты довольны ростом их бизнеса благодаря как письменным, так
            и устным синхронным переводам.
          </p>
        </div>
      </article>
      <article className={styles.carousel}>
        <TestimonialInfiniteCards />
      </article>
    </section>
  );
};

export default Testimonials;
