import propTypes from 'prop-types';
import { useState } from 'react';
import TestimonialCardModal from './TestimonialCardModal.jsx';

const TestimonialCard = ({ src, fullName, occupation, comment }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={`testimonial-card flex h-[380px] w-[288px] min-w-[288px] flex-col justify-start gap-[var(--m)] rounded-[var(--s)] p-[var(--m)] text-body-tight shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)]`}
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
      <p className={`line-clamp-10 whitespace-normal`}>{comment}</p>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`mt-auto text-left`}
      >
        Читать далее
      </button>
      {isModalOpen && (
        <TestimonialCardModal onClose={() => setIsModalOpen(false)}>
          <h2>Modal Title</h2>
          <p>This is the modal content!</p>
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
};

export default TestimonialCard;
