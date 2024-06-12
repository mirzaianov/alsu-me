import InfiniteTestimonialCards from './InfiniteTestimonialCards';
import testimonials from '../assets/img/testimonials.png';

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="my-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]
                tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--xl)] tablet:px-[var(--xl)]
                desktop:max-w-[var(--container-desktop)] desktop:px-[var(--2xl)]"
    >
      <h2
        className="text-center text-heading-s
                    tablet:text-heading-m
                    desktop:text-heading-l"
      >
        Что говорят мои ученики и клиенты
      </h2>
      <article
        className="tablet: flex flex-col items-center justify-center gap-[var(--xl)]
                  desktop:w-full desktop:flex-row-reverse desktop:justify-between"
      >
        <img
          className="ml-8 h-[var(--img-size-mobile)]
                     tablet:ml-16 tablet:h-[var(--img-size-tablet)]"
          src={testimonials}
          alt="Testimonials"
        />
        <div
          className="flex max-w-[var(--mobile-text-wrapper)] flex-col justify-start gap-[var(--m)]
                      tablet:max-w-[var(--tablet-text-wrapper)]
                      desktop:max-w-[var(--desktop-text-wrapper)]"
        >
          <p className="p-fade-in animate-p-fade-in">
            Мои ученики достигли значительных результатов благодаря нашей
            совместной работе, и я горжусь их успехами.
          </p>
          <p className="p-fade-in animate-p-fade-in">
            Мои клиенты довольны ростом их бизнеса благодаря как письменным, так
            и устным синхронным переводам.
          </p>
        </div>
      </article>
      <article className="w-screen">
        <InfiniteTestimonialCards />
      </article>
    </section>
  );
};

export default Testimonials;
