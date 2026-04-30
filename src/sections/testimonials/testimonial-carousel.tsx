import { useState } from 'react';
import TestimonialRow from './testimonial-row';
import styles from './testimonial-carousel.module.css';

const TestimonialCarousel = () => {
  const [isInfiniteScroll, setIsInfiniteScroll] = useState<boolean>(true);

  return (
    <div className={styles.testimonialInfiniteCards}>
      <TestimonialRow
        isInfiniteScroll={isInfiniteScroll}
        setIsInfiniteScroll={setIsInfiniteScroll}
      />
      <TestimonialRow
        isInfiniteScroll={isInfiniteScroll}
        setIsInfiniteScroll={setIsInfiniteScroll}
      />
    </div>
  );
};

export default TestimonialCarousel;
