import InfiniteTestimonialCards from './InfiniteTestimonialCards';

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="my-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]"
    >
      <h2 className="h2-fade-in animate-h2-fade-in text-center text-heading-s">
        Что говорят мои ученики и клиенты
      </h2>
      <article className="flex flex-col justify-start gap-[var(--m)]">
        <p className="p-fade-in animate-p-fade-in">
          Мои ученики достигли значительных результатов благодаря нашей
          совместной работе, и я горжусь их успехами.
        </p>
        <p className="p-fade-in animate-p-fade-in">
          Мои клиенты довольны ростом их бизнеса благодаря как письменным, так и
          устным синхронным переводам.
        </p>
      </article>
      <article className="pop-up max-w-full animate-pop-up">
        <InfiniteTestimonialCards />
      </article>
    </section>
  );
};

export default Testimonials;
