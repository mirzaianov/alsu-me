import Divider from './Divider';
import Logo from './Logo';
import Navbar from './NavBar';

const Footer = () => {
  return (
    <section
      className={`mb-[var(--xl)] flex w-full max-w-[var(--container-mobile)] flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]`}
    >
      <article>
        <div>
          <Logo />
        </div>
        <div>
          <div>
            <p>Алсу Каримова</p>
            <p>
              Дипломированный преподаватель и переводчик английского и немецкого
              языков с многолетним опытом профессиональной деятельности в
              международных компаниях России и США
            </p>
          </div>
          <Navbar type="block-2" />
        </div>
      </article>
      <Divider />
      <article></article>
    </section>
  );
};

export default Footer;
