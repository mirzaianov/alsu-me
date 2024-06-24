import propTypes from 'prop-types';
import Divider from './Divider';
import BrandLogo from './BrandLogo';
import Navbar from './NavBar';

const Footer = ({ width }) => {
  return (
    <footer
      id="footer"
      className="m-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-start gap-[var(--m)] px-[var(--s)]
                 tablet:max-w-full tablet:gap-[var(--xl)] tablet:px-[var(--xl)]
                 desktop:max-w-[var(--l-end)]"
    >
      <article
        className="flex flex-col items-start gap-[var(--l)]
                  tablet:flex-row
                  desktop:w-full desktop:justify-between desktop:gap-[var(--2xl)]"
      >
        <BrandLogo />
        <div
          className="flex flex-col justify-start gap-[var(--l)]
                          desktop:w-full desktop:flex-row desktop:justify-between"
        >
          <div className="flex flex-col justify-start gap-[var(--s)]">
            <p className="text-heading-s">Алсу Каримова</p>
            <p className="text-pretty tablet:max-w-[560px]">
              Дипломированный преподаватель и переводчик английского и немецкого
              языков с многолетним опытом профессиональной деятельности в
              международных компаниях России и США
            </p>
          </div>
          <div>
            {width < 1061 ? (
              <Navbar type="block-2" />
            ) : (
              <Navbar type="block-3" />
            )}
          </div>
        </div>
      </article>
      <article className="flex w-full flex-col justify-start gap-[var(--l)]">
        <Divider />
        <div className="flex flex-wrap justify-between gap-[var(--s)]">
          <div className="flex flex-wrap justify-start gap-x-[var(--xs)] gap-y-[var(--2xs)]">
            <p>©️ 2024 Алсу Каримова</p>
            <p>|</p>
            <p>Все права защищены</p>
          </div>
          <div className="flex flex-wrap justify-start gap-[var(--xs)]">
            <p>Дизайн и разработка</p>
            <p>|</p>
            <a
              aria-label="Visit the CV site of Riaz Mirzaianov"
              href="https://cv.mirzaianov.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block text-text-10"
            >
              mirzaianov
              <span
                className="absolute bottom-[3px] left-0 right-0 h-[2px] scale-x-0 rounded-sm bg-primary-10 transition-transform duration-300 ease-in-out group-hover:scale-x-100"
                style={{
                  transformOrigin: 'left',
                  marginLeft: '-0.15rem',
                  marginRight: '-0.15rem',
                  width: 'calc(100% + 0.3rem)',
                }}
              />
            </a>
          </div>
        </div>
      </article>
    </footer>
  );
};

Footer.propTypes = {
  width: propTypes.number.isRequired,
};

export default Footer;
