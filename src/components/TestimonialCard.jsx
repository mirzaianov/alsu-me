import propTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import TestimonialCardModal from './TestimonialCardModal.jsx';

const maxLines = 10;

const TestimonialCard = ({
  src,
  fullName,
  occupation,
  comment,
  isInfiniteScroll,
  setIsInfiniteScroll,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClamped, setIsClamped] = useState(false);

  const paragraphRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const isOverflowing = () => {
      const { current } = paragraphRef;
      const maxHeight =
        parseFloat(getComputedStyle(current).lineHeight) * maxLines;

      return current.scrollHeight >= maxHeight;
    };

    if (isOverflowing()) {
      setIsClamped(true);
    }
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setIsInfiniteScroll(!isInfiniteScroll);
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsInfiniteScroll(!isInfiniteScroll);
    document.body.style.overflow = '';
  };

  const closeOnEscape = (e) => {
    e.preventDefault();

    if (e.code === 'Escape') {
      handleModalClose();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.addEventListener('keydown', closeOnEscape);
    }

    return () => {
      document.body.removeEventListener('keydown', closeOnEscape);
    };
  });

  return (
    <div className="shadow-primary relative flex h-[400px] w-[var(--card-width)] min-w-[var(--card-width)] flex-col justify-start gap-[var(--m)] rounded-[var(--s)] bg-neutral-0 p-[var(--m)] text-body-tight">
      <div className="min-h-[64px]">
        <div className="flex gap-[var(--s)]">
          <img
            className="aspect-square h-[56px] rounded-full object-cover"
            src={src}
            alt={fullName}
            loading="lazy"
          />
          <div className="flex flex-col justify-center gap-[var(--2xs)]">
            <p className="text-body-bold">{fullName}</p>
            <p className="text-balance">{occupation}</p>
          </div>
        </div>
      </div>
      <p
        ref={paragraphRef}
        className="line-clamp-10 whitespace-normal text-pretty"
      >
        {comment}
      </p>
      {isClamped && (
        <button
          aria-label="Читать далее"
          className="mt-auto w-fit text-left text-body-bold transition duration-300 ease-in-out hover:opacity-70"
          onClick={handleModalOpen}
          type="button"
        >
          Читать далее
        </button>
      )}
      {isModalOpen && (
        <TestimonialCardModal onClose={handleModalClose}>
          <div
            className="flex gap-[var(--s)]"
            ref={modalRef}
          >
            <img
              className="aspect-square h-[56px] rounded-full object-cover"
              src={src}
              alt={fullName}
              loading="lazy"
            />
            <div className="flex flex-col justify-center gap-[var(--2xs)]">
              <p className="text-body-bold">{fullName}</p>
              <p>{occupation}</p>
            </div>
          </div>
          <p className="whitespace-normal text-pretty">{comment}</p>
        </TestimonialCardModal>
      )}
    </div>
  );
};

TestimonialCard.propTypes = {
  src: propTypes.string.isRequired,
  fullName: propTypes.string.isRequired,
  occupation: propTypes.string.isRequired,
  comment: propTypes.string.isRequired,
  isInfiniteScroll: propTypes.bool.isRequired,
  setIsInfiniteScroll: propTypes.func.isRequired,
};

export default TestimonialCard;
