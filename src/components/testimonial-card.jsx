import propTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import TestimonialCardModal from './testimonial-card-modal';
import styles from './testimonial-card.module.css';

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
    <div className={styles.testimonialCard}>
      <div className={styles.header}>
        <div className={styles.person}>
          <img
            className={styles.avatar}
            src={src}
            alt={fullName}
            loading="lazy"
          />
          <div className={styles.meta}>
            <p className={styles.name}>{fullName}</p>
            <p className={styles.occupation}>{occupation}</p>
          </div>
        </div>
      </div>
      <p
        ref={paragraphRef}
        className={styles.comment}
      >
        {comment}
      </p>
      {isClamped && (
        <button
          aria-label="Читать далее"
          className={styles.more}
          onClick={handleModalOpen}
          type="button"
        >
          Читать далее
        </button>
      )}
      {isModalOpen && (
        <TestimonialCardModal onClose={handleModalClose}>
          <div
            className={styles.person}
            ref={modalRef}
          >
            <img
              className={styles.avatar}
              src={src}
              alt={fullName}
              loading="lazy"
            />
            <div className={styles.meta}>
              <p className={styles.name}>{fullName}</p>
              <p>{occupation}</p>
            </div>
          </div>
          <p className={styles.modalComment}>{comment}</p>
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
