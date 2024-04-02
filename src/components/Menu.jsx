import propTypes from 'prop-types';

const items = [
  ['hero', 'Главная'],
  ['about', 'Обо мне'],
  ['services', 'Услуги'],
  ['prices', 'Цены'],
  ['testimonials', 'Отзывы'],
  ['contacts', 'Контакты'],
];

const Menu = ({ type = '' }) => {
  let ULstyle = {};
  let LIstyle = {};

  if (type === '') {
    return null;
  }

  if (type === 'inline') {
    ULstyle = {
      gridTemplateAreas: `
        'hero about services prices testimonials contacts'
      `,
      paddingInline: 'var(--l)',
      minWidth: '460px',
      maxWidth: '640px',
      flex: '1 1 auto',
    };

    LIstyle = {
      textAlign: 'center',
    };
  }

  if (type === 'block-2') {
    ULstyle = {
      gridTemplateAreas: `
      'hero services testimonials'
      'about prices contacts'
    `,
      gap: 'var(--l)',
      justifyContent: 'start',
    };

    LIstyle = {
      width: 'fit-content',
    };
  }

  if (type === 'block-3') {
    ULstyle = {
      gridTemplateAreas: `
      'hero prices'
      'about testimonials'
      'services contacts'
    `,
      gap: 'var(--l)',
      justifyContent: 'start',
    };

    LIstyle = {
      width: 'fit-content',
    };
  }

  return (
    <ul
      className="
        grid
        text-body-bold
      "
      style={{ ...ULstyle }}
    >
      {items.map((item) => (
        <li
          style={{ ...LIstyle, gridArea: item[0] }}
          id={item[0]}
          key={item[0]}
        >
          <a href="#">{item[1]}</a>
        </li>
      ))}
    </ul>
  );
};

Menu.propTypes = {
  type: propTypes.string,
};

export default Menu;
