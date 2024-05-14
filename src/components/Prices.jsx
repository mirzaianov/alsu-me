import PriceTutorCard from './PriceTutorCard';
// import PriceTranslatorCard from './PriceCard';

const Prices = () => {
  return (
    <section
      className={`prices flex w-full max-w-[var(--container-mobile)] flex-col items-center justify-start gap-[var(--l)] px-[var(--s)] py-[var(--xl)]`}
    >
      <h2 className={`prices__title text-heading-s`}>Выбери свой план</h2>

      <article
        className={`services__text flex flex-col justify-start gap-[var(--m)] text-center`}
      >
        <p>Подбери план и стоимость, которые наиболее подходят тебе.</p>
        <p>Или свяжись со мной, и мы вместе определимся с программой.</p>
      </article>
      <article className={`services__cards flex flex-col gap-[var(--l)]`}>
        <div className={`flex flex-col gap-[var(--m)]`}>
          <h3 className={`text-center text-body-bold-upper uppercase`}>
            Индивидуальные занятия на платформе Zoom
          </h3>
          <div className={`flex flex-col items-center gap-[var(--l)]`}>
            <PriceTutorCard />
            <PriceTutorCard
              quantity={1}
              price={2000}
            />
            <PriceTutorCard
              quantity={5}
              price={2000}
              discount={500}
            />
          </div>
        </div>
        {/* <div className={`flex flex-col gap-[var(--m)]`}>
        <h3 className={`text-center text-body-bold-upper uppercase`}>
          Переводы
        </h3>
        <div className={`flex flex-col gap-[var(--l)]`}>
          <PriceTranslatorCard type="oral" />
          <PriceTranslatorCard type="written" />
        </div>
      </div> */}
      </article>
    </section>
  );
};

export default Prices;
