import propTypes from 'prop-types';

const Note = ({ type, children }) => {
  const style = {
    backgroundColor: '',
  };

  if (type === 'tutor') {
    style.backgroundColor = 'var(--primary-20)';
  }

  if (type === 'translator') {
    style.backgroundColor = 'var(--primary-50)';
  }

  return (
    <div
      className="
        block
        max-w-[288px]
        rounded-[var(--s)]
        p-[var(--xs)]
        text-center
        desktop:max-w-[365px]
        desktop:p-[var(--s)]
        desktop:text-body-large
        "
      style={{ backgroundColor: style.backgroundColor }}
    >
      {children}
    </div>
  );
};

Note.propTypes = {
  type: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Note;
