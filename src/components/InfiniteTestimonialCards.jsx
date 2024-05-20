import { useState } from 'react';
import TestimonialCardsRow from './TestimonialCardsRow';

const InfiniteTestimonialCards = () => {
  const [isInfiniteScroll, setIsInfiniteScroll] = useState(true);

  return (
    <div
      className={`group relative mt-[var(--l)] w-full whitespace-nowrap px-0`}
    >
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

export default InfiniteTestimonialCards;
