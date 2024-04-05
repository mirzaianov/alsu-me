import Header from './Header';

const Hero = () => {
  return (
    <section
      className={`
        mx-auto
        flex flex-col
        px-[var(--s)]
        tablet:px-[var(--xl)]
        desktop:px-[var(--3xl)]`}
    >
      <Header />
    </section>
  );
};

export default Hero;
