import { PiArrowFatUpFill } from 'react-icons/pi';

const BackToTopButton = () => {
  return (
    <div className="from-indigo-500 via-purple-500 to-pink-500 h-[var(--xl] fixed bottom-[var(--m)] right-[var(--m)] flex aspect-square w-[var(--xl)] items-center justify-center rounded-full bg-gradient-to-r">
      <a
        className="no-underline"
        href="#"
      >
        <PiArrowFatUpFill style={{ height: 'var(--2xl)', color: 'white' }} />
      </a>
    </div>
  );
};

export default BackToTopButton;
