import { useEffect } from 'react';
import type { RefObject } from 'react';

type ElementRef = RefObject<HTMLElement | null>;

const useOnClickOutside = (
  ref: ElementRef,
  handler: () => void,
  excludedRefs: ElementRef[] = [],
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!(event.target instanceof Node)) {
        return;
      }

      const target = event.target;

      // Check if the clicked element is one of the excluded elements
      const isExcludedElement = excludedRefs.some((excludedRef) => {
        return excludedRef.current && excludedRef.current.contains(target);
      });

      if (isExcludedElement || !ref.current || ref.current.contains(target)) {
        return;
      }

      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener, { passive: true });

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, excludedRefs]);
};

export default useOnClickOutside;
