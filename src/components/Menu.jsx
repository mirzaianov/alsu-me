import propTypes from 'prop-types';

const items = ['Главная', 'Обо мне', 'Услуги', 'Цены', 'Отзывы', 'Контакты'];

const Menu = ({ type = 'inline' }) => {
  let ULstyle = {
    gridTemplateAreas: `
      'main about services prices testimonials contacts'
    `,
    paddingInline: 'var(--l)',
    minWidth: '550px',
    maxWidth: '640px',
  };

  let LIstyle = {
    textAlign: 'center',
  };

  if (type === 'block-2') {
    ULstyle = {
      gridTemplateAreas: `
      'main services testimonials'
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
      'main prices'
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
      <li
        style={{ ...LIstyle, gridArea: 'main' }}
        id="hero"
        key="hero"
      >
        <a href="#">Главная</a>
      </li>
      <li
        style={{ ...LIstyle, gridArea: 'about' }}
        id="about"
        key="about"
      >
        <a href="#">Обо мне</a>
      </li>
      <li
        style={{ ...LIstyle, gridArea: 'services' }}
        id="services"
        key="services"
      >
        <a href="#">Услуги</a>
      </li>
      <li
        style={{ ...LIstyle, gridArea: 'prices' }}
        id="prices"
        key="prices"
      >
        <a href="#">Цены</a>
      </li>
      <li
        style={{ ...LIstyle, gridArea: 'testimonials' }}
        id="testimonials"
        key="testimonials"
      >
        <a href="#">Отзывы</a>
      </li>
      <li
        style={{ ...LIstyle, gridArea: 'contacts' }}
        id="contacts"
        key="contacts"
      >
        <a href="#">Контакты</a>
      </li>
    </ul>
  );
};

Menu.propTypes = {
  type: propTypes.string,
};

export default Menu;
