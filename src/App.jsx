import Logo from './components/Logo';
import Hamburger from './components/Hamburger';
import Button from './components/Button';
import Badge from './components/Badge';
import Note from './components/Note';
import Menu from './components/Menu';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="container mx-auto flex flex-col gap-2 p-5">
      <h1>Karimova</h1>
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
      <NavBar />
    </div>
  );
};

export default App;
