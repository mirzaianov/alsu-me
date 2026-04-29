import { Analytics } from '@vercel/analytics/react';
import Header from './components/layout/header/header';
import Hero from './components/sections/hero/hero';
import About from './components/sections/about/about';
import Services from './components/sections/services/services';
import Prices from './components/sections/prices/prices';
import Testimonials from './components/sections/testimonials/testimonials';
import Contacts from './components/sections/contacts/contacts';
import Footer from './components/layout/footer/footer';
import BackToTopButton from './components/ui/back-to-top-button/back-to-top-button';
import styles from './app.module.css';

const App = () => {
  return (
    <div
      id="app"
      className={styles.app}
    >
      <Header />
      <Hero />
      <About />
      <Services />
      <Prices />
      <Testimonials />
      <Contacts />
      <Footer />
      <BackToTopButton />
      {/* Vercel Analytics */}
      <Analytics />
      {/* End Vercel Analytics */}
    </div>
  );
};

export default App;
