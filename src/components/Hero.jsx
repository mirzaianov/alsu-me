import NavBar from './NavBar';

const Hero = () => {
  return (
    <div
      className={`mx-auto flex flex-col px-[var(--s)] tablet:px-[var(--xl)] desktop:px-[var(--3xl)]`}
    >
      <NavBar />
    </div>
  );
};

export default Hero;
