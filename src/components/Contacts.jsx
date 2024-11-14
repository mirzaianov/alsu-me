import propTypes from 'prop-types';
import Button from './Button';
import contacts from '../assets/img/contacts/contacts.png';

const emailLink = import.meta.env.VITE_EMAIL;

const Contacts = ({ width }) => {
  return (
    <section
      id="contacts"
      className="relative my-[var(--mobile-y-margin)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)] tablet:my-[var(--tablet-y-margin)] tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--xl)] tablet:px-[var(--xl)] desktop:my-[var(--desktop-y-margin)] desktop:max-w-[var(--container-desktop)] desktop:gap-[var(--2xl)] desktop:px-[var(--3xl)]"
    >
      <h2 className="text-balance text-center text-heading-s tablet:text-heading-m desktop:text-heading-l">
        Готов начать сотрудничество?
      </h2>
      <article className="relative flex flex-col justify-start gap-[var(--l)] tablet:gap-[var(--xl)] desktop:w-full desktop:max-w-[800px] desktop:flex-row desktop:justify-between desktop:gap-[var(--m)]">
        <img
          className="ml-8 h-[var(--img-size-mobile)] tablet:h-[var(--img-size-tablet)]"
          src={contacts}
          alt="Contacts"
          loading="lazy"
        />
        <div className="flex flex-col items-center justify-center gap-[var(--s)] tablet:gap-[var(--l)] desktop:gap-[var(--xl)]">
          <p className="text-center text-body-bold tablet:text-heading-s desktop:text-heading-m">
            Свяжись со мной
          </p>
          <div className="flex flex-col items-center gap-[var(--s)] tablet:gap-[var(--m)] desktop:gap-[var(--l)]">
            {width < 1061 ? (
              <Button
                ariaLabel="Telegram"
                text="Telegram"
                icon="true"
                link="https://t.me/sue_onlineenglish"
                type="primary"
              >
                <svg
                  className="fill-neutral-0 transition duration-300 group-hover:fill-neutral-0/70"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.58098 10.6794C7.75614 7.99825 11.8729 6.23053 13.9312 5.37652C19.8152 2.93786 21.0363 2.51432 21.8338 2.50014C22.0092 2.49717 22.3997 2.54038 22.6545 2.74588C22.8663 2.91906 22.9259 3.15326 22.9557 3.31753C22.9822 3.4818 23.0186 3.85619 22.9889 4.14845C22.6712 7.48664 21.2912 15.5873 20.5896 19.3263C20.2951 20.9084 19.7093 21.4388 19.1434 21.4906C17.9123 21.6034 16.9791 20.6804 15.7877 19.9022C13.9246 18.6841 12.8723 17.926 11.0621 16.7376C8.97063 15.364 10.3274 14.609 11.5188 13.3753C11.8298 13.0524 17.2504 8.1391 17.353 7.69346C17.3663 7.63771 17.3796 7.4299 17.2538 7.32039C17.1314 7.21054 16.9492 7.24815 16.8169 7.27783C16.6282 7.32006 13.6532 9.28206 7.88175 13.1635C7.03788 13.7421 6.27345 14.0241 5.58511 14.0093C4.83059 13.9931 3.37459 13.5831 2.29245 13.2328C0.968726 12.803 -0.0869939 12.5757 0.00566664 11.8457C0.0519969 11.4657 0.57826 11.0768 1.58098 10.6794Z"
                    fill="hsla(0, 0%, 100%, 1)"
                  />
                </svg>
                <span>Telegram</span>
              </Button>
            ) : (
              <Button
                ariaLabel="Telegram"
                text="Telegram"
                icon="true"
                link="https://t.me/sue_onlineenglish"
                type="primary"
                size="large"
              >
                <svg
                  className="fill-neutral-0 transition duration-300 group-hover:fill-neutral-0/70"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.58098 10.6794C7.75614 7.99825 11.8729 6.23053 13.9312 5.37652C19.8152 2.93786 21.0363 2.51432 21.8338 2.50014C22.0092 2.49717 22.3997 2.54038 22.6545 2.74588C22.8663 2.91906 22.9259 3.15326 22.9557 3.31753C22.9822 3.4818 23.0186 3.85619 22.9889 4.14845C22.6712 7.48664 21.2912 15.5873 20.5896 19.3263C20.2951 20.9084 19.7093 21.4388 19.1434 21.4906C17.9123 21.6034 16.9791 20.6804 15.7877 19.9022C13.9246 18.6841 12.8723 17.926 11.0621 16.7376C8.97063 15.364 10.3274 14.609 11.5188 13.3753C11.8298 13.0524 17.2504 8.1391 17.353 7.69346C17.3663 7.63771 17.3796 7.4299 17.2538 7.32039C17.1314 7.21054 16.9492 7.24815 16.8169 7.27783C16.6282 7.32006 13.6532 9.28206 7.88175 13.1635C7.03788 13.7421 6.27345 14.0241 5.58511 14.0093C4.83059 13.9931 3.37459 13.5831 2.29245 13.2328C0.968726 12.803 -0.0869939 12.5757 0.00566664 11.8457C0.0519969 11.4657 0.57826 11.0768 1.58098 10.6794Z"
                    fill="hsla(0, 0%, 100%, 1)"
                  />
                </svg>
                <span>Telegram</span>
              </Button>
            )}
            {width < 1061 ? (
              <Button
                ariaLabel="Email"
                text="Email"
                icon="true"
                link={emailLink}
                type="secondary"
              >
                <svg
                  className="fill-primary-10 transition duration-300 group-hover:fill-primary-10/70"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V6.88197L12 11.882L2 6.88197V6Z" />
                  <path d="M2 9.11805V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V9.11804L12.8944 13.6708C12.3314 13.9524 11.6686 13.9524 11.1056 13.6708L2 9.11805Z" />
                </svg>
                <span>Email</span>
              </Button>
            ) : (
              <Button
                ariaLabel="Email"
                text="Email"
                icon="true"
                link={emailLink}
                type="secondary"
                size="large"
              >
                <svg
                  className="fill-primary-10 transition duration-300 group-hover:fill-primary-10/70"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V6.88197L12 11.882L2 6.88197V6Z" />
                  <path d="M2 9.11805V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V9.11804L12.8944 13.6708C12.3314 13.9524 11.6686 13.9524 11.1056 13.6708L2 9.11805Z" />
                </svg>
                <span>Email</span>
              </Button>
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
