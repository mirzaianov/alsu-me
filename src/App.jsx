import { useState, useEffect } from 'react';
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

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      id="app"
      className="relative flex flex-col items-center justify-start overflow-clip desktop:text-body-l"
    >
      <Header width={windowWidth} />
      <Hero width={windowWidth} />
      <About width={windowWidth} />
      <Services width={windowWidth} />
      <Prices />
      <Testimonials />
      <Contacts width={windowWidth} />
      <Footer width={windowWidth} />
      <BackToTopButton width={windowWidth} />
      {/* Vercel Analytics */}
      <Analytics />
      {/* End Vercel Analytics */}
    </div>
  );
};

export default App;
