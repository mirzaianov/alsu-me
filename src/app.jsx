import { Analytics } from '@vercel/analytics/react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Prices from './components/prices';
import Testimonials from './components/testimonials';
import Contacts from './components/contacts';
import Footer from './components/footer';
import BackToTopButton from './components/back-to-top-button';
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
