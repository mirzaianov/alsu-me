import Button from './Button';
import telegram from '../assets/icons/telegram.svg';
import email from '../assets/icons/email.svg';
import gmail from '../assets/icons/gmail.svg';

const telegramLink = import.meta.env.VITE_TELEGRAM;
const emailLink = import.meta.env.VITE_EMAIL;

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="relative mb-[var(--l)] mt-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)] tablet:mb-[var(--xl)] tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--xl)] tablet:px-0"
    >
      <div className="p-fade-in absolute right-6 top-64 animate-icon-fade-in-right tablet:-right-16 tablet:top-20">
        <img
          className="size-20"
          src={gmail}
          alt="Gmail"
        />
      </div>
      <h2 className="h2-fade-in animate-h2-fade-in text-center text-heading-s tablet:text-heading-m">
        Готов начать сотрудничество?
      </h2>
      <article className="pop-up flex animate-pop-up flex-col justify-start gap-[var(--s)]">
        <p className="text-center text-body-bold tablet:text-heading-s">
          Свяжись со мной
        </p>
        <div className="flex flex-col items-center gap-[var(--s)] tablet:flex-row tablet:gap-[var(--l)]">
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
