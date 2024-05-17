import TestimonialCardsRow from './TestimonialCardsRow';

const InfiniteTestimonialCards = () => {
  return (
    <div
      className={`group relative mt-[var(--l)] w-full whitespace-nowrap px-0`}
    >
      <TestimonialCardsRow />
      <TestimonialCardsRow />
    </div>
  );
};

export default InfiniteTestimonialCards;
