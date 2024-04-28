// import Logo from './components/Logo';
// import Hamburger from './components/Hamburger';
// import Button from './components/Button';
// import Badge from './components/Badge';
// import Note from './components/Note';
// import Menu from './components/Menu';
import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';

const App = () => {
  return (
    <div
      className={`
        app
        relative
        flex
        flex-col
        items-center
        justify-between
        py-[var(--s)]
      `}
    >
      <Header />
      <Hero />
      <Logos />
      {/* <h1>Karimova</h1>
      <Logo size="desktop" />
      <Logo size="tablet" />
      <Logo />
      <Hamburger />
      <Button text="Button" />
      <Button
        text="Button"
        type="secondary"
      />
      <Button
        text="Button"
        type="neutral"
      />
      <Button
        text="Button"
        type="accent"
      />
      <Button
        icon="telegram"
        text="Button"
      />
      <Button
        icon="email"
        text="Button"
        type="secondary"
      />
      <Button
        text="Button"
        size="large"
      />
      <Button
        text="Button"
        type="secondary"
        size="large"
      />
      <Badge
        text="Hi"
        icon="hi"
        backgroundColor={'--primary-10'}
      />
      <Badge
        text="Travel"
        icon="usa"
        backgroundColor={'--secondary-25'}
      />
      <Badge
        text="General"
        icon="uk"
        backgroundColor={'--secondary-05'}
      />
      <Badge
        text="Education"
        icon="uk"
        backgroundColor={'--secondary-05'}
      />
      <Badge
        text="Business"
        icon="usa"
        backgroundColor={'--secondary-25'}
      />
      <Badge
        text="Listening"
        icon="uk"
        backgroundColor={'--secondary-25'}
      />
      <Badge
        text="Reading"
        icon="usa"
        backgroundColor={'--secondary-05'}
      />
      <Badge
        text="Speaking"
        icon="usa"
        backgroundColor={'--secondary-45'}
      />
      <Badge
        text="Writing"
        icon="uk"
        backgroundColor={'--secondary-05'}
      />
      <Note type="tutor">
        Научу тебя понимать и говорить на английском языке, подобрав
        индивидуальную программу
      </Note>
      <Note type="translator">
        Помогу твоему бизнесу с устным и письменным переводом, тренингом
        сотрудников
      </Note>
      <Menu />
      <Menu type="inline" />
      <Menu type="block-2" />
      <Menu type="block-3" />
      <NavBar /> */}
    </div>
  );
};

export default App;
