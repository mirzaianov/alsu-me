import SiteHeader from '../src/layout/site-header/site-header';
import Hero from '../src/sections/hero/hero';
import About from '../src/sections/about/about';
import Services from '../src/sections/services/services';
import Pricing from '../src/sections/pricing/pricing';
import Testimonials from '../src/sections/testimonials/testimonials';
import Contact from '../src/sections/contact/contact';
import SiteFooter from '../src/layout/site-footer/site-footer';
import BackToTop from '../src/widgets/back-to-top/back-to-top';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <div
      id="app"
      className={styles.app}
    >
      <SiteHeader />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default HomePage;
