import Button from './Button';

const Contacts = () => {
  return (
    <section
      className={`mb-[var(--l)] mt-[var(--xl)] flex w-full max-w-[var(--container-mobile)] flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]`}
    >
      <h2 className={`text-center text-heading-s`}>
        Готов начать сотрудничество?
      </h2>
      <article className={`flex flex-col justify-start gap-[var(--s)]`}>
        <p className={`text-center text-body-bold`}>Свяжись со мной</p>
        <div className={`flex flex-col justify-start gap-[var(--s)]`}>
          <Button
            text="Telegram"
            icon="telegram"
            onClick={() => {}}
          />
          <Button
            text="Email"
            icon="email"
            type="secondary"
            onClick={() => {}}
          />
        </div>
      </article>
    </section>
  );
};

export default Contacts;
