'use client';

import { useState, useRef, useEffect } from 'react';
import { Dialog } from '@base-ui/react/dialog';
import Image, { type StaticImageData } from 'next/image';
import TestimonialDialog from './testimonial-dialog';
import styles from './testimonial-card.module.css';

type TestimonialCardProps = {
  src: StaticImageData;
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
    const paragraph = paragraphRef.current;

    if (!paragraph) {
      return;
    }

    let isActive = true;
    const updateClampState = () => {
      if (!isActive) {
        return;
      }

      setIsClamped(paragraph.scrollHeight > paragraph.clientHeight + 1);
    };

    updateClampState();

    const resizeObserver = new ResizeObserver(updateClampState);
    resizeObserver.observe(paragraph);
    void document.fonts?.ready.then(updateClampState);

    return () => {
      isActive = false;
      resizeObserver.disconnect();
    };
  }, []);

  const handleModalOpenChange = (open: boolean) => {
    if (open === isModalOpen) {
      return;
    }

    setIsModalOpen(open);
    if (open) {
      pauseCarousel();
    } else {
      resumeCarousel();
    }
  };

  const shouldRenderDialog = isClamped || isModalOpen;

  return (
    <Dialog.Root
      modal="trap-focus"
      open={isModalOpen}
      onOpenChange={handleModalOpenChange}
    >
      <figure className={styles.testimonialCard}>
        <figcaption className={styles.header}>
          <div className={styles.person}>
            <Image
              className={styles.avatar}
              src={src}
              alt=""
              sizes="56px"
            />
            <div className={styles.meta}>
              <p className={styles.name}>{fullName}</p>
              <p className={styles.occupation}>{occupation}</p>
            </div>
          </div>
        </figcaption>
        <blockquote className={styles.quote}>
          <p
            ref={paragraphRef}
            className={styles.comment}
          >
            {comment}
          </p>
        </blockquote>
        {isClamped && (
          <Dialog.Trigger
            render={
              <button
                aria-label={`Читать отзыв полностью: ${fullName}`}
                className={styles.more}
                type="button"
              >
                Читать далее
              </button>
            }
          />
        )}
      </figure>
      {shouldRenderDialog && (
        <TestimonialDialog title={`Полный отзыв: ${fullName}`}>
          <figure className={styles.modalFigure}>
            <figcaption className={styles.person}>
              <Image
                className={styles.avatar}
                src={src}
                alt=""
                sizes="56px"
              />
              <div className={styles.meta}>
                <p className={styles.name}>{fullName}</p>
                <p>{occupation}</p>
              </div>
            </figcaption>
            <blockquote className={styles.modalQuote}>
              <p className={styles.modalComment}>{comment}</p>
            </blockquote>
          </figure>
        </TestimonialDialog>
      )}
    </Dialog.Root>
  );
};

export default TestimonialCard;
