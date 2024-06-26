import { useState, useEffect } from 'react';
import propTypes from 'prop-types';

const items = [
  ['hero', 'Главная'],
  ['about', 'Обо мне'],
  ['services', 'Услуги'],
  ['prices', 'Цены'],
  ['testimonials', 'Отзывы'],
  ['contacts', 'Контакты'],
];

const Navbar = ({ type, setIsDropdownOpen, isDropdownOpen }) => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    items.forEach((item) => {
      const section = document.getElementById(item[0]);
      if (section) observer.observe(section);
    });

    return () => {
      items.forEach((item) => {
        const section = document.getElementById(item[0]);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  let ULstyle = {};
  let LIstyle = {};

  if (type === 'inline') {
    ULstyle = {
      gridTemplateAreas: `
        'hero about services prices testimonials contacts'
      `,
      paddingInline: 'var(--l)',
      minWidth: '460px',
      maxWidth: '640px',
      margin: '0 auto',
    };

    LIstyle = {
      textAlign: 'center',
    };
  }

  if (type === 'block-1') {
    ULstyle = {
      gridTemplateAreas: `
      'hero'
      'about'
      'services'
      'prices'
      'testimonials'
      'contacts'
    `,
      gap: 'var(--l)',
      justifyContent: 'start',
    };

    LIstyle = {
      width: '40vw',
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

  const handleClick = (id) => {
    if (setIsDropdownOpen) {
      setIsDropdownOpen(!isDropdownOpen);
    }

    setActiveLink(id);
  };

  return (
    <ul
      className="grid w-full text-body-bold"
      style={{ ...ULstyle }}
    >
      {items.map((item) => (
        <li
          style={{ ...LIstyle, gridArea: item[0] }}
          key={item[0]}
          onClick={() => handleClick(item[0])}
        >
          <a
            aria-label={`Go to the ${item[0]} section`}
            className={`relative inline-block transition duration-300 ease-in-out hover:text-text-90/50`}
            href={`#${item[0]}`}
          >
            {item[1]}
            <span
              className={`w-[calc(100% + 0.5rem)] absolute bottom-[-2px] left-0 right-0 ml-[-0.25rem] mr-[-0.25rem] h-[4px] rounded-sm bg-current transition-transform duration-300 ease-in-out ${activeLink === item[0] ? 'scale-x-100' : 'scale-x-0'}`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

Navbar.propTypes = {
  type: propTypes.string.isRequired,
  setIsDropdownOpen: propTypes.func,
  isDropdownOpen: propTypes.bool,
};

export default Navbar;
