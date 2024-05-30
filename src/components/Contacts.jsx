import Button from './Button';
import telegram from '../assets/icons/telegram.svg';
import email from '../assets/icons/email.svg';

const telegramLink = import.meta.env.VITE_TELEGRAM;
const emailLink = import.meta.env.VITE_EMAIL;

const Contacts = () => {
  return (
    <section
      id="contacts"
      className={`mb-[var(--l)] mt-[var(--xl)] flex w-full max-w-[var(--container-mobile)] flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]`}
    >
      <h2
        className={`h2-fade-in animate-h2-fade-in text-center text-heading-s`}
      >
        Готов начать сотрудничество?
      </h2>
      <article
        className={`pop-up animate-pop-up flex flex-col justify-start gap-[var(--s)]`}
      >
        <p className={`text-center text-body-bold`}>Свяжись со мной</p>
        <div className={`flex flex-col justify-start gap-[var(--s)]`}>
          <Button
            text="Telegram"
            icon={telegram}
            link={telegramLink}
            type="primary"
          />
          <Button
            text="Email"
            icon={email}
            link={emailLink}
            type="secondary"
          />
        </div>
      </article>
    </section>
  );
};

export default Contacts;
