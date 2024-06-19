const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute -right-[16px] -top-[80px] size-[200px] animate-blob rounded-full bg-primary-20 mix-blend-multiply blur-[75px] filter tablet:-right-[140px]
                           tablet:-top-[104px] tablet:size-[400px] tablet:animate-blob-tablet tablet:blur-[150px]
                           desktop:-right-[60px] desktop:-top-[104px] desktop:size-[400px] desktop:animate-blob-tablet desktop:blur-[150px]"
      ></div>
      <div
        className="absolute left-1/2 top-[calc(50%-40px)] size-[200px] -translate-x-1/2 -translate-y-1/2 transform animate-blob2 rounded-full bg-primary-10 opacity-70 mix-blend-multiply blur-[75px] filter tablet:top-[calc(50%-52px)] tablet:size-[400px] tablet:animate-blob2-tablet
                           tablet:blur-[150px] desktop:top-[calc(50%-52px)]
                           desktop:size-[400px] desktop:animate-blob2-tablet desktop:blur-[150px]"
      ></div>
      <div
        className="absolute -left-[16px] bottom-0 size-[200px] animate-blob3 rounded-full bg-primary-30 opacity-70 mix-blend-multiply blur-[75px] filter tablet:-left-[140px] tablet:size-[400px] tablet:animate-blob3-tablet
                           tablet:blur-[150px] desktop:-left-[60px]
                           desktop:size-[400px] desktop:animate-blob3-tablet desktop:blur-[150px]"
      ></div>
    </div>
  );
};

export default HeroBackground;
