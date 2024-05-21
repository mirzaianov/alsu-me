import InfiniteTestimonialCards from './InfiniteTestimonialCards';

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className={`my-[var(--xl)] flex w-full max-w-[var(--container-mobile)] flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]`}
    >
      <h2 className={`text-center text-heading-s`}>
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
      <article className={`max-w-full`}>
        <InfiniteTestimonialCards />
      </article>
    </section>
  );
};

export default Testimonials;
