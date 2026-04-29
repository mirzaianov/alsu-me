import { useState } from 'react';
import TestimonialCardsRow from './testimonial-cards-row';
import styles from './testimonial-infinite-cards.module.css';

const TestimonialInfiniteCards = () => {
  const [isInfiniteScroll, setIsInfiniteScroll] = useState(true);

  return (
    <div className={styles.testimonialInfiniteCards}>
      <TestimonialCardsRow
        isInfiniteScroll={isInfiniteScroll}
        setIsInfiniteScroll={setIsInfiniteScroll}
      />
      <TestimonialCardsRow
        isInfiniteScroll={isInfiniteScroll}
        setIsInfiniteScroll={setIsInfiniteScroll}
      />
    </div>
  );
};

export default TestimonialInfiniteCards;
