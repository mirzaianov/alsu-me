const Testimonials = () => {
  return (
    <section
      className={`prices flex w-full max-w-[var(--container-mobile)] flex-col items-center justify-start gap-[var(--l)] px-[var(--s)] py-[var(--xl)]`}
    >
      <h2 className={`testimonials__title text-center text-heading-s`}>
        Что говорят мои ученики и клиенты
      </h2>
      <article className={`flex flex-col justify-start gap-[var(--m)]`}>
        <p>
          Мои ученики достигли значительных результатов благодаря нашей
          совместной работе, и я горжусь их успехами.
        </p>
        <p>
          Мои клиенты довольны ростом их бизнеса благодаря как письменным, так и
          устным синхронным переводам.
        </p>
      </article>
    </section>
  );
};

export default Testimonials;
