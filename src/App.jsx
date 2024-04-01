import Logo from './components/Logo';
import Hamburger from './components/Hamburger';
import Button from './components/Button';
import Badge from './components/Badge';

const App = () => {
  return (
    <div className="flex flex-col gap-2 p-5">
      <h1>Karimova</h1>
      <Logo height="--2xl" />
      <Logo height="--xl" />
      <Logo height="--m" />
      <Hamburger />
      <Hamburger size="--xl" />
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
    </div>
  );
};

export default App;
