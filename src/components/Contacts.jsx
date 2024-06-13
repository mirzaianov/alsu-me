import propTypes from 'prop-types';
import Button from './Button';
import telegram from '../assets/icons/telegram.svg';
import email from '../assets/icons/email.svg';
import contacts from '../assets/img/contacts.png';

const telegramLink = import.meta.env.VITE_TELEGRAM;
const emailLink = import.meta.env.VITE_EMAIL;

const Contacts = ({ width }) => {
  return (
    <section
      id="contacts"
      className="mb-[var(--l)] mt-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]
                 tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--xl)] tablet:px-[var(--xl)]
                 desktop:my-[var(--2xl)] desktop:max-w-[var(--container-desktop)] desktop:gap-[var(--2xl)] desktop:px-[var(--2xl)]"
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
                  tablet:w-full tablet:flex-row tablet:justify-between tablet:gap-[var(--l)]
                  desktop:max-w-[800px] desktop:gap-[var(--m)]"
      >
        <img
          className="ml-8 h-[var(--img-size-mobile)]
                     tablet:h-[var(--img-size-tablet)]"
          src={contacts}
          alt="Contacts"
          loading="lazy"
        />
        <div
          className="flex flex-col items-center justify-center gap-[var(--s)]
                     tablet:gap-[var(--l)]
                     desktop:gap-[var(--xl)]"
        >
          <p
            className="text-center text-body-bold
                        tablet:text-heading-s
                        desktop:text-heading-m"
          >
            Свяжись со мной
          </p>
          <div
            className="flex flex-col items-center gap-[var(--s)]
                          tablet:gap-[var(--m)]
                          desktop:gap-[var(--l)]"
          >
            {width < 1060 ? (
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
            {width < 1060 ? (
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
  width: propTypes.number.isRequired,
};

export default Contacts;
