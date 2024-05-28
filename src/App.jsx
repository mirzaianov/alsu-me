import About from './components/About';
import BackToTopButton from './components/BackToTopButton';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import InfiniteLogos from './components/InfiniteLogos';
import Prices from './components/Prices';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div
      id="app"
      className={`relative flex flex-col items-center justify-start overflow-hidden`}
    >
      <Header />
      <Hero />
      <InfiniteLogos />
      <About />
      <Services />
      <Prices />
      <Testimonials />
      <Contacts />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
