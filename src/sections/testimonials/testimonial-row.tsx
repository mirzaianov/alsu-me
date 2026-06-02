'use client';

import TestimonialCard from './testimonial-card';
import ScrollCardReveal from '../../shared/ui/scroll-card-reveal/scroll-card-reveal';
import { testimonialsContent } from '../../content/ru/testimonials';
import styles from './testimonial-row.module.css';

const testimonialEntranceStagger = 0.08;

type TestimonialRowProps = {
  setIsModalPaused: (paused: boolean) => void;
};

const TestimonialRow = ({ setIsModalPaused }: TestimonialRowProps) => {
  return (
    <ScrollCardReveal
      className={styles.testimonialCardsRow}
      stagger={testimonialEntranceStagger}
    >
      {testimonialsContent.testimonials.map((item, index) => (
        <div
          key={`${index}-${item.fullName}`}
          className={styles.item}
        >
          <TestimonialCard
            {...item}
            labels={testimonialsContent.labels}
            pauseCarousel={() => setIsModalPaused(true)}
            resumeCarousel={() => setIsModalPaused(false)}
          />
        </div>
      ))}
    </ScrollCardReveal>
  );
};

export default TestimonialRow;
