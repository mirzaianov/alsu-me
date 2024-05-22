import propTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import TestimonialCardModal from './TestimonialCardModal.jsx';
import useOnClickOutside from '../hooks/useOnClickOutside.jsx';
import Button from './Button.jsx';

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

  useOnClickOutside(modalRef, () => {
    setIsModalOpen(false);
    setIsInfiniteScroll(!isInfiniteScroll);
  });

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
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsInfiniteScroll(!isInfiniteScroll);
  };

  return (
    <div
      className={`relative flex h-[400px] w-[var(--card-width)] min-w-[var(--card-width)] flex-col justify-start gap-[var(--m)] rounded-[var(--s)] bg-[var(--neutral-00)] p-[var(--m)] text-body-tight shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)]`}
    >
      <div className={`flex gap-[var(--s)]`}>
        <img
          className={`aspect-square h-[56px] rounded-full object-cover`}
          src={src}
          alt="photo"
        />
        <div className={`flex flex-col justify-center`}>
          <p className={`text-body-bold`}>{fullName}</p>
          <p>{occupation}</p>
        </div>
      </div>
      <p
        ref={paragraphRef}
        className={`line-clamp-10 whitespace-normal`}
      >
        {comment}
      </p>
      {isClamped && (
        <div className={`mt-auto`}>
          <Button
            onClick={handleModalOpen}
            type="secondary"
            text="Читать далее"
          />
        </div>
      )}
      {isModalOpen && (
        <TestimonialCardModal onClose={handleModalClose}>
          <div
            className={`flex gap-[var(--s)]`}
            ref={modalRef}
          >
            <img
              className={`aspect-square h-[56px] rounded-full object-cover`}
              src={src}
              alt="photo"
            />
            <div className={`flex flex-col justify-center`}>
              <p className={`text-body-bold`}>{fullName}</p>
              <p>{occupation}</p>
            </div>
          </div>
          <p className={`whitespace-normal`}>{comment}</p>
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
