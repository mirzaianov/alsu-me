import { useState } from 'react';
import TestimonialCardsRow from './TestimonialCardsRow';
import styles from './TestimonialInfiniteCards.module.css';

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
