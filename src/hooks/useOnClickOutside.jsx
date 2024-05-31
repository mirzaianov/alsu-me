import { useEffect } from 'react';

const useOnClickOutside = (ref, handler, excludedRefs = []) => {
  useEffect(() => {
    const listener = (event) => {
      // Check if the clicked element is one of the excluded elements
      const isExcludedElement = excludedRefs.some((excludedRef) => {
        return (
          excludedRef.current && excludedRef.current.contains(event.target)
        );
      });

      if (
        isExcludedElement ||
        !ref.current ||
        ref.current.contains(event.target)
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, ...excludedRefs.map((ref) => ref.current)]);
};

export default useOnClickOutside;
