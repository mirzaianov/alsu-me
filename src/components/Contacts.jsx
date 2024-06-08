import propTypes from 'prop-types';
import Button from './Button';
import telegram from '../assets/icons/telegram.svg';
import email from '../assets/icons/email.svg';
import gmail from '../assets/icons/gmail.svg';
import contacts from '../assets/img/contacts.gif';

const telegramLink = import.meta.env.VITE_TELEGRAM;
const emailLink = import.meta.env.VITE_EMAIL;

const Contacts = ({ windowWidth }) => {
  return (
    <section
      id="contacts"
      className="mb-[var(--l)] mt-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]
                 tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--xl)] tablet:px-[var(--xl)]
                 desktop:max-w-[var(--container-desktop)] desktop:px-[var(--2xl)]"
    >
      <h2
        className="text-center text-heading-s
                     tablet:text-heading-m
                     desktop:text-heading-l"
      >
        Готов начать сотрудничество?
      </h2>
      <article
        className="relative flex flex-col justify-start gap-[var(--l)]
                  tablet:w-full tablet:flex-row tablet:justify-evenly tablet:gap-[var(--l)]
                  desktop:gap-[var(--m)]"
      >
        <img
          className="size-40
                     tablet:size-60"
          src={contacts}
          alt="Contacts"
        />
        <div className="flex flex-col items-center justify-center gap-[var(--s)]">
          <p
            className="text-center text-body-bold
                        tablet:text-heading-s
                        desktop:text-heading-m"
          >
            Свяжись со мной
          </p>
          <div className="flex flex-col items-center gap-[var(--s)] tablet:gap-[var(--l)]">
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
        </div>
      </article>
    </section>
  );
};

Contacts.propTypes = {
  windowWidth: propTypes.number.isRequired,
};

export default Contacts;
