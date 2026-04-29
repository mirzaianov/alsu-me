import { clsx } from 'clsx';
import Divider from '../../ui/divider/divider';
import BrandLogo from '../../ui/brand-logo/brand-logo';
import Navbar from '../navbar/navbar';
import useMediaQuery from '../../../hooks/use-media-query';
import styles from './footer.module.css';

const Footer = () => {
  const isDesktop = useMediaQuery('(min-width: 1061px)');

  return (
    <footer
      id="footer"
      className={clsx('section', styles.footer)}
    >
      <article className={styles.top}>
        <BrandLogo />
        <div className={styles.about}>
          <div className={styles.summary}>
            <p className={styles.name}>Алсу Каримова</p>
            <p className={styles.description}>
              Дипломированный преподаватель и переводчик английского с
              многолетним опытом профессиональной деятельности в международных
              компаниях
            </p>
          </div>
          <div className={styles.nav}>
            {isDesktop ? <Navbar type="block-3" /> : <Navbar type="block-2" />}
          </div>
        </div>
      </article>
      <article className={clsx('stack', styles.bottom)}>
        <Divider />
        <div className={styles.meta}>
          <div className={clsx('cluster', styles.copy)}>
            <p>©️ 2026 Алсу Каримова</p>
            <p>|</p>
            <p>Все права защищены</p>
          </div>
          <div className={clsx('cluster', styles.credit)}>
            <p>Дизайн и разработка</p>
            <p>|</p>
            <a
              aria-label="Visit the CV site of Riaz Mirzaianov"
              href="https://www.mirzaianov.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              mirzaianov
              <span className={styles.linkUnderline} />
            </a>
          </div>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
