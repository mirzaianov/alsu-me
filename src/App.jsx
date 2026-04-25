import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Prices from './components/Prices';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import styles from './App.module.css';

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
