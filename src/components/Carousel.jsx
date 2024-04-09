import { useEffect, useState } from 'react';
import CarouselSet from './CarouselSet';

const Carousel = () => {
  const [isDataAnimated, setIsDataAnimated] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsDataAnimated(true);
    }
  }, []);

  return (
    <article
      className={`
        scroller
        max-w-[500px]
        bg-[var(--secondary-05)]
        ${isDataAnimated ? 'overflow-hidden' : ''}
      `}
      style={{
        WebkitMask: `${isDataAnimated ? 'linear-gradient(90deg ,transparent, white 20%, white 80%, transparent)' : 'none'}`,
        mask: `${isDataAnimated ? 'linear-gradient(90deg ,transparent, white 20%, white 80%, transparent)' : 'none'}`,
      }}
      data-animated={isDataAnimated}
    >
      <CarouselSet isDataAnimated={isDataAnimated} />
      {/* <CarouselSet /> */}
    </article>
  );
};

export default Carousel;
