import propTypes from 'prop-types';

const Note = ({ type, size = '--body', children }) => {
  const style = {
    fontSize: `var(${size})`,
    backgroundColor: '',
    maxWidth: '288px',
  };

  if (type === 'tutor') {
    style.backgroundColor = 'var(--primary-20)';
  }

  if (type === 'translator') {
    style.backgroundColor = 'var(--primary-50)';
  }

  if (size === 'large') {
    style.fontSize = 'var(--body-large)';
    style.maxWidth = '360px';
  }

  return (
    <div
      className="block rounded-[var(--s)] p-[var(--xs)]"
      style={{ ...style }}
    >
      {children}
    </div>
  );
};

Note.propTypes = {
  type: propTypes.string.isRequired,
  size: propTypes.string,
  children: propTypes.node.isRequired,
};

export default Note;
