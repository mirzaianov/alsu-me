import { useState, useRef, useEffect } from 'react';
import TestimonialDialog from './testimonial-dialog';
import styles from './testimonial-card.module.css';

const maxLines = 10;

type TestimonialCardProps = {
  src: string;
  fullName: string;
  occupation: string;
  comment: string;
  pauseCarousel: () => void;
  resumeCarousel: () => void;
};

const TestimonialCard = ({
  src,
  fullName,
  occupation,
  comment,
  pauseCarousel,
  resumeCarousel,
}: TestimonialCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClamped, setIsClamped] = useState(false);

  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const isOverflowing = () => {
      const { current } = paragraphRef;

      if (!current) {
        return false;
      }

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
    pauseCarousel();
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    resumeCarousel();
    document.body.style.overflow = '';
  };

  const closeOnEscape = (e: KeyboardEvent) => {
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
        <TestimonialDialog onClose={handleModalClose}>
          <div className={styles.person}>
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
        </TestimonialDialog>
      )}
    </div>
  );
};

export default TestimonialCard;
