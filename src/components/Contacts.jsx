import propTypes from 'prop-types';
import Button from './Button';
import telegram from '../assets/icons/telegram.svg';
import email from '../assets/icons/email.svg';
import gmail from '../assets/icons/gmail.svg';

const telegramLink = import.meta.env.VITE_TELEGRAM;
const emailLink = import.meta.env.VITE_EMAIL;

const Contacts = ({ windowWidth }) => {
  return (
    <section
      id="contacts"
      className="relative mb-[var(--l)] mt-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]
                 tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--xl)] tablet:px-[var(--xl)]
                 desktop:max-w-[var(--container-desktop)] desktop:px-[var(--2xl)]"
    >
      <div
        className="p-fade-in absolute right-6 top-64 animate-icon-fade-in-right
                      tablet:right-0 tablet:top-20
                      desktop:right-24 desktop:top-20"
      >
        <img
          className="size-16
                        tablet:size-24"
          src={gmail}
          alt="Gmail"
        />
      </div>
      <h2
        className="text-center text-heading-s
                     tablet:text-heading-m
                     desktop:text-heading-l"
      >
        Готов начать сотрудничество?
      </h2>
      <article
        className="flex flex-col justify-start gap-[var(--s)]
                  desktop:gap-[var(--m)]"
      >
        <p
          className="text-center text-body-bold
                      tablet:text-heading-s
                      desktop:text-heading-m"
        >
          Свяжись со мной
        </p>
        <div className="flex flex-col items-center gap-[var(--s)] tablet:flex-row tablet:gap-[var(--l)]">
          {windowWidth < 1060 ? (
            <Button
              text="Telegram"
              icon={telegram}
              link={telegramLink}
              type="primary"
            />
          ) : (
            <Button
              text="Telegram"
              icon={telegram}
              link={telegramLink}
              type="primary"
              size="large"
            />
          )}
          {windowWidth < 1060 ? (
            <Button
              text="Email"
              icon={email}
              link={emailLink}
              type="secondary"
            />
          ) : (
            <Button
              text="Email"
              icon={email}
              link={emailLink}
              type="secondary"
              size="large"
            />
          )}
        </div>
      </article>
    </section>
  );
};

Contacts.propTypes = {
  windowWidth: propTypes.number.isRequired,
};

export default Contacts;
